function BtnWithIcon(props) {
    return (
        <button type="button"
            className="flex space-x-1 py-2 px-4 flex justify-center items-center bg-white hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-gray-600 hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:text-white focus:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
            {props.children}
        </button>
    )
}

export default BtnWithIcon
