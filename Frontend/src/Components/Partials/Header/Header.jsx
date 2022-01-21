import Logo from '../../../Assets/Img/logo.png'
import Navigation from '../Navigation/Navigation'

const Main = props => {
return (
    <header>
        <a href="/"><img src={Logo} alt="logo" /></a>
        <Navigation />
        <h2>Info on more than 600 songs | Add your own</h2>
    </header>
)
}
export default Main