import { useState } from "react"

import Button from "./components/Button"
import ThemeToggleButton from "./components/ThemeToggleButton"

function App() {

    const [displayValue, setDisplayValue] = useState(["0", "0"])
    const [operation, setOperation] = useState("") // values: "", "+", "-", "*", "/"
    

    const currentValue = operation === "" ? displayValue[0] : displayValue[1]

    const formattedValue = currentValue.split('.').reduce((prev, current, index) => {
        if (index === 0) {
            return Intl.NumberFormat("en", {
                roundingPriority: "morePrecision"
            }).format(current)
        } else {
            return `${prev}.${current}`
        }
    })

    function handleClick(event) {
        const target = event.target.closest('[data-type]')

        if (target !== null) {
            let operand = operation === '' ? 0 : 1
            let newValue = [...displayValue]

            console.log(newValue[operand])

            if (target.dataset.type === 'number') {
                

                if (target.innerText === '.') {
                    if (displayValue[operand].includes('.')) {
                        return
                    } else {
                        newValue[operand] += '.'
                    }
                } else {
                    newValue[operand] === "0" ? newValue[operand] = target.innerText : newValue[operand] += target.innerText
                }
                console.log(newValue)

                setDisplayValue(newValue)

            } else {
                switch (target.innerText) {
                    case 'DEL': {
                        if (newValue[operand].length === 1) {
                            newValue[operand] = "0"
                        } else {
                            newValue[operand] = newValue[operand].slice(0, newValue[operand].length - 1)
                        }
                        break;
                    }
                    case 'RESET': {
                        //
                        newValue = ['0', '0']
                        setOperation('')
                        break;
                    }
                    case "=": {
                        if (operation !== null) {
                            newValue = [`${parseFloat(eval(`parseFloat(newValue[0]) ${operation} parseFloat(newValue[1])`))}`, '0']
                            setOperation('')
                            setDisplayValue(newValue)
                            return
                        }
                        break;
                    }
                    case "-": {
                        if (operand !== "") {
                            setOperation("")
                        }
                        setOperation("-")
                        break;
                    }
                    case "+": {
                        setOperation("+")
                        break;
                    }
                    case "x": {
                        setOperation("*")
                        break;
                    }
                    case "/": {
                        setOperation("/")
                        break;
                    }
                }

                setDisplayValue(newValue)
            }
        }
    }

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
            <div className="w-[87.2%] max-w-[33.75rem] mx-auto p-6 tablet:p-8 rounded-[0.625rem] bg-gray-100 text-right dark:bg-navy-950 custom:bg-purple-900 overflow-x-clip">
                <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                    <span className="text-2 text-gray-900 dark:text-white custom:text-yellow-300">{formattedValue}</span>
                </div>
            </div>
            {/* Buttons */}
            <div className="w-[87.2%] max-w-[33.75rem]  mx-auto bg-gray-300 grid grid-cols-4 grid-flow-row auto-rows-[4rem] gap-4 rounded-[0.625rem] p-4 tablet:p-8 tablet:gap-6 dark:bg-navy-900 custom:bg-purple-900" onClick={handleClick}>
                <Button type="primary" data-type="number">7</Button>
                <Button type="primary" data-type="number">8</Button>
                <Button type="primary" data-type="number">9</Button>
                <Button type="secondary" data-type="action">DEL</Button>
                <Button type="primary" data-type="number">4</Button>
                <Button type="primary" data-type="number">5</Button>
                <Button type="primary" data-type="number">6</Button>
                <Button type="primary" data-type="action">+</Button>
                <Button type="primary" data-type="number">1</Button>
                <Button type="primary" data-type="number">2</Button>
                <Button type="primary" data-type="number">3</Button>
                <Button type="primary" data-type="action">-</Button>
                <Button type="primary" data-type="number">.</Button>
                <Button type="primary" data-type="number">0</Button>
                <Button type="primary" data-type="action">/</Button>
                <Button type="primary" data-type="action">x</Button>
                <Button type="secondary" data-type="action" className="col-span-2">RESET</Button>
                <Button type="tertiary" data-type="action" className="col-span-2">=</Button>
            </div>
        </div>
    )
}

export default App