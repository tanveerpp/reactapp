import React from 'react';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {Switch,Route} from 'react-router-dom';
import SimpleTabs from './NavigationBar';
const Home=()=>
{
    return(
        <>
            <div className="container-fluid mt-3">
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h1 className="text-primary text-center">Programmers Point</h1>
                        <h2 className="text-center">Best Traaining In indore</h2>
                    </div>
                    <div className="col-sm-6">
                        <img className="img-fluid rounded-circle" src="https://directory.edugorilla.com/wp-content/uploads/sites/6/2017/03/13707782_1118871901512509_4331705515405854508_n.jpeg" alt="no" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;