'use client';
/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/banner/Banner"
import Footer from "@/components/footer/Footer";
import Sale from "@/components/sale/Sale";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import dados from '@/json/carousel.json'
import { useParams } from "next/navigation"


const SaleProduct = () => {


    const params = useParams()

    const nome = params.nome

    const produto = dados.productscard.find((produto) => produto.nome === nome)

    return (

        <div className="flex flex-col bg-white">
            <Banner />
            <div className="flex xl:flex-row flex-col my-[50px] xl:my-[110px] mx-[20px] xl:gap-[100px] gap-[40px] 
            justify-center text-black font-fontePrimaria">
                <div className="flex xl:flex-row flex-col xl:gap-[10px]">
                    <img
                        src={`/images/produtos/${produto?.nome}.png`}
                        alt="imagem do produto"
                        className="w-[450px] h-auto"
                    />
                
                </div>
                <div className="flex flex-col xl:gap-[10px]">
                    <h1 className="xl:text-[32px] text-[28px]"> {produto?.nome} </h1>
                    <p className="xl:text-[32px] text-[24px]"> {produto?.preco} </p>
                    <Sale nome={produto?.nome} preco={produto?.preco}/>
                </div>
            </div>
            <Footer/>
            <Whatsapp/>
        </div>

    )
}

export default SaleProduct