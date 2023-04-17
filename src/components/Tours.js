import Title from './Title.js'
import { tours } from '../data.js'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            img,
            alt,
            date,
            title,
            description,
            icon,
            country,
            daysNum,
            price,
          } = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={alt} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{daysNum}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
