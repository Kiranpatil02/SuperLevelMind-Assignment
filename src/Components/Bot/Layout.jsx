import React from "react";
import MessageInput from "./MessageInput";
import MessageOutput from "./MessageOutput";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";


export default function Layout(){
    return(
        <>
        <div className="border h-screen ">
        <TbLayoutSidebarLeftCollapse className="text-4xl absolute cursor-pointer ml-10 mt-10" />

            <div className="flex flex-col h-full shadow-xl  mx-auto p-10 ">
                <MessageOutput/>
                <div className="flex flex-col  ">
                <MessageInput/>
                </div>
            </div>

        </div>
        </>
    )
}