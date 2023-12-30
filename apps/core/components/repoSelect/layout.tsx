import React from "react";
// import Combobox from "../components/ComboBox";

export default function Layout({
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <div className="bg-white h-screen w-screen flex items-center justify-center">
            <div className="h-[90%] w-[35rem] bg-black">
                {children}
            </div>
        </div>
    );
}