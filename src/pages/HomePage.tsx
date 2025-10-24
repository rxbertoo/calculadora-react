import {useCalculator} from "../hooks/useCalculator.ts";



export const HomePage = () => {
    const {addEvaluate, result, buttons} = useCalculator();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addEvaluate(e.currentTarget.name);
    }

    return (
        <main className="relative flex h-full items-center justify-center">
            <section className="p-8 w-120 h-150 bg-gray-600  rounded-xl z-10">
                <div className=" text-white">
                    <div className="flex items-center p-3 text-3xl font-semibold  w-full h-20 bg-gray-200 rounded-md text-black">{result}</div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {
                        buttons.map((button) => (
                            <button
                                name={button.text}
                                onClick={handleClick}
                                className={`w-20 h-20 ${button.color} text-white text-2xl cursor-pointer
                                font-semibold rounded-md duration-200 hover:opacity-60 active:bg-gray-300`}>
                                {button.display == null ? button.text : button.display}
                            </button>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};