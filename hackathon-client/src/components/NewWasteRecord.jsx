import { useEffect, useState } from "react";
import axios from "axios";

function NewWasteRecord() {
  const [identityNumber, setIdentityNumber] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState([
    { title: "Kağıt", weight: "1232" },
  ]);
  const [categories, setCategories] = useState([]);
  const [citizens, setCitizens] = useState([]);
  const [wasteCenters, setWasteCenters] = useState([]);
  var object = {};
  useEffect(() => {
    axios
      .get("https://6f2d-46-154-111-77.eu.ngrok.io/api/categories")
      .then(({ data: response }) => setCategories(response.data));
    axios
      .get("https://6f2d-46-154-111-77.eu.ngrok.io/api/wasteCenters")
      .then(({ data: response }) => setWasteCenters(response.data));
  }, []);

  const handleAdminFormSubmit = (e) => {
    e.preventDefault();
    object.categoryId = getSelectedValue("categoryId");
    object.wasteCenterId = getSelectedValue("wasteCenterId");
    object.citizenIdentityNumber = identityNumber;
    object.unitSize = unitSize;
    axios
      .post(
        "https://6f2d-46-154-111-77.eu.ngrok.io/api/wasteRecords/addWasteRecord",
        object
      )
      .then((res) => {
        console.log(res);
      });
  };

  function getSelectedValue(elementId) {
    const installments = document.querySelector(`#${elementId}`);
    const selectedIndex = [installments.selectedIndex];
    return installments.children[selectedIndex].value;
  }

  return (
    <div>
      <div className="text-2xl font-bold text-center bg-gray-50">
        Admin Paneli
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <form onSubmit={(e) => handleAdminFormSubmit(e)}>
            <div className="w-3/4 m-auto mt-5 flex flex-col">
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
                <option value="0">Kategori...</option>
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
