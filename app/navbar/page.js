import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row h-28 border">
                <div className="flex justify-center items-center w-3/12 border">
                    <div className="border h-full flex justify-center items-center">
                        <h2>LOGO HERE</h2>
                    </div>
                </div>
                <div className="flex justify-around items-center w-6/12 border">
                    <div className="hover:border-b">
                        <Link href="https://shopgofinity.com/?ref=LxaNoOARuhBx4eTS6E4tLcEYhCkfmpkDBXGf68Q1BPGm%2fOqPHE8Oc8IQg%2fxizZUld7rZjYWLIcemQgyAcOWs99XHW4xNMXjqNFpCTOyI57g%3d&prt=BAppufstuQJkjR41dAhfJtHdCd0BYJdU6CP%2fsqJgeibUjP%2f9pcTBp4Rj4ft0icF%2fh2LBGoyIrUYlOS3FqRhO75G6fYXEvTE6tXQ%2fu3tRFOU%3d">
                            <h2 className="uppercase">gofinity</h2>
                        </Link>
                    </div>
                    <div className="uppercase">
                        <h1>Smooth Operation</h1>
                    </div>
                    <div className="hover:border-b">
                        <Link href="https://1800386072.myasealive.com/">
                            <h2 className="uppercase">asea</h2>
                        </Link>
                    </div>
                </div>
                <div className="w-3/12 border">

                </div>
            </nav>
        </>
    );
}
