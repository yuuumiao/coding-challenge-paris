import React, {useState} from 'react'


const Temperature = () => {

    const [temperatureNotif, setTemperatureNotif] = useState('')


    const handleChange= (event) => {
        const temp =  Number(event.target.value)
        if (temp <10) {
            setTemperatureNotif(`It's cold ❄️`);
        }
        else if (temp>10 && temp <=30) {
            setTemperatureNotif(`It's nice 🌼`);
        }
        else if (temp > 30) {
            setTemperatureNotif(`It's warm ☀️`);
        }
    }



    return (
 
        <div>
            
            <h2>temperature</h2>
            <input onChange={handleChange} type="number" placeholder="temperature in C"/>
            <p style={{ 
                color: 
                temperatureNotif === `It's cold ❄️` ? "blue" : temperatureNotif === `It's nice 🌼` ? "black" : "red"
                }}> {temperatureNotif} </p> 
  



        </div>
    )
}

export default Temperature

