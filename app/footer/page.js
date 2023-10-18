import Image from "next/image";

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
        </>
    )
}