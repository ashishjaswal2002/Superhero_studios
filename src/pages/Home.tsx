import React from "react";
import { Search } from "../components/Search";

import { Link } from "react-router-dom";

export const Home = () =>{
  return (
    <div>

          <div className="bgimage">
            <div className="max-w-[960px] ml-auto mr-auto px-4 pr-4 text-white ">
              <h1 className="text-[3rem] text-center tracking-[.1em] ">
                {" "}
                <span className="text-red-500">S</span>u
                <span className="text-red-500">p</span>e
                <span className="text-orange-500">r</span>h
                <span className="text-orange-500">e</span>ro{" "}
                <span className="text-red-500">Studios</span>
              </h1>
              <div className="mt-4 ">
                <p className="text-center"> Made by<a href="https://ashishdev.in" className="underline  text-yellow-200"> Ashishjaswal</a> </p>
                <p className="text-center select-none ">
                  My project is a user-friendly superhero search engine that
                  provides information on origin stories, powers, and notable
                  appearances in comics, movies, and  <span className=" text-yellow-200"> TV shows. </span>Whether you're a
                  die-hard fan or just getting started with superhero fandom,
                  our search engine is the perfect tool for discovering new
                  heroes and learning more about your favorites. With a vast
                  database of superheroes, you'll never run out of new heroes to
                  explore. Start your superhero search today and discover the
                  amazing world of superheroes!
                </p>
              </div>
            </div>


          </div>

          <Search />


 <p className="text-center text-white mt-5">

     Copyright © 2023 Superhero Studios. All rights reserved.
 </p>


    </div>
  );
};
