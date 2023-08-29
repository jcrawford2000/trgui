import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import SettingsNav from './SettingsNav'
import Source from './Source';


const Sources = () => {
  const { settings, fetchSettings } = useContext(SettingsContext)

  useEffect(() => {
    fetchSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if (settings === undefined || settings === null || Object.keys(settings).length === 0 ) {
    console.log("Waiting for settings....")
    return(<p>Loading...</p>)
  }

  const sourceAccordian = () => {
    return settings.sources.map(src => {
      console.log("Creating according for source " + src.shortName + " with ID " + src._id)
      return(
        <div key={src._id} className='collapse collapse-plus bg-base-20'>
          <input type='checkbox'  />
          <div className='collapse-title text-xl font-medium'>
            {src.shortName}
          </div>
          <div className='collapse-content'>
            <Source source_id={src._id}/>
          </div>
        </div>
      )
    }) 
  }

  return (
    <>    
    <SettingsNav/>
    <div className='lg:pl-[19.5rem]'>
        <div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
            <header className='relative z-20'>
                <p className="group flex items-center lg:text-lg lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                    Sources
                </p>
            </header>
            {sourceAccordian()}
        </div>
    </div>    
    
    </>
  )
}

export default Sources
