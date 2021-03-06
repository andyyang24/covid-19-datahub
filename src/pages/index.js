import React, { useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Main from "../components/Main";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import Nav from "../components/Nav";
import MobileHeader from "../components/MobileHeader";
import HeroCard from "../components/HeroCard";
import InfoCard from "../components/InfoCard";
import BtnWithIcon from "../components/BtnWithIcon";
import SwitchToggle from "../components/SwitchToggle";
import PieChart from "../components/PieChart"
import LineChart from "../components/LineChart"
import DoughnutChart from "../components/DoughnutChart"
import { MapIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/solid";

import {
  numberWithCommas,
  getTotalNumber,
  getCountryList,
  calculatePercentage,
} from "../components/util.js";

export default function Home({ data }) {
  const updateDate = data.Date.split("T")[0];
  const totalConfirmedNumber = data.Global.TotalConfirmed;
  const totalDeathsNumber = data.Global.TotalDeaths;
  const newDeathsNumber = data.Global.NewDeaths;
  const newRecoveredNumber = data.Global.NewRecovered;
  const comfirmedNumberLimit = 5000000;
  const totalPopulationNubmer = 7794798739;
  const totalRecoveredNumber = data.Global.TotalRecovered;
  const countriesList = getCountryList(data, comfirmedNumberLimit);
  const totalCountriesConfirmed = getTotalNumber(countriesList, "TotalConfirmed");
  const otherCountries = {
    "Country": "Other Countries",
    "TotalConfirmed": totalConfirmedNumber - totalCountriesConfirmed,

  };

  //const countriesList2 = JSON.parse(JSON.stringify(countriesList));
  let countriesList2 = countriesList.slice();
  countriesList2.push(otherCountries);
  const data1Labels = countriesList2.map((country) => {
    return country.Country;
  });
  const dataTCNumbers = countriesList2.map((country) => {
    return country.TotalConfirmed;
  });

  const [isActive, setActive] = useState("false");
  const mobileNavToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <>
      <Head>
        <title>COVID-19 Data Hub</title>
        <meta name="description" content="COVID-19 DATA HUB - DATA OVERVIEWS, DATA CHATS" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Main>
        <LeftSection displayed={isActive}>
          <Nav navTitle="Links" />
        </LeftSection>
        <RightSection>
          <MobileHeader toggleClick={mobileNavToggle} />
          <div name="overviews" className="overflow-auto h-screen pt-0 pb-24 px-4 md:px-6">

            <h1 className="font-libre-baskerville block text-4xl md:text-5xl mt-10 mb-10 mx-5em font-bold  text-center text-gray-800 dark:text-white">
              COVID-19 <br /> <ReactTypingEffect
                text={["Data Hub", "Data Charts", "Mobile Center", "Dashboard"]}
                speed="100"
                eraseSpeed="50"
                eraseDelay="4000"
                typingDelay="10"
              />
              <br />
              <MapIcon className="mt-2 mx-2 inline-block h-14 w-14 text-purple-500" />
              <span className="text-xs">V.0.2.1</span>
            </h1>

            <div className="flex flex-col justify-between space-y-4 xl:flex-row items-center xl:space-x-4 xl:space-y-0 my-5">
              <div className="xl:w-1/2 transition ease-in duration-200 shadow-sm px-4 py-6 w-full bg-white bg-gradient-to-br from-white to-gray-200 hover:bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-red-50 hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">

                <h2 className="font-libre-baskerville block font-semibold text-xl text-center mt-4">
                  Overview of the World <GlobeAltIcon className="-mt-2 mx-0 inline-block h-8 w-8 text-black" />
                </h2>
                <p className="text-sm text-gray-600 text-center mt-2 mb-5">
                  Lastest Update: {updateDate}
                </p>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <PieChart
                    data1Labels={data1Labels}
                    data1Numbers={dataTCNumbers}
                    line1Label="Recovered"
                    line1Color="76, 212, 185"
                  />
                  <div className="flex justify-center items-center mx-4 mt-4 ">
                    <Link href="/australia">
                      <a><BtnWithIcon>
                        <ChartBarIcon className="flex h-4 w-4" />
                        <span className="flex text-xs">More Data</span>
                      </BtnWithIcon>
                      </a></Link>
                  </div>
                </div>
              </div>

              <div className="xl:w-1/2 transition ease-in duration-200 shadow-sm px-4 py-6 w-full bg-white bg-gradient-to-br from-white to-gray-200 hover:bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-red-50 hover:shadow-2xl dark:bg-gray-700 relative rounded-xl">

                <h2 className="font-libre-baskerville block font-semibold text-xl text-center mt-4">
                  Overview of Australia <img src="https://flagcdn.com/au.svg" className="-mt-2 mx-1  inline-block w-12 h-auto shadow-lg" alt="Australia" />
                </h2>
                <p className="text-sm text-gray-600 text-center mt-2 mb-5">
                  Lastest Update: {updateDate}
                </p>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <DoughnutChart
                    data1Labels={
                      ["Victoria", "New South Wales", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"]
                    }
                    data1Numbers={
                      [20676, 5626, 1655, 1020, 776, 234, 175, 124]
                    }
                    line1Label="Total Cases"
                    line1Color="76, 212, 185"
                  />
                  <div className="flex justify-center items-center mx-4 mt-4 ">
                    <Link href="/australia">
                      <a><BtnWithIcon>
                        <ChartBarIcon className="flex h-4 w-4" />
                        <span className="flex text-xs">More Data</span>
                      </BtnWithIcon>
                      </a></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex items-center mb-5">
              <HeroCard
                card1Title="Global Total Confirmed Cases"
                card1Number={numberWithCommas(totalConfirmedNumber)}
                card1Number2={calculatePercentage(
                  totalConfirmedNumber,
                  totalPopulationNubmer
                )}
                card2Title="Total Deaths"
                card2Number={numberWithCommas(totalDeathsNumber)}
                card2Number2={calculatePercentage(
                  totalDeathsNumber,
                  totalConfirmedNumber
                )}
                card3Title="New Deaths"
                card3Number={numberWithCommas(newDeathsNumber)}
                card4Title="Total Recovered"
                card4Number={numberWithCommas(totalRecoveredNumber)}
                card4Number2={calculatePercentage(
                  totalRecoveredNumber,
                  totalConfirmedNumber
                )}
                card5Title="Fully Vaccinated"
                card5Number="748,099,346"
              />
            </div>

            <h2 className="font-libre-baskerville block font-semibold text-lg text-center mt-10">
              <span className="block p-2 text-3xl">
                Top {countriesList.length} Countries
              </span>
              with Total Confirmed Cases over
              <span className="block p-2 text-2xl">
                {numberWithCommas(comfirmedNumberLimit)}
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {countriesList.map((country, index = 0) => {
                index += 1;
                return (
                  <InfoCard key={index} keyNumber={index} countryInfo={country} />
                )
              })}
            </div>
            <div className="text-center">
              <h2 className="font-libre-baskerville block font-semibold text-xl text-center mt-20 mb-5">
                Resources
              </h2>
              <ul>
                <li>
                  <Link href="https://api.covid19api.com/">
                    <a>https://api.covid19api.com/</a>
                  </Link>
                </li>
                <li>
                  <Link href=" https://news.google.com/covid19/map">
                    <a>https://news.google.com/covid19/map</a>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </RightSection>
      </Main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
