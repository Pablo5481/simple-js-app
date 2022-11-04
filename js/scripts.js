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
    const pokemonList = document.querySelector('.pokemon-list');
    const listPokemon = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-modal')
    button.classList.add('btn')
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    }


  function showModal(item) {
    const modalBody = $('.modal-body');
    const modalTitle = $('.modal-title');
    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    const pokemonName = $('<h1>' + item.name + '</h1>');
    // // creating img in modal content
    const pokemonImage = $('<img class="modal-img" style="width:60%">');
    pokemonImage.attr('src', item.imageUrl);
    // //creating element for height in modal content
    const pokemonHeight = $('<p>' + 'Height: ' + item.height + '</p>');
    // //creating element for weight in modal content
    const pokemonWeight = $('<p>' + 'Weight: ' + item.weight + '</p>');
    // //creating element for type in modal content
    const pokemonTypes = $('<p>' + 'Types: ' + item.types + '</p>');
    

    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonTypes);
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
      item.weight = details.weight;
      item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(' '+ details.types[i].type.name);
        }
    }).catch(function (e) {
      console.error(e);
    });
  }

function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
    showModal(pokemon)

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