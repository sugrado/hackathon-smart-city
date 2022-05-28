import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Centers() {
   const [centers, setCenters] = useState([]);

   useEffect(() => {
      axios
         .get("https://6f2d-46-154-111-77.eu.ngrok.io/api/wasteCenters")
         .then(({ data: response }) => setCenters(response.data));
   }, []);
   return (
      <div>
         <h1 className="capitalize font-bold text-2xl text-center">
            atık merkezleri
         </h1>

         <div className="mt-7">
            {centers.map((center) => (
               <NavLink
                  key={center.id}
                  to={`/center/${center.id}`}
                  className="w-4/5 m-auto block"
               >
                  <div className=" center   py-5 px-5   transition-all flex flex-col bg-lacivert text-white mb-3 rounded">
                     <h1 className=" mb-2 uppercase font-semibold self-center text-lg  bg-buyuksehir text-black py-1 px-5 rounded">
                        {center.name}
                     </h1>
                     <div className="flex flex-col items-center">
                        <h1 className="mr-3">Doluluk Oranı</h1>
                        <span>{center.percentageOfCapacity}%</span>
                     </div>
                  </div>
               </NavLink>
            ))}
         </div>
      </div>
   );
}

export default Centers;
