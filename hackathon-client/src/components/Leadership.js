import axios from "axios";
import { useEffect, useState } from "react";

function Leadership() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      axios
         .get("https://6f2d-46-154-111-77.eu.ngrok.io/api/Users")
         .then(({ data: newUsers }) => {
            setUsers(newUsers.data);
         });
   }, []);
   return (
      <div>
         <h1 className="capitalize font-bold text-2xl text-center">
            Geri Dönüşümde Liderlik
         </h1>
         <div className="mt-7">
            {users.map((user, index) => (
               <div
                  key={user.id}
                  className={`${
                     index + 1 === 1 ? "leadership-first" : "leadership-item"
                  }`}
               >
                  <div
                     className={`${
                        index + 1 === 1
                           ? "flex flex-between items-center"
                           : "default"
                     } `}
                  >
                     <h1>
                        {index + 1} ) {user.fullName}
                     </h1>
                     {index + 1 === 1 ? (
                        <i className="fa-solid fa-crown ml-2"></i>
                     ) : (
                        <p></p>
                     )}
                  </div>
                  <p>Geri Dönüştürme Puanı : {user.score}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Leadership;
