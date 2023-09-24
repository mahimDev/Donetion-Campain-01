import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Allcarts from "../Components/Allcarts/Allcarts";

const Home = () => {
    const donationData = useLoaderData()
    // console.log(donationData)
    return (
        <div>

            <h1>this is home</h1>
            <Banner></Banner>
            <Allcarts donationData={donationData}></Allcarts>
        </div>
    );
};

export default Home;