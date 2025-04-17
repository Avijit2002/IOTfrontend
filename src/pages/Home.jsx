import { useEffect } from "react";
import { useState } from "react"

function Home() {

    const [moisture, updateMoisture] = useState(0);
    const [vibration, updateVibration] = useState(0);
    const [rain, updateRain] = useState(0);

    useEffect(()=>{
        function getData(){
            setInterval(async () => {
                let data = await fetch("https://iotbackend-wdpr.onrender.com/")
                data = await data.json();
                console.log(data.moisture)
                updateMoisture(x=>x=data.moisture)
                updateVibration(x=> x= data.vibration)
                updateRain(x=>x=data.rain)
            }, 5000);
        }
        getData();
    },[moisture,vibration,rain])
    return (
        <div>
            <h1>Moisture: {moisture}</h1>
            <h1>Vibration: {vibration}</h1>
            <h1>Rain: {rain}</h1>
        </div>
    )
}

export default Home
