/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/banner/Banner";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Highlight from "@/components/highlights/Highlight";
import Products from "@/components/products/Products";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export default function Home() {
  return (
    <>
    <div className="flex flex-col xl:mb-[110px] bg-white">
      <Banner />
      <Carousel />
      <Products novidade={true} titulo="NOVIDADES" valorTranslate={0}/>
      <img
        src="/images/logoCentral.png"
        alt="logo central da pagina"
        className="xl:mt-[120px] mt-[40px] xl:w-auto w-[1000px] xl:h-auto h-auto"
      />
      <Highlight />
      <Products novidade={false} titulo="CONHEÇA MAIS ALGUNS MODELOS IMPERDÍVEIS!" valorTranslate={9}/>
      
      <Whatsapp/>
    </div>
    <Footer />
    </>
  );
}
