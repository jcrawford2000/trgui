import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dateFormat from 'dateformat'


function ActiveIncidents() {

    const [ state, setState ] = useState("Loading...")
    const [ calls, setCalls ] = useState([{'attributes':{Nature:"",NatureDesc:"",GenLocInfo:"",Channel:"",Units:""}}])

    const url = 'https://maps.phoenix.gov/phxfire/rest/services/Active_Incidents__Public/MapServer/0/query'
    
    const postData = {
        'where': '1=1',
        'outFields': '*',
        'returnIdsOnly': false,
        'returnCountOnly': false,
        'f': 'pjson'
    }


    const fetchData = () => {
        console.log("Requesting data...")

        axios.post(url, postData, {headers: {'Content-Type':'application/x-www-form-urlencoded'}}).then((response) => {
            console.log("Got Data:\n" + JSON.stringify(response.data))
            setState(response.data)
            if (response.data.features){
                console.log("Got calls!")
                setCalls(response.data.features)
            }

        })
    }
    
    useEffect(() => {
        console.log("In Use Effect!")
        let timerId = setTimeout(fetchData, 15000)
        return ()=> clearInterval(timerId)
    })
    
  return (
    <div className="card items-center bg-neutral text-neutral-content">
        <div className='card-body items-center text-center'>
            <h2 className='card-title'>Active Incidents</h2>
            <table className='border border-collapse border-slate-400 table table-auto'>
                <thead>
                    <tr className='text-slate-100'>
                        <th className='w-1/12 text-center border border-slate-400'>Time</th>
                        <th className='w-1/6 text-center border border-slate-400'>Description</th>
                        <th className='w-1/6 text-center border border-slate-400'>Address</th>
                        <th className='w-1/12 text-center border border-slate-400'>Channel</th>
                        <th className='w-1/12 text-center border border-slate-400'>Units</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            calls.map((call) => {
                            //Object.keys(calls).map((call) => {
                                console.log("Call="+JSON.stringify(call))
                                var nature = call.attributes.Nature;
                                var natureDesc = call.attributes.NatureDesc;
                                var genLocInfo = call.attributes.GenLocInfo;
                                var channel = call.attributes.Channel;
                                var units = call.attributes.Units;
                                var callDate = call.attributes.Date;
                                var time = new Date(callDate>0?callDate:0);
                                var timeVal = dateFormat(time, "HH:MM");
                                return(
                                    <tr>
                                        <td className="border border-slate-400">{timeVal}</td>
                                        <td className="border border-slate-400">{natureDesc}</td>
                                        <td className="border border-slate-400">{genLocInfo}</td>
                                        <td className="border border-slate-400">{channel}</td>
                                        <td className="border border-slate-400" style={{'word-wrap':'break-word'}}>{units.replaceAll("&#160;","\u00A0")}</td>
                                    </tr>
                                )
                            })   
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default ActiveIncidents