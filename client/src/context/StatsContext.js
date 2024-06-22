import React, { createContext, useContext, useReducer } from 'react'


export const StatsContext = createContext();

const initStats = {
    events: [],
    callsActive: [],
    rates: [],
    systems: [],
    systemActivity: {}
};
/*
An object showing the current system activity by system and frequency
Can be displayed like this:
                    PRWC-J
freq        talkgroup     talkgrouptag    elapsed
769.86875   1795         K1 PHX Alarm    16

Here is an example of what the object might look like:
{
  "PRWC-G": {
    "769.18750": {
      "talkgroup"   : "4332"        ,
      "talkgrouptag": "El M PD OPS1",
      "elapsed"     : "34"
    },
    "771.18750": {},
    "769.68750": {},
    "770.68750": {
      "talkgroup"   : "2964"    ,
      "talkgrouptag": "PPD400 C",
      "elapsed"     : "40"
    },
    "772.68750": {
      "talkgroup"   : "2945"      ,
      "talkgrouptag": "PPD  700 D",
      "elapsed"     : "6"
    },
    "770.18750": {
      "talkgroup"   : "2964"    ,
      "talkgrouptag": "PPD400 C",
      "elapsed"     : "0"
    },
    "772.56250": {},
    "771.68750": {},
    "772.18750": {}
  },
  "PRWC-A": {
    "774.31250": {},
    "771.31250": {},
    "772.81250": {},
    "772.93750": {},
    "772.43750": {}
  }
}

*/
function updateSystemActivity(activeCalls, currActivity){
    var activity = currActivity;
    var freqs = []
    //Go through active calls, mapping call to it's frequency
    // eslint-disable-next-line
    activeCalls.map((call, index) => {
        //Get and format the frequency from the call
        const callFreq = call.freq.substring(0,3) + "." + call.freq.substring(4)
        //Add the frequency to the array of frequencies for this pass
        freqs.push(callFreq)
        //Build the call detail for this call
        const callDetail = {
            talkgroup: call.talkgroup,
            talkgrouptag: call.talkgrouptag,
            elapsed: call.elapsed,
            encrypted: call.encrypted
        }
        //Figure out which system this call came from        
        const callShortName = call.shortName
        //Add this call info to the right system.  If the system doesn't exist yet, add it.
        if (!activity.hasOwnProperty(callShortName)){
            activity[callShortName] = {}
        }
        activity[callShortName][callFreq] = callDetail
    })

    //Now that we've been through the active calls from this pass, we need to 
    //clear out the frequencies where there wasn't a call active.
    // eslint-disable-next-line
    Object.keys(activity).map((system) => {
        // eslint-disable-next-line
        Object.keys(activity[system]).map((freq) => {
            if (!freqs.includes(freq)){
                activity[system][freq] = {}
            }
        })
    })

    //Return the final list in order to update the state
    return activity;
}

const statsReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_EVENT':
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case 'CALLS_ACTIVE': 
            var activity = updateSystemActivity(action.payload, state.systemActivity);
            return {
                ...state,
                callsActive: action.payload,
                systemActivity: activity
            };
        case 'RATES':
            return {
                ...state,
                rates: action.payload
            };
        case 'SYSTEMS':
            console.log("Adding Systems to State:" + JSON.stringify(action.payload))
            return {
                ...state,
                systems: action.payload
            };
        default:
            return state;
    }
};

const StatsProvider = ({children}) => {
    const [state, dispatch] = useReducer(statsReducer, initStats);

    return (
        <StatsContext.Provider value={{ state, dispatch}} >
            {children}
        </StatsContext.Provider>
    );
};

export const useStats = () => useContext(StatsContext);

export default StatsProvider;