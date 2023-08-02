import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import SettingsNav from '../components/SettingsNav'
import { PiQuestionFill } from 'react-icons/pi'
import SettingItem from '../components/SettingItem'

function Settings() {
    const params = useParams();
    return (
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
                            def_val:'digital', 
                            options:['Digital','Analog'], 
                            tooltip:'tooltip1'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Temp Dir:', 
                            name:'tempdir', 
                            def_val:'/dev/shm', 
                            tooltip:'tooltip2'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Capture Dir:', 
                            name:'capdir', 
                            def_val:'/var/recordings', 
                            tooltip:'tooltip3'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Call Timeout:', 
                            name:'calltimeout', 
                            def_val:'5', 
                            tooltip:'tooltip4'
                        }}/>

                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use OpenMHZ:', 
                            name:'useopenmhz', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'OpenMHZ URL:', 
                            name:'openmhzurl', 
                            def_val:'url', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use Broadcastify:', 
                            name:'usebroadcastify', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>                    
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Broadcastify Calls Server:', 
                            name:'broadcastifyurl', 
                            def_val:'url', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Broadcastify Insecure:', 
                            name:'broadcastifyinsecure', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Console Log:', 
                            name:'consolelog', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Log File:', 
                            name:'logfile', 
                            def_val:'trunk-recorder.log', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Log Dir:', 
                            name:'logdir', 
                            def_val:'/var/log/tr', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'radio', 
                            label:'Frequency Format:', 
                            name:'Frequency Format', 
                            def_val:'0', 
                            options: ['exp', 'mhz', 'hz'],
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Control Warn Rate:', 
                            name:'controlwarnrate', 
                            def_val:'10', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'range', 
                            label:'Control Retune Limit:', 
                            name:'controlretunelimit', 
                            def_val:'10', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Status as String:', 
                            name:'statusasstring', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Status Server URL:', 
                            name:'statserverurl', 
                            def_val:'url', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Broadcast Signals:', 
                            name:'broadcastsignals', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'radio', 
                            label:'Log Level:', 
                            name:'loglevel', 
                            def_val:'0', 
                            options: ['error','info', 'debug', 'trace'],
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Use Debug Recorder:', 
                            name:'usedebugrecorder', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Debug Recorder Port:', 
                            name:'debugrecorderport', 
                            def_val:'5000', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'text', 
                            label:'Debug Recorder Address:', 
                            name:'debugrecorderaddress', 
                            def_val:'127.0.0.1', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Audio Streaming:', 
                            name:'audiostreaming', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'New Call From Update:', 
                            name:'newcallfromupdate', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>
                    <SettingItem setting={
                        {
                            type:'toggle', 
                            label:'Soft Vocoder:', 
                            name:'softvocoder', 
                            def_val:'0', 
                            tooltip:'tooltip4'
                        }}/>    
                </header>
            </div>
        </div>
        </>
    )
}

export default Settings