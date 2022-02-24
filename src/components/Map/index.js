import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import weatherService from '../../services/weatherService'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRlbGNvdXJ0ZSIsImEiOiJja3p6b2lnMWUwY2JsM2p0MWZhanA5bG92In0.j0o6KPACQHPftGdZhKDHqg'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: -70.9,
            lat: 42.35,
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
                            title: "Test popup"
                        }
                    }
                ]
            }
        }
        this.mapContainer = React.createRef()
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        })

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


        map.on('click', async (e) => {
            const {lng, lat} = e.lngLat.wrap()
            const current = await weatherService.getCurrent(lng, lat)
            const el = document.createElement('div')
            el.className = 'marker'
            new mapboxgl.Marker(el)
                .setLngLat({lng: lng, lat: lat})
                .setPopup(
                  new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                      `<h3>${current.city}</h3>`
                    )
                )
                .addTo(map);
        });
    }

    async createMarker({map, lng, lat, current}) {
        const el = document.createElement('div')
        el.className = 'marker'
        new mapboxgl.Marker(el)
            .setLngLat({lng: lng, lat: lat})
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                  `<h3>${current.city}</h3>`
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