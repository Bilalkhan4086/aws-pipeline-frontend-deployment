import React from 'react';
import  Page1  from '../components/page1';
import  Page2  from '../components/page2';
import {  Router } from "@reach/router";
import {Link, navigate} from "gatsby"


const Home = () => {
    
    return (
        <div>
            Hay I am Home!!!
            <br/>
            <br/>
            <br/><br/>
    <button
        onClick={()=>{navigate('/About')}}>
            About
        </button>
            {/* <Link to="/Home/">Page1</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/Home/page2">Page2</Link>
            <Router basepath="/Home">
        <Page1 path="/" />
        <Page2 path="/page2" />
      </Router> */}
        </div>
    )
}
export default Home;