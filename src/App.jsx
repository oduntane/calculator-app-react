import Button from "./components/Button"
import ThemeToggleButton from "./components/ThemeToggleButton"

function App() {
    return (
        <div role="application" className="font-serif font-bold bg-gray-200 min-h-dvh py-8 flex flex-col gap-6 justify-center dark:bg-navy-850 custom:bg-purple-950">
            <h1 className="sr-only">Calculator App</h1>
            {/* Header */}
            <div className="w-[87.2%] max-w-[33.75rem] mx-auto flex justify-between">
                <span role="presentation" className="text-3 text-gray-900 self-end dark:text-white custom:text-yellow-300">calc</span>
                <div className="inline-flex gap-4 items-end">
                    <span className="text-6 text-gray-900 pb-2 dark:text-white custom:text-yellow-300">THEME</span>
                    <ThemeToggleButton/>
                </div>
            </div>
            {/* Display */}
            <div className="w-[87.2%] max-w-[33.75rem] mx-auto p-6 tablet:p-8 rounded-[0.625rem] bg-gray-100 text-right dark:bg-navy-950 custom:bg-purple-900">
                <span className="text-2 text-gray-900 dark:text-white custom:text-yellow-300">399,981</span>
            </div>
            {/* Buttons */}
            <div className="w-[87.2%] max-w-[33.75rem]  mx-auto bg-gray-300 grid grid-cols-4 grid-flow-row auto-rows-[4rem] gap-4 rounded-[0.625rem] p-4 tablet:p-8 tablet:gap-6 dark:bg-navy-900 custom:bg-purple-900">
                <Button type="primary">7</Button>
                <Button type="primary">8</Button>
                <Button type="primary">9</Button>
                <Button type="secondary">DEL</Button>
                <Button type="primary">4</Button>
                <Button type="primary">5</Button>
                <Button type="primary">6</Button>
                <Button type="primary">+</Button>
                <Button type="primary">1</Button>
                <Button type="primary">2</Button>
                <Button type="primary">3</Button>
                <Button type="primary">-</Button>
                <Button type="primary">.</Button>
                <Button type="primary">0</Button>
                <Button type="primary">/</Button>
                <Button type="primary">x</Button>
                <Button type="secondary" className="col-span-2">RESET</Button>
                <Button type="tertiary" className="col-span-2">=</Button>
            </div>
        </div>
    )
}

export default App