import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function RestrauntUpdate(props) {
    const [name, setname] = useState(null);
    const [address, setaddress] = useState(null);
    const [rating, setrating] = useState(null);
    const param = useParams();
    const [clicked,setclicked] = useState(false);
    const url = `http://localhost:8000/restaurant/${param.id}`;


    useEffect(() => {

        fetch(url).then((res) => {
            res.json().then((ans) => {
                setname(ans.name);
                setaddress(ans.address);
                setrating(ans.rating);
            })
        })
    }, [])

    function handleupdate() {
        setclicked(true);
        
        fetch(url, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body:
                JSON.stringify({name,address,rating})

        }).then((res) => {
            res.json().then((ans)=>{
               alert("Restaraunt details has been updated")
            })
        })
    }

    return (
        <div>
            <Navbar/>
            <input type="text" placeholder=" Enter name" onChange={(e) => setname(e.target.value)}></input> <br></br> <br></br>
            <input type="text" placeholder=" Enter address" onChange={(e) => setaddress(e.target.value)}></input> <br></br> <br></br>
            <input type="text" placeholder=" Enter rating" onChange={(e) => setrating(e.target.value)}></input> <br></br> <br></br>
            <button className= {clicked===true?"clicked":"b"}
             onClick={handleupdate} >Update</button>
        </div>
    );
}

export default RestrauntUpdate;