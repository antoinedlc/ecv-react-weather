import React, { Component } from 'react'
import { connect } from 'react-redux'
import weatherService from '../../services/weatherService'
import WeatherCard from '../WeatherCard'
import './index.scss'
import { addCity } from '../../store/reducers/citiesReducer'


class SearchForm extends Component {
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

    handleClick() {
        this.props.addCity(this.state.city)
    }

    render() {
        return (
            <div className="search">
                <input type="text" name="search" className="glass" onChange={this.handleChange} />
                {this.state.city && (
                    <>
                        <WeatherCard {...this.state.city} add="true" />
                        <button className="city-add" value="Save city" onClick={() => {this.handleClick()}}>Save city</button>
                    </>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCity: (city) => dispatch(addCity(city))
    }
}

const mapStateToProps = state => {
    return {
        listCities: state.cities.listCities
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)