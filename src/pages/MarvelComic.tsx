import React from "react";
import { useQuery } from "react-query";
import { useState}from "react";
import ComicKey from '../personal/ComicKey';




const MarvelData = async (pageNumber:any) => {
  const res = await fetch( `https://gateway.marvel.com/v1/public/comics?ts=1&limit=10&offset=${pageNumber}&apikey=${ComicKey}`);

  return res.json();
};

export const MarvelComic= () => {



  const [pageNumber,SetPageNumber] = useState(0);


  const [number,setNumber] = useState(0);

  
  const { data, status } = useQuery(["marvelData",pageNumber], ()=>MarvelData(pageNumber));
  
  const nextPage = ()=>{
    SetPageNumber
    (pageNumber+10);
    setNumber(number+1);
  }

  const PrevPage = ()=>{
    SetPageNumber(pageNumber-10);

    setNumber(number-1);
  }
 
 
  return (
    <div className="mt-[4em]">

   
        
      <h1 className="text-[2rem] text-white text-center ">Discover the Epic World of Marvel <span className="italic">Comics</span>✨</h1>


        {status === 'error' && (
            <div>
                Error Fetching data
            </div>
        )}
        {status === 'loading' && (
               <>
               <div className="flex justify-center  ">
       
       <svg aria-hidden="true" className="w-8 h-8 mt-5 text-gray-200 animate-spin dark:text-white-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
       </svg>
       <span className="sr-only">Loading...</span>
       
       </div>
             </>
        )}
        {status === 'success' && (
          <>
       

            <ul className="p-2 mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-6 extra_cl  lg:p-24 duration-300 lg:grid-cols-4  e3d items-baseline"> 
                {data.data.results.map((marvel:{id:number,title:string,type:string,urls:any,thumbnail:any,pageCount:number,series:{resourceURI:string,name:string}})=>(
                  <li key={marvel.id} className='outline  p-1 rounded-xl justify-self-center duration-300  hover:scale-105   bg-yellow-500'>
                        <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={marvel.title} className='rounded-md' />
                      
                      <div className="p-2 leading-7">

                        <h1 className="text-2xl font-bold">{marvel.title}</h1> 
                        <p><span className="font-bold">Total Pages Count :</span> 
                        
                        <span className="text-red-500 font-extrabold">

                         {marvel.pageCount}
                        </span>
                         </p>
                       
            <p>
              <span className="font-bold">
              Series Name:

              </span>
              {marvel.series.name}</p>
            <a href={marvel.series.resourceURI} className="underline hover:no-underline text-white hover:text-blue-400 ">Click to Know more</a>

            <span> 🔗</span>
         
                         </div>
                        
                    </li>
                ))}

               
            </ul>
                </>
        )}
       

       {status!=='loading' && (
    
    <div className="  flex gap-6 items-center justify-end pb-10  pr-5 " id="responsive">
      <button onClick={PrevPage} disabled={pageNumber === 0}>
        Prev Page
      </button>

      <p className="text-2xl ">{number}</p>

      <button onClick={nextPage}>Next Page</button>
    </div>
    )
    }
<p className="text-center text-white">

Copyright © 2023 Marvel Comics. All rights reserved.
</p>
    </div>
);
};
