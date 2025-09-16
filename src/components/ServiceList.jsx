import ServiceProviderCard from './ServiceProviderCard.jsx';

/**
 * Renderiza uma lista de componentes ServiceProviderCard.
 * @param {Object} props - As propriedades do componente.
 * @param {Array<Object>} props.services - O array de objetos de serviço a ser exibido.
 * @returns {JSX.Element} Uma div contendo a lista de cards de serviço.
 */
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