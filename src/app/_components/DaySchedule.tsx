import React from 'react'

const DaySchedule = () => {
  return (
    <div className='Schedule-Container'>

        <div className="day">
            <h1 className="day-tilte">Day-1</h1>
            <p className="day-desc">NAAN MUDHALVAN’IN <br /> TECH WAR!</p>
            <p className="day-area">An Intra college event</p>



        </div>

        <div className="day" >
        <h1 className="day-tilte" >Day-2</h1>
            <p className="day-desc">TECHATHLON</p>
            <p className="day-area">An Intra college event</p>

        </div>

        <div className="day">
        <h1 className="day-tilte">Day-3</h1>
            <p className="day-desc">TECHNOKRATZ</p>
            <p className="day-area">An Intra college event</p>

        </div>


    </div>
  )
}

export default DaySchedule;