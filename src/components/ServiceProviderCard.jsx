import { FaRegCalendarAlt, FaRegQuestionCircle, FaRegHeart } from "react-icons/fa";


function ServiceProviderCard(props) {
    const { service } = props;
    return (
        <div className="full-card-profile">
            <div className="card-profile">
                <img src={service.urlFoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s'} alt={`Foto de ${service.nome}`} className="profile-picture"/>
                <div className="info">
                    <h2 className="profile-name">{service.nome}</h2>
                    <h3 className="profile-service">{service.servico}</h3>
                    <div className="card-actions">
                        <button className="info-button">Info</button>
                        <button className="icon-button" title="Ver Agenda"><FaRegCalendarAlt className="button-icon"/></button>
                        <button className="icon-button" title="Dúvidas Frequentes"><FaRegQuestionCircle className="button-icon"/></button>
                        <button className="icon-button" title="Favoritar"><FaRegHeart className="button-icon"/></button>
                </div>
                </div>
            </div>
            <div className="card-main-content">
                <p className="focus-description">{service.focoDescricao}</p>
            </div>
        </div>
    )
}

export default ServiceProviderCard