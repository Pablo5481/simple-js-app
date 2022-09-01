let pokemonRepository = (function() {
const pokemonList = [
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
        name: 'Charmander', 
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
        
    }
];


pokemonList.forEach(function(pokemon){

    document.write(pokemon.name + ' height: ' +  pokemon.height + ', weight: ' + pokemon.weight)
    if (pokemon.height >3){
        document.write(' - Wow, that\'s huge!' + '<br/>');
    } else document.write('<br/>');

});


function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll,
}

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });