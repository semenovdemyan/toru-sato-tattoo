import './../assets/header.css';
import '../app.css';
import logo from '../imgs/karps.svg';
export default function Header() {
  return (
    <section className="header-section">
      <div className="container header-container">
        <header className="flex header">
          <nav className="nav">
            <ul className="flex header-list">
              <li className="header-item">
                <a href="#aboutMe">Обо мне</a>
              </li>
              <li className="header-item">
                <a href="#myDeals">Мои работы</a>
              </li>
              <li className="header-item">
                <a href="#myServices">Мои услуги</a>
              </li>
              <li className="header-item">
                <a href="#myContacts">Мои контакты</a>
              </li>
            </ul>
          </nav>
          <div className="tel-logo">
              <a className='tel' href="tel:+79371865279">+7 937 186-52-79</a>
            <img src={logo} alt="carps" className="header-img" />
          </div>
        </header>
      </div>
    </section>
  );
}
