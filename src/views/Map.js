import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

export default function Home() {
    return (
        <div className="row glass">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Current />
                <WeatherHourly />
            </div>
        </div>
    )
}