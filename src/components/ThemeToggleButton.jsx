import { useEffect, useState } from "react"

function ThemeToggleButton() {

    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'light') {
            document.body.className = ""
        } else if (theme === 'dark') {
            document.body.className = "dark"
        } else {
            document.body.className = "custom"
        }
    }, [theme])

    const position = theme === 'dark' ? 'justify-start' : theme === 'light' ? 'justify-center' : 'justify-end'


    function handleToggleEvent(event) {
        let container = event.target.closest('[data-toggle-container]')

        const containerBoundingRect = container.getBoundingClientRect()

        console.log(containerBoundingRect)

        let containerStyle = getComputedStyle(container)

        let paddingLeft = containerStyle.getPropertyValue('padding-left')
        let paddingRight = containerStyle.getPropertyValue('padding-right')

        paddingLeft = parseInt(paddingLeft.slice(0, paddingLeft.length-2))
        paddingRight = parseInt(paddingRight.slice(0, paddingRight.length-2))

        let leftBound = containerBoundingRect.left + paddingLeft
        let rightBound = containerBoundingRect.right - paddingRight

        let width = rightBound - leftBound

        let clickPosition = {x: event.clientX}

        let offset = clickPosition.x - leftBound


        let position = offset / width

        if (position < (1/3)) {
            setTheme('dark')
        } else if (position < (2/3) && position > (1/3)) {
            setTheme('light')
        } else {
            setTheme('custom')
        }
        

    }
    
    return (
        <div className="w-[4.25rem] flex flex-col gap-2">
            <div className="flex justify-around text-6 text-gray-900 dark:text-white custom:text-yellow-300">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className={`w-full h-[1.625rem] bg-gray-300 rounded-[0.8125rem] p-[0.3125rem] flex ${position} dark:bg-navy-900 custom:bg-purple-900`} data-toggle-container onClick={handleToggleEvent}>
                <div tabIndex="0" className="w-4 aspect-square cursor-pointer bg-orange-700 rounded-full hover:bg-orange-400 active:bg-orange-400 dark:bg-red-600 dark:hover:bg-red-400 dark:active:bg-red-400 custom:bg-cyan-500 custom:hover:bg-cyan-200 custom:active:bg-cyan-200">

                </div>
            </div>
        </div>
    )
}

export default ThemeToggleButton
