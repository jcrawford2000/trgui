import React from 'react'

function Header() {
    return (
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
        
    </div>)
}

export default Header