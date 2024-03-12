import { useState } from "react"
import {Link} from 'react-router-dom'

const Sidebar = () => {

    const [sidebarStatus, setSidebarStatus] = useState(false)
    const [sidebarDropdownStatus, setSidebarDropdownStatus] = useState(false)

    const sidebarToggle = () => {
        setSidebarStatus(!sidebarStatus)
    }

    const sidebarDropdownToggle = () => {
        setSidebarDropdownStatus(!sidebarDropdownStatus)
    }

    return(
        <>
            <link rel="stylesheet" href="/assets/css/sidebar.css" />
            <div className={"sidebar "+`${sidebarStatus ? 'sidebar-animation' : 'sidebar-animation-in'}`} id="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-container">
                        <h3 className="sidebar-title">ToDo List</h3>
                        <i onClick={sidebarToggle} className="fa-solid fa-bars sidebar-menu" tabIndex="0" id="sidebar-toggle"></i>
                    </div>
                </div>
                <Link to="/" className="sidebar-item"><i className="fa-solid fa-house sidebar-icon"></i> Dashboard</Link>
                <Link to="https://github.com/Zidaan16" className="sidebar-item"><i className="fa-solid fa-link sidebar-icon"></i> Zidaan16/Sidebar</Link>
                <div onClick={sidebarDropdownToggle} className={"sidebar-item "+`${sidebarDropdownStatus ? 'dropdown-active' : ''}`} id="dropdown-toggle"><i className="fa-solid fa-table-cells-large sidebar-icon"></i> Lists <i className={"fa-solid fa-caret-up dropdown-icon "+`${sidebarDropdownStatus ? 'caret-animation' : ''}`} id="dropdown-caret"></i></div>
                <div className={`${sidebarDropdownStatus ? 'dropdown-menu' : 'dropdown-hide'}`} id="dropdown-menu">
                    <Link to="/add" className="dropdown-item"><i className="fa-solid fa-plus sidebar-icon"></i> Add</Link>
                </div>
                <Link to="#" className="sidebar-item"><i className="fa-solid fa-gear sidebar-icon"></i> Settings</Link>
            </div>
        </>
    )
    
}

export default Sidebar