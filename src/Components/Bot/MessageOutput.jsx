import React, { useEffect } from "react";
import { useState } from "react";

export default function MessageOutput({ messages,disabled }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!disabled) {
        const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === "AI") {
        setLoading(false);
      }
    }
  }, [messages]); 

  return (
    <>
      <div className=" h-full flex flex-col justify-end overyflow-y-auto border border-black  p-4 gap-4  w-3/5 mx-auto rounded-xl">
      {loading ? (
                    <div className="flex justify-center items-center">Generating insights...</div> 
                ) : (
                    messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`border rounded-xl px-4 p-3 ${msg.sender === "user" ? "text-white bg-red-400" : "bg-gray-300"}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))
                )}
          
      </div>
    </>
  );
}
