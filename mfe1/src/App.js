import React, {Suspense, useState, useEffect} from "react";
import RemoteApp from 'app2/App'
import RemoteApp3 from 'app3/App'

const App = () => {
  const [input,setInput] = useState("");

  useEffect(()=>{

  },[]);

  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>Product Listing</h1>

          <input type="text" value={input}  onChange={ (e)=>setInput(e.target.value)}/>   // adding search here
 
      </div>
      <RemoteApp/>
      <RemoteApp3/>
    </div>)
}


export default App;
