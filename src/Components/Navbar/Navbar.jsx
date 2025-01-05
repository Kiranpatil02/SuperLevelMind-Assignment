import React from "react";

export default function Navbar(){
    return(
        <>
            <div>
                <div className="px-4 text-2xl p-2 font-semibold">
                    <ul className="flex  justify-between">
                        <li>Tune It</li>
                        <div className="flex space-x-10 ">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">About Us</li>
                        </div>
                        <div>
                            <li>Login</li>
                        </div>
                    </ul>
                </div>

            </div>
        
        </>
    )
}