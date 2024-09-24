const house = {
    habitat: 'Elm Street',
    type: 'Detached',
    habitants: ['John', 'Anna', 'Tom']
};

house = { ...house, habitants: [...house.habitants, 'Lisa'] };

console.log(house.habitants)