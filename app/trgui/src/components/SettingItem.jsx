import React from 'react'
import PropTypes from 'prop-types'
import { PiQuestionFill } from 'react-icons/pi'
import { useState } from 'react'

function SettingItem({setting}){
    const typeSwitch = () => {
        switch(setting.type) {
            case 'radio' : return <RadioItem setting={setting}/>;
            case 'text' : return <TextItem setting={setting}/>;
            case 'range' : return <RangeItem setting={setting}/>;
            case 'toggle' : return <ToggleItem setting={setting}/>;            
        }
    }

    return(
        <>{ typeSwitch() }</>
    )
}

function ToggleItem({setting}){

    const [value, setValue] = useState('on')
    const [checked, setChecked] = useState(true)
    const [name, setName] = useState()
    
    const onChange = (event) => {
        if (event.target.checked){
            setValue("on")
            setChecked(true)
        }
        else
        {
            setValue("off")
            setChecked(false)
        }
    }

    return(
        <div className="formControl">
            <label className="label cursor-pointer join">
                <span className="join-item label-text text-base dark:text-stone-200">
                    {setting.label} 
                </span>
                <div className="tooltip tooltip-right" data-tip={setting.tooltip}>
                    <p className="join-item ml-2"><PiQuestionFill /></p>
                </div>
            </label>
            <div className="ml-10">
                <input id={setting.name} type="checkbox"  onClick={onChange} value={value} defaultChecked={checked} className="toggle toggle-info"  />
            </div>                    
        </div>
    )
}

function RangeItem({setting}){
    const [value, setValue] = useState(0);
    const [name, setName] = useState(setting.name)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="formControl">
            <label className="label cursor-pointer join">
                <span className="join-item label-text text-base dark:text-stone-200">
                    {setting.label}
                </span>
                <div className="tooltip tooltip-right" data-tip={setting.tooltip}>
                    <p className="join-item ml-2"><PiQuestionFill /></p>
                </div>
                
            </label>
            <div className="ml-10 flex">
                <input name={name} type="range" min={0} max="100" className="range range-info" value={value} onChange={onChange} />
                <p className="ml-10">{value}</p>
            </div>                    
        </div>
    )
}

function TextItem({setting}){
    const [value, setValue] = useState(setting.def_val)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div className="formControl">
            <label className="label cursor-pointer join">
                <span className="join-item label-text text-base dark:text-stone-200">
                    { setting.label }
                </span>
                <div className="tooltip tooltip-right" data-tip={setting.tooltip}>
                    <p className="join-item ml-2"><PiQuestionFill /></p>
                </div>
                
            </label>
            <div className="ml-10">
                <input type="text" value={value} onChange={onChange}  className="input input-bordered input-info w-full max-w-xs" />
            </div>                    
        </div>
    )
}

function RadioItem({setting}){
    const [value, setValue] = useState()

    const onChange = (event) => {
        console.log("Change to " + event.target.name + " value=" + event.target.value)
        setValue(event.target.setValue)
    }

    return(
        <div className="formControl">
            <label className="label cursor-pointer join">
                <span className="join-item label-text text-base dark:text-stone-200">
                    { setting.label } 
                </span>
                <div className="tooltip tooltip-right" data-tip={setting.tooltip}>
                    <p className="join-item ml-2"><PiQuestionFill /></p>
                </div>
            </label>
            <div className="ml-10">
                {  setting.options.map((option, index) => (
                    <label className="cursor-pointer">
                        <span className="label-text mr-5 ml-5 align-top">
                            {option}
                        </span>
                        <input key={index} className="radio radio-info" name={setting.name} type="radio" value={option} onClick={onChange}/>
                        
                    </label>

                ))}
            </div>
        </div>
    )
}

SettingItem.propTypes = {
    setting: PropTypes.object.isRequired
}

export default SettingItem;