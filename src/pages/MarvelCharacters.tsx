import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import { MarvelCharUI } from "../shared/MarvelCharUI";
import Characterkey from '../personal/Characterkey';

const MarvelData = async (pageNumber: any) => {
  const res = await fetch(
    `https://gateway.marvel.com:443//v1/public/characters?ts=1&limit=10&offset=${pageNumber}&apikey=${Characterkey}`
  );
  return res.json();
};

export const MarvelCharacters = () => {
  const [pageNumber, SetPageNumber] = useState(() => {
    const storedPageNumber = localStorage.getItem("pageNumber");
    return storedPageNumber ? parseInt(storedPageNumber) : 0;
  });


  const { data, status } = useQuery(["marvelData", pageNumber], () =>
    MarvelData(pageNumber),
    { keepPreviousData: true }
  );

  const nextPage = () => {
    SetPageNumber(pageNumber + 10);

  };

  const PrevPage = () => {
    SetPageNumber(pageNumber - 10);

  };

  useEffect(() => {
    localStorage.setItem("pageNumber", pageNumber.toString());
  }, [pageNumber]);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };
    window.addEventListener("beforeunload", clearLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);


  return (
    <div className=" mt-[3rem]">
      <MarvelCharUI data={data} status={status} dataArray={data} />
      {status !== "loading" && (
        <div className="  flex gap-6 items-center justify-end pb-10  pr-5 " id="responsive">
          <button onClick={PrevPage} disabled={pageNumber === 0}>
            Prev Page
          </button>
      
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      <p className="text-center text-white">
        Copyright © 2023 Marvel Studios. All rights reserved.
      </p>
    </div>
  );
};
