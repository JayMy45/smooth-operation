import Link from "next/link"
import { CompanyList } from "../data/CompanyList"

export default function CompanyPage({ params }) {

    const { id } = params;
    const company = CompanyList.find((company) => company.id === Number(id));

    return (
        <>
            <section className="flex justify-center h-screen">
                <div className="flex border h-1/2 w-1/2">
                    <div>
                        <h1 className="uppercase text-3xl">{company.name}</h1>
                        <div className="border border-green-500">
                            <Link href={company.link}>
                                Visit the site for {company.name} here
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{company.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}