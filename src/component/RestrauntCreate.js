import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function RestrauntCreate() {

    const [name, setname] = useState(null);
    const [address, setaddress] = useState(null);
    const [rating, setrating] = useState(null);
    function handlecreate() {
        const val = { name, address, rating };

        fetch('http://localhost:8000/restaurant',
            {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(val)
            }
        ).then((res) => {
            res.json().then(()=>{
                console.log(res);
            })
        })
    }


    return (
        <div>
            <Navbar/>
             <h1 style={{marginLeft:'30vw',marginTop:'10vh'}}>Create New Restaraunt</h1>
            <input style={{marginLeft:'40vw'}} type="text" placeholder=" Enter name" onChange={(e) => setname(e.target.value)}></input> <br></br> <br></br>
            <input style={{marginLeft:'40vw'}} type="text" placeholder=" Enter address" onChange={(e) => setaddress(e.target.value)}></input> <br></br> <br></br>
            <input style={{marginLeft:'40vw'}} type="text" placeholder=" Enter rating" onChange={(e) => setrating(e.target.value)}></input> <br></br> <br></br>
            <button style={{marginLeft:'40vw'}} onClick={handlecreate} >Create</button>

        </div>
    );
}

export default RestrauntCreate;