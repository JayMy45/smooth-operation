import Image from "next/image";
import Link from "next/link";
import { ProductList } from "../data/ProductList";
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
});


export default function ProductsPage() {

    // will use this function to separate the description into section depending on the <br /> tag
    function renderDescription(description) {
        return description.split('<br /><br />').map((text, index) => (
            <p key={index}>{text}</p>
        ));
    }

    return (
        <>
            {/* Product Section */}
            <section className="flex flex-col justify-center">

                {/* Product Card1 */}
                <div className="grid grid-cols w-full p-10 h-fit bg-gradient-to-r from-indigo-900 text-gray-200">
                    {
                        ProductList.map(({ id, name, image, alt, description, company, productActive }) => (
                            productActive
                                ? <div key={id} className="flex flex-col md:flex-row justify-around space-x-5 h-full py-5 mb-8 md:mb-4">
                                    {/* images and link div */}
                                    <div className="flex flex-col justify-around md:w-2/6">

                                        <div className="h-fit mx-auto">
                                            <Link href={`/products/${id}`}>
                                                <Image
                                                    src={image}
                                                    alt={alt}
                                                    className=""
                                                    //! all images are 450 X 500 png files!!!
                                                    width={200}
                                                    height={200}
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                        <div className=" w-fit p-2 rounded-md mx-auto">
                                            <Link href={`/products/${id}`}>
                                                <h3 className="text-xxs md:text-xs">Click here to learn more</h3>
                                            </Link>
                                        </div>

                                    </div>

                                    {/* header and description div */}
                                    <div className="md:w-4/6 h-full">
                                        <div className="h-10">
                                        </div>

                                        <div className="p-2 h-fit">
                                            <header className="text-xl font-bold">{name}</header>
                                        </div>

                                        <div className="h-fit w-fit">
                                            <div className="h-fit text-sm md:p-5">
                                                <div>{renderDescription(description)}</div>
                                            </div>

                                            <div className="h-fit">
                                                <Link href={`/company`}>
                                                    <footer>
                                                        <h3 className={`h-fit mt-2 md:mt-0 ml-4 md:ml-3 text-xs ${robotoCondensed.className}`}>{company}</h3>
                                                    </footer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                : null
                        ))
                    }
                </div>

            </section>
        </>
    );
}   