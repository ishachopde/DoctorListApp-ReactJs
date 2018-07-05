import React from 'react';
import '../styles/styles.css';
import doc from '../styles/doc.jpg';
const Home = () => (

    <div className="App">



            <header className="col-lg-3">

                <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                    <a href="/" className="list-group-item">Home</a>
                    <a href="/about"  className="list-group-item">Problem definition</a>
                    <a href="/listdoctors" className="list-group-item">List of Doctors</a>

                </h1>
            </header>

            <p className="info-para"> Write a	simple	web	application which allows you to	<b>view a	list	of	doctors</b>.</p>
            <p className="info-para">Users	can	browse	for
            doctors	given	a	specific	specialty,	area,	review	score	etc.	</p>
            <p className="info-para">When	a	doctor	is	selected,	display their	details,	along	with a	list	of	similar doctors, in	a
                prioritized	order.	</p>

            <p className="note-para"> <a href="/about"  className="notes-para">Problem Definition:</a>It has information about the assumptions done and features implemented as stated in the test.</p>
            <p className="notes-para"><a href="/listdoctors" className="notes-para">List of Doctors:</a> It has the list of doctors which is the first requirement of the problem definition</p>


    </div>
);

export default Home;