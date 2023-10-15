import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <>
            {/* Product Section */}
            <section className="flex justify-center mt-5">

                {/* Product Card */}
                <div className="w-full border p-5 rounded-lg h-96">
                    <div className="flex flex-row justify-around space-x-5 h-full">
                        <div className="flex flex-col justify-around w-1/3">
                            <div className="h-16 ">
                                <Image
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </div>
                            <div className=" w-fit border p-2 rounded-md">
                                <Link href="/products/1">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        <div className="w-2/3 h-full">
                            <div className="p-2">
                                <h1 className="text-xl font-bold">Products Name</h1>
                            </div>

                            <div className="mt-1 border h-16x">
                                <p className="text-sm">Products Description</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}   