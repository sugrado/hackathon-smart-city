import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Center() {
   const [center, setCenter] = useState({});
   const [users, setUsers] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      axios
         .get(
            `https://6f2d-46-154-111-77.eu.ngrok.io/api/WasteCenters/getWithRecords/${id}`
         )
         .then(({ data: newCenter }) => {
            setCenter(newCenter.data.wasteCenter);
            setUsers(newCenter.data.users);
         });
   }, []);

   return (
      <div>
         <div>
            <h1 className="text-2xl font-bold text-center">{center.name}</h1>
            <div className="mt-7">
               <div className="w-10/12 m-auto py-5 px-3 bg-buyuksehir font-bold flex justify-between">
                  <div className="text-center w-1/2">
                     <i className="fa-solid fa-warehouse"></i>
                     <div className="flex flex-col text-center">
                        <span>Kapatise</span>
                        <span>{center.capacity}</span>
                     </div>
                  </div>

                  <div className="text-center w-1/2">
                     <i className="fa-solid fa-truck-ramp-box"></i>
                     <div className="flex flex-col  text-center">
                        <span>Kullanılan</span>
                        <span>{center.usedCapacity}</span>
                     </div>
                  </div>
               </div>

               <div className="w-10/12 m-auto py-5 px-3 bg-buyuksehir font-bold  my-5">
                  <h1 className="px-2 mb-3 text-center border-b-2 border-black pb-2">
                     {center.name} Kullanıcıları
                  </h1>
                  <div className="flex flex-col">
                     {users.map((user, index) => (
                        <div
                           key={user.id}
                           className=" transition-all shadow-sm hover:shadow-center hover:bg-lacivert hover:text-white py-2 px-2  flex justify-between mb-2"
                        >
                           <h1> {`${index + 1} ) ${user.name} `}</h1>
                           <p>Geri Dönüştürme Puanı : {user.score}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div>
                  {/* <div
                     id="map-container-google-1"
                     className="w-10/12 h-96 m-auto"
                  >
                     <iframe
                        src="https://maps.google.com/maps?q=selcuklu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                     ></iframe>
                  </div> */}
               </div>
               <div className="mt-5">
                  <div className="flex bg-lacivert py-4  px-5 items-center w-10/12 m-auto">
                     <i className="fa-solid fa-location-dot mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Adres</h1>
                        <p className="text-white">{center.address}</p>
                     </div>
                  </div>

                  <div className="flex bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto">
                     <i className="fa-solid fa-envelope mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Mail</h1>
                        <p className="text-white">{center.email}</p>
                     </div>
                  </div>

                  <div className="flex bg-lacivert py-4  px-5 items-center w-10/12 m-auto">
                     <i className="fa-solid fa-phone mr-5 text-buyuksehir"></i>
                     <div className="flex flex-col">
                        <h1 className="text-gray-300">Telefon</h1>
                        <p className="text-white">{center.phoneNumber}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Center;
