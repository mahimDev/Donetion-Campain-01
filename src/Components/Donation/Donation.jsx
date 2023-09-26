import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [ishShow, setIsShow] = useState(false)

    console.log(ishShow)

    useEffect(() => {
        const addItems = JSON.parse(localStorage.getItem('donation'))
        setDonation(addItems)

    }, [])


    // console.log(donation)

    return (
        <div>
            <div className="grid md:grid-cols-2 pt-20 gap-5 mx-5">
                {
                    donation.map(donat => <Donate key={donat} donat={donat}></Donate>)
                }

            </div>
            <div className="text-center my-14">
                <button
                    onClick={() => setIsShow(!ishShow)}
                    className="text-xl font-bold px-4 py-3 bg-red-300 rounded-md">See All</button>
            </div>
        </div>
    );
};

export default Donation;