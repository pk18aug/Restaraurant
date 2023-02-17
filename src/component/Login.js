import React, { useState } from 'react'
import Navbar from './Navbar';
export default function Login(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        
        fetch("http://localhost:8000/login?q=" +name ).then(data => {
            data.json().then((resp) => {
                if(resp.length>0){
                    localStorage.setItem("login", JSON.stringify(resp));
                    props.history.push('list');
                }else{
                    alert("enter correct name or password");
                }
            })
        })
    }
    return (
        <div >
            <Navbar/>
            <h1 style={{marginLeft:'40vw',marginTop:'10vh'}}>Login</h1>
            <input style={{marginLeft:'40vw'}} type="text" placeholder='name' onChange={(e) => setName(e.target.value)} /> <br /> <br />
            <input style={{marginLeft:'40vw'}} type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
            <button style={{marginLeft:'40vw'}} onClick={handleLogin} >Login</button>
        </div>
    )
}
