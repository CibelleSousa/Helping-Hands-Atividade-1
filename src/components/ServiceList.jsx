import ServiceProviderCard from './ServiceProviderCard.jsx';

function ServiceList(props) {
  return (
    <div className='service-list'>
        {
            props.services.map(
                service => (<ServiceProviderCard key={service.id} service={service} />)
            )
        }
    </div>
  )
}

export default ServiceList