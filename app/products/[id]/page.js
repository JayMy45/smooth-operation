import Image from "next/image";

export default function Product() {

    return (
        <>
            <section className="flex justify-center items-center h-[70vh]">

                <div className="flex border dark:border-black h-[35rem] w-[50rem] rounded-lg overflow-hidden bg-gray-600 shadow-xl">
                    <div className="flex flex-col text-center w-2/6 px-2 pb-10">

                        <div className="flex justify-center items-center h-5/6">
                            <Image
                                className=""
                                src='/SkinnyGummies.png'
                                alt="Skinny Gummies"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="flex justify-center items-end  h-1/6 p-2">
                            <div>
                                <h2 className="text-2xl font-semibold">Skinny Gummies</h2>
                            </div>
                        </div>
                        <div>
                            <button className="w-28 p-1 rounded-lg shadow-xl bg-green-700">
                                Order
                            </button>
                        </div>
                    </div>
                    <div className="w-4/6 p-10">
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