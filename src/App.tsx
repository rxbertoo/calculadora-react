import {HomePage} from "./pages/HomePage.tsx";
import {CalculatorProvider} from "./providers/CalculatorProvider.tsx";

function App() {
    return (
        <CalculatorProvider>
            <main className="w-full h-screen bg-gray-800">
                <HomePage/>
            </main>
        </CalculatorProvider>
    )
}

export default App
