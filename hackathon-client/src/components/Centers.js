import React from "react";
import { NavLink } from "react-router-dom";

function Centers() {
   return (
      <div>
         <h1 className="capitalize font-bold text-2xl text-center">
            atık merkezleri
         </h1>

         <div className="mt-7">
            <NavLink to={"/center/2"}>
               <div className=" center w-full  py-5 px-5   transition-all flex flex-col bg-lacivert text-white mb-3 rounded">
                  <h1 className=" mb-2 uppercase font-semibold self-center text-lg  bg-buyuksehir text-black py-1 px-5 rounded">
                     Karatay Atık Merkezi
                  </h1>
                  <div className="flex flex-col items-center">
                     <h1 className="mr-3">Doluluk Oranı</h1>
                     <span>45%</span>
                  </div>
               </div>
            </NavLink>
            <NavLink to={"/center/2"}>
               <div className=" center w-full  py-5 px-5   transition-all flex flex-col bg-lacivert text-white mb-3">
                  <h1 className=" mb-2 uppercase font-semibold self-center text-lg  bg-buyuksehir text-black py-1 px-5 rounded">
                     Karatay Atık Merkezi
                  </h1>
                  <div className="flex flex-col items-center">
                     <h1 className="mr-3">Doluluk Oranı</h1>
                     <span>45%</span>
                  </div>
               </div>
            </NavLink>
            <NavLink to={"/center/2"}>
               <div className=" center w-full  py-5 px-5   transition-all flex flex-col bg-lacivert text-white mb-3">
                  <h1 className=" mb-2 uppercase font-semibold self-center text-lg  bg-buyuksehir text-black py-1 px-5 rounded">
                     Karatay Atık Merkezi
                  </h1>
                  <div className="flex flex-col items-center">
                     <h1 className="mr-3">Doluluk Oranı</h1>
                     <span>45%</span>
                  </div>
               </div>
            </NavLink>
         </div>
      </div>
   );
}

export default Centers;
