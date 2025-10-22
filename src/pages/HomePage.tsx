import {useCalculator} from "../components/useCalculator.ts";

const buttons = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "x",
    "C", "0", "=", "/"
];

export const HomePage = () => {
    const {evaluate} = useCalculator();

    return (
        <main className="relative flex h-full items-center justify-center">


            <div className="absolute w-0 h-0 shadow-[0_0_200px_300px_rgba(255,255,255,0.25)] rounded-full  bg-red-300" />

            <section className="p-8 w-120 h-150 bg-gray-600 shadow-[-10px_10px_0px_rgba(255,255,255,0.4)] rounded-md z-10">
                <div className=" text-white">
                    <div className="flex items-center p-3 text-3xl font-semibold  w-full h-20 bg-gray-200 rounded-md text-black">{evaluate}</div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {
                        buttons.map((text) => (
                            <button
                                name={text}
                                className={`w-20 h-20 ${text == 'C' ? "bg-red-500" : "bg-gray-500"} text-white text-2xl cursor-pointer
                                font-semibold rounded-md duration-200 hover:opacity-60 active:bg-gray-300`}>
                                {text}
                            </button>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};