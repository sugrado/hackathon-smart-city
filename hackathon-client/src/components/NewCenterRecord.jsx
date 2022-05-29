import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function NewCenterRecord() {
   const [mail, setMail] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");
   const [neighbourhoods, setNeighbourhoods] = useState([]);
   const [capacity, setCapacity] = useState("");

   useEffect(() => {
      axios
         .get("https://608e-178-241-52-165.eu.ngrok.io/api/neighbourhoods")
         .then((res) => {
            setNeighbourhoods(res.data.data);
         });
   }, []);
   var object = {};

   const handleCenterRecord = (e) => {
      e.preventDefault();
      object.neighbourhoodId = getSelectedValue("neighbourhoodId");
      object.address = address;
      object.email = mail;
      object.phoneNumber = phone;
      object.capacity = Number(capacity);
      axios
         .post(
            "https://608e-178-241-52-165.eu.ngrok.io/api/wasteCenters/addWasteCenter",
            object
         )
         .then(
            (res) => {
               if (res.data.success) {
                  toast.success(res.data.message);
               }
            },
            (err) => {
               toast.error(err.response.data.message);
            }
         );
   };
   function getSelectedValue(elementId) {
      const installments = document.querySelector(`#${elementId}`);
      const selectedIndex = [installments.selectedIndex];
      return installments.children[selectedIndex].value;
   }
   return (
      <div>
         <div className="text-2xl font-bold text-center">Atık Merkezi Ekle</div>

         <form onSubmit={(e) => handleCenterRecord(e)}>
            <div className="w-1/2 container-newCenter flex flex-col">
               <input
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="E-Posta"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

               <input
                  type="text"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="Kapasite"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

               <select
                  name="neighbourhoodId"
                  id="neighbourhoodId"
                  className="w-full outline-none border-2 py-1 px-3 mb-2"
               >
                  <option value="0">Mahalle...</option>
                  {neighbourhoods.map((res) => {
                     return (
                        <option key={res.id} value={res.id}>
                           {res.name}
                        </option>
                     );
                  })}
               </select>

               <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Adres"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

               <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

               <button className="btn self-end mt-4">Kaydet</button>
            </div>
         </form>
      </div>
   );
}

export default NewCenterRecord;
