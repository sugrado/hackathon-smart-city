import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function NewCenterRecord() {
  const [centerName, setCenterName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    axios
      .get("https://6f2d-46-154-111-77.eu.ngrok.io/api/neighbourhoods")
      .then((res) => {
        setNeighbourhoods(res.data.data);
      });
  }, []);
  var object = {};

  const handleCenterRecord = (e) => {
    e.preventDefault();
    object.neighbourhoodId = getSelectedValue("neighbourhoodId");
    object.address = address;
    object.name = centerName;
    object.email = mail;
    object.phoneNumber = phone;
    object.capacity = capacity;
    axios
      .post(
        "https://6f2d-46-154-111-77.eu.ngrok.io/api/wasteCenters/addWasteCenter",
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
        <div className="w-1/2 m-auto mt-5 flex flex-col">
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
            type="number"
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
