const pokemonRepository = (function() {
    const pokemonList = [];
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function add(pokemon) {
      pokemonList.push(pokemon);
  }
  
  function getAll() {
      return pokemonList;
  }
  
  function addListItem(pokemon){
      const pokemonList = document.querySelector(".pokemon-list");
      const listPokemon = document.createElement("li");
      const button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      button.addEventListener('click',function(event){
        showDetails(pokemon);
      });
  }
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
    
  function loadDetails(item) {
      const url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
  
  
     //modal
    
  let modalContainer = document.querySelector('#modal-container');
    
   function showModal(title, text, img) {
      modalContainer.innerHTML='';
      
      const modal = document.createElement('div');
      modal.classList.add('modal');
  
  
      //add the new modal content 
  
      const closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
        
      const pokemonImgElement = document.createElement('img');
      pokemonImgElement.classList.add('pokemon-img');
      pokemonImgElement.alt = 'Image of Pokemon Selected';
      pokemonImgElement.src = pokemon.imageUrl || 'img/pokemon.png';
  
      const pokemonHeight = document.createElement('p')
      pokemonHeight.innerText = `Height: ${pokemon.height || '?'}`;
  
      const pokemonWeight=document.createElement('p')
      pokemonWeight.innerText = `Weight: ${pokemon.weight || '?'}`;
      
      modal.appendChild(closeButtonElement);
      modal.appendChild(pokemonImgElement);
      modal.appendChild(pokemonHeight);
      modal.appendChild(pokemonWeight);
      modalContainer.appendChild(modal);
  
      modalContainer.classList.add('is-visible');
   }
  
      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }
  
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' &&  
        modalContainer.classList.contains('is-visible')){
          hideModal();
        } 
      });
  
    modalContainer.addEventListener('click', (e) => {
      const target = e.target;
      if (target === modalContainer){
        hideModal();
      }
    });
      
  function showDetails(pokemon){
      loadDetails(pokemon).then(function () {
      showModal(pokemon.Height, pokemon.Weight, pokemonImgElement)
    });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
      
      
    };
  })();
  
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });