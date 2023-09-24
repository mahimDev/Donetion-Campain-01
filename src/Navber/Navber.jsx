import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="flex items-center justify-between px-10 py-3">
            <div>
                <img className="w-40" src="https://i.ibb.co/RN23rLP/Logo.png" alt="" />
            </div>
            <div>
                <ul className="flex gap-4 font-medium ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active text-red-500 underline" : ""
                            }
                        >
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active  text-red-500 underline" : ""
                            }
                        >
                           Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active  text-red-500 underline" : ""
                            }
                        >
                           Statistics
                        </NavLink>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Navber;