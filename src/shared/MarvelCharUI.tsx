import React from "react";
import { HeroesUI } from "./HeroesUI";

interface MarvelCharUIProps {
  dataArray:[]
  data:[]
  status: string;
}

export const MarvelCharUI = ({ data, status }:MarvelCharUIProps) => {
  return (
    <section className="w-[100%] ">
      <h1 className=" text-[2rem] text-white text-center">
        Discover the Best Marvel Characters of All Time
      </h1>

      {status === "error" && (
        <div>
          <h1>OOPS! Network Error 404</h1>
        </div>
      )}

    
  

      {/* Success Part */}

      {status === "success" && (
        <>
          <HeroesUI data={data} status={status} dataArray={data} />
        </>
      )}
    </section>
  );
};
