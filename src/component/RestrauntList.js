import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function RestrauntList() {
    const [lists, setlist] = useState([])
    useEffect(() => {
        listfetch();
    }, [])

    function listfetch() {
        fetch("http://localhost:8000/restaurant").then((res) => {
            res.json().then(ans => {
                setlist(ans);
            })
        })
    }

    function handledelete(id) {
        fetch("http://localhost:8000/restaurant/" + id, {
            method: "DELETE"
        }).then((res) => {
            res.json().then((ans) => {
                alert("deleted");
                listfetch();
            })
        })
    }
    return (

        <div >
            <Navbar/>
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
                    {lists.map((val) => {
                        return <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.rating}</td>
                            <td><Link to={"/update/" + val.id}> <FontAwesomeIcon icon={faEdit} color="blue" /></Link>
                                <span onClick={() => handledelete(val.id)} > <FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                        </tr>

                    }
                    )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default RestrauntList;