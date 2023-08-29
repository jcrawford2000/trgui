import React from 'react'
import PropTypes from 'prop-types'
import SettingItem from './SettingItem';
import { useState, useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext';

/* eslint eqeqeq: 0 */
const System = ({system_id}) => {
  
    /* 
     * Set up state
     * First, useContext to get the main state with all of the settings - from SettingsContext
     * Then extract the first system from the systems array and assign that to the internal state for this component
    */
   const { settings, updateSettings } = useContext(SettingsContext)
   const [ system, setSystem ] = useState(settings.systems.find( (sys) => sys._id === system_id ))

   
    /*
     * When we change the short name, update the internal component state
     * Then need to add this new system config to the systems array
     * Finally, call updateSettings from our context to update the global context
     *
    */
    function onSettingChange(e) {
        let targetValue
        if (e.target.type=='checkbox') {
            targetValue = e.target.value.checked
        }
        else if (e.target.type=='textarea') {
            targetValue = e.target.value.split('\n').map(el => {
                let n = Number(el)
                return isNaN(n) ? el : n
            })
            console.log(targetValue)
        }
        else {
            targetValue = e.target.value
        }
        const newSystems = settings.systems.map(sys => {
            if (sys._id === system._id) {
                let updsys = {...sys, [e.target.name]: e.target.value}
                return (updsys)
            }
            return sys
        })
        updateSettings({...settings, systems:newSystems})
   }

   /*
    * Display the settings for this system
    *
    */
   return (
    <div>
        <form>
      <SettingItem setting={
        {
            type:'text', 
            label:'Short Name:', 
            name:'shortName', 
            def_val:system.shortName != undefined || system.shortName != null ? system.shortName : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'radio', 
            label:'Type:', 
            name:'type', 
            def_val:system.type != undefined || system.type != null ? system.type : '', 
            options: [{label:'SmartNet', value:'smartnet'},{label: 'P25', value:'p25'},{label:'Conventional',value:'conventional'},{label:'Conventional DMR', value:'conventialDMR'},{label:'Conventional P25',value:'conventionalP25'}],
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'textarea', 
            label:'Control Channels:', 
            name:'control_channels', 
            def_val:system.control_channels != undefined || system.control_channels != null ? system.control_channels : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'textarea', 
            label:'Channels:', 
            name:'channels', 
            def_val:system.channels != undefined || system.channels != null ? system.channels : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Channel File:', 
            name:'channelFile', 
            def_val:system.channelFile != undefined || system.channelFile != null ? system.channelFile : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'radio', 
            label:'Modulation:', 
            name:'modulation', 
            def_val:system.modulation != undefined || system.modulation != null ? system.modulation : 'qpsk',
            options: [{label:'QPSK',value:'qpsk'},{label:'FSK4', value:'fsk4'}], 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Squelch:', 
            name:'squelch', 
            def_val:system.squelch != undefined || system.squelch != null ? system.squelch : '-160', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Talkgroups File:', 
            name:'talkgroupsFile', 
            def_val:system.talkgroupsFile != undefined || system.talkgroupsFile != null ? system.talkgroupsFile : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'OpenMHZ API Key:', 
            name:'apiKey', 
            def_val:system.apiKey != undefined || system.apiKey != null ? system.apiKey : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Broadcastify API Key:', 
            name:'broadcastifyApiKey', 
            def_val:system.broadcastifyApiKey != undefined || system.broadcastifyApiKey != null ? system.broadcastifyApiKey : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Broadcastify System ID:', 
            name:'broadcastifySystemId', 
            def_val:system.broadcastifySystemId != undefined || system.broadcastifySystemId != null ? system.broadcastifySystemId : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Upload Script:', 
            name:'uploadScript', 
            def_val:system.uploadScript != undefined || system.uploadScript != null ? system.uploadScript : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Compress Wav:', 
            name:'compressWav', 
            def_val:system.compressWav != undefined || system.compressWav != null ? (system.compressWav ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Unit Script:', 
            name:'unitScript', 
            def_val:system.unitScript != undefined || system.unitScript != null ? system.unitScript : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Audio Archive:', 
            name:'audioArchive', 
            def_val:system.audioArchive != undefined || system.audioArchive != null ? (system.audioArchive ? 'on' : 'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Transmission Archive:', 
            name:'transmissionArchive', 
            def_val:system.transmissionArchive != undefined || system.transmissionArchive != null ? (system.transmissionArchive ? 'on':'off' ): 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Call Log:', 
            name:'callLog', 
            def_val:system.callLog != undefined || system.callLog != null ? (system.callLog ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'range', 
            label:'Analog Levels:', 
            name:'analogLevels', 
            def_val:system.analogLevels != undefined || system.analogLevels != null ? system.analogLevels : '8', 
            min: 1,
            max: 32,
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Maximum Deviation:', 
            name:'maxDev', 
            def_val:system.maxDev != undefined || system.maxDev != null ? system.maxDev : '4000', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'range', 
            label:'Digital Levels:', 
            name:'digitalLevels', 
            def_val:system.digitalLevels != undefined || system.digitalLevels != null ? system.digitalLevels : '1', 
            min: 1,
            max: 15,
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Unit Tags File:', 
            name:'unitTagsFile', 
            def_val:system.unitTagsFile != undefined || system.unitTagsFile != null ? system.unitTagsFile : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Record Unknown:', 
            name:'recordUnknown', 
            def_val:system.recordUnknown != undefined || system.recordUnknown != null ? (system.recordUnknown ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Record Unit to Unit Calls:', 
            name:'recordUUVCalls', 
            def_val:system.recordUUVCalls != undefined || system.recordUUVCalls != null ? (system.recordUUVCalls ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Hide Encrypted:', 
            name:'hideEncrypted', 
            def_val:system.hideEncrypted != undefined || system.hideEncrypted != null ? (system.hideEncrypted ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Hide Unknown Talkgroups:', 
            name:'hideUnknownTalkgroups', 
            def_val:system.hideUnknownTalkgroups != undefined || system.hideUnknownTalkgroups != null ? (system.hideUnknownTalkgroups ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Minimum Call Duraction:', 
            name:'minDuration', 
            def_val:system.minDuration != undefined || system.minDuration != null ? system.minDuration : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Minimum Call Duraction:', 
            name:'minDuration', 
            def_val:system.minDuration != undefined || system.minDuration != null ? system.minDuration : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Minimum Transmission Duraction:', 
            name:'minTransmissionDuration', 
            def_val:system.minTransmissionDuration != undefined || system.minTransmissionDuration != null ? system.minTransmissionDuration : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Maximum Call Duraction:', 
            name:'maxDuration', 
            def_val:system.maxDuration != undefined || system.maxDuration != null ? system.maxDuration : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'radio', 
            label:'Talkgroup Display Format:', 
            name:'talkgroupDisplayFormat', 
            def_val:system.talkgroupDisplayFormat != undefined || system.talkgroupDisplayFormat != null ? system.talkgroupDisplayFormat : 'id', 
            options:[{label:'ID',value:'id'},{label:'ID-Tag', value:'id_tag'},{label:'Tag-ID', value:'tag_id'}],
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'radio', 
            label:'Band Plan:', 
            name:'bandplan', 
            def_val:system.bandplan != undefined || system.bandplan != null ? system.bandplan : '800_standard', 
            options:[{label:'800 Standard',value:'800_standard'},{label:'800 Reband',value:'800_reband'},{label:'800 Splinter',value:'800_splinter'},{label:'400 Custom',value:'400_custom'}],
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Band Plan Base:', 
            name:'bandplanBase', 
            def_val:system.bandplanBase != undefined || system.bandplanBase != null ? system.bandplanBase : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Band Plan High:', 
            name:'bandplanHigh', 
            def_val:system.bandplanHigh != undefined || system.bandplanHigh != null ? system.bandplanHigh : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Band Plan Spacing:', 
            name:'bandplanSpacing', 
            def_val:system.bandplanSpacing != undefined || system.bandplanSpacing != null ? system.bandplanSpacing : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Band Plan Offset:', 
            name:'bandplanOffset', 
            def_val:system.bandplanOffset != undefined || system.bandplanOffset != null ? system.bandplanOffset : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Decode MDC:', 
            name:'decodeMDC', 
            def_val:system.decodeMDC != undefined || system.decodeMDC != null ? (system.decodeMDC ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Decode Fleet Sync:', 
            name:'decodeFSync', 
            def_val:system.decodeFSync != undefined || system.decodeFSync != null ? (system.decodeFSync ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Decode Star:', 
            name:'decodeStar', 
            def_val:system.decodeStar != undefined || system.decodeStar != null ? (system.decodeStar ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Decode Tactical Public Safety:', 
            name:'decodeTPS', 
            def_val:system.decodeTPS != undefined || system.decodeTPS != null ? (system.decodeTPS ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Enabled:', 
            name:'enabled', 
            def_val:system.enabled != undefined || system.enabled != null ? (system.enabled ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        </form>
    </div>
  )
}

System.propTypes = {
    system_id: PropTypes.string.isRequired
}

export default System
