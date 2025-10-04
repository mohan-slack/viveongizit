"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DecryptedText } from "./decrypted-text";
import { ParticleTextEffect } from "./interactive-text-particle";
import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function BackgroundPaths() {
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const update = () =>
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden bg-background py-12 sm:py-16 md:py-20">
            <div className="fixed inset-0 w-screen h-screen">
                {mounted && (
                    <>
                        <MeshGradient
                            width={dimensions.width}
                            height={dimensions.height}
                            colors={["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"]}
                            distortion={0.8}
                            swirl={0.6}
                            grainMixer={0}
                            grainOverlay={0}
                            speed={0.42}
                            offsetX={0.08}
                        />
                        <div className="absolute inset-0 pointer-events-none bg-white/20 dark:bg-black/25" />
                    </>
                )}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="mb-8 space-y-6">
                        <div className="h-32 sm:h-40 md:h-48 w-full">
                            <ParticleTextEffect
                                text="INTRODUCING THE FUTURE OF TECH"
                                className="w-full h-full"
                                colors={['72b9bb', 'b5d9d9', 'ffd1bd', 'ffebe0', '8cc5b8', 'dbf4a4']}
                                animationForce={40}
                                particleDensity={1.5}
                            />
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text 
                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                            dark:from-white dark:to-white/80"
                        >
                            HUX<span className="text-white text-[0.25em] align-top leading-none">™</span>
                        </motion.h1>
                    </div>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                <DecryptedText 
                                    text="Discover Excellence"
                                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                                    encryptedClassName="opacity-60 text-gray-500"
                                    speed={60}
                                    maxIterations={12}
                                    sequential={true}
                                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                                    animateOn="hover"
                                />
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}