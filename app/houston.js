'use client';

import { useState } from "react";
import Link from "next/link";
import GrayHouston from '../public/GrayHouston.png';
import inHoustonColor from '../public/inHoustonColor.png';
import Image from "next/image";

export default function HoustonBrand() {

    const defaultImageSrc = GrayHouston;
    const hoverImageSrc = inHoustonColor;


    const [imageSrc, setImageSrc] = useState(defaultImageSrc);


    const handleMouseEnter = () => {
        setImageSrc(hoverImageSrc);
    };

    const handleMouseLeave = () => {
        setImageSrc(defaultImageSrc);
    };


    return (
        <>
            <div className="flex-shrink-0 mr-0 p-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link href="http://www.jeremynmyers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="items-center hidden md:block"
                        src={imageSrc}
                        alt="Picture of Dog"
                        width={20}
                        height={20}
                        priority={true}
                    />
                </Link>
            </div>
        </>
    )
}