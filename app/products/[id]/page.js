import { ProductList } from "@/app/data/ProductList";
import Image from "next/image";
import Link from "next/link";

export default function Product({ params }) {
    const { id } = params;
    const product = ProductList.find((product) => product.id === Number(id));

    return (
        <>
            <section className="flex justify-center items-center h-[70vh]">

                <div className="flex border dark:border-black h-[35rem] w-[50rem] rounded-xl overflow-hidden bg-gray-600 shadow-xl">
                    <div className="flex flex-col text-center w-5/12 px-2 pb-10">

                        <div className="flex justify-center items-center h-5/6">
                            <Image
                                className=""
                                src={product.image}
                                alt="Skinny Gummies"
                                width={400}
                                height={400}
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
                    <div className="w-7/12 p-10">
                        <div className="h-1/2 border">
                            <h2>Details Homie</h2>
                        </div>
                        <div className="h-1/2 border">
                            <h2>Details Homie</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}