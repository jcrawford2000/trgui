import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext';
import SettingsNav from './SettingsNav'
import SettingItem from './SettingItem'

/* eslint eqeqeq: 0 */
const Global = () => {
    const { settings, fetchSettings, updateSettings, saveSettings } = useContext(SettingsContext)
    const [ isChanged, setIsChanged ] = useState(true)

    useEffect(() => {
        fetchSettings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    if (settings === undefined || settings === null || Object.keys(settings).length === 0 ) {
        console.log("Waiting for settings....")
        return(<p>Loading...</p>)
    }

    function onSettingChange(e){
        setIsChanged(false)
        let targetValue
        if (e.target.type=='checkbox') {
            targetValue = e.target.value.checked
        } 
        else if (e.target.type=='textarea') {
            targetValue = e.target.value.split('\n').map(el => {
                let n = Number(el)
                return isNaN(n) ? el : n
            })
        }
        else {
            targetValue = e.target.value
        }

        updateSettings({...settings, [e.target.name]: targetValue})
    }

    function onSettingsSave(e){
        e.preventDefault();
        saveSettings(settings);
        setIsChanged(true)
    }

  return (
    <>
        <SettingsNav/>
        <form>
            <div className='lg:pl-[19.5rem]'>
                <div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
                    <header className='relative z-20'>
                        <p className="group flex items-center lg:text-lg lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                            Global Settings
                        </p>
                        <SettingItem setting={
                            {
                                type:'radio', 
                                label:'Default Mode', 
                                name:'defaultmode', 
                                def_val:settings.defaultMode != undefined || settings.defaultMode != null ? settings.defaultMode : 'Analog', 
                                options:[{label:'Digital', value:'digital'},{label:'Analog', value:'analog'}], 
                                onChange: onSettingChange,
                                tooltip:'tooltip1'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Temp Dir:', 
                                name:'tempdir', 
                                def_val:settings.tempDir != undefined || settings.tempDir != null ? settings.tempDir : '/dev/shm', 
                                onChange: onSettingChange,
                                tooltip:'tooltip2'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Capture Dir:', 
                                name:'capdir', 
                                def_val:settings.capDir != undefined || settings.capDir != null ? settings.capDir : '/var/recordings', 
                                onChange: onSettingChange,
                                tooltip:'tooltip3'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'range', 
                                label:'Call Timeout:', 
                                name:'calltimeout', 
                                def_val:settings.callTimeout != undefined || settings.callTimeout != null ? settings.callTimeout : '5', 
                                min: 0,
                                max: 10,
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Use OpenMHZ:', 
                                name:'useopenmhz', 
                                def_val:settings.useOpenMhz != undefined || settings.useOpenMhz != null ? (settings.useOpenMhz ? 'on' : 'off'): 'off' ,
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'OpenMHZ URL:', 
                                name:'openmhzurl', 
                                def_val:settings.openMhzUrl != undefined || settings.openMhzUrl != null ? settings.openMhzUrl : '', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Use Broadcastify:', 
                                name:'usebroadcastify', 
                                def_val:settings.useBroadcastify != undefined || settings.useBroadcastify != null ? (settings.useBroadcastify ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>                    
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Broadcastify Calls Server:', 
                                name:'broadcastifyurl', 
                                def_val:settings.broadcastifyUrl != undefined || settings.broadcastifyUrl != null ? settings.broadcastifyUrl : '', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Broadcastify Insecure:', 
                                name:'broadcastifyinsecure', 
                                def_val:settings.broadcastifyInsecure != undefined || settings.broadcastifyInsecure != null ? (settings.broadcastifyInsecure ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Console Log:', 
                                name:'consolelog', 
                                def_val:settings.consoleLog != undefined || settings.consoleLog != null ? (settings.consoleLog ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Log File:', 
                                name:'logfile', 
                                def_val:settings.logFile != undefined || settings.logFile != null ? settings.logFile : 'trunk-recorder.log', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Log Dir:', 
                                name:'logdir', 
                                def_val:settings.logDir != undefined || settings.logDir != null ? settings.logDir : '/var/log/tr', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'radio', 
                                label:'Frequency Format:', 
                                name:'frequencyformat', 
                                def_val:settings.frequencyFormat != undefined || settings.frequencyFormat != null ? settings.frequencyFormat : 'mhz', 
                                options: [{label:'Exp',value:'exp'}, {label:'MHz', value: 'mhz'}, {label:'Hz', value:'hz'}],
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'range', 
                                label:'Control Warn Rate:', 
                                name:'controlwarnrate', 
                                def_val:settings.controlWarnRate != undefined || settings.controlWarnRate != null ? settings.controlWarnRate : '10', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'range', 
                                label:'Control Retune Limit:', 
                                name:'controlretunelimit', 
                                def_val:settings.controlRetuneLimit != undefined || settings.controlRetuneLimit != null ? settings.controlRetuneLimit : '10', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Status as String:', 
                                name:'statusasstring', 
                                def_val:settings.statusAsString != undefined || settings.statusAsString != null ? (settings.statusAsString ? 'on': 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Status Server URL1:', 
                                name:'statusServer', 
                                def_val:settings.statusServer != undefined || settings.statusServer != null ? settings.statusServer : 'ssurl' , 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Broadcast Signals:', 
                                name:'broadcastsignals', 
                                def_val:settings.broadcastSignals != undefined || settings.broadcastSignals != null ? (settings.broadcastSignals ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'radio', 
                                label:'Log Level:', 
                                name:'loglevel', 
                                def_val:settings.logLevel != undefined || settings.logLevel != null ? settings.logLevel : 'info', 
                                options: [{label:'Error', value:'error'},{label: 'Info', value:'info'}, {label:'Debug', value:'debug'}, {label:'Trace',value:'trace'}],
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Use Debug Recorder:', 
                                name:'usedebugrecorder', 
                                def_val:settings.useDebugRecorder != undefined || settings.useDebugRecorder != null ? (settings.useDebugRecorder ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Debug Recorder Port:', 
                                name:'debugrecorderport', 
                                def_val:settings.debugRecorderPort != undefined || settings.debugRecorderPort != null ? settings.debugRecorderPort : '5000', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'text', 
                                label:'Debug Recorder Address:', 
                                name:'debugrecorderaddress', 
                                def_val:settings.debugRecorderAddress != undefined || settings.debugRecorderAddress != null ? settings.debugRecorderAddress : '127.0.0.1', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Audio Streaming:', 
                                name:'audiostreaming', 
                                def_val:settings.audioStreaming != undefined || settings.audioStreaming != null ? (settings.audioStreaming ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'New Call From Update:', 
                                name:'newcallfromupdate', 
                                def_val:settings.newCallFromUpdate != undefined || settings.newCallFromUpdate != null ? (settings.newCallFromUpdate ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/>
                        <SettingItem setting={
                            {
                                type:'toggle', 
                                label:'Soft Vocoder:', 
                                name:'softvocoder', 
                                def_val:settings.softVocoder != undefined || settings.softVocoder != null ? (settings.softVocoder ? 'on' : 'off') : 'off', 
                                onChange: onSettingChange,
                                tooltip:'tooltip4'
                            }}/> 
                            <br/>
                        <button className="btn btn-outline btn-info" disabled={isChanged?"disabled":""} onClick={onSettingsSave}>Save</button>   
                    </header>
                </div>
            </div>
        </form>
    </>
  )
}

export default Global
