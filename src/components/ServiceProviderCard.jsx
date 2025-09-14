const styleTemporario = {
    border: '1px solid black', 
    margin: '10px', 
    padding: '10px'
}

function ServiceProviderCard(props) {
    const { service } = props;
    return (
        <div style={styleTemporario} className="service-card">
            <div className="card-profile">
                <img src={service.urlFoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s'} alt={`Foto de ${service.nome}`} className="profile-picture"/>
                <h2 className="profile-name">{service.nome}</h2>
                <h3 className="profile-service">{service.servico}</h3>
            </div>
            <div className="card-main-content">
                <p className="focus-description">{service.focoDescricao}</p>
                <div className="card-actions">
                    <button className="info-button">Info</button>
                    <button className="calendar-button">Calendar</button>
                    <button className="i-button">i</button>
                    <button className="doubts-button">?</button>
                    <button className="like-button">Heart</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceProviderCard