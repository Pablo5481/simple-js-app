const pokemonRepository = (function() {
    const repository = [
      { 
          name: 'Bulbasaur', 
          height: 4, 
          weight: 6.9 + 'kg',
          types: [
              'grass', 
              'poison' 
          ]
      },
  
      { 
          name: 'Charizard', 
          height: 3, 
          weight: 8.5 + 'kg',
          types: 
              'fire' 
          
      },
  
      { 
          name: 'Squirtle', 
          height: 2, 
          weight: 9 + 'kg',
          types: 
              'water' 
          
      },
  ];
  
  function add(pokemon) {
      repository.push(pokemon);
  }
  
  function getAll() {
      return repository;
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
  
    function showDetails(pokemon){
      console.log(pokemon);
    }
  
  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
  };
   
  })();
  
  pokemonRepository.getAll().forEach(function (pokemon){    
    pokemonRepository.addListItem(pokemon);
  }); 