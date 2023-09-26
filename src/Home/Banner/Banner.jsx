import { useState } from "react";


const Banner = () => {
    const [value, setValue] = useState('')
    const [clickValue, setClickValue] = useState('')
    const handleSearch = (event) => {
        setValue(event.target.value)
    }

    const handleClickValue = () => {
   setClickValue(value)
    }
    console.log(clickValue)

    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU')`, backgroundBlendMode: 'color'}} className=" flex justify-center items-center flex-col h-[80vh] mb-10   bg-no-repeat bg-[#ffffffbd] px-5">
            <h1 className="md:text-6xl text-4xl font-bold text-center py-10">I Grow By Helping People In Need</h1>
            <div className="text-center my-5">
                <label>
                    <input
                        onChange={handleSearch} 
                        value={value}
                        className="px-5 py-2 rounded-l-xl md:px-7 md:py-3 border-0 font-semibold"
                        type="search"
                        name="search"

                        placeholder="Search here..." />
                    <button
                        onClick={handleClickValue}
                        className="px-5 py-2 rounded-r-xl hover:bg-red-400 md:px-7 font-semibold md:py-3 border-0 text-white bg-red-500">Search
                    </button>
                </label>

            </div>

        </div>
    );
};

export default Banner;