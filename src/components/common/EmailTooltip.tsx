import React, { useState } from 'react';

interface EmailTooltipProps {
    children: React.ReactNode;
}

export default function EmailTooltip({ children }: EmailTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 z-50 transition-all duration-300 pointer-events-none
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                <div className="bg-purple-900/95 backdrop-blur-xl border border-red-500/30 p-4 rounded-2xl shadow-2xl shadow-black/50">
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-purple-900/95" />

                    <div className="text-white space-y-3">
                        <p className="text-sm font-medium text-red-200">
                            Nothing happens? If you use Gmail in the browser, this is the usual fix:
                        </p>

                        <ul className="text-xs space-y-2 text-gray-300">
                            <li className="flex gap-2">
                                <span className="text-red-500">1.</span>
                                Open Gmail in Chrome
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500">2.</span>
                                Look at the right side of the address bar
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500">3.</span>
                                Do you see a double-diamond / envelope icon?
                            </li>
                            <li className="flex gap-2">
                                <span className="text-red-500">4.</span>
                                Click it → choose Allow
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
