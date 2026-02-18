import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
    const { faq } = siteContent;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-gradient text-center">
                        {faq.title}
                    </h2>

                    <div className="space-y-4">
                        {faq.items.map((item, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-white">{item.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
