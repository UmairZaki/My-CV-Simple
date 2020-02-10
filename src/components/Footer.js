import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                    <li>
        <a href="https://www.facebook.com/umair.zaki.12" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
        </li>
        <li>
        <a href="https://stackoverflow.com/users/12326848/umairzaki" target="_blank" className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a>
        </li>
        <li>
        <a href="https://github.com/UmairZaki" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/umair-zaki-8353a918b/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Umair Zaki | 03132873668</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
