import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import News from "./News";
import Centers from "./Centers";
import Leadership from "./Leadership";
import Center from "./Center";
import Profile from "./Profile";
import NewWasteRecord from "./NewWasteRecord";
import logo from "../assets/atıklogo-01.png";
import belediye from "../assets/belediye.jpg";
import NewCenterRecord from "./NewCenterRecord";
import { toast } from "react-toastify";
import axios from "axios";
import Score from "./Score";

function Container() {
   const [signUppassword, setSignUpPassword] = useState("");
   const [logInPassword, setLogInPassword] = useState("");
   const [signUpEmail, setSignUpEmail] = useState("");
   const [logInEmail, setLogInEmail] = useState("");
   const [name, setName] = useState("");
   const [surname, setSurname] = useState("");
   const [identityNumber, setIdentityNumber] = useState("");
   const [userFullName, setUserFullName] = useState("");
   const [modalLogInControl, setModalLogInControl] = useState(false);
   const [modalSignUpControl, setModalSignUpControl] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [menuControl, setMenuControl] = useState(false);

   useEffect(() => {
      if (
         !!localStorage.getItem("userIdentity") &&
         !!localStorage.getItem("userFullName")
      ) {
         setUserFullName(localStorage.getItem("userFullName"));
         setIsAdmin(localStorage.getItem("userRole") == 2);
         setIsAuthenticated(true);
      } else {
         setIsAuthenticated(false);
      }
   }, []);

   const handleLogInSubmit = (e) => {
      e.preventDefault();
      axios
         .post("https://608e-178-241-52-165.eu.ngrok.io/api/auth/login", {
            email: logInEmail,
            password: logInPassword,
         })
         .then(
            (res) => {
               setIsAuthenticated(true);
               setModalLogInControl(false);
               toast.success(res.data.message);
               setUserFullName(res.data.data.fullName);
               setIsAdmin(res.data.data.typeId === 2);
               localStorage.setItem(
                  "userIdentity",
                  res.data.data.identityNumber
               );
               localStorage.setItem("userFullName", res.data.data.fullName);
               localStorage.setItem("userRole", res.data.data.typeId);
               setLogInEmail("");
               setLogInPassword("");
            },
            (err) => {
               toast.error(err.response.data.message);
               setLogInEmail("");
               setLogInPassword("");
            }
         );
   };

   const handleSignUpSubmit = (e) => {
      e.preventDefault();
      axios
         .post("https://608e-178-241-52-165.eu.ngrok.io/api/auth/register", {
            email: signUpEmail,
            password: signUppassword,
            firstName: name,
            lastName: surname,
            identityNumber: identityNumber,
         })
         .then(
            (res) => {
               setModalSignUpControl(false);
               toast.success(res.data.message);
            },
            (err) => {
               toast.error(err.response.data.message);
            }
         );
      setModalSignUpControl(false);
   };

   const handleLogOut = () => {
      localStorage.removeItem("userIdentity");
      localStorage.removeItem("userFullName");
      localStorage.removeItem("userRole");
      setIsAuthenticated(false);
      setMenuControl(false);
      setIsAdmin(false);
   };

   return (
      <Router>
         <div className="font-poppins">
            <nav className="flex justify-between h-20 text-black bg-buyuksehir  items-center px-10 border-b-[1px] border-gray-300">
               <div className="flex items-center">
                  <img
                     alt=""
                     className="w-16 h-16 border-[1px] border-black mr-2"
                     src={belediye}
                  />
                  <img className="w-16 h-16" src={logo} alt="resim" />
                  <NavLink to="/">
                     <p className="ml-5 text-2xl font-bold">
                        Atık Kazanç Sistemi
                     </p>
                  </NavLink>
               </div>
               {isAuthenticated ? (
                  <div className="group relative text-white">
                     <div
                        className="bg-lacivert py-2 px-3 rounded cursor-pointer min-w-[170px] text-center"
                        onClick={() =>
                           setMenuControl((prevState) => !prevState)
                        }
                     >
                        {userFullName}
                        <i className="fa-solid fa-caret-down ml-3"></i>
                     </div>

                     {menuControl && (
                        <div className=" bg-gray-100 text-black py-3 px-2 absolute top-11 flex flex-col w-full z-10 rounded-md ">
                           <a className="hover:bg-black hover:text-white py-1 px-2 cursor-pointer rounded mb-1 transition-all">
                              <NavLink
                                 to="/profile"
                                 onClick={() => setMenuControl(false)}
                              >
                                 Profilim
                              </NavLink>
                           </a>
                           <a
                              className="text-red-500 hover:bg-red-600 hover:text-white py-1 px-2 cursor-pointer rounded mb-1 transition-all"
                              onClick={() => handleLogOut()}
                           >
                              <NavLink to="/">Çıkış Yap</NavLink>
                           </a>
                        </div>
                     )}
                  </div>
               ) : (
                  <div>
                     <a
                        className="btn cursor-pointer"
                        onClick={() => setModalLogInControl(true)}
                     >
                        Giriş Yap
                     </a>
                     <a
                        className="btn cursor-pointer"
                        onClick={() => setModalSignUpControl(true)}
                     >
                        Kayıt Ol
                     </a>
                  </div>
               )}
            </nav>

            <main className="flex">
               <aside className="w-80 min-h-screen py-5 px-5 border-r-[1px] border-gray-200">
                  <div className="flex flex-col">
                     <NavLink className="navlink" to="/">
                        Anasayfa
                     </NavLink>
                     <NavLink className="navlink" to="/centers">
                        Atık Merkezleri
                     </NavLink>
                     <NavLink className="navlink" to="/news">
                        Gelişmeler
                     </NavLink>
                     <NavLink className="navlink" to="/leadership">
                        Liderlik
                     </NavLink>
                     <NavLink className="navlink" to="/score">
                        Puanları Kullan
                     </NavLink>
                  </div>

                  {isAdmin && (
                     <div>
                        <hr className="py-[0.2px] bg-gray-500 bg-opacity-50 my-3 rounded-md" />
                        <div className="flex flex-col">
                           <NavLink className="navlink" to="/newWasteRecord">
                              Yeni Atık Kaydet
                           </NavLink>
                           <NavLink className="navlink" to="/newCenterRecord">
                              Atık Merkezi Ekle
                           </NavLink>
                        </div>
                     </div>
                  )}
               </aside>

               <section className="px-5 py-10 w-full">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/centers" element={<Centers />} />
                     <Route path="/news" element={<News />} />
                     <Route path="/leadership" element={<Leadership />} />
                     <Route path="/center/:id" element={<Center />} />
                     <Route path="/score" element={<Score />} />
                     <Route
                        path="/newWasteRecord"
                        element={<NewWasteRecord />}
                     />
                     <Route
                        path="/newCenterRecord"
                        element={<NewCenterRecord />}
                     />
                     <Route
                        path="/profile"
                        element={<Profile handleLogOut={handleLogOut} />}
                     />
                     <Route
                        path="*"
                        element={
                           <main style={{ padding: "1rem" }}>
                              <p>There' s nothing here!</p>
                           </main>
                        }
                     />
                  </Routes>
               </section>
            </main>

            <div className={`modal ${modalLogInControl && "active"}`}>
               <div className="bg-white text-black w-1/3 py-5 px-10">
                  <div className="flex justify-between mb-3 items-center">
                     <h1 className="text-xl font-bold">Giriş Yap</h1>
                     <button onClick={() => setModalLogInControl(false)}>
                        <i className="fa-solid fa-xmark"></i>
                     </button>
                  </div>
                  <form
                     onSubmit={(e) => handleLogInSubmit(e)}
                     className="flex flex-col"
                  >
                     <input
                        type="text"
                        value={logInEmail}
                        onChange={(e) => setLogInEmail(e.target.value)}
                        placeholder="Email"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <input
                        type="password"
                        value={logInPassword}
                        onChange={(e) => setLogInPassword(e.target.value)}
                        placeholder="Şifre"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <button className="btn bg-crimson text-white mt-4 self-end">
                        Giriş Yap
                     </button>
                  </form>
               </div>
            </div>

            <div className={`modal ${modalSignUpControl && "active"}`}>
               <div className="bg-white text-black w-1/3 py-5 px-10">
                  <div className="flex justify-between mb-3 items-center">
                     <h1 className="text-xl font-bold">Kayıt Ol</h1>
                     <button onClick={() => setModalSignUpControl(false)}>
                        <i className="fa-solid fa-xmark"></i>
                     </button>
                  </div>
                  <form
                     onSubmit={(e) => handleSignUpSubmit(e)}
                     className="flex flex-col"
                  >
                     <input
                        type="text"
                        value={identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        placeholder="Kimlik Numarası"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ad"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Soyad"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <input
                        type="text"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        placeholder="Email"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />

                     <input
                        type="password"
                        value={signUppassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        placeholder="Şifre"
                        className="outline-none py-1 px-3 border-2 my-1 w-full"
                     />
                     <button className="btn bg-crimson text-white mt-4 self-end">
                        Kayıt Ol
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </Router>
   );
}

export default Container;
