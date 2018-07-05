import React from 'react';
import '../styles/styles.css';
import doc from '../styles/doc.jpg';
import hosp from '../styles/hospital.jpg';
const Home = () => (

    <div className="App">



            <header className="col-lg-3">

                <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                    <a href="/listdoctors" className="list-group-item">List of Doctors</a>
                    <a href="/" className="list-group-item">Home</a>
                    <a href="/about"  className="list-group-item">Problem definition</a>


                </h1>
            </header>
        <div className="container">
        <img src={hosp} className="img-hosp"/>
        <div className="middle">
            <div className="text">DoctorList App gives you a list of Doctors followed with similar doctors in prioritized order</div><br/>
            <div className="text">Explore the tabs in the header for more features</div>

        </div>
        </div>


    </div>
);

export default Home;