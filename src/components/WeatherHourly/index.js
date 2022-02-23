import React, { Component } from 'react'
import weatherService from '../../services/weatherService'
import './index.scss'

export default class WeatherHourly extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourly: null
        }
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const hourly = await weatherService.getHourly(pos.coords.latitude, pos.coords.longitude)
            this.setState({hourly: hourly})
        })
    }

    render() {
        return (
            <div className="weather-hourly">
                {this.state.hourly &&
                    this.state.hourly.map((hour) => {
                        return (
                            <div className="weather-hourly__hour">
                                <span className="weather-hourly__hour__time">{hour.time}</span>
                                <span className="weather-hourly__hour__temp">{hour.temp}°C</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}