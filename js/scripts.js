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

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name +  pokemonList[i].height);
    if (pokemonList[i].height <4){
        document.write(pokemonList[i] + '- Wow, that\'s huge!')
    }
}
