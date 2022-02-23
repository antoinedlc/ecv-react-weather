import './index.scss'

export default function WeatherCard({ icon, content, city, temp, add }) {
    if(icon, content, city, temp != null) {
        return (
            <div className="weather-card">
                <span className="weather-card__city">{city}</span>
                <span className="weather-card__content">{content}</span>
                <div className="weather-card__icon" style={{backgroundImage: 'url(' + icon + ')'}}></div>
                <span className="weather-card__temp">{temp}</span>
            </div>
        )
    } else {
        return null
    }
}