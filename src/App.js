import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/App.css';
import DoctorsList from './components/ListOfDoctors';
import Info from './components/DoctorInfo';

import Home from './components/Home';
import About from './components/About';

const BasicExample = () => (
    <Router>
        <div className="list-group">
            {/*<header >*/}
                    {/*<Link to="/" >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                    {/*<Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}

                {/*<Link to="/listdoctors">List of Doctors</Link>*/}

            {/*</header>*/}

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/listdoctors" component={DoctorsList} />
            <Route path="/info/:id" component={Info}/>
        </div>
    </Router>
);

export default BasicExample;