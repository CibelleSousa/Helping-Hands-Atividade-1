import { FaRegCalendarAlt, FaRegQuestionCircle, FaRegHeart } from "react-icons/fa";

/**
 * Exibe as informações de um único prestador de serviço em um card.
 * @param {Object} props - As propriedades do componente.
 * @param {Object} props.service - O objeto contendo os dados do prestador de serviço.
 * @param {number} props.service.id - O ID único do serviço.
 * @param {string} props.service.nome - O nome do prestador.
 * @param {string} props.service.servico - O serviço oferecido.
 * @param {string} props.service.urlFoto - A URL da foto do prestador.
 * @param {string} props.service.focoDescricao - A descrição do serviço.
 * @returns {JSX.Element} O card de um prestador de serviço.
 */
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