import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Reveal, Button } from 'semantic-ui-react'
// import { Button } from 'react-bootstrap'
import '../PageStyle/Staff.css'
import StaffDataService from "../services/staffs.services";


const Staff = ({ getStaffId }) => {

    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        getStaffs();
    }, [])

    const getStaffs = async () => {
        const data = await StaffDataService.getAllStaffs();
        console.log(data.docs);
        setStaffs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    const deleteHandler = async (id) => {
        await StaffDataService.deleteStaff(id);
        getStaffs();
    }


    return (
        <div className='container-fluid Scroll'>
            <div className='ui dividing header'>
                <h1>Staff Management
                    <Link to={'/addstaff'}>
                        <button className='ui black medium icon button right floated '>
                            <i aria-hidden="true" class=" user plus large icon" id="addStaff">
                            </i>
                        </button>
                    </Link>
                </h1>
            </div>
            {/* <pre>{JSON.stringify(staffs, undefined, 2)}</pre> */}
            <div>

                <div className='ui five cards'>
                    {staffs.map((doc) => {
                        return (
                            <div class="ui card" key={doc.id}>
                                <div class="image">
                                    <Image src={"https://react.semantic-ui.com/images/avatar/large/matthew.png"} />
                                </div>
                                <div class="content">
                                    <Link to="/staffdetails" style={{ textDecoration: 'none' }}>
                                        <div
                                            className='ui button center aligned container inline'
                                            onClick={(e) => getStaffId(doc.id)}
                                        >
                                            <div class="ui header">{doc.fname}</div>
                                            {/* <div class="description">{doc.email}</div> */}
                                            <div class="description">{doc.job}</div>

                                            <div className='ui extra content'>ID : {doc.staff}</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="ui extra content fluid inline container">
                                    <div className="ui  container">
                                        <Link to={'/qrview'}>
                                            <div
                                                className='ui tiny black circular icon button left floated item'>
                                                <i aria-hidden="true" class=" qrcode large icon" id="addStaff">
                                                </i>
                                            </div>
                                        </Link>
                                        <div
                                            className='ui tiny negative circular icon button right floated item'
                                            onClick={(e) => deleteHandler(doc.id)}>
                                            <i aria-hidden="true" class=" trash large icon" id="addStaff">
                                            </i>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        );
                    })}
                </div>

            </div>
            <br /><br /><br /><br />
        </div >
    );
};

export default Staff;
