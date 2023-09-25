import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import {useLoaderData, useParams } from "react-router-dom";


const View = () => {
    const [donation, setDonation] = useState([])
    const { img, title, description, price } = donation
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        const donationFind = data.find(donet => donet.id === id)
        setDonation(donationFind)
        
    }, [id, data])

    const handleClickDonait =()=>{
        const addItems = [];
        const getItems = JSON.parse(localStorage.getItem('donation'))
        if(!getItems){
            addItems.push(donation)
             localStorage.setItem('donation',JSON.stringify(addItems))
             
            
        }else{
            addItems.push(...getItems,donation)
            localStorage.setItem('donation',JSON.stringify(addItems))
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              }) 
        }

        // const setItem = JSON.stringify(localStorage.setItem([{name:'mahim'},{name:'mua'}]))
        // console.log(getItem)
      
    }

    return (
        <div className="text-center mb-10 pt-32">
            <div className=" flex justify-center">
                <div className="relative">
                    <img className="  md:h-[50vh] lg:h-[70vh] w-auto rounded-lg  " src={img} alt="" />
                    <div className="bg-[#00000083] absolute  flex justify-start  bottom-0 w-full py-10">
                        <button
                           style={{backgroundColor:`${donation.text_color}`}}
                            onClick={handleClickDonait}
                            className=" ml-10    rounded-lg bg-gray-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Donait $ {price}
                        </button>
                    </div>
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