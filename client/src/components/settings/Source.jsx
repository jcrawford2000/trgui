import React from 'react'
import PropTypes from 'prop-types'
import SettingItem from './SettingItem';
import { useState, useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext';

/* eslint eqeqeq: 0 */
const Source = ({source_id}) => {
  
    /* 
     * Set up state
     * First, useContext to get the main state with all of the settings - from SettingsContext
     * Then extract the first system from the systems array and assign that to the internal state for this component
    */
   const { settings, updateSettings } = useContext(SettingsContext)
   const [ source, setSource ] = useState(settings.sources.find( (src) => src._id === source_id ))

   
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
        const newSources = settings.sources.map(src => {
            if (src._id === source._id) {
                let updsrc = {...src, [e.target.name]: targetValue}
                return (updsrc)
            }
            return src
        })
        updateSettings({...settings, sources:newSources})
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
            def_val:source.shortName != undefined || source.shortName != null ? source.shortName : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Center Frequency:', 
            name:'center', 
            def_val:source.center != undefined || source.center != null ? source.center : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Rate:', 
            name:'rate', 
            def_val:source.rate != undefined || source.rate != null ? source.rate : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Tuning Error:', 
            name:'error', 
            def_val:source.error != undefined || source.error != null ? source.error : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'RF Gain:', 
            name:'gain', 
            def_val:source.gain != undefined || source.gain != null ? source.center : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'range', 
            label:'Digital Recorders:', 
            name:'digitalRecorders', 
            def_val:source.digitalRecorders != undefined || source.digitalRecorders != null ? source.digitalRecorders : '0', 
            min: 0,
            max: 100,
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'range', 
            label:'Analog Recorders:', 
            name:'analogRecorders', 
            def_val:source.analogRecorders != undefined || source.analogRecorders != null ? source.analogRecorders : '0', 
            min: 0,
            max: 100,
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'radio', 
            label:'Driver:', 
            name:'driver', 
            def_val:source.driver != undefined || source.driver != null ? source.driver : '', 
            options: [{label:'USRP', value:'usrp'},{label: 'OSMO SDR', value:'osmosdr'}],
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Device String:', 
            name:'device', 
            def_val:source.device != undefined || source.device != null ? source.device : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Tunining Error(ppm):', 
            name:'ppm', 
            def_val:source.ppm != undefined || source.ppm != null ? source.ppm : '0', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Use AGC:', 
            name:'agc', 
            def_val:source.agc != undefined || source.agc != null ? (source.agc ? 'on':'off') : 'off', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Gain Settings:', 
            name:'gainSettings', 
            def_val:source.gainSettings != undefined || source.gainSettings != null ? source.gainSettings : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'IF Gain:', 
            name:'ifGain', 
            def_val:source.ifGain != undefined || source.ifGain != null ? source.ifGain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'BB Gain:', 
            name:'bbGain', 
            def_val:source.bbGain != undefined || source.bbGain != null ? source.bbGain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Mix Gain:', 
            name:'mixGain', 
            def_val:source.mixGain != undefined || source.mixGain != null ? source.mixGain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'LNA Gain:', 
            name:'lnaGain', 
            def_val:source.lnaGain != undefined || source.lnaGain != null ? source.lnaGain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'VGA1 Gain:', 
            name:'vga1Gain', 
            def_val:source.vga1Gain != undefined || source.vga1Gain != null ? source.vga1Gain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'VGA2 Gain:', 
            name:'vga2Gain', 
            def_val:source.vga2Gain != undefined || source.vga2Gain != null ? source.vga2Gain : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'text', 
            label:'Antenna:', 
            name:'antenna', 
            def_val:source.antenna != undefined || source.antenna != null ? source.antenna : '', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        <SettingItem setting={
        {
            type:'toggle', 
            label:'Enabled:', 
            name:'enabled', 
            def_val:source.enabled != undefined || source.enabled != null ? (source.enabled ? 'on':'off') : 'on', 
            onChange: onSettingChange,
            tooltip:'tooltip2'
        }}/>
        </form>
    </div>
  )
}

Source.propTypes = {
    source_id: PropTypes.string.isRequired
}

export default Source
