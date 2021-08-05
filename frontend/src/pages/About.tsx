import { navigate } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import styles from './About.module.css';

const About = () => {
    return (
        <Layout text="About">
        <div className={styles.myComponent}>
            About Page is there!
        </div><br/>
        <button
        onClick={()=>{navigate('/')}}>
            Index
        </button>
</Layout>

)
}
export default About;