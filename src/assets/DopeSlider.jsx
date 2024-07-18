import '../app.css';
import './dope.css';
//import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import dopeImg1 from '../dope-imgs/1.jpg';
import dopeImg2 from '../dope-imgs/2.jpg';
import dopeImg3 from '../dope-imgs/3.jpg';
import dopeImg4 from '../dope-imgs/4.jpg';
import dopeImg5 from '../dope-imgs/5.jpg';
import dopeImg6 from '../dope-imgs/6.jpg';
import dopeImg7 from '../dope-imgs/7.jpg';
import dopeImg8 from '../dope-imgs/8.jpg';
import dopeImg9 from '../dope-imgs/9.jpg';
import dopeImg10 from '../dope-imgs/10.jpg';
import dopeImg11 from '../dope-imgs/11.jpg';
import dopeImg12 from '../dope-imgs/12.jpg';
import dopeImg13 from '../dope-imgs/13.jpg';
import dopeImg14 from '../dope-imgs/14.jpg';
import dopeImg15 from '../dope-imgs/15.jpg';
import dopeImg16 from '../dope-imgs/16.jpg';
import dopeImg17 from '../dope-imgs/17.jpg';
import dopeImg18 from '../dope-imgs/18.jpg';
import dopeImg19 from '../dope-imgs/19.jpg';
import dopeImg20 from '../dope-imgs/20.jpg';
import dopeImg21 from '../dope-imgs/21.jpg';
import dopeImg22 from '../dope-imgs/22.jpg';
import dopeImg23 from '../dope-imgs/23.jpg';
import dopeImg24 from '../dope-imgs/24.jpg';

export default function RowSlider() {
  return (
    <section className="dope-section">
      <h3 hidden>DOPE</h3>
      <div className="dope-container">
        <div className="swiper slider slider1">
          <div className="swiper-wrapper2 slider__wrapper">
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg1} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg2} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg3} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg4} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg5} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg6} alt="tattoo" />
            </div>
          </div>
        </div>

        <div className="swiper slider slider2">
          <div className="swiper-wrapper2 slider__wrapper">
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg7} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg8} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg9} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg10} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg11} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg12} alt="tattoo" />
            </div>
          </div>
        </div>
 
        <div className="swiper slider slider3">
          <div className="swiper-wrapper2 slider__wrapper">
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg13} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg14} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg15} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg16} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg17} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg18} alt="tattoo" />
            </div>
          </div>
        </div>

        <div className="swiper slider slider4">
          <div className="swiper-wrapper2 slider__wrapper">
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg19} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg20} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg21} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg22} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg23} alt="tattoo" />
            </div>
            <div className="swiper-slide slider__item">
              <img loading='lazy' className="tattoo" src={dopeImg24} alt="tattoo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
