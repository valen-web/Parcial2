import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchBodies from '../../services/Api';
import Body from '../interface/props';


function Main() {
  const [bodies, setBodies] = useState<Body[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Main component rendered");

    fetchBodies().then((fetchedBodies: Body[]) => {
      setBodies(fetchedBodies);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (body: Body) => {
    navigate(`/detail/${body.id}`, { state: { body } });
  };

  return (
    <>
    <h1>Celestial Bodies</h1>
      <div id="Filters">
        <p>filtrar por</p>
        <button id="PlanetFilter">Planet</button>
      </div>
      <div id="orders">
        <p>filtrar por:</p>
        <button id="MassOrder">Mass</button>
      </div>
      <div id="cards">
        {bodies.map((body) => (
          <button
            key={body.id}
            className="card"
            onClick={() => handleCardClick(body)} 
          >
            <h2 id="Name">{body.englishName}</h2>
            <p>Mass: {body.massValue}</p>

          
            <label htmlFor={`density-${body.id}`}>Density</label>
            <input 
              id={`density-${body.id}`} 
              type="range" 
              value={body.density} 
              min={0} 
              max={20}  
              step={0.1} 
              readOnly 
            />
            <span>{body.density}</span>

          
            <label htmlFor={`mass-${body.id}`}>Mass</label>
            <input 
              id={`mass-${body.id}`} 
              type="range" 
              value={body.massValue} 
              min={0} 
              max={100}  
              readOnly 
            />
            <span>{body.massValue}</span>

         
            {body.gravity && (
              <>
                <label htmlFor={`gravity-${body.id}`}>Gravity</label>
                <input 
                  id={`gravity-${body.id}`} 
                  type="range" 
                  value={body.gravity} 
                  min={0} 
                  max={50}  
                  step={0.1} 
                  readOnly 
                />
                <span>{body.gravity}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export default Main;
