"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from 'embla-carousel-class-names'
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "../icons/CarouselButton";

export default function ItemCardCarousel({ price, images, title, slides }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 4000 }),
        ClassNames()]);
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const onButtonAutoplayClick = useCallback(
        (callback) => {
            const autoplay = emblaApi?.plugins()?.autoplay;
            if (!autoplay) return;

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop;

            resetOrStop();
            callback();
        },
        [emblaApi]
    );

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
                    {slides.map((index) => {

                        return (
                            <div className="slides embla__class-names" key={index}>
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-slate-400 slides__inner">
                                    <div className="mb-4 aspect-w-16 aspect-h-9">
                                        <Image
                                            src={images[index]}
                                            alt="item image"
                                            className="object-cover rounded-lg"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <h1 className="mb-2 text-xl font-bold">{title[index]}</h1>
                                    <p className="text-black">${price[index]}</p>
                                    <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="relative flex justify-between -top-48">
                    <PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    );
}
