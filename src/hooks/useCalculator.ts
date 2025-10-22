import { useContext } from "react";
import { TimerContext } from "../context/CalculatorContext";




export const useCalculator = () => {
    const context = useContext(TimerContext);

    if (!context) {
        throw new Error("useCalculator must be used within a CalculatorProvider");
    }
    return context;
}