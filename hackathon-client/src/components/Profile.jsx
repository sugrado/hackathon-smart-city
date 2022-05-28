import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import yildiz from "../assets/yıldız 55-01 (1).png";

function Profile({ handleLogOut }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://6f2d-46-154-111-77.eu.ngrok.io/api/users/${localStorage.getItem(
          "userIdentity"
        )}`
      )
      .then((res) => {
        setUser(res.data.data);
      });
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold text-center mb-3">{user.fullName}</div>
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

      <div className="profile-icon">
        <img src={yildiz} className="w-full h-full" alt="" />
      </div>

      <div className="bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto text-white">
        <div className="flex justify-between">
          <h1>Puanınız</h1>
          <p>
            {user.score}
            <i className="fa-solid fa-bullseye ml-2"></i>
          </p>
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
  );
}

export default Profile;
