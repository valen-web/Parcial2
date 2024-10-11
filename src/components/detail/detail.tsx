import { useLocation } from 'react-router-dom';
import Body from '../interface/props';

function Detail() {
    const location = useLocation();
    const body = location.state.body;  
    
    console.log('Body received in Detail:', body); 
    
    if (!body) {
      return <div>No data available</div>;
    }
    
    return (
      <>
        <div id="Filters">
          <button id="PlanetFilter">Planet</button>
        </div>
        <div id="orders">
          <button id="MassOrder">Mass</button>
        </div>
        <div id="cards">
          <h1 id="Name">{body.englishName}</h1>
          <h3 id="PlanetID">ID: {body.ID}</h3> 
          <input name="dens" id="dens" type="range" value={body.density} />
          <input name="grav" id="grav" type="range" value={body.massValue} />
          <div id="GeneralInformation">
            <p id="name">Name: {body.englishName}</p>
          </div>
          <input name="mass" id="mass" type="range" value={body.massValue} />
          <button id="Back">Back to home</button>
        </div>
      </>
    );
    
}

export default Detail;
