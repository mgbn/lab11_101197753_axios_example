import React, { Component } from 'react'
import axios from 'axios'
import { Button, Card, Img, Title, Body, Text } from 'react-bootstrap';


export default class PersonList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }



    componentDidMount() {
        this.getUserData()
    }


    // jsonplaceholder.typicode.com/users  
    getUserData = () => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data)
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => console.log(error))
    }




    render() {
        return (

            <div>

                <Button onClick={this.getUserData} variant="primary"> Get User Data</Button>
                <br /><br /><br />
                <h1 style={{backgroundColor: "lightblue"}}>User List</h1>
                <div className="card-deck">
                    {

                        this.state.persons.map(u => (

                            <div class="card">

                                <div className="card-body" style={{backgroundColor: "lightgreen"}}>
                                    <img src={u.picture.large} alt={this.props.src} style={{ width: "300px" }} />
                                    <p className="card-title">User Name: {u.login.username}</p>
                                    <p className="card-title">Gender: {u.gender}</p>
                                    <p className="card-title">Time Zone Description: {u.location.timezone.description}</p>
                                    <p className="card-title">Address: {u.location.street.number} {u.location.street.name}, {u.location.state}, {u.location.country}- {u.location.postcode}</p>
                                    <p className="card-title">Email: {u.email}  </p>
                                    <p className="card-title">Birth Date and Age: {u.dob.date} ({u.dob.age})</p>
                                    <p className="card-title">Registered Date: {u.registered.date} </p>
                                    <p className="card-title">Phone#: {u.phone} </p>
                                    <p className="card-title">Cell#: {u.cell}</p>

                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        )
    }
}
