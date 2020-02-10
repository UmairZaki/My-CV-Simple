import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/pic01.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Umair Zaki</h1>
                    <p>Web Developer UI - JAMStack<br />
                    Machine Learning AI Services
                     </p>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
