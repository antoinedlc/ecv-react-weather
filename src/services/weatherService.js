import weatherRepository from "../api/repository/weatherRepository";
import weatherFactory from "../api/factory/weatherFactory";

export default {
    async getCurrent(lat, long) {
        const currentData = await weatherRepository.getCurrent(lat, long)
        const current = await weatherFactory.getCurrent(currentData)
        return current
    },

    async getHourly(lat, long) {
        const hourlyData = await weatherRepository.getHourly(lat, long)
        const hourly = await weatherFactory.getHourly(hourlyData)
        return hourly
    },

    async getCity(name) {
        const citiesData = await weatherRepository.getCity(name)
        const cities = await weatherFactory.getCity(citiesData)
        return cities
    }
}