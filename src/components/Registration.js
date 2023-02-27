import React, { useState } from 'react'

export default function From(){

    const [fName, setfName] = useState(' '); 
    const [lName, setlName] = useState(' '); 
    const [date, setDate] = useState(' '); 
    const [persons, setPersons] = useState(' '); 

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
                    <h1 className='text-info flex self-start py-4 font-bold text-4xl'>Book a table</h1>
                </div>
                <form className='w-2/3 h-72 flex flex-col flex-wrap'>
                    <label 
                            required
                            htmlFor='first'
                            className='m-9'
                            value={fName}
                            onChange={ (e) => setfName(e.target.value) }        
                    >
                        First name:
                        <input id='first' type="text" className='ml-4 rounded-2xl focus:outline-none p-2'/>
                    </label>
                    <label 
                            htmlFor='last' 
                            className='m-9'
                            required
                            value={lName}
                            onChange={ (e) => setlName(e.target.value)}
                    >
                        Last name:
                        <input id='last' type="text" className='ml-4 rounded-2xl focus:outline-none p-2'/>
                    </label>
                    <label 
                            htmlFor='date'
                            className='m-9'
                            required
                            value={date}
                            onChange={ (e) => setDate(e.target.value)}
                    >
                         Date
                        <input id='date' type="date" className='ml-4 rounded-2xl focus:outline-none p-2'/>
                    </label>
                    <label
                            htmlFor='persons'
                            className='m-9'
                            value={persons}
                            onChange={ (e) => setPersons(e.target.value)}
                    >
                        Persons:
                        <input id='persons' type="number" className='
                                                                        ml-4 w-12
                                                                        rounded-2xl 
                                                                        focus:outline-none
                                                                        p-2
                                                                    '/>
                    </label>
                </form>
                <div className='w-28 h-10 bg-light-wprimary rounded-2xl flex justify-center hover:bg-shadow-secondary'>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>

                <p>{setfName}</p>

                <div className='w-2/3 pt-24 pb-56'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio corrupti in, nihil nobis id tempore unde aut sapiente iure nemo inventore veritatis enim quisquam itaque cupiditate, deserunt dolorem odit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus qui veritatis et voluptatem libero beatae magnam, doloremque error maxime nesciunt natus ratione commodi exercitationem esse? Minima eos facilis vitae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ea accusamus corrupti obcaecati vitae beatae reprehenderit quod esse perferendis quia recusandae adipisci modi fuga omnis, est et soluta? Odit, temporibus?
                </div>
            </div>
        </div>
    )
}