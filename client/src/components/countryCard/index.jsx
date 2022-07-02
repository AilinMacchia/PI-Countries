import { Link } from 'react-router-dom'
import s from "./index.module.css"

export default function CountryCard({ image, name, continent, id }) {
    return (
        <Link to={`/countries/${id}`}>
            <div className={s.card}>
                <h2 id={s.titleName}>{name}</h2>
                <h4 className={s.text}>Continent: {continent}</h4>
                <img className={s.flag} src={image} alt='flag' />
            </div>
        </Link>
    )
}