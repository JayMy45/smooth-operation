import Link from "next/link"
import { CompanyList } from "../data/CompanyList"

export default function CompanyPage({ params }) {

    const { id } = params;
    const company = CompanyList.find((company) => company.id === Number(id));

    return (
        <>
            <section className="h-screen">
                <div className="text-center border">
                    <div>
                        <h1>{company.name}</h1>
                        <div className="border border-green-500">
                            <Link href={company.link}>
                                Visit the site for {company.name} here
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}