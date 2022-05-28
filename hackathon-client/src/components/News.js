import React from "react";

function News() {
   return (
      <div>
         <h1 className="text-2xl font-bold text-center">Haberler</h1>
         <div className="news mt-7">
            <div className="flex flex-wrap box-border">
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src="https://picsum.photos/400/500"
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="h-1/4 flex items-center justify-center px-3">
                        Konyada geri dönüşüme destek
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src="https://picsum.photos/400/500"
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="h-1/4 flex items-center justify-center px-3">
                        Konyada geri dönüşüme destek
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src="https://picsum.photos/400/500"
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="h-1/4 flex items-center justify-center px-3">
                        Konyada geri dönüşüme destek
                     </div>
                  </div>
               </div>
               <div className="w-1/3 h-64  pr-4 pb-4">
                  <div className=" w-full h-full shadow-md flex flex-col">
                     <div className="w-full h-3/4">
                        <img
                           src="https://picsum.photos/400/500"
                           alt="resim"
                           className="object-cover w-full h-full rounded-t-md"
                        />
                     </div>
                     <div className="h-1/4 flex items-center justify-center px-3">
                        Konyada geri dönüşüme destek
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
