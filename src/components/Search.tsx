import React from "react";

import { useState} from "react";
import { useQuery } from "react-query";
import SEARCHKEY from '../Private/apikey';




interface Character {
  
  id: string;
  name: string;
  image: {
    url: string;
  };
  biography: {
    "full-name": string;
    "first-appearance": string;
    publisher: string;
    "place-of-birth": string;
  };
}



const SEARCH_API_ENDPOINT =
  `https://superheroapi.com/api.php/${SEARCHKEY}/search/`;

function fetchSuperheroesByName(name: string): Promise<Character[]> {
  return fetch(`${SEARCH_API_ENDPOINT}${name}`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function Search() {
  

  const [searchTerm, setSearchTerm] = useState("");

  const { data, status } = useQuery(["superheroes", searchTerm], () =>
    fetchSuperheroesByName(searchTerm),{
      staleTime:200
    }
  );

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="mt-10  ">
        <form className="w-full max-w-lg mx-auto  " id="smalldev">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type your favourite superhero name or even villain name 😏"
              aria-label="Full name"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          

            <span className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded">
              🔎
            </span>
          </div>
        
        </form>

        {status === "loading" && (
        <>
        
 
   
  <div className="flex justify-center  ">

    <svg aria-hidden="true" className="w-8 h-8 mt-5 text-gray-200 animate-spin dark:text-white-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>

  </div>

          
       
        </>
          )
}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
          <div className="">
            {data?.length ? (
              <ul className="p-2 mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-10 extra_cl  lg:p-24 duration-300 lg:grid-cols-4  e3d">
                {data.map((character) => (
                  <li key={character.id} className='outline  p-1 rounded-xl justify-self-center duration-300  hover:scale-105   bg-yellow-500'>
                    <img
                      id="blured"
                     
                      className='rounded-md  '
                      src={character.image.url}
                      alt={`${character.name} image` }
                    />

                    <div className="p-2 ">

                    <h2 className="text-2xl font-bold ">{character.name}</h2>

                    <p className=" font-semibold ">{character.biography["full-name"]}</p>
                    <p className="opacity-90">
                     <span className="font-bold text-[1.1rem]">
                      First Appearance:{" "}
                      </span> 
                      {character.biography["first-appearance"]}
                    </p>
                    <p className="opacity-90"> <span className="font-bold text-[1.1rem]">
                    Publisher:
                      </span> {character.biography.publisher}</p>
                    <p>

                      Place of Birth: {character.biography["place-of-birth"]}
                    </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
