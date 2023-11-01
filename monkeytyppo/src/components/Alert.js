

import React from 'react'

export default function Alert(props) {
     
    // const CapitalWord=(word)=>{
    //         let low=word.toLowerCase();
    //         return low.chartAt(0).toUpperCase() + low.slice(1);  
    // }

  return (
    <div  style={{height:'50px'}}>
       {props.alert && <div className="alert alert-success" role="alert">
         {props.alert.msg}:{props.alert.typ}
       </div>}
    </div>
    
  )
}
