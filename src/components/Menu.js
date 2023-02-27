import React from 'react'
import Conatact from "./contacts";
import Data from './data.json'

export default function Menu(){
    return(
        <div>
            <div className='
                                m-24
                                mx-auto
                                rounded-t-full
                                rounded-b-full
                                w-3/4 h-fit
                                bg-primary
                                font-play text-info
                                self-center
                                overflow-hidden
                                flex flex-col justify-center items-center
                            '>
                <div className='flex flex-col pt-96 pb-12 w-2/3 self-center'>
                    <h1 className='text-info flex self-start py-4 font-bold text-4xl'>About Us</h1>
                    <p>Our story</p>
                </div>
                    <div className='w-2/3 h-68 overflow-hidden '>
                        <div className='flex animate-marquee-infinite'>
                            <div className='flex justify-around'>
                                {
                                    Data.map(element => {
                                        return(
                                            <Conatact 
                                                name = {element.firstName}
                                                phone = {element.phone}
                                                email = {element.email}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                <div className='w-2/3 pt-24 pb-56'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio corrupti in, nihil nobis id tempore unde aut sapiente iure nemo inventore veritatis enim quisquam itaque cupiditate, deserunt dolorem odit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus qui veritatis et voluptatem libero beatae magnam, doloremque error maxime nesciunt natus ratione commodi exercitationem esse? Minima eos facilis vitae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ea accusamus corrupti obcaecati vitae beatae reprehenderit quod esse perferendis quia recusandae adipisci modi fuga omnis, est et soluta? Odit, temporibus?
                </div>
            </div>
        </div>
    )
}