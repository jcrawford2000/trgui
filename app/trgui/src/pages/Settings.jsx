import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import SettingsNav from '../components/SettingsNav'
import SettingItem from '../components/SettingItem'

function Settings() {
    const [settingsObj, updateSettingsObj] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

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
    },[]);

    //return (
    const content = () => {
    
        console.log("Loading: " + isLoading);
        if (isLoading) {
            return(<p>Loading...</p>);
        } else
        {
           console.log("Rendering");
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
        <div className='lg:pl-[19.5rem]'>
            <div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
                <header className='relative z-20'>
                    <SettingItem setting={
                        {
                            type:'radio', 
                            label:'Default Mode', 
                            name:'defaultmode', 
                            def_val:settingsObj.defaultMode != undefined || settingsObj.defaultMode != null ? settingsObj.defaultMode : 'Analog', 
                            options:['Digital','Analog'], 
                            tooltip:'tooltip1'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Temp Dir:', 
                            name:'tempdir', 
                            def_val:settingsObj.tempDir != undefined || settingsObj.tempDir != null ? settingsObj.tempDir : '/dev/shm', 
                            tooltip:'tooltip2'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Capture Dir:', 
                            name:'capdir', 
                            def_val:settingsObj.capDir != undefined || settingsObj.capDir != null ? settingsObj.capDir : '/var/recordings', 
                            tooltip:'tooltip3'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Call Timeout:', 
                            name:'calltimeout', 
                            def_val:settingsObj.callTimeout != undefined || settingsObj.callTimeout != null ? settingsObj.callTimeout : '5', 
                            tooltip:'tooltip4'
                        }}/>

                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use OpenMHZ:', 
                            name:'useopenmhz', 
                            def_val:settingsObj.useOpenMhz != undefined || settingsObj.useOpenMhz != null ? (settingsObj.useOpenMhz ? 'on' : 'off'): 'off' ,
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'OpenMHZ URL:', 
                            name:'openmhzurl', 
                            def_val:settingsObj.openMhzUrl != undefined || settingsObj.openMhzUrl != null ? settingsObj.openMhzUrl : '', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use Broadcastify:', 
                            name:'usebroadcastify', 
                            def_val:settingsObj.useBroadcastify != undefined || settingsObj.useBroadcastify != null ? (settingsObj.useBroadcastify ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>                    
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Broadcastify Calls Server:', 
                            name:'broadcastifyurl', 
                            def_val:settingsObj.broadcastifyUrl != undefined || settingsObj.broadcastifyUrl != null ? settingsObj.broadcastifyUrl : '', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Broadcastify Insecure:', 
                            name:'broadcastifyinsecure', 
                            def_val:settingsObj.broadcastifyInsecure != undefined || settingsObj.broadcastifyInsecure != null ? (settingsObj.broadcastifyInsecure ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Console Log:', 
                            name:'consolelog', 
                            def_val:settingsObj.consoleLog != undefined || settingsObj.consoleLog != null ? (settingsObj.consoleLog ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Log File:', 
                            name:'logfile', 
                            def_val:settingsObj.logFile != undefined || settingsObj.logFile != null ? settingsObj.logFile : 'trunk-recorder.log', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Log Dir:', 
                            name:'logdir', 
                            def_val:settingsObj.logDir != undefined || settingsObj.logDir != null ? settingsObj.logDir : '/var/log/tr', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'radio', 
                            label:'Frequency Format:', 
                            name:'frequencyformat', 
                            def_val:settingsObj.frequencyFormat != undefined || settingsObj.frequencyFormat != null ? settingsObj.frequencyFormat : 'mhz', 
                            options: ['exp', 'mhz', 'hz'],
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Control Warn Rate:', 
                            name:'controlwarnrate', 
                            def_val:settingsObj.controlWarnRate != undefined || settingsObj.controlWarnRate != null ? settingsObj.controlWarnRate : '10', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Control Retune Limit:', 
                            name:'controlretunelimit', 
                            def_val:settingsObj.controlRetuneLimit != undefined || settingsObj.controlRetuneLimit != null ? settingsObj.controlRetuneLimit : '10', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Status as String:', 
                            name:'statusasstring', 
                            def_val:settingsObj.statusAsString != undefined || settingsObj.statusAsString != null ? (settingsObj.statusAsString ? 'on': 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Status Server URL1:', 
                            name:'statserverurl', 
                            def_val:settingsObj.statusServer != undefined || settingsObj.statusServer != null ? settingsObj.statusServer : 'ssurl' , 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Broadcast Signals:', 
                            name:'broadcastsignals', 
                            def_val:settingsObj.broadcastSignals != undefined || settingsObj.broadcastSignals != null ? (settingsObj.broadcastSignals ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'radio', 
                            label:'Log Level:', 
                            name:'loglevel', 
                            def_val:settingsObj.logLevel != undefined || settingsObj.logLevel != null ? settingsObj.logLevel : 'info', 
                            options: ['error','info', 'debug', 'trace'],
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use Debug Recorder:', 
                            name:'usedebugrecorder', 
                            def_val:settingsObj.useDebugRecorder != undefined || settingsObj.useDebugRecorder != null ? (settingsObj.useDebugRecorder ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Debug Recorder Port:', 
                            name:'debugrecorderport', 
                            def_val:settingsObj.debugRecorderPort != undefined || settingsObj.debugRecorderPort != null ? settingsObj.debugRecorderPort : '5000', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Debug Recorder Address:', 
                            name:'debugrecorderaddress', 
                            def_val:settingsObj.debugRecorderAddress != undefined || settingsObj.debugRecorderAddress != null ? settingsObj.debugRecorderAddress : '127.0.0.1', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Audio Streaming:', 
                            name:'audiostreaming', 
                            def_val:settingsObj.audioStreaming != undefined || settingsObj.audioStreaming != null ? (settingsObj.audioStreaming ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'New Call From Update:', 
                            name:'newcallfromupdate', 
                            def_val:settingsObj.newCallFromUpdate != undefined || settingsObj.newCallFromUpdate != null ? (settingsObj.newCallFromUpdate ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Soft Vocoder:', 
                            name:'softvocoder', 
                            def_val:settingsObj.softVocoder != undefined || settingsObj.softVocoder != null ? (settingsObj.softVocoder ? 'on' : 'off') : 'off', 
                            tooltip:'tooltip4'
                        }}/>    
                </header>
            </div>
        </div>
        </>);}}
    
    return (content());
    
}

export default Settings