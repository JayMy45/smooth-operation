import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <>
            {/* Product Section */}
            <section className="flex justify-center mt-5">

                {/* Product Card */}
                <div className="w-full border p-5 rounded-lg h-fit">
                    <div className="flex flex-row justify-around space-x-5 h-full">

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6 border">
                            <div className="h-fit mx-auto">
                                <Image
                                    src="/SkinnyGummies.png"
                                    alt="Vercel Logo"
                                    className=""
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className=" w-fit border p-2 rounded-md mx-auto">
                                <Link href="https://shopgofinity.com/products/skinny-gummies">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
                            <div className="h-10">
                            </div>

                            <div className="p-2 border h-fit">
                                <header className="text-xl font-bold uppercase">Skinny Gummies</header>
                            </div>

                            <div className="h-fit">


                                <div className="mt-1 border h-fit p-5">
                                    <p>Apple Cider Vinegar has been used for centuries as a traditional remedy to help support digestion, gut health, and appetite. With Wellfinity Skinny Gummies for adults, you can enjoy apple cider vinegar without the unpleasant taste. This delicious vegan formula is also free of caffeine, stimulants, and added sugars.</p>

                                    <p>- Helps to support and maintain a healthy metabolism.*</p>
                                    <p>- Vitamin B12 supports healthy nutrient metabolism*</p>
                                    <p>Wellfinity’ sweet, soft and chewy vegan gummies are made with fruit pectin and premium ingredients for great taste and results! Gelatin free.</p>

                                </div>

                                <div className="h-fit border">
                                    <footer>
                                        <h3 className="italic text-xs">Awesome Divisions</h3>
                                    </footer>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}   