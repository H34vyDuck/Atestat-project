import React from 'react';

export default function Conatact(props){
    return(
        <div>
            <div className="
                                flex flex-col
                                w-56 h-64
                                p-6 m-4
                                text-primary bg-secondary
                                rounded-3xl
                                mr-12 ml-12
                            ">
                    <div>
                        <h3>{props.name}</h3>
                    </div>
                    <div>
                        <p>{props.phone}</p>
                    </div>
                    <div>
                        <p>{props.email}</p>
                    </div>
            </div>
        </div>
    )
}