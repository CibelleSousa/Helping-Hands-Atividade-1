const styleTemporario = {
    border: '1px solid black', 
    margin: '10px', 
    padding: '10px'
}

function ServiceProviderCard(props) {
    const { service } = props;
    return (
        <div style={styleTemporario}>
            <p>Foto: {service.urlFoto}</p>
            <h2>{service.nome}</h2>
            <h3>{service.servico}</h3>
            <p>{service.focoDescricao}</p>
        </div>
    )
}

export default ServiceProviderCard