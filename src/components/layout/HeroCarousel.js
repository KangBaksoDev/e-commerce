"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        if (isMouseEnter) {
            autoplay.stop();
        } else {
            autoplay.play();
        }
    }, [isMouseEnter, emblaApi]);

    return (
        <section className="embla">
            <div
                className="embla__viewport"
                ref={emblaRef}
                onMouseEnter={() => setIsMouseEnter(true)}
                onMouseLeave={() => setIsMouseEnter(false)}
            >
                <div className="embla__container">
                    <div className="items-center pt-10 pb-4 mx-4 mt-4 bg-red-600 rounded-lg hero embla__slide">
                        <div className="relative z-10 px-10 md:left-20">
                            <h1 className="text-2xl font-semibold">Fashion For Men</h1>
                            <p className="my-4 text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                                felis non libero consectetur aliquam ut in eros. Nulla facilisi.
                            </p>
                        </div>
                        <div className="relative z-0 flex items-center justify-center md:-right-24 right-4 w-60 h-72">
                            <Image
                                src={"https://placehold.co/300x200/png"}
                                width={300}
                                height={200}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="items-center pt-10 pb-2 mx-4 mt-4 bg-red-600 rounded-lg hero embla__slide">
                        <div className="relative z-10 px-10 md:left-20">
                            <h1 className="text-2xl font-semibold">Fashion For Women</h1>
                            <p className="my-4 text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                                felis non libero consectetur aliquam ut in eros. Nulla facilisi.
                            </p>
                        </div>
                        <div className="relative z-0 flex items-center justify-center md:-right-24 right-4 w-60 h-72">
                            <Image
                                src={"https://placehold.co/300x200/png"}
                                width={300}
                                height={200}
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
