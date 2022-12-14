import React, { useEffect, useState } from 'react';
import { Table, Icon, Header, Form, Button, Card } from 'semantic-ui-react'
import AttenDataService from "../services/attendance.services";


const options = [
    { key: 'n', text: 'Name', value: 'name' },
    { key: 'i', text: 'ID', value: 'id' },
]



const Attendance = ({ getStaffId, onSearchFilterSelected }) => {

    const [attendance, setAttendance] = useState([]);
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        getAttendance();
        // searchFilter ();   
        dateFilter ();   
    }, [])
    
    const getAttendance = async () => {
        const data = await AttenDataService.getAllAttendance();
        console.log(data.docs);
        setAttendance(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    function searchFilter (e)  {
        console.log(search)
     
    }

    let dateFilter = async(e) => {
        console.log(year, month, date)
    }

    function selectValueChanged (event) {
        console.log(event.target.value)
    }

    return (
        <div className='container-fluid Scroll'>

            <div className='ui dividing header'>
                <h1>Attendance Management</h1>
            </div>
            {/* <pre>{JSON.stringify(attendance, undefined, 2)}</pre> */}
            <div  >
                <Header as='h3' block >
                    <Form onSubmit={searchFilter}>
                        <Form.Group inline className='ui center aligned container'>
                            <Form.Select inline
                                fixed
                                label='Search by'
                                options={options}
                                placeholder='Search by'
                                width={5}
                                onChange={selectValueChanged}
                            />
                            <Form.Input
                                fluid label=''
                                placeholder='Type Here'
                                width={7}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button secondary icon type='submit' >
                                <Icon inline name='search' />
                            </Button>
                        </Form.Group>
                    </Form>
                    <hr />
                    <Form onSubmit={dateFilter}>
                        <Form.Group inline>
                            <Form.Input label='Date' placeholder='xx' width={6} type='number' onChange={(e) => setDate(e.target.value)}/>
                            <Form.Input label='Month' placeholder='xx' width={4} type='number' onChange={(e) => setMonth(e.target.value)}/>
                            <Form.Input label='Year' placeholder='xxxx' width={6} type='number' onChange={(e) => setYear(e.target.value)}/>
                            <Button secondary>Filter</Button>
                        </Form.Group>
                    </Form>

                </Header>
            </div>
            <br />
            <div>
                <div>
                    <Table celled >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Department</Table.HeaderCell>
                                <Table.HeaderCell>Time</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {attendance.map((doc) => {
                            return (
                                <Table.Body >

                                    <Table.Row>
                                        <Table.Cell>{doc.Date}</Table.Cell>
                                        <Table.Cell>{doc.StaffID}</Table.Cell>
                                        <Table.Cell>{doc.name}</Table.Cell>
                                        <Table.Cell>{doc.department}</Table.Cell>
                                        <Table.Cell>{doc.time}</Table.Cell>
                                        <Table.Cell positive><Icon name='checkmark' />Present</Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            )
                        })}
                    </Table>
                </div>


            </div>
        </div>
    )




};

export default Attendance