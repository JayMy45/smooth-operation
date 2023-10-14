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
                    <div className="uppercase">
                        <h1>Welcome </h1>
                    </div>
                    <div className="uppercase">
                        <h2>to Smooth</h2>
                    </div>
                    <div className="uppercase">
                        <h2>Operator</h2>
                    </div>
                </div>
                <div className="w-3/12 border">

                </div>
            </nav>
        </>
    );
}
