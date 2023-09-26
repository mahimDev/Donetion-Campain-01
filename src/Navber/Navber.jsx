import { NavLink } from "react-router-dom";
import { FaAlignRight } from 'react-icons/fa';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const Navber = () => {
    return (
        <div className="absolute w-full">
            <div className="flex items-center justify-between px-10 py-3  ">
                <div>
                    <img className="w-40" src="https://i.ibb.co/RN23rLP/Logo.png" alt="" />
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-5 font-semibold ">
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
                <div className="text-left bg-red-500 rounded-full md:hidden block">
                    <Menu >
                        <MenuHandler>
                         <Button> <FaAlignRight/></Button> 
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>    <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-red-500 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                            </MenuItem>
                            <MenuItem> <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  text-red-500 underline" : ""
                                }
                            >
                                Donation
                            </NavLink></MenuItem>
                            <MenuItem>  <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  text-red-500 underline" : ""
                                }
                            >
                                Statistics
                            </NavLink></MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>

        </div>
    );
};

export default Navber;