import './loader.css';
import karps from '../imgs/karps.svg';


export default function Loader() {
  return (
    <div hidden className="loader-container">
      <div className='loader-progress'></div>
      <div className="loader">
        <img className="karps" src={karps} alt="src\imgs\karps.svg" />
      </div>
      
      <span id="percents" className="loader-percents">
        <div className="flex counter">
          <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>

          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>

          <div className="counter-3 digit">
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div> 
          </div>
        </div>
      </span>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    </div>
  );
}
