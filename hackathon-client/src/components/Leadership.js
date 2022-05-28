import React from "react";

function Leadership() {
   return (
      <div>
         <h1 className="capitalize font-bold text-2xl text-center">
            Geri Dönüşümde Liderlik
         </h1>
         <div className="mt-7">
            <div className=" transition-all shadow-sm hover:shadow-center bg-buyuksehir text-black hover:bg-lacivert hover:text-buyuksehir py-3 px-5 flex justify-between mb-3">
               <div className="flex flex-between items-center">
                  <h1> 1 ) Mustafa Hıncal</h1>
                  <i className="fa-solid fa-crown ml-2"></i>
               </div>
               <p>Geri Dönüştürme Puanı : 6230</p>
            </div>
            <div className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-3 px-5 flex justify-between  mb-3">
               <h1> 2 ) Görkem Rıdvan Arık</h1>
               <p>Geri Dönüştürme Puanı : 4230</p>
            </div>
            <div className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-3 px-5 flex justify-between  mb-3">
               <h1> 3 ) Yurdanur Aydoğdu</h1>
               <p>Geri Dönüştürme Puanı : 2230</p>
            </div>
         </div>
      </div>
   );
}

export default Leadership;
