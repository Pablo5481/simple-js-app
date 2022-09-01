const pokemonList = [
    { 
        name: 'Bulbasaur', 
        height: 4, 
        types: [
            'grass', 
            'poison' 
        ]
    },

    { 
        name: 'Charmander', 
        height: 3, 
        types: 
            'fire' 
        
    },

    { 
        name: 'Squirtle', 
        height: 2, 
        types: 
            'water' 
        
    }
];

pokemonList.forEach(function(pokemon){

    document.write(pokemon.name + ' height: ' +  pokemon.height)
    if (pokemon.height >3){
        document.write(' - Wow, that\'s huge!' + '<br/>');
    } else document.write('<br/>');
});