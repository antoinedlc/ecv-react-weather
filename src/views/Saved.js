import React, { Component } from 'react'

class Saved extends Component{
    constructor(props) {
        super(props)
        this.state = {
            listCities: []
        }
    }

    async componentDidMount() {
        const listCities = await citiesRepository.getAllCities()
        this.setState({listCities: listCities})
    }

    render() {
        return (
            <div className="cities-list">
                {this.state.listCities.length > 0 &&
                    this.state.listCities.map((city) => {
                        return <CityCard {...city} />
                    })
                }
            </div>
        )
    }
}

export default Saved