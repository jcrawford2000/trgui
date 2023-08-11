import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import SettingsNav from '../components/SettingsNav'
import SettingItem from '../components/SettingItem'

function SourcesSettings() {
    const [settingsObj, updateSettingsObj] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        axios
           .get('http://sparrow.lan:5050/api/settings')
           .then((res) => {
            updateSettingsObj(res.data[0]);
            console.log(res.data[0]);
            setIsLoading(false);
           })
           .catch((err) => {
            console.log("Error retrieving settings!\n" + err);
           });
    },[])

    const content = () => {
        if(isLoading) {
            return(<p>Loading...</p>)
        }
        else
        {
            return(
                <>
                <div className="lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto ">
                    <header>
                        <p className="group flex items-center lg:text-lg lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                            Settings
                        </p>
                    </header>
                    <SettingsNav setting={params.setting}/>
                </div>  
                </>
            )
        }
    }

    return (content())

}

export default SourcesSettings