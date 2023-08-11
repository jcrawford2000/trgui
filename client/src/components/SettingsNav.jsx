import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SettingsNav(setting) {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        console.log("Location:" + location.toString())
        console.log("location.pathname:" + location.pathname)
        console.log("route:" + route)
        if(route === location.pathname) {
            console.log("Route Matches")
            return true;
        }
        else
        {
            return false;
        }
    }

    const cssClass = (route) => {
        var base = "block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 "
        var textColor = pathMatchRoute(route) ? "font-semibold text-sky-500 dark:text-sky-400" : "dark:text-slate-400 dark:hover:text-slate-300";
        console.log(textColor)
        var classes = base + textColor
        return classes
    }

    return (
            <nav className="lg:text-sm lg:leading-6 relative">
                <ul>
                    <li index="1">
                        <Link to='/settings/global' className={cssClass("/settings/global")}>
                            Global
                        </Link>
                    </li>
                    <li index="2">
                        <Link to='/settings/sources' className={cssClass("/settings/sources")}>
                            Sources
                        </Link>
                    </li>
                    <li index="3">
                        <Link to='/settings/systems' className={cssClass("/settings/systems")}>
                            Systems
                        </Link>
                    </li>
                    <li index="4">
                        <Link to='/settings/plugins' className={cssClass("/settings/plugins")}>
                            Plugins
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default SettingsNav