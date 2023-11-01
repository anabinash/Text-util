
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Alert from './Alert';


export default function TextForm() {
    
   const[text,setText]=useState(" ");
   const[darkLight,setDarkLight]=useState('light');
   const[alert,setAlert]=useState(null);
   const colorarray=["light",'dark','blue','cyan','green','indigo','pink'];
      
  //for alert components --->
  useEffect(()=>{
  
  })
    
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        typ:type
       })
       setTimeout(()=>{setAlert(null)},2000)
  }    
           
   const onchangeUpperHandler=(event)=>{
       setText(event.target.value);
      
   } 
   const onclickUpperHandler=()=>{
    const newText=text.toUpperCase();
    setText(newText);
    showAlert("convert to UpperCase","success")
    document.title="UpperCase Moode"
   } 
   const onclickLowerHandler=()=>{
    const newText2=text.toLowerCase();
    setText(newText2);
    showAlert("convert to LowerCase","success")
    document.title="LowerCase Moode"
   }
             
 const onclickClearHandler=()=>{
   let clearText=text.substring(text.length,text.length);
   setText(clearText);
   showAlert("Clear","success")
   document.title="Clear Moode"
 }

const onclickCopyHandler=()=>{
     var txt=document.getElementById("exampleFormControlTextarea1");
     txt.select();
     navigator.clipboard.writeText(txt.value);
}

 const bodyRemove=()=>{
       document.body.classList.remove('bg-primary')
       document.body.classList.remove('bg-secondray')
       document.body.classList.remove('bg-success')
       document.body.classList.remove('bg-warning')
       document.body.classList.remove('bg-danger')
         
 }

 const toggling=(cls)=>{
      
        bodyRemove();
       document.body.classList.add('bg-'+cls);
       document.head.classList.add('bg-'+cls);
      
      if(darkLight=='light'){
        setDarkLight('dark');
        document.body. style.backgroundColor='grey';
        showAlert("dark mode is enabled","success")
        document.title="Dark-Mood Enable"
        setInterval(()=>{document.title="dark moode enable"},1000) 
        setInterval(()=>{document.title="light moode enable"},2000)
      }
      else{ 
      setDarkLight("light");
      document.body.style.backgroundColor='white'
      showAlert("white mode is enabled","success")
      document.title="Light-Mood Enable"
      }
 }
    
  return (

<div classNameName='textForm_container'>
  <div> 
    <Alert alert={alert}  /></div>
    <div>
    <Navbar  mode={darkLight}  togglmode={toggling}/> 
    </div>

<div className="mb-3">
  
</div>
<div className="mb-5">
 <label for="exampleFormControlTextarea1" className="form-label"  > <h4>TextArea</h4></label>
 <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={onchangeUpperHandler} placeholder='write something'></textarea>
 </div>
 <div>

 <button type="button" disabled={text.length ===0}  style={{margin:"0.5rem"}} className="btn btn-primary" onClick={onclickUpperHandler}>Upper Case</button>
 <button type="button" disabled={text.length ===0}  style={{margin:"1rem"}} className="btn btn-primary" onClick={onclickLowerHandler} >Lower Case</button>
 <button type="button" disabled={text.length ===0} style={{margin:"0.5rem"}} className="btn btn-primary" onClick={onclickClearHandler} >clear</button>
 <button type="button"  disabled={text.length ===0}  style={{margin:"0.3rem" }} className="btn btn-primary" onClick={onclickCopyHandler} >copy</button>
 <h3>Total Count of character is={text.length===1?text.length-1:text.length} and word is={text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</h3>

 <h5>Word per minutes={text.length*0.025}(Wpm)</h5>
 <h5>Word per second={text.length*1.5}(Wps)</h5>

 </div>
              
 <div  className='previewCls'>
    <h2>Preview: </h2>
    <p>{text.length>0? text:"Nothing to Preiew"}</p>
 </div>
     
    </div>
  )
}
