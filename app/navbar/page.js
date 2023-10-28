'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProductList } from "../data/ProductList";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import Hamburger from "../hamburger";

export default function NavBar() {
    const [productOpen, setProductOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setProductOpen(!productOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProductOpen(false);
            }
        };

        window.addEventListener("click", handleOutsideClick);

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <nav className="hidden md:block relative top-0 h-32 bg-black text-white h-fit sticky z-10">
                <div className="flex flex-row ">
                    <div className="flex justify-center items-center w-3/12 ">

                        <div className="uppercase">
                            <Image
                                src="/smoothlogo1.png"
                                alt="Smooth Operations Logo"
                                className="bg-black"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="flex justify-around items-center w-6/12 ">
                        <div className="hover:-b">
                            <Link href="/2">
                                <h2 className="uppercase">gofinity</h2>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center uppercase">
                            <Link href="/1">
                                <h2 className="uppercase">asea</h2>
                            </Link>
                        </div>
                        <div className="hover:text-indigo-400 relative" ref={dropdownRef}>
                            <div onClick={handleToggle} className="flex justify-between items-center cursor-pointer">
                                {productOpen
                                    ? <>
                                        <div className="">
                                            <h2 className="uppercase">Featured Products</h2>
                                        </div>
                                        <BiSolidUpArrow className="ml-2" />
                                    </>
                                    : <>
                                        <div className="">
                                            <h2 className="uppercase">Featured Products</h2>
                                        </div>
                                        <BiSolidDownArrow className="ml-2" />
                                    </>
                                }
                            </div>
                            {productOpen && (
                                <div
                                    className="absolute w-full bg-white dark:bg-gray-800 dark:text-white text-gray-800 p-1 z-10 rounded-b-lg border-t"
                                >
                                    <div className="text-left ml-3 w-full p-1 hover:text-lg hover:text-indigo-800 dark:hover:text-gray-300 hover:font-bold">
                                        <Link href={`/`}
                                            onClick={handleToggle}
                                        >
                                            <h2 className="font-bold">All Products</h2>
                                        </Link>
                                    </div>
                                    {
                                        ProductList.map(({ id, name, link }) => (
                                            <div key={id} className="text-left ml-3 w-full p-1 hover:text-lg hover:text-indigo-800 dark:hover:text-gray-300 hover:font-bold">
                                                <Link href={`/products/${id}`}
                                                    onClick={handleToggle}
                                                >
                                                    <h2 className="">{name}</h2>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>

                            )}
                        </div>


                    </div>
                    <div className="w-3/12 ">


                    </div>
                </div>
            </nav>

            {/* hamburger menu */}
            <div className="flex border-b border-gray-400 dark:border-gray-950 md:border-none">
                <Hamburger />
            </div>
        </>
    );
}
