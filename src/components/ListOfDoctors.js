import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import doc from '../styles/doc.jpg';
import { listDoctor, deleteDoctor } from '../api/DoctorAPI';

class ListOfDoctors extends Component {
    
    state = {
        doctors : listDoctor(),
    }

    // Render function to display the list of doctors
    renderDataOnScreen = (data) => {
        return data.map(data => (

            <tr key={data.id}>
                <td>
                    <p><Link to={`/info/${data.id}`}>{data.name}</Link></p>
                </td>

                <td>
                    <p>{data.speciality}</p>
                </td>
                <td><button onClick={this.deleteDoctor.bind(this, data.id)}>X</button></td>
            </tr>
        ))
    }

    deleteDoctor = id => {
        console.log(id);
        //deleteDoctor(id);
        this.setState({doctors: this.state.doctors.filter(doctor => doctor.id !== id)});
    }

    render() {
        return (
            <div className="App">
                {/*Header Bar*/}
                <header className="col-lg-3">

                    <h1 className="my-4"><img src={doc} className="image-header" />Doctor List App
                        <a href="/listdoctors" className="list-group-item">List of Doctors</a>
                        <a href="/" className="list-group-item">Home</a>
                        <a href="/about" className="list-group-item">Problem definition</a>


                    </h1>
                </header>

                <h1 className="App-head" style={{ textAlign: "center" }}> List of Doctors. Click their name to get complete information of the Doctors. </h1>

                <table>

                    <thead>
                        <tr>
                            <th> Name of Doctors </th>
                            <th> Speciality of Doctors</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/*List of Doctors Render*/}
                    <tbody>
                        {this.renderDataOnScreen(this.state.doctors)}
                    </tbody>



                </table>
            </div>

        );
    }
}

export default ListOfDoctors;
