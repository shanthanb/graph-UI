import React from 'react'
import logo from '../../assets/logo.jpg';

function Navbar() {
    return (
        <div className="is-flex" style={{borderBottom: "1px solid lightgray"}}>
            <img src={logo} alt="Logo" style={{height: "20px", width: "20px", margin: "auto 10px"}}></img>
            <ul className="is-flex" style={{listStyle: "none", width: "100%"}}>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="fa fa-database" aria-hidden="true" style={{color: "rgb(94, 151, 211)", marginRight: "5px"}}></i>Data Library
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="fas fa-code-branch" style={{color: "rgb(94, 151, 211)", transform: "rotate(90deg)", marginRight: "5px"}}></i>Workflows
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="far fa-play-circle" style={{color: "rgb(94, 151, 211)", marginRight: "5px"}}></i>Scheduler
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="fa fa-bug" aria-hidden="true" style={{color: "rgb(94, 151, 211)", marginRight: "5px"}}></i>Error Manager
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="far fa-comment-dots" style={{color: "rgb(94, 151, 211)", marginRight: "5px"}}></i>Notifications
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none"}}>
                    <li style={{margin: "5px 10px"}}>
                        <i className="fas fa-chart-line" style={{color: "rgb(94, 151, 211)", marginRight: "5px"}}></i>Reports
                    </li>
                </button>
                <button className="button" style={{background: "none", border: "none", outline: "none", marginLeft: "auto"}}>
                    <i className="far fa-question-circle" color= "rgb(129, 129, 129)"></i>
                </button>
                <button  className="button" style={{background: "none", border: "none", outline: "none", paddingLeft: "0px"}}>
                    <i className="fas fa-prescription" color= "rgb(129, 129, 129)"></i>
                </button>
            </ul>
        </div>
    )
}

export default Navbar
