import Image from "next/image";
import HoustonBrand from "../houston";
import { ProductList } from "../data/ProductList";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="flex justify-between items-center h-fit md:h-36 w-full px-7 bg-black">
                <div className="flex justify-center items-center w-full md:w-3/12">
                    <div className="uppercase">
                        <Link href="/">
                            <Image
                                src="/smoothlogo.png"
                                alt="Smooth Operations Logo"
                                className="w-fit p-3"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block w-9/12 p-3">
                    <div className="flex flex-row justify-around">
                        {
                            ProductList.map(({ id, name }) => (
                                <div key={id} className="w-28 p-1hover:text-lg hover:text-indigo-800 dark:hover:text-gray-300 hover:font-bold">
                                    <div className="">
                                        <Link href={`/products/${id}`}>
                                            <h2 className="text-xs text-gray-100 text-center">{name}</h2>
                                        </Link>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </footer>
            <div className="flex flex-row justify-center md:justify-end py-2 md:py-0 bg-black">
                <div className="md:flex md:justify-center md:items-center md:p-0">
                    <a href="http://www.jeremynmyers.com">
                        <h4 className="text-xxs text-zinc-50 px-2">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                    </a>
                </div>

                {/* branding */}
                <HoustonBrand />
            </div>
        </>
    )
}