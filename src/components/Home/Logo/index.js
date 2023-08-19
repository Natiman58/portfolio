import LogoN from '../../../assets/images/logo-n.png'
import './index.scss'

const Logo = () => {
    return (
        <div className='logo-container' style={{opacity: '1'}}>
            <img className='solid-logo' src={LogoN} alt="N" style={{opacity: '1'}}/>
        </div>
    )
}

export default Logo;