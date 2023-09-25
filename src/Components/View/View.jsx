import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const View = () => {
    const [donation, setDonation] = useState([])
    const { img, title, description, price } = donation
    const data = useLoaderData()
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const donationFind = data.find(donet => donet.id === id)
        setDonation(donationFind)
        //   console.log(donationFind)
    }, [id, data])

    // console.log(donation)

    return (
        <div className="text-center mb-10">
            <div className=" flex justify-center">
                <div className="relative">
                    <img className="  md:h-[50vh] lg:h-[70vh] w-auto rounded-lg  " src={img} alt="" />
                    <button
                        className=" md:absolute lg:left-20 md:left-16 md:top-52 lg:top-80 middle none center rounded-lg bg-gray-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Donait $ {price}
                    </button>
                </div>
            </div>
            <div >
                <h1 className="text-4xl font-bold my-5">{title}</h1>
                <p className="text-base "> {description}</p>
            </div>
        </div>
    );
};

export default View;