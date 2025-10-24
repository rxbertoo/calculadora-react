import {type ReactNode, useState} from "react";
import {CalculatorContext} from "../context/CalculatorContext.tsx";
import type {CalculatorButton} from "../models/CalculatorButton.ts";

interface CalculatorProviderProps {
    children: ReactNode;
}

const buttons: CalculatorButton[] = [
    {text: "1", color: "bg-gray-700" },
    {text: "2", color: "bg-gray-700" },
    {text: "3", color: "bg-gray-700" },
    {text: "+", color: "bg-gray-500" },
    {text: "4", color: "bg-gray-700" },
    {text: "5", color: "bg-gray-700" },
    {text: "6", color: "bg-gray-700" },
    {text: "-", color: "bg-gray-500" },
    {text: "7", color: "bg-gray-700" },
    {text: "8", color: "bg-gray-700" },
    {text: "9", color: "bg-gray-700" },
    {text: "*", display: "x",  color: "bg-gray-500" },
    {text: "C", color: "bg-red-500" },
    {text: "0", color: "bg-gray-700" },
    {text: "=", color: "bg-gray-500" },
    {text: "/", color: "bg-gray-500" },
];

export const CalculatorProvider = ({children}: CalculatorProviderProps) => {
    const [result, setResult] = useState("0");

    // Function to add value to the current evaluation string
    const addEvaluate = (value: string) => {
        if (value === "C") {
            clearResult();
            return;
        }

        if (value === "=") {
            calculate();
            return;
        }
        setResult((prev) => (prev === "0" ? value : prev + value));
    }

    // Function to clear the current evaluation string
    const clearResult = () => {
        setResult("0");
    }

    // Function to calculate the result of the current evaluation string
    const calculate = () => {
        try {
            const evalResult = eval(result);
            setResult(evalResult.toString());

        } catch (error) {
            setResult("Error ");
        }
    }

    return (
        <CalculatorContext.Provider value={{result, calculate, addEvaluate, clearResult, buttons}}>
            {children}
        </CalculatorContext.Provider>
    );
};