import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';
import doc from '../styles/doc.jpg';
import {listDoctor}   from '../api/DoctorAPI';

class ListOfDoctors extends Component {
    constructor(props){
        super(props);
    }

    renderDataOnScreen = (data) => {
        return data.map( data => (

            <tr key={data.id}>
            <td>
                <p><Link to={`/info/${data.id}`}>{data.name}</Link></p>
            </td>

            <td>
                <p>{data.speciality}</p>

                 </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="App">
                <header className="col-lg-3">

                    <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                        <a href="/" className="list-group-item">Home</a>
                        <a href="/about"  className="list-group-item">Problem definition</a>
                        <a href="/listdoctors" className="list-group-item">List of Doctors</a>

                    </h1>
                </header>

                <h1 className="App-head"> List of Doctors. Click the speciality to get complete information of the Doctors. </h1>

                <table>

                    <thead>
                    <tr>
                        <th> Name of Doctors </th>
                        <th> Speciality of Doctors</th>

                    </tr>
                    </thead>

                    <tbody>
                    {this.renderDataOnScreen(listDoctor())}
                    </tbody>



                </table>
            </div>

        );
    }
}

export default ListOfDoctors;
