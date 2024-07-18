import '../assets/hero.css';
import '../app.css'
import avatar from './../imgs/1.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="flex container hero-container">
        <div className="avatar">
          <img className="hero-img" src={avatar} alt="Это я" />
        </div>
        <div className='hero-text'>
          <h1 className="hero-h">Твой тату-мастер</h1>
          <p className="hero-descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum
            saepe, facilis velit aliquam molestiae itaque hic quisquam incidunt
            natus quas magni ducimus, eligendi voluptatum perferendis animi
            temporibus nihil debitis.
          </p>
        </div>
      </div>
    </section>
  );
}
