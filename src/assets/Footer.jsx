import './footer.css'

export default function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <ul className="footer-list flex"> <li className="footer-column fc2">
              <ul className="second-column-list">
                <li className="column-list-item">
                  <address className="footer-address">
                    Екатеринбург, улица Горького, дом 31
                  </address>
                </li>
                <li className="column-list-item">
                  <ul className="footer-contact-number-list">
                    <li>
                      <a className="footer-number" href="tel:+79958649713">
                        +7&nbsp;995 864-97-13
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="column-list-item">
                  <ul className="footer-contact-emails">
                    <li>
                      <a className="footer-email" href="mailto:semenovdemyan@gmail.com">
                        semenovdemyan@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="footer-column fc1">
              <ul className="first-column-list">
                <li className="column-list-item">
                  <p className="footer-descr">
                    ИП&nbsp;Пономарев Гордей Юрьевич
                  </p>
                </li>
                <li className="column-list-item">
                  <p className="footer-descr">
                    Представленная на&nbsp;сайте информация носит
                    справочный
                    характер и&nbsp;не&nbsp;является публичной
                    офертой
                  </p>
                </li>
                <li className="column-list-item">
                  <a href="http://service4you-ekb.ru/" className="user-agreement">Пользовательское
                    соглашение</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </section>
  );
}
