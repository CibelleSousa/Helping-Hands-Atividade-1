import ServiceProviderCard from './ServiceProviderCard.jsx';

function ServiceList(props) {
  return (
    <div>
        {
            props.services.map(
                service => (<ServiceProviderCard key={service.id} service={service} />)
            )
        }
    </div>
  )
}

export default ServiceList