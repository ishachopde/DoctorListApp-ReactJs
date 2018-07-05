import React, { Component } from 'react';
import {getDoctorInfo, getSimilarDoctors} from '../api/DoctorAPI';
import '../styles/App.css';
import doc from '../styles/doc.jpg';
class DoctorInfo extends Component {
    constructor(props){
        super(props);


    }

    renderDoctorNotFound() {
        return (
            <div>
                Doctor not found.
            </div>
        )
    }

    renderSimData(item) {
    return  item.map( (item) => (

    <div className="box-field">
        <table  key={item.id} style={{width:"20%", alignContent:"center"}}>

            <thead>
            <tr>
                <th style={{textAlign:"center"}}>List of Similar Doctors</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Id: &nbsp; &nbsp; &nbsp; {item.id}</td></tr>
                <tr><td>Name: &nbsp; &nbsp; &nbsp; {item.name}</td></tr>
                <tr><td>Gender: &nbsp; &nbsp;&nbsp; {item.gender}</td></tr>
                <tr><td>Email:  &nbsp; {item.email}</td></tr>
                <tr><td>Speciality: &nbsp;{item.speciality}</td></tr>

            </tbody>


        </table>
    </div>
        )
    )
};

    render() {
        const id = this.props.match.params.id;

        const info =  getDoctorInfo(id);
        let simDoctors = getSimilarDoctors(info.id, info.speciality);



        console.log(simDoctors);

        if(!id || !info)
            return this.renderDoctorNotFound();

        return (

            <div className="App">

                <header className="col-lg-3">

                    <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                        <a href="/" className="list-group-item">Home</a>
                        <a href="/about"  className="list-group-item">Problem definition</a>
                        <a href="/listdoctors" className="list-group-item">List of Doctors</a>

                    </h1>
                </header>



                            <table style={{width:"20%", alignContent:"center"}}>
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>Doctors Information</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr><td>Name: &nbsp; &nbsp; &nbsp; {info.name}</td></tr>
                                <tr><td>Gender: &nbsp; &nbsp;&nbsp; {info.gender}</td></tr>
                                <tr><td>Email:  &nbsp; {info.email}</td></tr>
                                <tr><td>Speciality: &nbsp;{info.speciality}</td></tr>
                                </tbody>

                            </table>



                <p className="info-para" style={{backgroundColor:'beige'}}> <b>Note:</b> Below is the list of Doctors with a similar "Speciality". The similarity classification is based on their speciality property</p>



                {this.renderSimData(simDoctors)}

            </div>

        );
    }
}

export default DoctorInfo;
