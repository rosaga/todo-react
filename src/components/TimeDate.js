import React from 'react'

function TimeDate() {
    const date = new Date() //functiont to get today date
    const hours = date.getHours() //get the hours
    let timeofday

    const style = {
        fontSize:'20px',
        textAlign:'center'

    }

    if (hours < 12){
        timeofday = 'Morning'
        style.color = "#900FFF"
    }else if(hours >= 12 && hours < 18){
        timeofday = "Afternoon"
        style.color = "#8002DD"
    }else if(hours >= 18){
        timeofday = "night"
        style.color = "#D90000"
    }

    return (
        <div>
            <h3 style = {style}>Hi, here is a list of things to do this {timeofday} </h3>
        </div>
    )
}

export default TimeDate
