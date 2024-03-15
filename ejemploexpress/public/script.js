async function fetchDataFromServer() {
    try {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      document.getElementById('responseData').innerText = JSON.stringify(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  // Escuchar eventos de clic en el botón
  document.getElementById('fetchData').addEventListener('click', fetchDataFromServer);