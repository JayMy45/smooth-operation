import Link from "next/link"
import { CompanyList } from "../data/CompanyList"
import { ProductList } from "../data/ProductList";
import Image from "next/image";

export default function CompanyPage({ params }) {

    const { id } = params;
    const company = CompanyList.find((company) => company.id === Number(id));

    return (
        <>
            <section className="flex justify-center item-center h-full p-5">
                <div className={`flex flex-col justify-around md:justify-around ${company.bgColor} rounded-xl h-fit px-10 py-5 shadow-sm shadow-gray-800`}>
                    <div className="flex flex-col justify-between md:justify-normal pb-5">
                        <div>
                            <h1 className="uppercase text-5xl text-gray-200 mb-4">{company.name}</h1>
                        </div>
                        <div className="border border-slate-200 p-2 text-center rounded-lg w-fit hover:bg-slate-300 ">
                            <Link href={company.link}>
                                <h3 className="italic text-sm text-gray-100 hover:text-black hover:font-bold">Visit {company.name}'s site here</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 w-fit">
                        <div>
                            <p className="text-slate-200">{company.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mt-10">
                        {
                            ProductList.filter((product) => product.company === company.name).map(({ id, name, image, alt, link }) => (
                                <div className="">
                                    <Image
                                        src={image}
                                        alt={alt}
                                        width={200}
                                        height={200}
                                        className="rounded-full"
                                    />
                                    <div className="mt-3">
                                        <Link href={link}>
                                            <h2 className="text-center text-slate-200 hover:text-indigo-300">{name}</h2>
                                        </Link>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}