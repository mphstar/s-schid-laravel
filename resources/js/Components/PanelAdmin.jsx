import React, { useState } from "react";
import PanelAdminContext from "../Utils/PanelAdminContext";
import Sidebar from "./Sidebar";
import HeaderAdmin from "./HeaderAdmin";

const PanelAdmin = ({children, actived, modal}) => {
    const [IsShow, setShow] = useState(false);
    return (
        <PanelAdminContext.Provider value={{ IsShow, setShow }}>
            { modal }
            <div className="">
                <div className="">
                    <Sidebar active={actived} />
                </div>
                <div className="flex flex-col w-full md:pl-[320px] lg:pl-[290px] min-h-screen duration-300 ease-in-out">
                    <HeaderAdmin title="Dashboard" />
                    {children}
                </div>
            </div>
        </PanelAdminContext.Provider>
    );
};

export default PanelAdmin;
