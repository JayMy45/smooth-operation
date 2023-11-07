import Image from "next/image";
import Link from "next/link";

export default function CompanyList() {
    return (
        <>
            <section className="h-full">
                <div className="flex flex-row justify-center items-center space-x-2">
                    <div>
                        <Link href="/company/1">
                            <Image
                                src={"/ASEA.png"}
                                height={400}
                                width={400}
                                className="bg-gray-300 rounded-lg"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="/company/2">
                            <Image
                                src={"/GOFINITY.png"}
                                height={400}
                                width={400}
                                className="bg-gray-300 rounded-lg"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}