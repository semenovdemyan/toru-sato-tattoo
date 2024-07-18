import './wards.css';

// import './wards.css';
// import karps from '../imgs/karps.svg';

export default function Wards() {
  function scrollTopTop() {
    window.addEventListener('scroll', function () {
      var scroll = document.querySelector('.wards');
      scroll.classList.toggle('active', window.scrollY > 444);
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="wards" onClick={scrollTopTop()}>
      <div className="ward__tg ward_2">
        <a href="https://t.me/YUNGCONOR666" target="_blank" rel="noreferrer">
          <svg
            fill="rgb(255, 115, 0)"
            width="38px"
            height="38px"
            viewBox="0 0 38 38"
            version="1.1"
          >
            <path d="M 19 3.21875 C 10.285156 3.21875 3.21875 10.285156 3.21875 19 C 3.21875 27.714844 10.285156 34.78125 19 34.78125 C 27.714844 34.78125 34.78125 27.714844 34.78125 19 C 34.78125 10.285156 27.714844 3.21875 19 3.21875 Z M 27.175781 10.308594 C 27.816406 10.285156 28.300781 10.863281 28.039062 11.90625 L 24.914062 26.640625 C 24.695312 27.6875 24.0625 27.941406 23.1875 27.457031 L 18.421875 23.9375 C 17.304688 25.023438 16.300781 26 16.132812 26.164062 C 15.867188 26.421875 15.65625 26.640625 15.179688 26.640625 C 14.5625 26.640625 14.667969 26.40625 14.453125 25.820312 L 12.703125 20.449219 L 8.121094 19.015625 C 7.105469 18.707031 7.097656 18.007812 8.351562 17.503906 L 26.710938 10.421875 C 26.871094 10.351562 27.027344 10.3125 27.175781 10.308594 Z M 24.261719 13.441406 C 24.125 13.441406 23.9375 13.488281 23.742188 13.605469 L 13.421875 20.117188 L 15.160156 25.453125 L 15.503906 21.78125 L 24.34375 13.804688 C 24.585938 13.589844 24.492188 13.445312 24.261719 13.441406 Z M 24.261719 13.441406 " />
          </svg>
        </a>
      </div>
      <div className="ward_2">
        <svg
          fill="rgb(255, 115, 0)"
          className="ward"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(255, 115, 0)"
            d="M8 12L12 8M12 8L16 12M12 8V20M4 4H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
