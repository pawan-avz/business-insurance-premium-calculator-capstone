import React from 'react'
import StepContext from './StepContext';

export default function StepProvider({children}) {

const [state, setstate] = React.useState(2);
  
  const changeBack=()=>{
      if(state>2){
          setstate(state-1)
      }
      

  }

  const changeNext=()=>{
      if(state<8){
          setstate(state+1)
      }
  
  }
  const resetStep=()=>{
      setstate(2)
  }

   React.useEffect(()=>{
       setstate(2)
   },[]);
   
   return(
       <StepContext.Provider value={{
           steps:state,
           changeBack,
           changeNext,
           resetStep
       }}>
           {children}
       </StepContext.Provider>
   )


}
