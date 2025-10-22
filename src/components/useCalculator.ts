import {useState} from "react";


export const useCalculator = () => {
    const [evaluate, setEvaluate] = useState("");


    return {evaluate, setEvaluate};
}