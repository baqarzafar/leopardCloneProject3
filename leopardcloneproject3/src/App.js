

import { useState } from "react"
import leopard    from "./leoparLogo.png"
import NavIcon    from "./NavIcon.jpg"
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import "./App.css"


let  store = createSlice({
  name:"UI",
  initialState:{width1 : "50vh"},
  reducers:{
    hide:(state , action)=>{
     state.width1 = action.payload
   }
   , show: (state ,action)=>{
      state.width1 = action.payload
   }
  }
})

// let addtodo = store.actions.addtodo
// let removetodo = store.actions.removetodo
export let store2 = configureStore({
    reducer:store.reducer
})
let hide = store.actions.hide
let show = store.actions.show





function Header(){
    let dispatcht  =  useDispatch()
      const data =  useSelector((data)=>data)
      console.log(data)

   function hideandshow(){
        if(data.width1 === "0vh"){
          dispatcht(hide("50vh"))
        }
        else{
          
          dispatcht(hide("0vh"))
        }
   }

 
  return(
    <div style={{width:"210vh" , height:"10vh" , backgroundColor:"#FDDA0D" , display:"flex" , justifyContent:"start" }}> 

       <div style={{display:"flex" , alignItems:"center"}}><img onClick={()=>{ hideandshow()}}    src={NavIcon} style={{ width:"50px"}}></img></div>

       <h1>E Com Portal</h1>

    </div>
  )
}






function Nav(){
 
  const data  =  useSelector((data)=>data)

  console.log(data.width1)
   let array = [

    "Dashboard",
    "Real Time Activity",
    "Manage",
      "Manage Client", 
      "Manage Booking",
      "Report Manager",
      "Bank Transaction",
      "Tutorial" ,
      "Contact" ,
      "Details"]
    return(

      <div  style={{  height:"100vh" , backgroundColor:"black" , width:data.width1, transition: "width 0.5s ease" , overflow:"scroll"}}     >
      <div><img src={leopard}></img></div>
      <div style={{color:"white" , display:"flex" , justifyContent:"start" , border:"solid white" }}>  <div style={{}}><h3>General</h3></div></div>

        <div style={{}}>
       {array.map((data)=>{
           return(

            <div className="mydiv"    style={{color:"white" , display:"flex" , justifyContent:"start"}}>
              <h3>{data}</h3>
            </div>
           )
       })}
        </div>
      </div>
    )

}



function Footer(){

  return(
    <div  style={{backgroundColor:"black" , width:"210vh" , border:"solid yellow" , height:"10vh"}}     >


    </div>
  )
}




function App() {
  return (
 
       
 <Provider store={store2}>
  <div
      className="App"
      style={{
        display: "flex",
       
   
       
      }}
    >
    <div>
      
         <Nav />
    </div>
        <div style={{display:"flex" , justifyContent:"space-between" , flexDirection:"column"}}>


          <Header />


          <Footer></Footer>
     
        </div>
     
     
     
        
        
        
        

 
 
  
     

    </div>
 </Provider>
  );
}

export default App;
