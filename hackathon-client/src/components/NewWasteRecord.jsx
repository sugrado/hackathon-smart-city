import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewWasteRecord() {
   const [identityNumber, setIdentityNumber] = useState("");
   const [unitSize, setUnitSize] = useState("");
   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   const [wasteCenters, setWasteCenters] = useState([]);
   var object = {};
   useEffect(() => {
      axios
         .get("https://608e-178-241-52-165.eu.ngrok.io/api/categories")
         .then(({ data: response }) => setCategories(response.data));
      axios
         .get("https://608e-178-241-52-165.eu.ngrok.io/api/wasteCenters")
         .then(({ data: response }) => setWasteCenters(response.data));
   }, []);

   const handleAdminFormSubmit = (e) => {
      e.preventDefault();
      object.categoryId = getSelectedValue("categoryId");
      object.wasteCenterId = getSelectedValue("wasteCenterId");
      object.citizenIdentityNumber = identityNumber;
      object.unitSize = unitSize;
      setProducts([...products, object]);
   };

   function getSelectedValue(elementId) {
      const installments = document.querySelector(`#${elementId}`);
      const selectedIndex = [installments.selectedIndex];
      return installments.children[selectedIndex].value;
   }

   const handleNewWasteRecord = () => {
      axios
         .post(
            "https://608e-178-241-52-165.eu.ngrok.io/api/wasteRecords/bulkInsert",
            products
         )
         .then(
            (res) => {
               toast.success(res.data.message);
               setProducts([]);
            },
            (err) => {
               toast.error(err.response.data.message);
            }
         );
   };

   return (
      <div>
         <div className="text-2xl font-bold text-center bg-gray-50 ">
            Yeni Atık Kaydet
         </div>
         <div className="panel-container">
            <div className="left-panel">
               <form onSubmit={(e) => handleAdminFormSubmit(e)}>
                  <div className="w-full mt-5 flex flex-col">
                     <input
                        type="text"
                        value={identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        placeholder="Kullanıcı TC Kimlik Numarası"
                        className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
                     />

                     <select
                        name="categoryId"
                        id="categoryId"
                        className="w-full outline-none border-2 py-1 px-3 mb-2"
                     >
                        <option value="0">Kategori</option>
                        {categories.map((res) => {
                           return (
                              <option key={res.id} value={res.id}>
                                 {res.name}
                              </option>
                           );
                        })}
                     </select>
                     <select
                        name="wasteCenterId"
                        id="wasteCenterId"
                        className="w-full outline-none border-2 py-1 px-3 mb-2"
                     >
                        <option value="0">Atık Merkezi...</option>
                        {wasteCenters.map((res) => {
                           return (
                              <option key={res.id} value={res.id}>
                                 {res.name}
                              </option>
                           );
                        })}
                     </select>

                     <input
                        type="text"
                        value={unitSize}
                        onChange={(e) => setUnitSize(e.target.value)}
                        placeholder="Materyal Ağırlığı"
                        className="w-full outline-none py-1 px-3 border-2 rounded mb-2"
                     />

                     <button className="btn self-end mt-4">Listeye Ekle</button>
                  </div>
               </form>
            </div>
            <div className="right-panel">
               <div>
                  {products.length < 1 ? (
                     <p className="text-lg p-2">Liste boş</p>
                  ) : (
                     products.map((product, index) => (
                        <div
                           key={index}
                           className="py-2 px-3 bg-buyuksehir text-black flex justify-between mb-2"
                        >
                           <span>
                              {
                                 categories.find(
                                    (a) => a.id === Number(product.categoryId)
                                 ).name
                              }
                              &nbsp; Atığı
                           </span>
                           <span>{product.unitSize} kg</span>
                        </div>
                     ))
                  )}
               </div>
               <button
                  className="btn self-end"
                  onClick={() => handleNewWasteRecord()}
               >
                  İşlemi Gerçekleştir
               </button>
            </div>
         </div>
      </div>
   );
}

export default NewWasteRecord;
