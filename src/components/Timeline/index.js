import './main.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faBell, faHashtag, faEllipsisH, faGem } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBookmark, faListAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconsStyle = {
    color: '#FFF'
}

const menus = [
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faTwitter} />,
    text: ''
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faHome} />,
    text: 'Inicio'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faHashtag} />,
    text: 'Explorar'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faBell} />,
    text: 'Notificaciones'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faEnvelope} />,
    text: 'Mensajes'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faBookmark} />,
    text: 'Guardados'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faListAlt} />,
    text: 'Listas'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faUser} />,
    text: 'Perfíl'
},
{
    icon: <FontAwesomeIcon size='2x' style={iconsStyle} icon={faEllipsisH} />,
    text: 'Más opciones'
}]

export default () => {
    return (
        <div className='main-container'>
            <div className='column'>
                <div className='ul-container'>
                    <ul className='ul'>
                        {menus.map((value) => (
                            <li className='li white'>
                                <span className='icon-container'>{value.icon}</span>
                                <span className='white text'>{value.text}</span>
                            </li>
                        ))}
                        <div className='button'>
                            <span className='text-small'>Twittear</span>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='column vertical-border'>
                <div className='start'>
                    <span className='text-small'>Inicio</span>
                    <FontAwesomeIcon size='lg' style={{color: 'rgb(29 161 242)'}} icon={faGem} />
                </div>
                <div className='twittear'>
                    <div>
                        <img className='profile-img' src='https://pm1.narvii.com/6534/be6f078917ab14799422be43a084da4fbc9588b3_00.jpg' />
                    </div>
                    <div className='padding'>
                        <div>
                            <span className='whats-happening'>¿Que está pasando?</span>
                        </div>
                        <div className='twittear-actions'>
                            <div>
                                <FontAwesomeIcon size='lg' style={{color: '#1da1f2', marginRight: '1rem'}} icon={faTwitter} />
                                <FontAwesomeIcon size='lg' style={{color: '#1da1f2', marginRight: '1rem'}} icon={faTwitter} />
                                <FontAwesomeIcon size='lg' style={{color: '#1da1f2', marginRight: '1rem'}} icon={faTwitter} />
                                <FontAwesomeIcon size='lg' style={{color: '#1da1f2', marginRight: '1rem'}} icon={faTwitter} />
                                <FontAwesomeIcon size='lg' style={{color: '#1da1f2', marginRight: '1rem'}} icon={faTwitter} />
                            </div>
                            <div>
                                <div className='to-tweet'>
                                    <span className='text-small'>Twittear</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column'></div>
        </div>
    )
}