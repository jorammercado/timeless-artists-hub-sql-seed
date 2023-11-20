const artworks = require("./artworks.json")
const fs = require('fs')

const artistIndex = []
let indexArtist = 0
const resultArtist = []
const result = []
let formatResultSQLArtWorks = ""
let formatResultSQLArtists = ""
count = 0

for (let i = 0; i < artworks.length; i++) {

    if (artworks[i].Artist !== "Amedeo Modigliani" && artworks[i].Artist !== "Vasiliy Kandinskiy" &&
        artworks[i].Artist !== "Diego Rivera" && artworks[i].Artist !== "Claude Monet" &&
        artworks[i].Artist !== "Rene Magritte" && artworks[i].Artist !== "Salvador Dali" &&
        artworks[i].Artist !== "Edouard Manet" && artworks[i].Artist !== "Andrei Rublev" &&
        artworks[i].Artist !== "Vincent van Gogh" && artworks[i].Artist !== "Gustav Klimt" &&
        artworks[i].Artist !== "Hieronymus Bosch" && artworks[i].Artist !== "Kazimir Malevich" &&
        artworks[i].Artist !== "Mikhail Vrubel" && artworks[i].Artist !== "Pablo Picasso" &&
        artworks[i].Artist !== "Peter Paul Rubens" && artworks[i].Artist !== "Pierre-Auguste Renoir" &&
        artworks[i].Artist !== "Francisco Goya" && artworks[i].Artist !== "Frida Kahlo" &&
        artworks[i].Artist !== "El Greco" && artworks[i].Artist !== "Albrecht Dürer" &&
        artworks[i].Artist !== "Alfred Sisley" && artworks[i].Artist !== "Pieter Bruegel" &&
        artworks[i].Artist !== "Marc Chagall" && artworks[i].Artist !== "Giotto di Bondone" &&
        artworks[i].Artist !== "Sandro Botticelli" && artworks[i].Artist !== "Caravaggio" &&
        artworks[i].Artist !== "Leonardo da Vinci" && artworks[i].Artist !== "Diego Velazquez" &&
        artworks[i].Artist !== "Henri Matisse" && artworks[i].Artist !== "Jan van Eyck" &&
        artworks[i].Artist !== "Edgar Degas" && artworks[i].Artist !== "Rembrandt" &&
        artworks[i].Artist !== "Titian" && artworks[i].Artist !== "Henri de Toulouse-Lautrec" &&
        artworks[i].Artist !== "Gustave Courbet" && artworks[i].Artist !== "Camille Pissarro" &&
        artworks[i].Artist !== "William Turner" && artworks[i].Artist !== "Edvard Munch" &&
        artworks[i].Artist !== "Paul Cezanne" && artworks[i].Artist !== "Eugene Delacroix" &&
        artworks[i].Artist !== "Henri Rousseau" && artworks[i].Artist !== "Georges Seurat" &&
        artworks[i].Artist !== "Paul Klee" && artworks[i].Artist !== "Piet Mondrian" &&
        artworks[i].Artist !== "Joan Miro" && artworks[i].Artist !== "Andy Warhol" &&
        artworks[i].Artist !== "Paul Gauguin" && artworks[i].Artist !== "Raphael" &&
        artworks[i].Artist !== "Michelangelo" && artworks[i].Artist !== "Jackson Pollock")
            continue

    let style = artworks[i].Style,
        artwork_name = artworks[i].Artwork,
        artist_name = artworks[i].Artist,
        date = Number(artworks[i].Date),
        image_link = artworks[i].Link

    if (typeof style === "string")
        style = style.replace(/['`’]/g, "''")
    if (typeof artwork_name === "string")
        artwork_name = artwork_name.replace(/['`’]/g, "''")
    if (typeof artist_name === "string")
        artist_name = artist_name.replace(/['`’]/g, "''")
    if (typeof image_link === "string")
        image_link = image_link.replace(/['`’]/g, "''")

    if (artistIndex.indexOf(artist_name) === -1) {
        artistIndex.push(artist_name)
        resultArtist.push({ artist_name })
        formatResultSQLArtists += `('${resultArtist[indexArtist].artist_name}'),\n`
        indexArtist++
    }

    const artist_index = artistIndex.indexOf(artist_name) + 1
    result.push({
        artist_id: artist_index, artist_name , artwork_name, date, image_link, style, 
        is_favorite: Math.random() < 0.5
    })

    formatResultSQLArtWorks += `('${result[count].artist_id}', ` + `'${result[count].artist_name}',`+
        ` '${result[count].artwork_name}', '${result[count].style}', ${result[count].date},`+
        ` '${result[count].image_link}', ${result[count].is_favorite} ),\n`
    
    count++
}

fs.writeFile('OutputSQLArtWorks.txt', formatResultSQLArtWorks, (err) => {
    if (err) throw err
})

fs.writeFile('OutputSQLArtists.txt', formatResultSQLArtists, (err) => {
    if (err) throw err
})

