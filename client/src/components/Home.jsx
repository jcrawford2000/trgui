import React, { useState, useEffect } from 'react'

function Home() {
    
  return (
    <div className="container flex flex=row">        
        <div className="basis-1/3">
            <iframe height="700px" width="500px" src="http://192.168.0.15:3000"></iframe>
        </div>
        <div className="basis-2/3">
            <iframe height="700px" width="1000px" src="https://htms.phoenix.gov/publicweb/Default.aspx"></iframe>
        </div>
    </div>
    
  )
}

export default Home