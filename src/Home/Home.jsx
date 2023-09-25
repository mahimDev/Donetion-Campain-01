import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Allcarts from "../Components/Allcarts/Allcarts";
// import { useEffect, useState } from "react";

const Home = () => {
    // const [donationValue , setDonationValue]=useState([])
    const donationValue = useLoaderData()
    // useEffect(()=>{
    // },[])
    // setDonationValue(donationData)
    // console.log(donationData)
    return (
        <div>

            <Banner></Banner>
            <Allcarts donationValue={donationValue}></Allcarts>
        </div>
    );
};

export default Home;