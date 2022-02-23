import React, { Component } from 'react'
import weatherService from '../../services/weatherService'
import WeatherCard from '../WeatherCard'
import './index.scss'


export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange(value) {
        const city = await weatherService.getCity(value.target.value)
        this.setState({city: city})
    }

    render() {
        return (
            <div className="search">
                <input type="text" name="search" className="glass" onChange={this.handleChange} />
                {this.state.city && (
                    <WeatherCard {...this.state.city} />
                )}
            </div>
        )
    }
}