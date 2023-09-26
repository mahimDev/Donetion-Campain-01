import { Link } from "react-router-dom";


const Donate = ({ donat }) => {
    const { title, img, category, price, background_color, text_color, category_bg_color } = donat





    return (
        <div>
            <div style={{ backgroundColor: `${background_color}` }} className="relative flex  flex-row rounded-xl bg-clip-border  shadow-md">
                <div className=" relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border ">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div style={{backgroundColor:`${category_bg_color}`,color:`${text_color}`}} className="rounded w-20" >
                        <h6 className="mb-4 text-center block font-sans text-base font-medium uppercase leading-relaxed tracking-normal  antialiased">
                            {category}
                        </h6>
                    </div>
                    <h4  className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{color:`${text_color}`}} className="mb-8 block font-sans text-base  font-bold leading-relaxed  antialiased">

                        ${price}
                    </p>
                    <Link to='/view/'>
                   
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Donate;