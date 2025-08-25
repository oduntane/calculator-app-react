
export default function Button({type, children, className}) {
    let buttonStyle = ''

    switch(type) {
        case 'primary': buttonStyle = 'text-3 bg-gray-200 text-gray-900 shadow-[inset_0_-4px_0_0_#A79E91] hover:bg-white active:bg-white'; break;
        case 'secondary': buttonStyle = 'text-5 bg-blue-500 text-white shadow-[inset_0_-4px_0_0_#1B6066] hover:bg-blue-400 active:bg-blue-400'; break;
        case 'tertiary': buttonStyle = 'text-5 bg-orange-700 text-white shadow-[inset_0_-4px_0_0_#873901] hover:bg-orange-400 active:bg-orange-400'; break;

    }

    let cls = `flex justify-center items-center rounded-[0.3125rem] cursor-pointer ${buttonStyle} ${className}`
    return (
        <button className={cls}>{children}</button>
    )
}