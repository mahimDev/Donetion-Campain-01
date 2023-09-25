

const Banner = () => {
    return (
        <div style={{backgroundImage:`url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU')`,backgroundBlendMode:'color'}} className=" flex justify-center items-center flex-col h-[80vh] mb-10  bg-no-repeat bg-[#ffffffbd] px-5">
            <h1 className="text-6xl font-bold text-center py-10">I Grow By Helping People In Need</h1>
            <div className="text-center my-5">
            <input className="px-5 py-2 rounded-lg md:px-7 md:py-3 border-0" type="search" name="search" id="search" placeholder="Search here..."  />
            </div>
            
        </div>
    );
};

export default Banner;