import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_PRELOAD = 20;
const LERP_FACTOR = 0.05; // Lower = smoother, more "premium" feel
const PRELOAD_BATCH = 30;
const FRAME_SKIP = 1; // Set to 2 to use only every other frame (12fps feel from 24fps source)

export default function ScrollVideoBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [opacity, setOpacity] = useState(0);
    const framesRef = useRef<HTMLImageElement[]>([]);

    // Smooth interpolation refs
    const frameIndexRef = useRef(0);
    const targetFrameIndexRef = useRef(0);
    const lastDrawnFrameRef = useRef(-1);

    // Layout refs to avoid recalculating every frame
    const layoutRef = useRef({
        drawWidth: 0,
        drawHeight: 0,
        offsetX: 0,
        offsetY: 0
    });

    const requestRef = useRef<number>();

    // Helper to get frame path
    const getFramePath = (index: number) => {
        // If we skip frames, we still need to map to the original file names
        const frameNum = String(index + 1).padStart(4, '0');
        return `/frames/frame_${frameNum}.jpg`;
    };

    // Preload frames logic
    useEffect(() => {
        const loadFrame = (index: number) => {
            if (framesRef.current[index] || index >= TOTAL_FRAMES) return;
            const img = new Image();
            img.src = getFramePath(index);
            img.onload = () => {
                framesRef.current[index] = img;
            };
        };

        // Load initial batch
        for (let i = 0; i < INITIAL_PRELOAD; i += FRAME_SKIP) {
            loadFrame(i);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Use alpha: false to optimize canvas performance if background is solid
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const drawFrame = () => {
            // Lerp frame index for smoothness
            frameIndexRef.current += (targetFrameIndexRef.current - frameIndexRef.current) * LERP_FACTOR;

            // Round to the nearest frame, taking into account the skip
            let index = Math.round(frameIndexRef.current / FRAME_SKIP) * FRAME_SKIP;
            index = Math.min(Math.max(index, 0), TOTAL_FRAMES - 1);

            // LAZY RENDERING: Only draw if the actual frame index has changed
            if (index !== lastDrawnFrameRef.current) {
                const img = framesRef.current[index];

                if (img && img.complete) {
                    const { drawWidth, drawHeight, offsetX, offsetY } = layoutRef.current;

                    // Clear only if needed (not strictly needed with object-fit: cover)
                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    lastDrawnFrameRef.current = index;
                }
            }

            requestRef.current = requestAnimationFrame(drawFrame);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Re-calculate layout for object-fit: cover
            // Assume 16:9 if no images loaded yet, or use the first loaded image
            const referenceImg = framesRef.current.find(img => img && img.complete) || { width: 1920, height: 1080 };
            const canvasAspect = canvas.width / canvas.height;
            const imgAspect = referenceImg.width / referenceImg.height;

            if (canvasAspect > imgAspect) {
                layoutRef.current.drawWidth = canvas.width;
                layoutRef.current.drawHeight = canvas.width / imgAspect;
                layoutRef.current.offsetX = 0;
                layoutRef.current.offsetY = (canvas.height - layoutRef.current.drawHeight) / 2;
            } else {
                layoutRef.current.drawWidth = canvas.height * imgAspect;
                layoutRef.current.drawHeight = canvas.height;
                layoutRef.current.offsetX = (canvas.width - layoutRef.current.drawWidth) / 2;
                layoutRef.current.offsetY = 0;
            }

            // Force redraw on next frame
            lastDrawnFrameRef.current = -1;
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;

            // Fade logic: Reveal much earlier
            const fadeStart = innerHeight * 0.1;
            const fadeEnd = innerHeight * 0.8;

            if (scrollY < fadeStart) {
                setOpacity(0);
            } else if (scrollY < fadeEnd) {
                setOpacity((scrollY - fadeStart) / (fadeEnd - fadeStart));
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

                // Progressive preloading: Load frames ahead in batches
                const startPreload = Math.floor(currentTargetFrame / FRAME_SKIP) * FRAME_SKIP;
                const endPreload = Math.min(startPreload + PRELOAD_BATCH, TOTAL_FRAMES);

                for (let i = startPreload; i < endPreload; i += FRAME_SKIP) {
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
            className="fixed inset-0 z-[0] transition-opacity duration-700 pointer-events-none overflow-hidden"
            style={{
                opacity: Math.max(opacity, 0),
                background: 'rgba(2, 6, 23, 0.5)'
            }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ filter: 'brightness(0.8)' }}
            />
        </div>
    );
}

