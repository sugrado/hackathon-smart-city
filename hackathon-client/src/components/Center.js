import React from "react";

function Center() {
   return (
      <div>
         <div>
            <h1 className="text-2xl font-bold text-center">
               Karatay Atık Merkezi
            </h1>
            <div className="mt-7">
               <div className="w-10/12 m-auto py-5 px-3 bg-buyuksehir font-bold flex justify-between">
                  <div className="text-center w-1/2">
                     <i className="fa-solid fa-warehouse"></i>
                     <div className="flex flex-col text-center">
                        <span>Kapatise</span>
                        <span>10000</span>
                     </div>
                  </div>

                  <div className="text-center w-1/2">
                     <i class="fa-solid fa-truck-ramp-box"></i>
                     <div className="flex flex-col  text-center">
                        <span>Kullanılan</span>
                        <span>3400</span>
                     </div>
                  </div>
               </div>

               <div className="w-10/12 m-auto py-5 px-3 bg-buyuksehir font-bold  my-5">
                  <h1 className="px-2 mb-3 text-center border-b-2 border-black pb-2">
                     Karatay Atık Merkezinde Haftanın Kullanıcıları
                  </h1>
                  <div className="flex flex-col">
                     <div className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-2 px-2  flex justify-between mb-2">
                        <h1> 1 ) Mustafa Hıncal</h1>
                        <p>Geri Dönüştürme Puanı : 6230</p>
                     </div>
                     <div className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-2 px-2  flex justify-between mb-2">
                        <h1> 2 ) Görkem Rıdvan Arık</h1>
                        <p>Geri Dönüştürme Puanı : 4230</p>
                     </div>
                     <div className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-2 px-2  flex justify-between mb-2">
                        <h1> 3 ) Yurdanur Aydoğdu</h1>
                        <p>Geri Dönüştürme Puanı : 2230</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div
                     id="map-container-google-1"
                     class="z-depth-1-half map-container"
                     className="w-10/12 h-96 m-auto"
                  >
                     <iframe
                        src="https://maps.google.com/maps?q=selcuklu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                     ></iframe>
                  </div>
               </div>
               <div className="mt-5">
                  <div className="flex bg-lacivert py-4  px-5 items-center w-10/12 m-auto">
                     <i class="fa-solid fa-location-dot mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Adres</h1>
                        <p className="text-white">
                           Bosna Hersek, Onurlu Sk. 1, 42250 Selçuklu/Konya
                        </p>
                     </div>
                  </div>

                  <div className="flex bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto">
                     <i class="fa-solid fa-envelope mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Mail</h1>
                        <p className="text-white">abc@gmail.com</p>
                     </div>
                  </div>

                  <div className="flex bg-lacivert py-4  px-5 items-center w-10/12 m-auto">
                     <i class="fa-solid fa-phone mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Telefon</h1>
                        <p className="text-white">0562322352</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Center;
