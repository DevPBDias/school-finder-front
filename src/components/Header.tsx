import logo from '../assets/schoolLogo.png'

function Header() {
  return (
    <header>
        <div>
            <img src={logo} alt="logo website" />
            <input type="text" placeholder='Digite o nome da escola' />
            <button type='button'>Cadastrar escola</button>
        </div>
    </header>
  )
}

export default Header