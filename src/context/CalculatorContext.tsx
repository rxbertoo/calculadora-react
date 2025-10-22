import { createContext } from "react";

interface CalculatorContextType {
    result: string;
    evaluate: string;
    setEvaluate: (value: string) => void;
}

export const TimerContext = createContext<CalculatorContextType | null>(null);