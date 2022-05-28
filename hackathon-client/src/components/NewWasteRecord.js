import { useState } from "react";

function NewWasteRecord() {
   const [identityNumber, setIdentityNumber] = useState("");
   const [weight, setWeight] = useState("");
   const [products, setProducts] = useState([
      { title: "Kağıt", weight: "1232" },
   ]);

   const handleAdminFormSubmit = () => {};
   return (
      <div>
         <div className="text-2xl font-bold text-center bg-gray-50">
            Admin Paneli
         </div>
         <div className="grid grid-cols-12">
            <div className="col-span-8">
               <form onSubmit={() => handleAdminFormSubmit()}>
                  <div className="w-3/4 m-auto mt-5 flex flex-col">
                     <input
                        type="text"
                        value={identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        placeholder="Kullanıcı TC Kimlik Numarası"
                        className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
                     />

                     <select className="w-full outline-none border-2 py-1 px-3 mb-2">
                        <option value="Seçiniz" disabled>
                           Seçiniz
                        </option>
                     </select>

                     <input
                        type="text"
                        value={identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        placeholder="Materyal Ağırlığı"
                        className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
                     />

                     <button className="btn self-end mt-4">Ekle</button>
                  </div>
               </form>
            </div>
            <div className="col-span-4 border-2 min-h-screen">asdasd</div>
         </div>
      </div>
   );
}

export default NewWasteRecord;
