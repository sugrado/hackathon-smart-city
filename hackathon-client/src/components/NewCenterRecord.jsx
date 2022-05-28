import { useState } from "react";

function NewCenterRecord() {
   const [centerName, setCenterName] = useState("");
   const [mail, setMail] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");

   const handleCenterRecord = (e) => {
      setCenterName("");
      setMail("");
      setPhone("");
      setAddress("");
      e.preventDefault();
   };
   return (
      <div>
         <div className="text-2xl font-bold text-center">Atık Merkezi Ekle</div>

         <form onSubmit={(e) => handleCenterRecord(e)}>
            <div className="w-3/4 m-auto mt-5 flex flex-col">
               <input
                  type="text"
                  value={centerName}
                  onChange={(e) => setCenterName(e.target.value)}
                  placeholder="Atık Merkezi Adı"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

               <input
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="E-Posta"
                  className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
               />

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
