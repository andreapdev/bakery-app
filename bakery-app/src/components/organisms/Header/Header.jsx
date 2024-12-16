import mainLogo from '../../../assets/logo.svg'
import cartIcon from '../../../assets/icons/cart-icon.svg'
import hamburgerIcon from '../../../assets/icons/hamburger-icon.svg'

export function Header() {
  return <>
  <header className="header" >
    <div className="header__icon">
      <img src={hamburgerIcon} className="header__icon__img" alt="Menu" width="30" />
    </div>
    <div className="header__logo">
      <a href="#" >
          <img src={mainLogo} className="header__logo__img" alt="Pastís" width="150" />
      </a>
    </div>
    <div className="header__icon">
      <img src={cartIcon} className="header__icon__img" alt="Cart" width="30" />
    </div>
  </header>
  </>;
}