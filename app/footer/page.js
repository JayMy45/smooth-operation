import Image from "next/image";
import HoustonBrand from "../houston";
import { ProductList } from "../data/ProductList";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="flex justify-between items-center h-36 w-full px-7 bg-black">
                <div className="flex justify-center items-center w-3/12">
                    <div className="uppercase">
                        <Image
                            src="/smoothlogo2.png"
                            alt="Smooth Operations Logo"
                            className="w-fit"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex justify-center w-3/12 h-full p-3">
                    {
                        <div>
                            {
                                ProductList.map(({ id, name, link }) => (
                                    <div key={id} className="text-left ml-3 w-full p-1 hover:text-lg hover:text-indigo-800 dark:hover:text-gray-300 hover:font-bold">
                                        <Link href={`/products/${id}`}
                                        >
                                            <h2 className="text-xs">{name}</h2>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                    }
                </div>
                <div className="w-6/12 border h-full">

                </div>

            </footer>
            <div className="flex flex-row justify-center md:justify-end py-2 md:py-0 bg-black">
                <div className="md:flex md:justify-center md:items-center md:p-0">
                    <a href="http://www.jeremynmyers.com">
                        <h4 className="text-xxs text-zinc-50 px-2">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                    </a>
                </div>

                <HoustonBrand />

            </div>
        </>
    )
}