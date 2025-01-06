import React from "react";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";


export default function MessageInput({onSendMessage}){

    const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

    return(
        <form onSubmit={handleSubmit} className="p-4   ">
        <div className="flex space-x-3 h-14 p-2    overflow-hidden w-96 mx-auto">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 focus:outline-none border rounded-full shadow-md"
          />
          <button
            type="submit"
            className=""
          >
           <BsArrowUpCircle className="text-3xl cursor-pointer hover:scale-x-2 " />

          </button>
        </div>
      </form>
    )
}