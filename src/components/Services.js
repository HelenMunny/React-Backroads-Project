import Title from './Title.js'
import { services } from '../data.js'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, description } = service
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
