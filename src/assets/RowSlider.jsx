import tattoo from '../imgs/11.jpg';
import './row.css';
const TATTOOS = [
  // '../imgs/1.jpg',
  // '../imgs/2.jpg',
  // '../imgs/3.jpg',
  // '../imgs/4.jpg',
  // '../imgs/5.jpg',
  // '../imgs/6.jpg',
  // '../imgs/7.jpg',
  // '../imgs/8.jpg',
  // '../imgs/9.jpg',
  // '../imgs/10.jpg',
  // '../imgs/11.jpg',
  // '../imgs/12.jpg',
  // '../imgs/13.jpg',
  // '../imgs/14.jpg',
  // '../imgs/15.jpg',
  // '../imgs/16.jpg',
  // '../imgs/17.jpg',
  // '../imgs/18.jpg',
  // '../imgs/19.jpg',
  // '../imgs/20.jpg',
  // '../imgs/21.jpg',
  // '../imgs/22.jpg',
  // '../imgs/23.jpg',
  // '../imgs/24.jpg',
];

export default function RowSlider() {
  return (
    <section className="row-slider-section">
      <div className="swiper-container loop-slide">
        <div className="row-wrapper">
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="row-swiper-item">
            <img
              loading="lazy"
              className="row-swiper-img"
              src={tattoo}
              alt="tattoo"
            />
          </div>
        </div>
        <h3 className="row-slider-header">
          HEADER 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          esse.
        </h3>
      </div>
    </section>
  );
}
