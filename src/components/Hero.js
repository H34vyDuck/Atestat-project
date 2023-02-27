import React from "react";


export default function Hero(){

    return(
        <div>
            <div className="
                                w-full h-screen 
                                bg-primary 
                                flex justify-center
                                font-play text-info
                            ">
                <div className="w-10/12 h-screen flex flex-col">
                    <div className="pt-36 pb-12 text-4xl">
                        <h1>Welcome in our restaurant</h1>
                    </div>
                    <div className="w-7/12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam dicta error atque debitis laudantium repudiandae voluptates esse officiis a, nemo animi, delectus nobis. Nesciunt odit neque sed unde ea?
                        </p>
                    </div>
                    <div className="pt-36">
                        <button  className="bg-info text-primary w-44 h-12 rounded-full">
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}