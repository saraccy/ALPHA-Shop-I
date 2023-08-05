import { createContext, useState } from "react";

const ShippingContext = createContext();

export function ShippingProvider({children}) {
  const [selectedOption, setSelectedOption] = useState("0");
  function handleInputChange(e) {
    setSelectedOption(e.target.value);
  }
  return (
     <ShippingContext.Provider value={{selectedOption, setSelectedOption, handleInputChange}}>
      {children}
    </ShippingContext.Provider>
  )
}

export default ShippingContext;