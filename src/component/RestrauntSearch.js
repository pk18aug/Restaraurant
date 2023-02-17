import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table,Container,Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function RestrauntSearch() {

    const [sdata, searchData] = useState([]);
    const [total, setTotal] = useState(false);
    const [lastsearch, setlastsearch] = useState("");
    function search(key) {
        setlastsearch(key);
        fetch("http://localhost:8000/restaurant?q=" + key).then(data => {
            data.json().then((resp) => {

                if (resp.length > 0) {
                    searchData(resp);
                } else {
                    searchData([]);
                    setTotal(true);

                }


            })
        })
    }
    function handledelete(id) {
        fetch("http://localhost:8000/restaurant/" + id, {
            method: "DELETE"
        }).then((res) => {
            res.json().then((ans) => {
                alert("deleted");
                search(lastsearch);
            })
        })
    }
    
    return (
        <Container>
            <Navbar/>
    
            <h1>Search Restaraunt</h1>

           
            <Form.Control type="text" onChange={(e) => search(e.target.value)}  placeholder="Search Restaurant" />
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Rating</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            sdata.map((val) => {
                               return <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.address}</td>
                                <td>{val.rating}</td>
                                <td><Link to={"/update/" + val.id}> <FontAwesomeIcon icon={faEdit} color="blue" /></Link>
                                    <span onClick={() => handledelete(val.id)} > <FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                            </tr>
                            })
                        }
                    </tbody>
                </Table>


                {
                    total==true ? <h1>No data found</h1> : null
                }
            </div>
        
        </Container>
    );
}
export default RestrauntSearch;

