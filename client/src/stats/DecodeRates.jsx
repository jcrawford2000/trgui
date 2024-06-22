import React from 'react'
import PropTypes from 'prop-types'


function DecodeRates({rate, systems}) {

  return (
    <div className="card card-side bg-neutral text-neutral-content">
        <div className="card-body items-center text-center"><h2 className="card-title">Decode Rates</h2>
        <div>
    { rate.map((drate, index) => {
        return(
        // eslint-disable-next-line
        systems.map((sys, index) => {
            if (sys.id === drate.id){
                return(
                    <div index={index} className='stats shadow m-5'>
                    <div className='stat place-items-center'>
                    <div className='stat-title'>{sys.name}</div>
                    <div className='stat-value'>{Number(drate.decoderate).toFixed(2)}</div>
                    <div className='stat-desc'>msgs/sec</div>
                </div>
                </div>)
            }}
        ))
        })
    }</div>
    </div></div>
  )

}

export default DecodeRates

DecodeRates.propTypes = {
    rate: PropTypes.array.isRequired,
    systems: PropTypes.array.isRequired
}