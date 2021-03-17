import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {Switch,Route} from 'react-router-dom';
import Example from './NavigationBar';
const App=()=>
{
    return(
        <>
        <Example />
         <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route component={Home}></Route>
        </Switch>
        </>
    )
}
export default App;