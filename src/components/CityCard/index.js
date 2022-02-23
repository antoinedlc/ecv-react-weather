import './index.scss'

export default function CityCard({ content, city, temp }) {
    if(content, city, temp != null) {
        return (
            <div className="city-card">
                <div className="city-card__container">
                    <span className="city-card__city">{city}</span>
                    <span className="city-card__content">{content}</span>
                </div>
                <div className="city-card__container">
                    <span className="city-card__temp">{temp}</span>
                </div>
            </div>
        )
    } else {
        return null
    }
}