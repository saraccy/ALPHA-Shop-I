import { createContext, useState } from "react";

const StepThreeContext = createContext();

export function StepThreeProvider({children}) {
  const [data, setData] = useState({
    cardName: '',
    cardNumber: '',
    date: '',
    cvc: '',
  });
     
  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  return (
     <StepThreeContext.Provider value={{data, setData, handleInputChange,}}>
      {children}
    </StepThreeContext.Provider>
  )
}

export default StepThreeContext;