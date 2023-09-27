import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Allcarts from "../Components/Allcarts/Allcarts";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

const Home = () => {
    // const [donationValue , setDonationValue]=useState([])
    // const donationValue = useLoaderData()
    // useEffect(()=>{
    // },[])
    // setDonationValue(donationData)
    // console.log(donationData)

    const [value, setValue] = useState([])
    const [clickValue, setClickValue] = useState([])
    // const [loaderValueData, setLoaderValueData] = useState([])
    const loadData = useLoaderData()

    console.log(loadData)
    useEffect(() => {
               setClickValue(loadData)
               setValue(loadData)
        
                }, [loadData])
        //     }, [setValue])

//     useEffect(() => {
//         fetch('Data.json')
//             .then(res => res.json())
//             .then(data => {
//          setValue(data)
//          setClickValue(data)
//             })

     
//     }, [setValue])
// console.log(setValue)
    const handleSearch = (valueData) => {
        const searchValue = valueData.current.value
        if (searchValue.length > 0) {
            const searchFilter = value.filter(card => card.category.toLowerCase() === searchValue.toLowerCase());
            
            setClickValue(searchFilter)
            
        }
        
        
     
       
    }

    // console.log(clickValue)
   
    return (
        <div>

            <Banner handleSearch={handleSearch} ></Banner>
            <Allcarts donationValue={clickValue} ></Allcarts>
        </div>
    );
};

export default Home;