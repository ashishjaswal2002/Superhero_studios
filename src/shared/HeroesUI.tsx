import React from 'react'

interface Heroes{
   data:any
  dataArray:[],
  status:string
}

export const HeroesUI = ({data,status}:Heroes) => {
  return (
    <div>




 <ul className="p-2   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 extra_cl  lg:p-24 duration-300  e3d"> 
                {data.data.results.map((marvel:{id:number,name:string,description:string,thumbnail:any,extension:string})=>(
                  <li key={marvel.id} className="outline  p-1 rounded-xl justify-self-center  bg-yellow-500  duration-300  hover:scale-105" >
                        <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={marvel.name} className='rounded-md    ' />

                        <div className='p-2 '>

                        <h1 className='text-center text-[1.2rem] font-bold'>{marvel.name}</h1> 
                     {marvel.description ? <p className='opacity-85'>{marvel.description}</p> : <p className='center'>Description Not available for this character</p>}
                        </div>
                        
                    </li>
                ))}
 
             

            </ul>

           
    </div>
  )

                }
