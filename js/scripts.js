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
    document.write(pokemonList[i].name + ' ' + 'height:' +  ' ' + pokemonList[i].height)
    if (pokemonList[i].height >3){
        document.write(' ' + '- Wow, that\'s huge!' + '<br/>');
    } else document.write('<br/>');
}
