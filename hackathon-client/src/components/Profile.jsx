import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cam from "../assets/cam-01.png";
import kagit from "../assets/kagıt-01.png";
import kompost from "../assets/kompost-01.png";
import metal from "../assets/metal-01.png";
import plastik from "../assets/metal-01.png";
import ahsap from "../assets/ahsap-01.png";

function Profile({ handleLogOut }) {
  const [user, setUser] = useState({});
  const [wastes, setWastes] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://608e-178-241-52-165.eu.ngrok.io/api/users/${localStorage.getItem(
          "userIdentity"
        )}`
      )
      .then((res) => {
        setUser(res.data.data);
      });

    axios
      .get(
        `https://608e-178-241-52-165.eu.ngrok.io/api/WasteRecords/GetUserCategoryStatistics/${localStorage.getItem(
          "userIdentity"
        )}`
      )
      .then((res) => setWastes(res.data.data));
  }, []);
  return (
    <div>
      <div>
        <div className="text-2xl font-bold text-center mb-3">
          {user.fullName}
        </div>
        <div className="flex bg-lacivert py-4  px-5 items-center mb-2 mt-5 w-10/12 m-auto">
          <i className="fa-solid fa-id-card  mr-5 text-buyuksehir text-2xl"></i>

          <div className="flex flex-col">
            <h1 className="text-gray-300">TC Kimlik Numarası</h1>
            <p className="text-white">{user.identityNumber}</p>
          </div>
        </div>

        <div className="flex bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto">
          <i className="fa-solid fa-envelope  mr-5 text-buyuksehir text-2xl"></i>
          <div className="flex flex-col">
            <h1 className="text-gray-300">E-Posta</h1>
            <p className="text-white">{user.email}</p>
          </div>
        </div>

        <div className="flex bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto">
          <i class="fa-solid fa-star mr-5 text-buyuksehir text-2xl"></i>
          <div className="flex flex-col">
            <h1 className="text-gray-300">Puanınız</h1>
            <p className="text-white">{user.score}</p>
          </div>
        </div>

        <div className="flex profile-wastes flex-wrap">
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Kağıt</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[0]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={kagit}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Cam</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[1]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={cam}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Metal</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[2]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={metal}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Kompost</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[3]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={kompost}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Plastik</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[4]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={plastik}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-4 pb-4">
            <div className=" w-full h-full shadow-md flex flex-col ">
              <div className="flex flex-col text-center pb-2 mt-5 px-2 text-xl font-bold">
                <span>Kağıt</span>
                <span>
                  Toplam Atık Miktarı : {wastes && wastes[5]?.quantity} kg
                </span>
              </div>
              <div className="w-full h-3/4">
                <img
                  src={ahsap}
                  alt="resim"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <NavLink to="/">
            <button
              className="py-2 px-3 bg-white text-red-500 text-sm border-red-500 border-4 hover:bg-red-600 hover:text-white transition-all rounded-md profile-btn"
              onClick={() => handleLogOut()}
            >
              Çıkış Yap
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
