import Image from "next/image";
import HoustonBrand from "../houston";

export default function Footer() {

    return (
        <>
            <footer className="flex justify-between items-center h-36 w-full border px-7">
                <div className="flex justify-center items-center w-3/12  border">
                    <div className="hidden dark:block uppercase">
                        <Image
                            src="/smoothlogo2.png"
                            alt="Smooth Operations Logo"
                            className="w-fit"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="w-3/12 border h-full">

                </div>
                <div className="w-6/12 border h-full">

                </div>

            </footer>
            <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                <div className="md:flex md:justify-center md:items-center md:p-0">
                    <a href="http://www.jeremynmyers.com">
                        <h4 className="text-xxs text-zinc-6000 dark:text-zinc-50 px-2">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                    </a>
                </div>
                <HoustonBrand />
            </div>
        </>
    )
}