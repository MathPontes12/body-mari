import { buttonsProps } from "./buttonsType"



const ButtonCarouselLeft = ({ slideAnterior, className }: buttonsProps) => {
    return (

        <div className={`${className}`}>
            <button onClick={slideAnterior} className="text-black text-[30px] opacity-50 cursor-pointer">❮</button>
        </div>


    )
}

export default ButtonCarouselLeft