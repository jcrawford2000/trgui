import React from 'react'
import { useStats } from '../context/StatsContext';
import DecodeRates from './DecodeRates';
import SystemActivity from './SystemActivity';

const Events = () => {
    const { state } = useStats();
    return (
        <>
        <DecodeRates rate={state.rates} systems={state.systems}/>
        <SystemActivity systemActivity={state.systemActivity}/>
        </>
    );
}

export default Events