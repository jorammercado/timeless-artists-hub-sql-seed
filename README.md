# Timeless Artists Hub - SQL Seed Helper

## Project Overview

This repository contains the data preparation script used to generate SQL seed files for the **Timeless Artists Hub** project. It processes a large JSON dataset of artworks, filters for a curated list of well-known artists, and outputs SQL statements to populate a PostgreSQL database.

The purpose of this script was to automate the transformation of raw data into properly formatted SQL INSERT statements, enabling easy seeding of the backend database for development and deployment.

## Features

- **Raw Data Processing**: Converts raw `.json` files containing thousands of artwork entries into structured SQL.
- **Artist Filtering**: Uses a predefined list of 50+ famous artists to selectively filter relevant entries.
- **String Escaping**: Handles special characters and formatting issues in names, titles, and links.
- **Output Generation**: Creates two files:
  - `OutputSQLArtists.sql`: Inserts for artist names.
  - `OutputSQLArtWorks.sql`: Inserts for artwork records including name, style, year, image link, and artist reference.
- **Random Favorites**: Randomly marks some artworks as favorites to simulate user interaction.

## Usage Instructions

1. **Ensure Node.js is installed**.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/jorammercado/timeless-artists-hub-sql-seed.git
   cd timeless-artists-hub-sql-seed
   ```

3. **If using different data, place input files in the root directory:**
   - `artworks.json`: Raw artwork data (from sources such as Kaggle).
   - `famousArtists.json`: A list of artist names to include in the seed.

4. **Run the script:**
   ```bash
   node index.js
   ```

5. **Resulting files:**
   - `OutputSQLArtists.sql`
   - `OutputSQLArtWorks.sql`

These can be used directly and/or altered as needed in SQL setup scripts for the [Timeless Artists Hub Server](https://github.com/jorammercado/timeless-artists-hub-server).

## Sample Workflow

- Raw CSV artwork data is downloaded from a dataset like [WikiArt (Kaggle)](https://www.kaggle.com/datasets/antoinegruson/-wikiart-all-images-120k-link).
- Converted to JSON using an online tool.
- Passed through this script to generate SQL insert statements.
- Imported into PostgreSQL using the `dbinit` and `dbseed` scripts provided in the server repo.

## Related Repositories

- [Frontend Application](https://github.com/jorammercado/timeless-artists-hub)
- [Backend Server](https://github.com/jorammercado/timeless-artists-hub-server)

## License

This project is licensed under the [MIT LICENSE](https://opensource.org/license/mit).

## Contact

For questions or feedback:

- Joram Mercado — [GitHub](https://github.com/jorammercado) | [LinkedIn](https://www.linkedin.com/in/jorammercado)