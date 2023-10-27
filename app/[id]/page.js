import Link from "next/link"
import { CompanyList } from "../data/CompanyList"

export default function CompanyPage() {
    return (
        <>
            <section className="h-screen">
                <div className="text-center border">
                    {CompanyList.map(({ id, name, link, image, alt }) => (
                        <div key={id}>
                            <h1>{name}</h1>
                            <Link href={link}>
                                This is A Link
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}