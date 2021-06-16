import Link from "next/link";
import { ArrowSmUpIcon, ArrowSmDownIcon, ChartBarIcon } from "@heroicons/react/solid";
import {
    numberWithCommas,
    getTotalNumber,
    getCountryList,
    calculatePercentage,
} from "../pages/util.js";
import BtnWithIcon from "../components/BtnWithIcon";

export default function InfoCard(props) {
    const keyNubmer = props.keyNumber;
    const countryName = props.countryInfo.Country;
    const conntryCode = props.countryInfo.CountryCode;
    const conntrySlug = props.countryInfo.Slug;
    const newConfirmed = props.countryInfo.NewConfirmed;
    const totalConfirmed = props.countryInfo.TotalConfirmed;
    const newDeaths = props.countryInfo.NewDeaths;
    const totalDeaths = props.countryInfo.TotalDeaths;
    const newRecovered = props.countryInfo.NewRecovered;
    const totalRecovered = props.countryInfo.TotalRecovered;

    return (
        <div className="w-full">
            <div className="transition ease-in duration-200 shadow-sm px-4 py-6 w-full bg-white bg-gradient-to-br from-white to-gray-100 hover:bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-red-50 hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">
                <div className="flex justify-between text-sm text-gray-700 dark:text-white font-semibold">
                    <div className="inline-block">{countryName}</div> <div className="inline-block">No.{keyNubmer}</div>
                </div>
                <div className="flex justify-between items-end space-x-4 my-6">
                    <p className="text-4xl text-black dark:text-white font-bold">
                        {conntryCode}
                        <span className="text-red-500 text-xl font-bold items-center">
                            {+newConfirmed > 0 ? (
                                <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500" />
                            ) : (
                                <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500 opacity-0" />
                            )}
                            {calculatePercentage(newConfirmed, totalConfirmed - newConfirmed)}%
                        </span>
                    </p>

                    <img
                        src={"https://flagcdn.com/" + conntryCode.toLowerCase() + ".svg"}
                        className="w-14 h-auto shadow-lg"
                        alt={countryName} />

                </div>
                <div className="dark:text-white">
                    <div className="flex items-center pb-2 mb-2 text-sm space-x-2 md:space-x-4 justify-between border-b border-gray-200">
                        <p>New Confirmed</p>
                        <div className="flex items-center text-xs">
                            {numberWithCommas(newConfirmed)}
                            <span className="flex items-center">
                                {+newConfirmed > 0 ? (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500" />
                                ) : (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500 opacity-0" />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 pb-2 text-sm space-x-2 md:space-x-4 justify-between border-b border-gray-200">
                        <p>New Deaths</p>
                        <div className="flex items-end text-xs">
                            {numberWithCommas(newDeaths)}
                            <span className="flex items-center">
                                {newDeaths > 0 ? (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500" />
                                ) : (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500 opacity-0" />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 pb-2 text-sm space-x-2 md:space-x-4 justify-between border-b border-gray-200">
                        <p>New Recovered</p>
                        <div className="flex items-end text-xs">
                            {numberWithCommas(newRecovered)}
                            <span className="flex items-center">
                                {newRecovered > 0 ? (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-green-500" />
                                ) : (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500 opacity-0" />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm space-x-2 md:space-x-4 justify-between">
                        <p>Total Confirmed</p>
                        <div className="flex items-end text-xs">
                            {numberWithCommas(totalConfirmed)}
                            <span className="flex items-center">
                                {totalConfirmed > 0 ? (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500" />
                                ) : (
                                    <ArrowSmUpIcon className="-mt-1 inline-block h-5 w-5 text-red-500 opacity-0" />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mx-4 mt-4 ">
                    <Link href={"/" + conntrySlug.toLowerCase()}>
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
    );
}
