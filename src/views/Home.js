import Current from '../components/Current'
import WeatherHourly from '../components/WeatherHourly'

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