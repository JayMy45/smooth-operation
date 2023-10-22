'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProductList } from "../data/ProductList";

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
            <nav className="flex flex-row h-32">
                <div className="flex justify-center items-center w-3/12 ">
                    <div className="hidden dark:block uppercase mt-4">
                        <Image
                            src="/smoothlogo1.png"
                            alt="Smooth Operations Logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="block dark:hidden uppercase">
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
                        <Link href="https://shopgofinity.com/?ref=LxaNoOARuhBx4eTS6E4tLcEYhCkfmpkDBXGf68Q1BPGm%2fOqPHE8Oc8IQg%2fxizZUld7rZjYWLIcemQgyAcOWs99XHW4xNMXjqNFpCTOyI57g%3d&prt=BAppufstuQJkjR41dAhfJtHdCd0BYJdU6CP%2fsqJgeibUjP%2f9pcTBp4Rj4ft0icF%2fh2LBGoyIrUYlOS3FqRhO75G6fYXEvTE6tXQ%2fu3tRFOU%3d">
                            <h2 className="uppercase">gofinity</h2>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center uppercase">
                        <Link href="https://1800386072.myasealive.com/">
                            <h2 className="uppercase">asea</h2>
                        </Link>
                    </div>
                    <div className="flex justify-around items-center w-fit ">
                        <div className="hover:-b relative" ref={dropdownRef}>
                            <div onClick={handleToggle} className="hover:border-b">
                                Featured Products
                            </div>
                            {productOpen && (
                                <div className="absolute top-full left-0 mt-2 flex flex-col justify-center items-center border w-fit h-fit p-2 bg-gray-800 dark:bg-inherent dark:border-gray-600 text-left">

                                    {
                                        ProductList.map(({ id, name, link }) => (
                                            <div key={id} className="text-left w-full">
                                                <Link href={link.href}>
                                                    <h2 className="">{name}</h2>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div className="w-3/12 ">


                </div>
            </nav>
        </>
    );
}
