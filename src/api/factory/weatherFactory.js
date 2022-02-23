const weatherFactory = {
    async getCurrent(data) {
        const current = {
            icon: `/images/${data.weather[0].icon}.png`,
            content: data.weather[0].description,
            temp: Math.round(data.main.temp - 273.15),
            city: data.name
        }
    
        return current
    },

    async getHourly(data) {
        let hourly = []
        let currentTime = Math.round((new Date().getTime())/1000)

        let i = 0;

        data.hourly.map((hour) => {
            if(i < 5 && hour.dt > currentTime) {
                let newTime = new Date(hour.dt * 1000)
                let time = newTime.toLocaleTimeString('fr-FR').slice(0, -3)

                hourly.push({
                    time: time,
                    temp: Math.round(hour.temp - 273.15)
                })

                i ++
            }
        })
    
        return hourly
    }
}

export default weatherFactory