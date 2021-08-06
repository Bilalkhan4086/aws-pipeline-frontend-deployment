import { navigate } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
   <Layout text="Home">
   
    Hello Bilal!<br/>
    <button
        onClick={()=>{navigate('/Home')}}>
            Go to Home
        </button>
    </Layout>
   )
}
