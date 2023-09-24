import {  useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const View = () => {
    const [donation, setDonation]=useState([])
const { img,title,description,price} = donation
    const data = useLoaderData()
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
  const donationFind = data.find(donet => donet.id === id )
  setDonation(donationFind)
//   console.log(donationFind)
    },[id,data])
   
// console.log(donation)
    
    return (
        <div>
       <div className=" flex justify-center">
        <img className=" lg:h-[70vh] w-auto   " src={img} alt="" />
       </div>
        </div>
    );
};

export default View;