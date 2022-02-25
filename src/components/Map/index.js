import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import weatherService from '../../services/weatherService'

import './index.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRlbGNvdXJ0ZSIsImEiOiJja3p6b2lnMWUwY2JsM2p0MWZhanA5bG92In0.j0o6KPACQHPftGdZhKDHqg'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainMarker: {
                lng: -70.9,
                lat: 42.35
            },
            zoom: 9,
            geojson: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [-70.9, 42.35]
                        },
                        properties: {
                            title: 'TEST'
                        }
                    }
                ]
            }
        }
        this.mapContainer = React.createRef()
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.state.mainMarker.lng, this.state.mainMarker.lat],
            zoom: this.state.zoom
        })

        this.setState({geojson: {
            type: 'FeatureCollection',
            features: this.state.markers
        }})

        if(this.state.geojson.features != null) {
            for (const feature of this.state.geojson.features) {
                const el = document.createElement('div')
                el.className = 'marker'
                el.id = 'marker-main'
                new mapboxgl.Marker(el)
                    .setLngLat(feature.geometry.coordinates)
                    .setPopup(
                      new mapboxgl.Popup({ offset: 25 })
                        .setHTML(
                          `<h3>${feature.properties.title}</h3>`
                        )
                    )
                    .addTo(map);
            }
        }


        map.on('click', async (e) => {
            const {lng, lat} = e.lngLat.wrap()
            this.handleClick(map, lng, lat)
        });
    }

    async handleClick(map, lng, lat) {
        console.log(lng, lat)
        const current = await weatherService.getCurrent(lng, lat)
        console.log(current)
        await this.createMarker(map, {
            lng,
            lat,
            city: current.city ? current.city : '[...]',
            content: current.content,
            temp: current.temp
        })
    }

    async createMarker(map, marker) {
        const el = document.createElement('div')
        el.className = 'marker'

        new mapboxgl.Marker(el)
            .setLngLat({lng: marker.lng, lat: marker.lat})
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `
                        <h3>${marker.city ? marker.city : '[...]'}</h3>
                        <p>${marker.content}</p>
                        <h2>${marker.temp}</h2>
                    `
                )
            )
            .addTo(map);
    }

    render() {
        return (
            <div ref={this.mapContainer} className="map-container" style={{width: '65rem', height: '45rem'}} />
        )
    }
}