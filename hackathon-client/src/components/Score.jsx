import elkart from "../assets/elkart.png";
import fatura from "../assets/fatura.png";
import bilet from "../assets/bilet-01.png";
import müze from "../assets/müze-01.png";
import vergi from "../assets/vergi-01.png";
import kitap from "../assets/kitap.png";

function Score() {
   return (
      <div>
         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">Müzeler</h1>Müze
                  kartının kullanılabildiği müze ve ören yerlerinde puan
                  kullanılarak gezebilir. Birikim yapılması sonucunda yıllık
                  müze kart edinebilirsiniz.
               </div>
            </div>
            <div className="score-right">
               <img src={müze} alt="resim" className="image" />
            </div>
         </div>

         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">El Kart</h1>
                  El kart kullanımlarınızda toplanılan puanla tl yüklemeleri ve
                  abonman hizmetlerinde kullanılabilir.
               </div>
            </div>
            <div className="score-right">
               <img src={elkart} alt="resim" className="image" />
            </div>
         </div>

         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">Fatura Ödemeleri</h1>
                  Atık merkezlerine getirilen atıklar ile elde edilerek toplanan
                  puanlar Koski ve Medaş faturalarından aylık olarak düşürülme
                  imkanı sunar. Bu hizmet aylık olarak ayrı ayrı ödeme olanağı
                  sunarken yıllık talimat dahilinde kazanılan puanların tümünü
                  yalnızca faturalarda kullanılır.
               </div>
            </div>
            <div className="score-right">
               <img src={fatura} alt="resim" className="image" />
            </div>
         </div>

         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">Bilet</h1>Belediye
                  tesislerinde gerçekleşecek olan sosyal ve kültürel
                  etkinliklerde rezervasyon yaptırabilir, bilet alabilirsiniz.
               </div>
            </div>
            <div className="score-right">
               <img src={bilet} alt="resim" className="image" />
            </div>
         </div>

         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">Kitap</h1>Konya
                  Büyükşehir belediyesinin yayınlarından indirimli olarak
                  yararlanabilirsiniz.
               </div>
            </div>
            <div className="score-right">
               <img src={kitap} alt="resim" className="image" />
            </div>
         </div>

         <div className="score-container">
            <div className="score-left">
               <div className="score-inner">
                  <h1 className="text-2xl font-bold mb-2">Vergi Ödemeleri</h1>
                  Yıllık ve belirli periyotlar halinde ödenen vergi ödemelerinde
                  puanlar kullanılarak ödemeleri daha uygun ödeme olanağı elde
                  edebilirsiniz.
               </div>
            </div>
            <div className="score-right">
               <img src={vergi} alt="resim" className="image" />
            </div>
         </div>
      </div>
   );
}

export default Score;
