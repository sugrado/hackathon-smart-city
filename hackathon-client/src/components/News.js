import React from "react";
import atik from "../assets/atik.jpg";
import cevre from "../assets/cevre.jpg";
import kamyon from "../assets/kamyon.png";
import adam from "../assets/adam.jpg";

function News() {
   return (
      <div>
         <h1 className="text-2xl font-bold text-center">Gelişmeler</h1>
         <div className="news mt-7">
            <div className="flex flex-wrap box-border">
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src={atik}
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className=" capitalize font-bold h-1/4 flex items-center justify-center px-3">
                        Karbon ayak İzinizi biliyor musunuz?
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src={cevre}
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="capitalize font-bold h-1/4 flex items-center justify-center px-3">
                        Sürdürülebilirlik atölye başvurularımız açıldı.
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src={kamyon}
                           alt="resim"
                           className="object-cover object-top w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="capitalize h-1/4 flex items-center justify-center px-3 font-bold">
                        Yeni atık merkezi vatandaşın hizmetine açıldı.
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src={adam}
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="capitalize h-1/4 flex items-center justify-center px-3 font-bold">
                        Konya'da geri dönüşüme destek.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
