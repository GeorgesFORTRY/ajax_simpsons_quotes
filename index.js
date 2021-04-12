function fetchPokemonJSON() {
      
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
      .then((response) => {
        return response.data[0]; 
      })
      .then((simpson) => {
         
        const simpsonHtml = `
          
          <h2>${simpson.character}</h2>
          <img src="${simpson.image}" />
          <h3>${simpson.quote}</h3>
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;

        
      });
  }
  document.querySelector('#myButton').addEventListener('click', fetchPokemonJSON);

  fetchPokemonJSON();