import axios from 'axios'

const weatherRepository = {
    async getCurrent(lat, long) {
        try {
            const current = await axios.get(`${process.env.REACT_APP_API_BASE_URL_CURRENT}lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            return current.data
        } catch(error) {
            console.log('error : ' + error)
        }
    },

    async getHourly(lat, long) {
        try {
            const hourly = await axios.get(`${process.env.REACT_APP_API_BASE_URL_ONECALL}lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
            return hourly.data
        } catch(error) {
            console.log('error : ' + error)
        }
    },

    async getCity(name) {
        try {
            const city = await axios.get(`${process.env.REACT_APP_API_BASE_URL_WEATHER}q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            return city.data
        } catch(error) {
            return 'No results found'
        }
    }
}

export default weatherRepository