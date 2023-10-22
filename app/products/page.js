import Image from "next/image";
import Link from "next/link";
import { ProductList } from "../data/ProductList";

export default function ProductsPage() {
    return (
        <>
            {/* Product Section */}
            <section className="flex flex-col justify-center">

                {/* Product Card1 */}
                <div className="grid grid-cols w-full p-10 h-fit bg-gradient-to-r from-indigo-900">
                    {
                        ProductList.map(({ id, name, image, alt, link, description }) => (
                            <div key={id} className="flex flex-row justify-around space-x-5 h-full py-5 mt-4">

                                {/* images and link div */}
                                <div className="flex flex-col justify-around w-2/6">
                                    <div className="h-fit mx-auto">
                                        <Image
                                            src={image}
                                            alt={alt}
                                            className=""
                                            width={200}
                                            height={200}
                                            priority
                                        />
                                    </div>
                                    <div className=" w-fit p-2 rounded-md mx-auto">
                                        <Link href={link}>
                                            <h3 className="text-xs">Click here to learn more</h3>
                                        </Link>
                                    </div>
                                </div>

                                {/* header and description div */}
                                <div className="w-4/6 h-full">
                                    <div className="h-10">
                                    </div>

                                    <div className="p-2 h-fit">
                                        <header className="text-xl font-bold uppercase">{name}</header>
                                    </div>

                                    <div className="h-fit">


                                        <div className="mt-1 h-fit p-5">
                                            <p>Apple Cider Vinegar has been used for centuries as a traditional remedy to help support digestion, gut health, and appetite. With Wellfinity Skinny Gummies for adults, you can enjoy apple cider vinegar without the unpleasant taste. This delicious vegan formula is also free of caffeine, stimulants, and added sugars.</p>

                                            <p>- Helps to support and maintain a healthy metabolism.*</p>
                                            <p>- Vitamin B12 supports healthy nutrient metabolism*</p>
                                            <p>Wellfinity’ sweet, soft and chewy vegan gummies are made with fruit pectin and premium ingredients for great taste and results! Gelatin free.</p>

                                        </div>

                                        <div className="h-fit">
                                            <footer>
                                                <h3 className="italic text-xs">Awesome Divisions</h3>
                                            </footer>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

                {/* Product Card1 */}
                <div className="w-full p-10 h-fit bg-gradient-to-r from-indigo-900">
                    <div className="flex flex-row justify-around space-x-5 h-full">

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6">
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
                            <div className=" w-fit p-2 rounded-md mx-auto">
                                <Link href="https://shopgofinity.com/products/skinny-gummies">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
                            <div className="h-10">
                            </div>

                            <div className="p-2 h-fit">
                                <header className="text-xl font-bold uppercase">Skinny Gummies</header>
                            </div>

                            <div className="h-fit">


                                <div className="mt-1 h-fit p-5">
                                    <p>Apple Cider Vinegar has been used for centuries as a traditional remedy to help support digestion, gut health, and appetite. With Wellfinity Skinny Gummies for adults, you can enjoy apple cider vinegar without the unpleasant taste. This delicious vegan formula is also free of caffeine, stimulants, and added sugars.</p>

                                    <p>- Helps to support and maintain a healthy metabolism.*</p>
                                    <p>- Vitamin B12 supports healthy nutrient metabolism*</p>
                                    <p>Wellfinity’ sweet, soft and chewy vegan gummies are made with fruit pectin and premium ingredients for great taste and results! Gelatin free.</p>

                                </div>

                                <div className="h-fit">
                                    <footer>
                                        <h3 className="italic text-xs">Awesome Divisions</h3>
                                    </footer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Card2 */}
                <div className="w-full p-5 h-fit bg-gradient-to-r from-indigo-900">
                    <div className="flex flex-row justify-around space-x-5 h-full">

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6">
                            <div className="h-fit mx-auto">
                                <Image
                                    src="/ScalpElixir.png"
                                    alt="Vercel Logo"
                                    className=""
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className=" w-fit p-2 rounded-md mx-auto">
                                <Link href="https://shopgofinity.com/products/scalp-stimulating-elixir">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
                            <div className="h-10">
                            </div>

                            <div className="p-2 h-fit">
                                <header className="text-xl font-bold uppercase">Scalp Elixir</header>
                            </div>

                            <div className="h-fit">


                                <div className="mt-1 h-fit p-5">
                                    <p>We all know that one of the keys to healthy hair is a healthy scalp. And the keys to a healthy scalp include stimulating blood circulation which in turn stimulates hair follicles to do their job and do it well, i.e. to live a long life and multiply. Your keys are here.</p>
                                    <p>Our Scalp Stimulating Elixir delivers an intense infusion of vitamins and active botanicals to nourish targeted areas and support healthy hair growth. Use daily to revitalize the delicate, weak and overworked areas of your hair.</p>
                                    <p>Like all Hairfinity Elite products, this powerful, science-backed formula is clean, green and cruelty-free, formulated without sulfates, silicones, parabens, phthalates, mineral oil or petroleum. It’s safe for everyone and for all hair types, including hair that’s been colored, permed or otherwise processed.</p>
                                </div>

                                <div className="h-fit">
                                    <footer>
                                        <h3 className="italic text-xs">Awesome Divisions</h3>
                                    </footer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Card3 */}
                <div className="w-full px-5 py-16 h-fit bg-gradient-to-r from-indigo-900">
                    <div className="flex flex-row justify-around space-x-5 h-full">

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6">
                            <div className="h-fit mx-auto">
                                <Image
                                    src="/REDOXEnergy.png"
                                    alt="REDOX Energy Image"
                                    className=""
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                            <div className=" w-fit p-2 rounded-md mx-auto">
                                <Link href="https://shop.aseaglobal.com/products/4313?sponsorId=18003HF07B&m=7&st=ps">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
                            <div className="h-10">
                            </div>

                            <div className="p-2 h-fit">
                                <header className="text-xl font-bold">REDOXEnergy</header>
                            </div>

                            <div className="h-fit">


                                <div className="mt-1 h-fit p-5">
                                    <p>
                                        REDOXEnergy leverages select Powered by Redox™ ingredients to provide a long-lasting source of cellular energy you can count on—whether it’s at home, work, or everything in between. As a healthy source of sustained cellular energy, this proprietary blend of B vitamins, Guarana, Ginseng, and L-Theanine help combat physical and mental fatigue. REDOXEnergy not only increases your output, but helps you generate and maintain more energy at the cellular level.
                                    </p>
                                </div>

                                <div className="h-fit">
                                    <footer>
                                        <h3 className="italic text-xs">Awesome Divisions</h3>
                                    </footer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Card4 */}
                <div className="w-full px-5 py-16 h-fit bg-gradient-to-r from-indigo-900">
                    <div className="flex flex-row justify-around space-x-5 h-full">

                        {/* images and link div */}
                        <div className="flex flex-col justify-around w-2/6">
                            <div className="h-fit mx-auto">
                                <Image
                                    src="/ASEARedox.png"
                                    alt="REDOX Energy Image"
                                    className=""
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className=" w-fit p-2 rounded-md mx-auto">
                                <Link href="https://1800386072.myasealive.com/">
                                    <h3 className="text-xs">Click here to learn more</h3>
                                </Link>
                            </div>
                        </div>

                        {/* header and description div */}
                        <div className="w-4/6 h-full">
                            <div className="h-10">
                            </div>

                            <div className="p-2 h-fit">
                                <header className="text-xl font-bold">ASEA Redox</header>
                            </div>

                            <div className="h-fit">


                                <div className="mt-1 h-fit p-5">
                                    <p>
                                        ASEA has developed a unique breakthrough product technology
                                        that has been scientifically tested and shown to signal the
                                        activation of genetic pathways or affect genes that:
                                    </p>


                                </div>

                                <div className="h-fit">
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