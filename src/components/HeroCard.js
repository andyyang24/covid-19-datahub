import {
    TrendingUpIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    ArrowSmUpIcon,
    ArrowSmDownIcon
} from "@heroicons/react/solid";

export default function HeroCard(props) {
    return (
        <div className="flex flex-col w-full space-y-4 2xl:flex 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
            <div className="flex w-full 2xl:w-4/12">
                <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden rounded-xl">
                    <a href="#" className="w-full h-full block">
                        <div className="flex items-center justify-between px-4 py-6 space-x-4">
                            <div className="flex items-center">
                                <span className="rounded-full relative p-2 bg-yellow-500">
                                    <TrendingUpIcon className="h-5 w-5 text-white" />
                                </span>
                                <p className="text-md text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                                    {props.card1Title}
                                </p>
                            </div>
                            <div className="mt-2 md:mt-0 text-black dark:text-white font-bold text-xl 2xl:text-2xl">
                                {props.card1Number}
                                <span className="text-xs text-gray-400"></span>
                            </div>
                        </div>
                        <div className="w-full h-6 bg-gray-100">
                            <div className="pt-1 w-full h-full text-center text-xs text-white bg-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-700">
                                ≈<strong>{props.card1Number2}% </strong>of Total Population
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-4 xl:flex-row xl:w-full xl:space-y-0 xl:space-x-4 2xl:w-8/12">
                <div className="flex items-center w-full xl:w-6/12 space-x-4">
                    <div className="w-1/2">
                        <div className="shadow-lg px-4 py-6 w-full bg-white bg-red-700 bg-gradient-to-br from-red-700 to-yellow-100 dark:bg-gray-700 relative rounded-xl">
                            <p className="text-md 2xl:text-lg text-white dark:text-white font-bold">
                                {props.card2Number}
                            </p>
                            <p className="text-white text-xs">
                                {props.card2Title} (≈
                                <strong className="text-xs">{props.card2Number2}%</strong>)
                            </p>
                            <span className="rounded-full absolute p-1 bg-white top-2 right-4">
                                <UserCircleIcon className="h-5 w-5 text-red-700" />
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative rounded-xl">
                            <p className="text-md 2xl:text-lg text-black dark:text-white font-bold">
                                {props.card3Number}
                                <ArrowSmUpIcon className="-mt-1 inline-block h-6 w-6 text-red-500" />
                            </p>
                            <p className="text-gray-400 text-xs">{props.card3Title}</p>
                            <span className="rounded-full absolute p-1 bg-red-700 top-2 right-4">
                                <UserCircleIcon className="h-5 w-5 text-white" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full xl:w-6/12 space-x-4">
                    <div className="w-1/2">
                        <div className="shadow-lg px-4 py-6 w-full bg-white bg-green-600 bg-gradient-to-br from-blue-700 to-green-400 dark:bg-gray-700 relative rounded-xl">
                            <p className="text-md 2xl:text-lg text-white dark:text-white font-bold">
                                {props.card4Number}
                            </p>
                            <p className="text-white text-xs">
                                {props.card4Title} (≈
                                <strong className="text-xs">{props.card4Number2}%</strong>)
                            </p>
                            <span className="rounded-full absolute p-1 bg-white top-2 right-4">
                                <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative rounded-xl">
                            <p className="text-md 2xl:text-lg text-black dark:text-white font-bold">
                                {props.card5Number}
                                <ArrowSmUpIcon className="-mt-1 inline-block h-6 w-6 text-green-500" />
                            </p>
                            <p className="text-gray-400 text-xs">{props.card5Title}</p>
                            <span className="rounded-full absolute p-1 bg-green-600 top-2 right-4">
                                <ShieldCheckIcon className="h-5 w-5 text-white" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
