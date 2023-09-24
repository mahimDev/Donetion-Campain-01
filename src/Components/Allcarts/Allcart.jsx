import { Link } from "react-router-dom";

const Allcart = ({ donation }) => {
    const { id, img, title, category, background_color, text_color, category_bg_color } = donation
    // console.log(text_color)
   
    return (

        <div >
         <Link to={`/view/${id}`}>
         <div  className="relative flex max-w-[24rem] flex-col rounded-xl   bg-clip-border  shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border  shadow-none">
                    <img
                        className="w-full h-40"
                        src={img}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className={`block font-sans text-[${text_color}]  text-2xl font-semibold leading-snug tracking-normal  antialiased`}>
                        {category}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed  antialiased">
                        {title}
                    </p>
                </div>
              
            </div>
         </Link>
        </div>
        
    );
};

export default Allcart;