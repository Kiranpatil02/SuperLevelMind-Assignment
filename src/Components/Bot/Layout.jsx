import React, { useState } from "react";
import MessageInput from "./MessageInput";
import MessageOutput from "./MessageOutput";
import { Link } from "react-router-dom";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";


export default function Layout(){
    const [messags,setMessages]=useState([{sender:"AI",text:"Hey I am Social media Analyser, Ask any questions related to engagment of audience" }]);
    const endpoint = "https://backenedserver-bkfyedafb2gxfcgs.canadacentral-01.azurewebsites.net/run_flow";
    const [loading, setLoading] = useState(false); 

    const handlemessages= async(query)=>{
        setMessages((prev)=>[...prev,{sender:"user",text:query}]);
        setLoading(true);

        try{
            const response=await fetch(endpoint,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    message: query,
                    output_type: "chat",
                    input_type: "chat",
                    tweaks: {},
                  }),
            });
            const data=await response.json();

            setMessages((prev)=>[...prev,{sender:"AI",text:data.outputs[0].outputs[0].artifacts.message}])
        }
        catch(error){
            console.log("Failed response",error);
            setMessages((prev) => [
                ...prev,
                { sender: "AI", text: "Oops! Something went wrong." },
              ]);
        } finally{
            setLoading(false)
        }
    }

    return(
        <>
        <div className=" h-screen bg-gradient-to-t from-[#f3e7e9] to-[#e3eeff]">
            <Link to={"/"}>
        <TbLayoutSidebarLeftCollapse className="text-4xl absolute cursor-pointer ml-10 mt-10" />
            </Link>
            <div className="flex flex-col h-full shadow-xl  mx-auto p-10 ">
            <h2 className="mx-auto text-2xl font-bold">Chat to Get Key Analysis</h2>
                <MessageOutput messages={messags} disabled={loading}/>
                <div className="flex flex-col  ">
                <MessageInput onSendMessage={handlemessages} disabled={loading}/>
                </div>
            </div>

        </div>
        </>
    )
}