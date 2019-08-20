const fs = require('fs');
const paises = JSON.parse(fs.readFileSync('./data/paises.json', 'utf8'));

//numero de paises
// console.log(` número de reistros : ${paises.length} `);

const sudAmerica = paises.filter(pais => pais.subregion === 'South America')

// console.log(sudAmerica.length)

// sudAmerica.forEach(pais => {
//   console.log(pais.name)
// })

const smallestAmerican = sudAmerica.sort(
  (a, b) => a.population > b.population ? 1 : a.population < b.population ? -1 : 0
)[0]

// console.log(smallestAmerican.name, smallestAmerican.population)

let poblaciones = [];

sudAmerica.forEach(pais => {
  poblaciones.push({
    nombre: pais.name,
    capital: pais.capital,
    poblacion: pais.population
  })
})

poblaciones.sort((a, b) => a.poblacion > b.poblacion ? 1 : a.poblacion < b.poblacion ? -1 : 0)

// console.log('Nombre', 'Capital', 'Pobalación')
// poblaciones.forEach(p => {
//   console.log(p.nombre, p.capital, p.poblacion)
// })

const bolivia = paises.find(pais => pais.nativeName === 'Bolivia');
// console.log(bolivia)

paises.sort((a, b) => a.population > b.population ? -1 : a.population < b.population ? 1 : 0)

let top10 = [];
for (let i = 0; i < 10; i++) {
  top10.push({ nombre: paises[i].name, capital: paises[i].capital, poblacion: paises[i].population })
}

console.log(top10)//, paises.find(p => p.name === 'India'))