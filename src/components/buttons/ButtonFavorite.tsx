import { Heart } from "lucide-react"
import { useState } from "react"
import { buttonsProps } from "./buttonsType"


const FavoriteButton = ({ nome }: buttonsProps) => {

    const [favoritos, setFavoritos] = useState('')

    const [clicado, setClicado] = useState(false)
    
    const aoClicar = () => {
        if (clicado === false) {
            setClicado(true)
            setFavoritos(nome??'')
        } else {
            setClicado(false)
        }
    }

    return (

        <button onClick={aoClicar} className="h-fit">
            <Heart className={`text-red-500 w-[40px] h-auto hover:opacity-50 cursor-pointer
                ${clicado === true ? 'fill-red-500' : 'fill-none'}`}/>
        </button>

    )
}

export default FavoriteButton