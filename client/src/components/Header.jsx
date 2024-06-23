import React from 'react'

function Header() {
   /* return (
    <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
        <div className='max-w-8xl mx-auto'>
            <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
                <div className="relative flex items-center">
                    <p className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto text-2xl leading-6 font-bold text-slate-700 dark:text-slate-100">
                        trunk recorder
                    </p>
                </div>
            </div>
        </div>
        
    </div>)*/
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li><a href="/stats">Stats</a></li>
        <li><a href="/settings">Config</a></li>
        <li><a href="/active">Active Incidents</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <p className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto text-2xl leading-6 font-bold text-slate-700 dark:text-slate-100" >trunk recorder</p>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
    )
}

export default Header