import Casual1 from '../../Images/casual-1.jpg';
import Casual2 from '../../Images/casual-2.jpg';
import Casual3 from '../../Images/casual-3.jpg';
import Casual4 from '../../Images/casual-4.jpg';
import Casual5 from '../../Images/casual-5.jpg';
import Casual6 from '../../Images/casual-6.jpg';

function Casual() {
    return (
      <div className="Casual">
        <header className="App-header">
          <p>
            <h2 class="cat-title">Casual Wear</h2>

          </p>
          <p class="image-container">
          <div class="container">
            <div class="row">
              <div class="column"><img class="shop-img" src={Casual1} alt="Image 1" /><p>Women's Lounge</p></div>
              <div class="column"><img class="shop-img" src={Casual2} alt="Image 2" /><p>Women's Athletic</p></div>
              <div class="column"><img class="shop-img" src={Casual3} alt="Image 3" /><p>Yoga</p></div>
            </div>
            
            <div class="row">
              <div class="column"><img class="shop-img" src={Casual4} alt="Image 4" /><p>Cold weather Jogging</p></div>
              <div class="column"><img class="shop-img" src={Casual5} alt="Image 5" /><p>Endurance Jogging</p></div>
              <div class="column"><img class="shop-img" src={Casual6} alt="Image 6" /><p>Comfy Casual</p></div>
            </div>
          </div>

          </p>
        </header>
      </div>
    );
  }
  
  export default Casual;
  