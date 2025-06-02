import { buttonsProps } from "./buttonsType"



const ButtonCarouselRight = ({ slideProximo, className }: buttonsProps) => {
    return (

        <div className={`${className}`}>
            <button onClick={slideProximo} className="text-black text-[30px] opacity-50 cursor-pointer">❯</button>
        </div>


    )
}

export default ButtonCarouselRight