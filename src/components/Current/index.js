import React, { Component } from 'react'
import weatherService from '../../services/weatherService'
import WeatherCard from '../WeatherCard'

export default class Current extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: null
        }
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const current = await weatherService.getCurrent(pos.coords.latitude, pos.coords.longitude)
            this.setState({current: current})
        })
    }

    render() {
        return (
            <>
                {this.state.current && (
                    <WeatherCard {...this.state.current} />
                )}
            </>
        )
    }
}