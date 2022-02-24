import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import weatherService from '../../services/weatherService'

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
            geojson: {}
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

        if(this.state.geojson.feature != null) {
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
            // const current = await weatherService.getCurrent(lng, lat)
            // const el = document.createElement('div')
            // el.className = 'marker'
            // new mapboxgl.Marker(el)
            //     .setLngLat({lng: lng, lat: lat})
            //     .setPopup(
            //       new mapboxgl.Popup({ offset: 25 })
            //         .setHTML(
            //           `<h3>${current.city}</h3>`
            //         )
            //     )
            //     .addTo(map);
            // this.props.addMarker(this.state.markers)
        });
    }

    // async createMarker({map, lng, lat, current}) {
    //     const el = document.createElement('div')
    //     el.className = 'marker'
    //     new mapboxgl.Marker(el)
    //         .setLngLat({lng: lng, lat: lat})
    //         .setPopup(
    //           new mapboxgl.Popup({ offset: 25 })
    //             .setHTML(
    //               `<h3>${current.city}</h3>`
    //             )
    //         )
    //         .addTo(map);
    // }

    async handleClick(map, lng, lat) {
        console.log(lng, lat)
        const current = await weatherService.getCurrent(lng, lat)
        const marker = await this.createMarker({
            lng,
            lat,
            city: current.city ? current.city : '[...]'
        })
        console.log(marker)
    }

    async createMarker({lng, lat, city}) {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            properties: {
                title: city
            }
        }
    }

    render() {
        return (
            <div ref={this.mapContainer} className="map-container" style={{width: '65rem', height: '45rem'}} />
        )
    }
}