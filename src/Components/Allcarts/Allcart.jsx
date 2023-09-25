import { Link } from "react-router-dom";

const Allcart = ({ donation }) => {
    const { id, img, title, category, background_color, text_color, category_bg_color } = donation
    // console.log(text_color)
   
    return (

        <div >
         <Link to={`/view/${id}`}>
         <div style={{background : `${background_color}`}} className="relative flex max-w-[24rem] flex-col rounded-xl   bg-clip-border  shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border  shadow-none">
                    <img
                        className="w-full h-40"
                        src={img}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                   <div style={{backgroundColor:`${category_bg_color}`,color:`${text_color}`}} className="w-20 rounded">
                   <h4  className="text-center px-2 py-1 rounded-md block font-sans  text-lg font-medium leading-snug tracking-normal  antialiased">
                        {category}
                    </h4>
                   </div>
                    <p style={{color:`${text_color}`}} className="mt-3 block font-sans text-xl font-normal leading-relaxed  antialiased">
                        {title}
                    </p>
                </div>
              
            </div>
         </Link>
        </div>
        
    );
};

export default Allcart;