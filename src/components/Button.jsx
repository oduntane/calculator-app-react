
export default function Button({type, children, className, ...props}) {
    let buttonStyle = ''

    switch(type) {
        case 'primary': buttonStyle = 'text-3 bg-gray-200 text-gray-900 shadow-[inset_0_-4px_0_0_#A79E91] hover:bg-white active:bg-white dark:text-navy-750 custom:text-yellow-300 custom:bg-purple-850 custom:shadow-[inset_0_-4px_0_0_#881C9E] custom:hover:bg-purple-700 custom:active:bg-purple-700'; break;
        case 'secondary': buttonStyle = 'text-5 bg-blue-500 text-white shadow-[inset_0_-4px_0_0_#1B6066] hover:bg-blue-400 active:bg-blue-400 dark:bg-navy-700 dark:shadow-[inset_0_-4px_0_0_#414E73] dark:hover:bg-navy-400 dark:active:bg-navy-400 custom:bg-purple-800 custom:shadow-[inset_0_-4px_0_0_#BE15F4] custom:hover:bg-purple-650 custom:active:bg-purple-650'; break;
        case 'tertiary': buttonStyle = 'text-5 bg-orange-700 text-white shadow-[inset_0_-4px_0_0_#873901] hover:bg-orange-400 active:bg-orange-400 dark:bg-red-600 dark:shadow-[inset_0_-4px_0_#93261A] dark:hover:bg-red-400 dark:active:bg-red-400 custom:bg-cyan-500 custom:shadow-[inset_0_-4px_0_0_#6CF9F1] custom:text-black custom:hover:bg-cyan-200 custom:active:bg-cyan-200'; break;

    }

    let cls = `flex justify-center items-center rounded-[0.3125rem] cursor-pointer ${buttonStyle} ${className}`
    return (
        <button className={cls} {...props}>{children}</button>
    )
}