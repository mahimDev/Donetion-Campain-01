import Allcart from "./Allcart";


const Allcarts = ({ donationValue }) => {
    // console.log(donationData)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
                {
                    donationValue.map(donation => <Allcart key={donation.id} donation={donation}></Allcart>)
                }
            </div>
        </div>
    );
};

export default Allcarts;