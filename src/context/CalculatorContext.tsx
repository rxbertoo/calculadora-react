import { createContext } from "react";
import type {CalculatorButton} from "../models/CalculatorButton.ts";

interface CalculatorContextType {
    result: string;
    calculate : () => void;
    clearResult: () => void;
    buttons: CalculatorButton[],
    addEvaluate: (value: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(null);