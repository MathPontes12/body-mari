import { TitleProps } from "./titleType"



const Title = ({ children }:TitleProps ) => {

    return (

        <h1 className="xl:text-[28px] text-[24px] text-ouroSecundaria font-fontePrimaria xl:my-[120px] my-[60px] xl:mx-0 mx-[30px]"> 
            {children} 
        </h1>

    )
}

export default Title