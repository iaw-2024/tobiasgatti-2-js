    const mockAPIEndpoint = 'https://6605a0322ca9478ea180cb41.mockapi.io/app/users';
    //aca utilice la url de la api de mockapi para probar 
    const dataList = document.getElementById('data-list');

    axios.get(mockAPIEndpoint)
      .then(response => {
        const data = response.data;
        data.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>Id:</strong> ${item.id}<br>
            <strong>Nombre:</strong> ${item.name}<br>
            <strong>Avatar:</strong> <img src='${item.avatar}'><br>
          `;
          dataList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error al obtener el listado de datos:', error);
      });
