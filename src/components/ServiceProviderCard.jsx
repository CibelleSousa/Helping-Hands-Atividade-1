import { FaRegCalendarAlt, FaRegQuestionCircle, FaRegHeart } from "react-icons/fa";

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
                    <button className="icon-button" title="Ver Agenda"><FaRegCalendarAlt/></button>
                    <button className="icon-button" title="Dúvidas Frequentes"><FaRegQuestionCircle/></button>
                    <button className="icon-button" title="Favoritar"><FaRegHeart/></button>
                </div>
            </div>
        </div>
    )
}

export default ServiceProviderCard