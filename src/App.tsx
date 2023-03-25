import React from "react";

import { MarvelCharacters } from "./pages/MarvelCharacters";

import { MarvelComic } from "./pages/MarvelComic";
import { BrowserRouter, Routes, Link, NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";

import { DrawerUp } from "./components/DrawerUp";

import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          
          <nav className="">
           
              <DrawerUp />
          
          </nav>


        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="marvelChar" element={<MarvelCharacters />} />

            

            <Route path="marvelComics" element={<MarvelComic />} />
          </Routes>
        </main>

      
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
