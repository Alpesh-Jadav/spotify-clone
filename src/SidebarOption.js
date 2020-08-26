import React from 'react'
import './SidebarOption.css'
function SidebarOption({ title, Icon, className}) {
    return (
        <div className="sidebarOption">
           {className ? <Icon className={`${className} sidebarOption__icon`} /> : <Icon className="sidebarOption__icon" /> }
            {Icon ? <h4 className="sidebarOption__title">{title}</h4> : <p className="sidebarOption__title" >{title}</p> }
        </div>
    )
}

export default SidebarOption


