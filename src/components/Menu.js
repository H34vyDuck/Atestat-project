import React from 'react';
import starters from './../Img/starters.jpg'
import main from './../Img/Main.jpg'
import desserts from './../Img/desserts.jpg'
import drinks from './../Img/drinks.jpg'

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
                    <h1 className='text-info flex self-start py-4 font-bold text-4xl'>Menu</h1>
                    <p>Get a taste of our style</p>
                </div>
                <div className='flex flex-row h-screen pt-8'>
                    <div className='w-full h-fit flex flex-row'>
                        <div className='w-full h-12 flex flex-col'>
                            <div className='flex justify-start'>
                                <img src={starters} alt="#" className='w-11/12'></img>
                            </div>
                            <div className='w-full'>
                                <h1 className='py-4 flex justify-center'>Starters</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>Husleves</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>16 lei</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-row'>
                        <div className='w-full h-12 flex flex-col'>
                            <div className='flex justify-end'>
                                <img src={main} alt="#" className='w-11/12'></img>
                            </div>
                            <div>
                                <h1 className='py-4 flex justify-center'>Starters</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>Husleves</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>16 lei</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row h-screen pt-36'>
                    <div className='w-full h-fit flex flex-row'>
                        <div className='w-full h-12 flex flex-col'>
                            <div className='flex justify-start'>
                                <img src={desserts} alt="#" className='w-11/12'></img>
                            </div>
                            <div className='w-full'>
                                <h1 className='py-4 flex justify-center'>Starters</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>Husleves</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                                <div className='pl-8 pr-8 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>16 lei</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-row'>
                        <div className='w-full h-12 flex flex-col'>
                            <div className='flex justify-end'>
                                <img src={drinks} alt="#" className='w-11/12'></img>
                            </div>
                            <div>
                                <h1 className='py-4 flex justify-center'>Starters</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='pl-16 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>Husleves</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                                <div className='pl-8 pr-8 pt-8'>
                                    <ul className='space-y-2'>
                                        <li>16 lei</li>
                                        <li>Zoldsegleves</li>
                                        <li>Bableves</li>
                                        <li>Paradicsomleves</li>
                                        <li>Lucskos kaposzta leves</li>
                                        <li>Kelbimbo leves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                        <li>Bableves</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <div className='w-2/3 pt-64 pb-72'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio corrupti in, nihil nobis id tempore unde aut sapiente iure nemo inventore veritatis enim quisquam itaque cupiditate, deserunt dolorem odit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus qui veritatis et voluptatem libero beatae magnam, doloremque error maxime nesciunt natus ratione commodi exercitationem esse? Minima eos facilis vitae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ea accusamus corrupti obcaecati vitae beatae reprehenderit quod esse perferendis quia recusandae adipisci modi fuga omnis, est et soluta? Odit, temporibus?
                </div>
            </div>
        </div>
    )
}