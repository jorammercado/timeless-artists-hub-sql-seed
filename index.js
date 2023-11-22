const artworks = require("./artworks.json")
const famousArtists = require("./famousArtists.json")
const fs = require('fs')

const artistIndex = []
let indexArtist = 0
const resultArtist = []
const result = []
let formatResultSQLArtWorks = ""
let formatResultSQLArtists = ""
count = 0

for (let i = 0; i < artworks.length; i++) {

    if( !famousArtists.includes(artworks[i].Artist) )
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

