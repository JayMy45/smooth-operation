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

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6 border">
                            <div className="h-fit mx-auto">
                                <Image
                                    src="/SkinnyGummies.png"
                                    alt="Vercel Logo"
                                    className=""
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </div>
                            <div className=" w-fit border p-2 rounded-md mx-auto">
                                <Link href="/products/1">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
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