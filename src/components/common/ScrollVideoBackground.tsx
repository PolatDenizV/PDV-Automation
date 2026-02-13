import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_PRELOAD = 20;

export default function ScrollVideoBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [opacity, setOpacity] = useState(0);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const frameIndexRef = useRef(0);
    const targetFrameIndexRef = useRef(0);
    const requestRef = useRef<number>();

    // Helper to get frame path
    const getFramePath = (index: number) => {
        const frameNum = String(index + 1).padStart(4, '0');
        return `/frames/frame_${frameNum}.jpg`;
    };

    // Preload frames logic
    useEffect(() => {
        const loadFrame = (index: number) => {
            if (framesRef.current[index] || index >= TOTAL_FRAMES) return Promise.resolve();
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = getFramePath(index);
                img.onload = () => {
                    framesRef.current[index] = img;
                    resolve();
                };
            });
        };

        // Load initial batch for the hero/first view if necessary
        // In this case, the video starts at innerHeight, so we might not need many frames initially
        for (let i = 0; i < INITIAL_PRELOAD; i++) {
            loadFrame(i);
        }

        // We will load the rest based on scroll progress in the scroll handler
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const drawFrame = () => {
            // Lerp frame index for smoothness
            frameIndexRef.current += (targetFrameIndexRef.current - frameIndexRef.current) * 0.1;
            const index = Math.round(frameIndexRef.current);
            const img = framesRef.current[index];

            if (img && img.complete) {
                // Handle object-fit: cover behavior
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            requestRef.current = requestAnimationFrame(drawFrame);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;

            // Fade logic
            const fadeStart = innerHeight * 0.5;
            const fadeEnd = innerHeight;

            if (scrollY < fadeStart) {
                setOpacity(0);
            } else if (scrollY < fadeEnd) {
                const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                setOpacity(progress);
            } else {
                setOpacity(1);
            }

            // Scroll to frame mapping
            const videoStartScroll = innerHeight;
            const totalDocHeight = document.documentElement.scrollHeight;
            const remainingScrollHeight = totalDocHeight - videoStartScroll - innerHeight;

            if (scrollY > videoStartScroll) {
                const scrollProgress = Math.min(Math.max((scrollY - videoStartScroll) / remainingScrollHeight, 0), 1);
                const currentTargetFrame = scrollProgress * (TOTAL_FRAMES - 1);
                targetFrameIndexRef.current = currentTargetFrame;

                // Progressive preloading: Load next 30 frames ahead of current position
                const startPreload = Math.floor(currentTargetFrame);
                const endPreload = Math.min(startPreload + 30, TOTAL_FRAMES);
                for (let i = startPreload; i < endPreload; i++) {
                    if (!framesRef.current[i]) {
                        const img = new Image();
                        img.src = getFramePath(i);
                        img.onload = () => {
                            framesRef.current[i] = img;
                        };
                    }
                }
            } else {
                targetFrameIndexRef.current = 0;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });

        handleResize();
        handleScroll();
        requestRef.current = requestAnimationFrame(drawFrame);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 -z-10 transition-opacity duration-300 pointer-events-none overflow-hidden"
            style={{ opacity }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ filter: 'brightness(0.8)' }}
            />
        </div>
    );
}

