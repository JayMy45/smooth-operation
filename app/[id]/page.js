import Link from "next/link"
import { CompanyList } from "../data/CompanyList"

export default function CompanyPage({ params }) {

    const { id } = params;
    const company = CompanyList.find((company) => company.id === Number(id));

    return (
        <>
            <section className="flex justify-center h-screen">
                <div className={`flex justify-around ${company.bgColor} rounded-xl h-1/2 w-1/2 p-2 shadow-xl`}>
                    <div className="flex flex-col justify-between py-5">
                        <h1 className="uppercase text-5xl">{company.name}</h1>
                        <div className="border border-slate-200 p-2 text-center rounded-lg w-fit">
                            <Link href={company.link}>
                                <h3 className="italic text-sm text-gray-300">Go to {company.name} here</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 w-fit">
                        <div>
                            <p>{company.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}