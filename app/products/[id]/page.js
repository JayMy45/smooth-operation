'use client'

import { ProductList } from "@/app/data/ProductList";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Product({ params }) {
    const { id } = params;
    const product = ProductList.find((product) => product.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    // will use this function to separate the description into section depending on the <br /> tag
    function renderDescription(description) {
        return description.split('<br /><br />').map((text, index) => (
            <p key={index}>{text}</p>
        ));
    }

    return (
        <>
            <section className="flex justify-center items-center md:h-full py-3">

                <div className="flex flex-col md:flex-row md:h-fit md:w-[50rem] md:rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-600 shadow-sm shadow-slate-600">
                    <div className="flex flex-col text-center md:w-5/12 px-2 pb-5 shadow-xl">

                        <div className="flex justify-center items-center h-5/6 pt-3">
                            <Image
                                className=""
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="flex justify-center items-end h-fit p-3">
                            <div>
                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                            </div>
                        </div>
                        <div>
                            <Link href={product.link} className="w-28 py-2 px-5 rounded-lg shadow-xl bg-green-700">
                                Order
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-7/12 p-8 relative">

                        {/* Details Header and more information buttons */}
                        <div className="flex flex-col justify-between mt-16">
                            <div className="">
                                <header className="text-4xl">{product.name} Details</header>
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="h-fit p-3 mt-10">
                            {
                                <h2 className="text-sm">{renderDescription(product.description)}</h2>
                            }
                        </div>
                        <div className="flex  justify-around p-5">
                            {product.video && product.pdf
                                ? <>
                                    <Link href={product.video} className="bg-gray-700 rounded-lg px-5 py-2">Video</Link>
                                    <Link href={product.pdf} className="bg-gray-700 rounded-lg px-5 py-2">Downloads</Link>
                                </>
                                : product.video && !product.pdf
                                    ? <Link href={product.video} className="bg-gray-700 rounded-lg px-5 py-2">Video</Link>
                                    : null
                            }
                        </div>
                        <div className="absolute bottom-0 right-0 md:rounded-br-xl p-2 mr-2 mb-2 shadow-inner shadow-black hover:bg-slate-200 hover:text-black hover:font-bold">
                            <div className="">
                                <Link href={`/`}>
                                    <h3 className="text-sm">Back to All Products</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}