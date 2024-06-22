import React, { createContext, useReducer, useState } from 'react'
import axios from 'axios'
import SettingsReducer from './SettingsReducer'

const initSettings = {settings:{}, error: null, loading: true};

export const SettingsContext = createContext(initSettings)

export const SettingsProvider = ({children}) => {
    const [state, dispatch] = useReducer(SettingsReducer, initSettings);
    const [settingsLoaded, setSettingsLoaded] = useState(false)

    async function fetchSettings() {
        if (!settingsLoaded){
            try {
                console.log("Fetching settings")
                const res = await axios.get('http://localhost:5050/api/settings')
                console.log(res.data[0])
                dispatch({
                    type: 'GET_SETTINGS',
                    payload: res.data[0]
                    
                })
                setSettingsLoaded(true)
            } catch (err) {
                dispatch({
                    type: 'SETTINGS_ERR',
                    payload: err
                })
            }
        } else {
            console.log("Settings already loaded.")
        }   
    }

    function updateSettings(settings){
        console.log("In SettingsContext, called updateSettings with settings=" + JSON.stringify(settings))
        dispatch({
            type: 'UPDATE_SETTINGS',
            payload: settings
        })
    }

    async function saveSettings(settings){
        console.log("In SettingsContext, called saveSettings with settings=" + JSON.stringify(settings))
        try {
            console.log("Saving settings")
            const res = await axios.put('http://localhost:5050/api/settings/'+settings._id, settings)
            dispatch({
                type: 'SAVE_SETTINGS',
                payload: settings
            })
            setSettingsLoaded(true)
        } catch (err) {
            dispatch({
                type: 'SETTINGS_ERR',
                payload: err
            })
        }
    }


    return (
        <SettingsContext.Provider value={{
            settings: state.settings,
            settingsLoaded,
            fetchSettings,
            updateSettings, 
            saveSettings
        }}>
            {children}
        </SettingsContext.Provider>
    )
}