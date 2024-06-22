import React from 'react'

const ActivityCard = ({system, activity}) => {
    return (
        <div className="card items-center bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{system}</h2>
            <table className="table table-fixed">
                <thead>
                    <tr className="text-slate-100">
                        <th className="w-3/12 text-center">Frequency</th>
                        <th className="w-2/12 text-center">TGID</th>
                        <th className="w-5/12 text-left">Tag</th>
                        <th className="w-1/12 text-center">Dur</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(activity[system]).map((freq) => {
                            var talkGroup = activity[system][freq].talkgroup;
                            var talkGroupTag = activity[system][freq].talkgrouptag;
                            var elapsed = activity[system][freq].elapsed;
                            var encrypted = activity[system][freq].encrypted === "true"?true:false
                            return(
                                <tr>
                                    <td className={encrypted?"w-3/12 text-red-600":"w-3/12"}>{freq}</td>
                                    <td className={encrypted?"w-2/12 text-red-600":"w-2/12"}>{talkGroup} </td>
                                    <td className={encrypted?"w-5/12 text-red-600":"w-5/12"}>{talkGroupTag}</td>
                                    <td className={encrypted?"w-1/12 text-red-600":"w-1/12"}>{elapsed}</td>
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

function SystemActivity({systemActivity}) {

  //Split System into groups of 3
  const systems=Object.keys(systemActivity);
  const groupedSystems = []
  const groupSize = 3
  for (let i=0; i<systems.length; i+=groupSize) {
    groupedSystems.push(systems.slice(i, i+groupSize))
  }

    return (
        <>
            {groupedSystems.map((group, index) => (
                <div key={index} className="card card-side bg-neutral text-neutral-content">
                    {group.map((system, innerIndex) => (
                        <ActivityCard key={innerIndex} system={system} activity={systemActivity}/>
                    ))}
                </div>
            ))}
        </>
  )
}

export default SystemActivity