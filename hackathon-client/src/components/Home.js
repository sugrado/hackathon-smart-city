import React from "react";
import logo from "../assets/atıklogo-01.png";
import buyuksehir from "../assets/belediye.jpg";

function Home() {
   return (
      <div>
         <div>
            <div className="flex justify-center items-center text-2xl font-bold">
               <h1 className="mx-5">Atık Kazanç Sistemi</h1>
               <div className="mr-2">
                  <img src={buyuksehir} className="w-16 h-16" alt="" />
               </div>
               <div>
                  <img src={logo} className="w-16 h-16" alt="" />
               </div>
            </div>
            <div className="mt-7">
               <p>
                  <strong>Amaç</strong> <br /> Her gün bilinçli bilinçsiz
                  üretilen evsel atıkların geri dönüşümü için oluşturulan
                  farkındalık çalışmalarının arttırılması ve atık dönüşümünde
                  elde ettiğimiz kazancın kamu ile paylaşılmasının dönüşüm
                  faaliyetlerinin arttırılmasına destek olması amaçlanmaktadır.{" "}
                  <br />
                  <br /> <strong>Hedef</strong> <br /> Vatandaşların yaşam
                  standartlarının artırılması ve karbon salınımlarını azaltmak
                  için elverişli koşulların sürdürülebilir şekilde günlük
                  yaşantıya dahil edilmesi. <br></br>
                  <br></br> Vatandaşların bilinç düzeylerinin arttırılması,
                  katılımcı yaklaşımıyla paydaşlarla ortak gerçekleştirilecek
                  kapsamlı ve şeffaf atık kazanç yönetimi uygulamak.<br></br>
                  <br></br> Kamu ve özel ortaklığı uygulayarak atık
                  planlamasında devlet harcamalarının ve vatandaş kazancının
                  verimliliğini artırmak ve dengeli fayda sağlamak. <br />
                  <br />
                  <strong>Vziyon</strong> <br /> Atığının bilincinde bir konya,
                  Akıllı bir şehir yaratmayı planlıyoruz - dijital
                  teknolojilerin şehirdeki yaşam standartlarını, performansı ve
                  hizmet sunumunu, rekabet gücünü artırdığı ve ekonomi, sosyal
                  hizmetler, kültür ve çevre koruma alanlarında mevcut ve
                  gelecek nesillerin ihtiyaçlarını karşıladığı yenilikçi bir
                  şehir.
               </p>
            </div>
         </div>
      </div>
   );
}

export default Home;
