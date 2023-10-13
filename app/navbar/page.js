export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row h-28 border">
                <div className="flex justify-center items-center w-1/6 border">
                    <div className="border h-full flex justify-center items-center">
                        <h2>LOGO HERE</h2>
                    </div>
                </div>
                <div className="flex justify-around items-center w-3/6 border">
                    <div className="uppercase">
                        <h1>Welcome </h1>
                    </div>
                    <div className="uppercase">
                        <h1>to Smooth</h1>
                    </div>
                    <div className="uppercase">
                        <h1>Operator</h1>
                    </div>
                </div>
                <div className="w-2/6 border">

                </div>
            </nav>
        </>
    );
}
