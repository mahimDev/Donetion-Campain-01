import {useRef} from "react";
// import { useLoaderData } from "react-router-dom";


const Banner = ({handleSearch}) => {
    const valueData = useRef()

    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU')`, backgroundBlendMode: 'color' }} className=" flex justify-center items-center flex-col h-[80vh] mb-10   bg-no-repeat bg-[#ffffffbd] px-5">
            <h1 className="md:text-6xl text-4xl font-bold text-center py-10">I Grow By Helping People In Need</h1>
            <div className="flex-col md:flex-row  text-center my-5">
                <label>
                    <input
                    ref={valueData}
                        // onChange={}
                        // value={value.length}
                        className="px-5 py-2 md:rounded-l-xl  md:px-7 md:py-3 border-0 font-semibold"
                        type="text"
                        name="search"

                        placeholder="Search here..." />
                    <button
                        onClick={()=>handleSearch(valueData)}
                        className="px-5 py-2 md:rounded-r-xl  hover:bg-red-400 md:px-7 font-semibold md:py-3 border-0 text-white bg-red-500">Search
                    </button>
                </label>

            </div>

        </div>
    );
};

export default Banner;