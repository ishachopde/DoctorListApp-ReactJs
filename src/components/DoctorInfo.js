import React, { Component } from 'react';
import {getDoctorInfo, getSimilarDoctors} from '../api/DoctorAPI';
import '../styles/App.css';
import doc from '../styles/doc.jpg';
import doctor from '../styles/doctorimg.jpg';
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

            <div className="col-lg-4 col-md-6 mb-4">
                {/*<h1>List of Similar Doctors</h1>*/}
                <div id="leftdoc">

                   <img className=" doctor-img" src={doctor} alt=""/>


                            <table  key={item.id} style={{width:"auto", alignContent:"center", margin:"2px"}}>
                                <tbody>
                                <tr><td>Id: &nbsp; &nbsp; &nbsp; {item.id}</td></tr>
                                <tr><td>Name: &nbsp; &nbsp; &nbsp; {item.name}</td></tr>
                                <tr><td>Gender: &nbsp; &nbsp;&nbsp; {item.gender}</td></tr>
                                <tr><td>Email:  &nbsp; {item.email}</td></tr>
                                <tr><td>Speciality: &nbsp;{item.speciality}</td></tr>

                                </tbody>
                            </table>
                </div>
            </div>

    </div>
        )
    )
};

    render() {
        const id = this.props.match.params.id;

        const info =  getDoctorInfo(id);
        // getSimilarDoctors() gives a list of similar doctors based on the speciality, like ophthalmologist etc.
        let simDoctors = getSimilarDoctors(info.id, info.speciality);



        console.log(simDoctors);

        if(!id || !info)
            return this.renderDoctorNotFound();

        return (

            <div className="App">

                <header className="col-lg-3">

                    <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                        <a href="/listdoctors" className="list-group-item">List of Doctors</a>
                        <a href="/" className="list-group-item">Home</a>
                        <a href="/about"  className="list-group-item">Problem definition</a>


                    </h1>
                </header>

                <div className="box-field">

                    <div className="col-lg-4 col-md-6 mb-4">
                        {/*<h1>List of Similar Doctors</h1>*/}
                        <div id="rightdoc">

{/*Displays Doctors info*/}
                            <a href="#"><img className=" doctor-img" src={doctor} alt=""/></a>
                            <div className="card-body">
                                <table  style={{width:"20%", alignContent:"center", marginTop:"5px", marginLeft:"675px"}}>
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

                            </div>

                        </div>
                    </div>

                </div>


                <p className="info-para" style={{backgroundColor:'beige', textAlign:"center"}}> <b>Note:</b> Below is the list of Doctors with a similar "Speciality". The similarity classification is based on their speciality property</p>


                <h1>List of Similar Doctors</h1>
                {this.renderSimData(simDoctors)}

            </div>

        );
    }
}

export default DoctorInfo;
