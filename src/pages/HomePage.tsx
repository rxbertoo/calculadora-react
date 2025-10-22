import {useCalculator} from "../components/useCalculator.ts";

const buttons = [
    {text: "1", color: "bg-gray-500" },
    {text: "2", color: "bg-gray-500" },
    {text: "3", color: "bg-gray-500" },
    {text: "+", color: "bg-gray-500" },
    {text: "4", color: "bg-gray-500" },
    {text: "5", color: "bg-gray-500" },
    {text: "6", color: "bg-gray-500" },
    {text: "-", color: "bg-gray-500" },
    {text: "7", color: "bg-gray-500" },
    {text: "8", color: "bg-gray-500" },
    {text: "9", color: "bg-gray-500" },
    {text: "*", color: "bg-gray-500" },
    {text: "C", color: "bg-red-500" },
    {text: "0", color: "bg-gray-500" },
    {text: "=", color: "bg-gray-500" },
    {text: "/", color: "bg-gray-500" },
];

export const HomePage = () => {
    const {evaluate} = useCalculator();

    return (
        <main className="relative flex h-full items-center justify-center">
            <section className="p-8 w-120 h-150 bg-gray-600  rounded-md z-10">
                <div className=" text-white">
                    <div className="flex items-center p-3 text-3xl font-semibold  w-full h-20 bg-gray-200 rounded-md text-black">{evaluate}</div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {
                        buttons.map((button) => (
                            <button
                                name={button.text}
                                className={`w-20 h-20 ${button.color} text-white text-2xl cursor-pointer
                                font-semibold rounded-md duration-200 hover:opacity-60 active:bg-gray-300`}>
                                {button.text}
                            </button>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};