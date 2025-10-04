"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DecryptedText } from "./decrypted-text";
import { ParticleTextEffect } from "./interactive-text-particle";
import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");
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
                    className="max-w-6xl mx-auto"
                >
                    <div className="w-full h-32 sm:h-40 md:h-48 mb-8">
                        <ParticleTextEffect 
                            text="INTRODUCING THE FUTURE OF TECH"
                            colors={[
                                'ffad70', 'f7d297', 'edb9a1', 'e697ac', 'b38dca',
                                '9c76db', '705cb5', '43428e', '2c2142'
                            ]}
                            animationForce={80}
                            particleDensity={3}
                        />
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