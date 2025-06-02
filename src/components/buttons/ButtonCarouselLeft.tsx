import { buttonsProps } from "./buttonsType"



const ButtonCarouselLeft = ({ slideAnterior, className }: buttonsProps) => {
    return (

        <div className={`${className}`}>
            <button onClick={slideAnterior} className="text-black text-[30px] opacity-50 cursor-pointer xl:flex hidden">❮</button>
            <button className="text-black text-[30px] opacity-50 cursor-pointer xl:hidden flex">❮</button>
        </div>


    )
}

export default ButtonCarouselLeft