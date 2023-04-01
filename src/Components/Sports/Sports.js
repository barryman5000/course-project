import Sports1 from '../../Images/sports-1.jpg';
import Sports2 from '../../Images/sports-2.jpg';
import Sports3 from '../../Images/sports-3.jpg';
import Sports4 from '../../Images/sports-4.jpg';


function Sports() {
    return (
      <div className="Sports">
        <header className="App-header">
          <p>
            <h2 class="cat-title">Sports Wear</h2>

          </p>
          <p class="image-container">
          <div class="container">
            <div class="row">
              <div class="column"><img class="shop-img" src={Sports1} alt="Image 1" /><p>Athletic Shoes</p></div>
              <div class="column"><img class="shop-img" src={Sports2} alt="Image 2" /><p>Hiking Shoes</p></div>
              <div class="column"><img class="shop-img" src={Sports3} alt="Image 3" /><p>Cold Weather</p></div>
            </div>
            
            <div class="row">
              <div class="column"><img class="shop-img" src={Sports4} alt="Image 4" /><p>Sweat Resistant</p></div>
              
            </div>
          </div>

          </p>
        </header>
      </div>
    );
  }
  
  export default Sports;
  