import React from 'react';
import doc from '../styles/doc.jpg';
import reactimg from '../styles/reactimg.png';
import smile from '../styles/smile.jpg';

const About = () => (
    <div className="App">
        <header className="col-lg-3">

            <h1 className="my-4"><img src={doc} className="image-header"/>Doctor List App
                <a href="/listdoctors" className="list-group-item">List of Doctors</a>
                <a href="/" className="list-group-item">Home</a>
                <a href="/about"  className="list-group-item">Problem definition</a>


            </h1>
        </header>

        <div id="wrapper">
            <div id="leftcolumn">
                <p className="info-para"> DoctorList App is a simple	web	application which allows you to	<b>view a	list	of	doctors</b>.
               Users	can	browse	for
                    doctors	given	a	specific	specialty,	area,	review	score	etc. When	a	doctor	is	selected,	display their	details,	along	with a	list	of	similar doctors, in	a
                    prioritized	order.
                </p>
                <p className="note-para"> <a href="/about" ><b>Problem Definition:</b></a>It has information about the assumptions done and features implemented as stated in the test.</p>
                <p className="notes-para"><a href="/listdoctors" ><b>List of Doctors:</b></a> It has the list of doctors which is the first requirement of the problem definition</p>

            </div>
            <div id="rightcolumn">
                <p className="info-para"><b>Answers to some basic questions in the test pdf.</b></p>
                <p className="info-para"><b>Q.</b> You	define	what	<i><b>similar</b></i> means	and	the	result	ordering,	but	clearly	document	any
                    assumptions in	your code.<br/>
                    <b>=></b> similarity is taken based on the <i><b>speciality of the doctor</b></i>, such as gynaecologist, paediatrician etc.</p>

                <p className="info-para"><b>Q.</b> Before	you	start,	estimate	how	long	you	think	you	will	work	on	this	exercise
                    (recommendation	is	no	more	than	two	hours). Submit	the	amount	of	time	you	actually
                    spent	on	this	exercise.<br/>
                    <b>=></b> The "basic implementation" such as displaying the information of the doctor and a similar list took approximately 2 hrs.
                </p>
                <p className="info-para"><b>Q.</b> Given	more	time,	explain	what	other	changes	you'd	like	to	make,	or	things	you	would
                    want to	improve	on.<br/>
                    <b>=></b> UI can be made more attractive. More features can be added such as:<br/> 1. Login and Register page.<br/>2. Making Appointments online. <br/>3. Feedback forms on the Doctors.
                </p>

            </div>

        </div>

        {/*<div id="wrapper">*/}
            {/*<div id="img-left"> <img src={reactimg} className="react-img"/></div>*/}

            {/*<div id="img-right"><p style={{color:"black"}}> == I was used to build the DoctorList App. <img src={smile} className="smile"/> </p></div>*/}
        {/*</div>*/}




    </div>
);

export default About;