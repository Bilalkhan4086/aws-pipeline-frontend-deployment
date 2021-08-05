import React, { ReactNode } from 'react'

type layoutprops={
    chidern:ReactNode,
    text:string
}

const Layout = ({ children,text}) => {
    return (
        <div>
            {text} is here is Layout! 
            {children}
        </div>
    )
}
export default Layout;