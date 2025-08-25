
function ThemeToggleButton() {
    return (
        <div className="w-[4.25rem] flex flex-col gap-2">
            <div className="flex justify-around text-6 text-gray-900">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className="w-full h-[1.625rem] bg-gray-300 rounded-[0.8125rem] p-[0.3125rem]">
                <div tabIndex="0" className="w-4 aspect-square cursor-pointer bg-orange-700 rounded-full hover:bg-orange-400 active:bg-orange-400">

                </div>
            </div>
        </div>
    )
}

export default ThemeToggleButton