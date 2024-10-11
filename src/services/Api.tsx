

async function fetchBodies() {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
    const data = await response.json();
    return data.bodies;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchBodies