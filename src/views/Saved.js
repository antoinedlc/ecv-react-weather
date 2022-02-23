import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCity } from '../store/reducers/citiesReducer'
import CityCard from '../components/CityCard'

class Saved extends Component{
    constructor(props) {
        super(props)
        this.state = {
            listCities: []
        }
    }

    componentDidMount = () => {
      this.setState({ listCities: this.props.listCities });
    };

    render() {
        return (
            <div className="row glass" style={{flexDirection: 'column'}}>
                {this.state.listCities &&
                    this.state.listCities.map((city) => {
                        return <CityCard {...city} />
                    })
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Saved)