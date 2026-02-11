import React, { useEffect, useRef, useState } from 'react';

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

    // Preload frames
    useEffect(() => {
        const loadFrame = (index: number) => {
            if (framesRef.current[index]) return Promise.resolve(framesRef.current[index]);
            return new Promise<HTMLImageElement>((resolve) => {
                const img = new Image();
                img.src = getFramePath(index);
                img.onload = () => {
                    framesRef.current[index] = img;
                    resolve(img);
                };
            });
        };

        // Load initial batch immediately
        for (let i = 0; i < INITIAL_PRELOAD; i++) {
            loadFrame(i);
        }

        // Load rest progressively
        setTimeout(() => {
            for (let i = INITIAL_PRELOAD; i < TOTAL_FRAMES; i++) {
                loadFrame(i);
            }
        }, 100);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const drawFrame = () => {
            // Lerp frame index for smoothness
            frameIndexRef.current += (targetFrameIndexRef.current - frameIndexRef.current) * 0.15;
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

            // Fade logic (same as before)
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
                targetFrameIndexRef.current = scrollProgress * (TOTAL_FRAMES - 1);
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
                style={{ filter: 'brightness(0.4)' }}
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    );
}

