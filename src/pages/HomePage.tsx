import {useCalculator} from "../hooks/useCalculator.ts";



export const HomePage = () => {
    const {addEvaluate, result, buttons} = useCalculator();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addEvaluate(e.currentTarget.name);
    }

    return (
        <main className="relative flex h-full items-center justify-center">
            <section className="p-8 w-120 h-150 bg-gradient-to-b from-gray-700 to-gray-800  gradient drop-shadow-2xl  rounded-xl z-10">
                <div className=" text-white overflow-hidden ">
                    <div className="flex items-center p-3 text-5xl font-medium  w-full h-20 whitespace-nowrap
                    bg-gray-200  rounded-md justify-end  text-gray-800 border-2  border-gray-500 ">{result}</div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {
                        buttons.map((button) => (
                            <button
                                name={button.text}
                                onClick={handleClick}
                                className={`w-21 h-21 ${button.color} text-white text-3xl cursor-pointer 
                                font-medium rounded-full duration-100 hover:scale-105  bg-gray- outline-gray-500 outline-2 active:scale-98 active:opacity-70`}>
                                {button.text}
                            </button>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};