import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SettingsNav(setting) {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true;
        }
    }

    return (
            <nav className="lg:text-sm lg:leading-6 relative">
                <ul>
                    <li>
                        <Link to='/settings/global' className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            Global
                        </Link>
                    </li>
                    <li>
                        <Link to='/settings/sources' className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            Sources
                        </Link>
                    </li>
                    <li>
                        <Link to='/settings/systems' className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            Systems
                        </Link>
                    </li>
                    <li>
                        <Link to='/settings/plugins' className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            Plugins
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default SettingsNav