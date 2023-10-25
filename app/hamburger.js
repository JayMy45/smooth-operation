'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { ProductList } from "./data/ProductList";


export default function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const dropdownRef = useRef(null);

    //handles the hamburger menu
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 739 && navbarOpen) {
                setNavbarOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navbarOpen]);


    //handles the dropdown menu for the products
    const toggleProduct = () => {
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
            <div className="flex items-center text-slate-100 dark:text-gray-200 cursor-pointer md:hidden mx-auto my-5 mr-5">
                <AiOutlineMenu
                    onClick={handleToggle}
                    size={30}
                    className=""
                />
            </div>
            <div className={navbarOpen
                ? "fixed left-0 top-0 w-[75%] h-screen bg-slate-800 p-7 ease-in duration-500 md:hidden z-50"
                : "fixed left-[-100%]  w-[75%] h-screen top-0 p-10 ease-in duration-500 md:hidden z-50"
            }
            >
                <div className="flex w-full items-center text-slate-100 justify-end">
                    <div onClick={handleToggle} className="cursor-pointer">
                        <AiOutlineClose
                            size={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 text-slate-100 cursor-pointer">
                                <h2 className="uppercase">gofinity</h2>
                            </li>
                        </Link>
                        <Link href="/about">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 text-slate-100 cursor-pointer">
                                <h2 className="uppercase">asea</h2>
                            </li>
                        </Link>
                        <div className="hover:text-indigo-400 relative" ref={dropdownRef}>
                            <div onClick={toggleProduct} className="flex justify-between items-center cursor-pointer">
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
                                            onClick={toggleProduct}
                                        >
                                            <h2 className="font-bold">All Products</h2>
                                        </Link>
                                    </div>
                                    {
                                        ProductList.map(({ id, name, link }) => (
                                            <div key={id} className="text-left ml-3 w-full p-1 hover:text-lg hover:text-indigo-800 dark:hover:text-gray-300 hover:font-bold">
                                                <Link href={`/products/${id}`}
                                                    onClick={toggleProduct}
                                                >
                                                    <h2 className="">{name}</h2>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>

                            )}
                        </div>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row justify-around pt-10 items-center">

                        {/* facebook link */}
                        <Link href={"https://www.facebook.com/profile.php?id=100092835397018&mibextid=LQQJ4d"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="bg-white rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513224/RewriteTheNarrative/Icon_Images_wwcmz7.png" alt="Facebook Logo" title="Facebook" />
                        </Link>

                        {/* instagram link */}
                        <Link href={"https://www.instagram.com/oledasinkler_/?igshid=MmIzYWVlNDQ5Yg%3D%3D"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513678/RewriteTheNarrative/Icon_Images_2_jdxlrj.png" alt="Instagram Logo" title="Instagram" />
                        </Link>

                        {/* clubhouse link */}
                        <Link href={"https://www.clubhouse.com/house/rewrite-the-narrative"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690572546/RewriteTheNarrative/clubhouseIcon_hdkraj.png" alt="Clubhouse.com Logo" title="Clubhouse" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}