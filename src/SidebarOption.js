import React from 'react'
import './SidebarOption.css'
function SidebarOption({ title, Icon, className}) {
    return (
        <div className="sidebarOption">
           {Icon && <Icon className={`${className} sidebarOption__icon`} />}

            <p className="sidebarOption__title" >{title}</p>
        </div>
    )
}

export default SidebarOption


