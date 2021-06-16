import Link from "next/link";
import { ArrowSmUpIcon, ArrowSmDownIcon, ChartBarIcon } from "@heroicons/react/solid";
import BtnWithIcon from "../components/BtnWithIcon";


function MapLocator() {
    return (
        <div className="w-full">
            <div className="transition ease-in duration-200 shadow-none px-4 py-6 w-full bg-gray-100 hover:bg-white hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">
                <div className="flex justify-between text-sm text-gray-700 dark:text-white font-semibold">

                </div>
                <div className="flex justify-between items-end space-x-4 my-6">


                </div>
                <div className="dark:text-white">

                </div>
                <div className="flex justify-center items-center mx-4 mt-4 ">
                    <Link href={"/"}>
                        <a>
                            <BtnWithIcon>
                                <ChartBarIcon className="flex h-4 w-4" />
                                <span className="flex text-xs">More Data</span>
                            </BtnWithIcon>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MapLocator
