import Head from "next/head";
import Link from "next/link";
import Main from "../components/Main";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import Nav from "../components/Nav";
import MobileHeader from "../components/MobileHeader";
import BtnWithIcon from "../components/BtnWithIcon";
import MapLocator from "../components/MapLocator";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import { every_nth } from "./util";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

export default function Slug({ data, durationData }) {
    //console.log(durationData);
    const updateDate = data.Date.split("T")[0];
    const countryName = data.Country;
    const countryCode = data.CountryCode;
    const totalComfirmedNumber = data.TotalConfirmed;
    const totalDeathsNumber = data.TotalDeaths;
    const newDeathsNumber = data.NewDeaths;
    const newRecoveredNumber = data.NewRecovered;
    const comfirmedNumberLimit = 3000000;
    const totalPopulationNubmer = 7794798739;
    const totalRecoveredNumber = data.TotalRecovered;

    const data1Labels = durationData.map((duration) => {
        return duration.Date.split("T")[0];
    });
    const dataConfirmedNumbers = durationData.map((duration) => {
        return duration.Confirmed;
    });

    const dataDeathsNumbers = durationData.map((duration) => {
        return duration.Deaths;
    });

    const dataRecoveredNumbers = durationData.map((duration) => {
        return duration.Recovered;
    });

    const dataActiveNumbers = durationData.map((duration) => {
        return duration.Active;
    });

    return (
        <>
            <Head>
                <title>{data.Country}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href={"https://flagcdn.com/" + countryCode.toLowerCase() + ".svg"} type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
            </Head>
            <Main>
                <LeftSection>
                    <Nav navTitle="Links" />
                </LeftSection>
                <RightSection>
                    <MobileHeader />
                    <div className="overflow-auto h-screen pt-0 pb-24 px-4 md:px-6">
                        <div className="flex flex-col items-center my-5">
                            <img
                                src={"https://flagcdn.com/" + countryCode.toLowerCase() + ".svg"}
                                className="flex w-40 h-auto shadow-lg"
                                alt={countryName} />
                            <h1 className="font-libre-baskerville block text-4xl md:text-5xl mt-5 mb-5 mx-5em font-bold text-center text-gray-800 dark:text-white">
                                COVID-19 Data of {countryName}
                            </h1>
                            <p className="text-sm text-gray-600 text-center mb-4">
                                Lastest Update: {updateDate}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4 2xl:flex-row items-center 2xl:space-x-4 2xl:space-y-0  my-5">

                            {/* <div className="">
                                <MapLocator />
                            </div> */}

                            <div className="transition ease-in duration-200 shadow-none px-4 py-6 w-full bg-white bg-gradient-to-br from-white to-gray-50 hover:bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-red-50 hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">

                                <h2 className="font-libre-baskerville block font-semibold text-xl text-center mt-4">
                                    Confirmed & Active Cases
                                </h2>
                                <p className="text-sm text-gray-600 text-center mt-2 mb-5">
                                    {countryName}, 2020-2021
                                </p>
                                <div className="bg-white rounded-xl p-5">
                                    <LineChart
                                        data1Labels={data1Labels}
                                        data1Numbers={dataConfirmedNumbers}
                                        line1Label="Confirmed"
                                        line1Color="245, 158, 11"

                                        data2Labels={data1Labels}
                                        data2Numbers={dataActiveNumbers}
                                        line2Label="Active"
                                        line2Color="252, 78, 3"
                                    />
                                </div>
                            </div>

                            <div className="transition ease-in duration-200 shadow-none px-4 py-6 w-full bg-white bg-gradient-to-br from-white to-gray-50 hover:bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-red-50 hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">

                                <h2 className="font-libre-baskerville block font-semibold text-xl text-center mt-4">
                                    Deaths & Recovered Cases
                                </h2>
                                <p className="text-sm text-gray-600 text-center mt-2 mb-5">
                                    {countryName}, 2020-2021
                                </p>
                                <div className="bg-white rounded-xl p-5">
                                    <BarChart
                                        data2Labels={data1Labels}
                                        data2Numbers={dataDeathsNumbers}
                                        line2Label="Deaths"
                                        line2Color="255, 99, 132"

                                        data1Labels={data1Labels}
                                        data1Numbers={dataRecoveredNumbers}
                                        line1Label="Recovered"
                                        line1Color="76, 212, 185"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col items-center my-5">
                            <Link href="/">
                                <a>
                                    <BtnWithIcon>
                                        <ArrowCircleLeftIcon className="flex h-4 w-4" />
                                        <span className="flex text-xs">BACK</span>
                                    </BtnWithIcon>
                                </a>
                            </Link>
                        </div>
                    </div>
                </RightSection>
            </Main>
        </ >
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.covid19api.com/summary')
    const data = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = data.Countries.map((country) => ({
        params: { slug: country.Slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();
    const countrySelected = await data.Countries.filter(country => country.Slug == params.slug);
    const thisDate = data.Date.split("T")[0];
    //let previousWeekDate = new Date(data.Date.split("T")[0]);
    //previousWeekDate.setDate(previousWeekDate.getDate() - 7);
    //const previousDate = JSON.stringify(previousWeekDate).split('T')[0].replace('"', '');
    //const res1 = await fetch(`https://api.covid19api.com/country/${params.slug}/status/confirmed?from=${previousDate}T00:00:00Z&to=${thisDate}T00:00:00Z`);

    const res1 = await fetch(`https://api.covid19api.com/total/country/${params.slug}`);
    const duration = await res1.json();
    let dr = duration.slice();
    dr = dr.reverse();
    let td = dr[0];
    let fd = duration[0];
    let durationLast = every_nth(duration, 92);
    durationLast.push(td);
    durationLast.unshift(fd);
    return {
        props: { data: countrySelected[0], durationData: durationLast }
    }
}