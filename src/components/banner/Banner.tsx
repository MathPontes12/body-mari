/* eslint-disable @next/next/no-img-element */
import Cart from "../cart/Cart"
import Input from "../input/Input"


const Banner = () => {
    return(
        <div className="flex flex-col pt-[20px] items-center bg-[url('/images/linho-textura.png')] bg-cover z-50">
            <div className="xl:hidden flex gap-[14px] place-self-end mr-[10px] mb-[40px] mix-blend-multiply">
                    <img src="/images/instagram.png" alt="icone Instagram" className="w-[25px] h-auto" />
                    <img src="/images/youtube.png" alt="icone Youtube" className="w-[30px] h-auto" />
                    <img src="/images/facebook.png" alt="icone Facebook" className="w-[25px] h-auto" />
                </div>
            <img src="/images/logo.png" alt="Logo body-mari" className="w-[370px] h-auto mix-blend-multiply"/>

            <div className="w-full mt-[10px] flex border-ouroPrimaria border-b-[3px]
            xl:justify-end justify-center items-center pb-[20px] xl:gap-[10px]">
                <Input/>
                <Cart/>
            </div>
        </div>
    )
}

export default Banner