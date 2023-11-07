import Image from "next/image";
import Link from "next/link";

export default function CompanyList() {
    return (
        <>
            <section className="min-h-full py-9">
                <div className="flex flex-col md:flex-row justify-center items-center space-x-2 space-y-5 md:space-y-0 mb-5">
                    <div className="rounded-lg overflow-hidden hover:border hover:border-gray-800 hover:shadow-lg hover:shadow-gray-500">
                        <Link href="/company/1">
                            <Image
                                src={"/ASEA.png"}
                                alt="ASEA Logo Image Link to company description page"
                                height={400}
                                width={400}
                                className="bg-gradient-to-r from-black via-blue-700 to-black"
                            />
                        </Link>
                    </div>
                    <div className="rounded-lg overflow-hidden hover:border hover:border-gray-800 hover:shadow-lg hover:shadow-gray-500">
                        <Link href="/company/2">
                            <Image
                                src={"/GOFINITY.png"}
                                alt="GOFINITY Logo Image Link to company description page"
                                height={400}
                                width={400}
                                className="bg-gradient-to-r from-black via-pink-600 to-black"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}