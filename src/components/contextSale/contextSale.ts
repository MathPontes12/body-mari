import { createContext } from "react";
import { ContextSaleProps } from "./contextSaleType";


const ContextSale = createContext<ContextSaleProps | undefined>(undefined)

export default ContextSale