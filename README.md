
# Data-Toolkit CLI
A lightweight command-line interface (CLI) for working with CSV files, built using Node.js. This tool allwos you to read CSV files, compute basic statistics, filter and sort rows, and export results to a new CSV file.

## Features
Read CSV files and parse them into an array of objects
Compare simple statistics for numeric columns, min, max, avg
Filter rows based on column values
Sort rows in ascending or descending order
Export CSV data to new file
clear error messages for missing arguments ot invalid file path

## Quickstart
```bash
pnpm i
pnpm start -- --help
```


## Sample commands
```bash
pnpm start -- stats --file data/people.csv --column age
pnpm start -- filter --file data/people.csv --column city --value "Austin"
pnpm start -- sort --file data/people.csv --column age --order asc
pnpm start -- export --file data/people.csv --out data/people-export.csv
```

## Usage:
  node src/index.js <command> [options]

## Commands:
  help
  stats  --file <path> --column <name>
  filter --file <path> --column <name> --value <value>
  sort   --file <path> --column <name> --order asc|desc
  export --file <path> --out <path>

## Examples:
  node src/index.js stats --file data/people.csv --column age
  node src/index.js filter --file data/people.csv --column city --value "Austin"
  node src/index.js sort --file data/people.csv --column age --order desc
  node src/index.js export --file data/people.csv --out data/people-export.csv



## Expected output (example)
```
stats(age)
count: 8
min: 19
max: 42
avg: 28.6
```

## Filter
Filter rows by a specific column value
npm start -- filter people.csv city Austin npm start -- filter people.csv role Engineer npm start -- filter people.csv age 24

OR

node src/index.js filter --file people.csv --column city --value Austin

Example output: an array of objects where city equals Austin


## Sort
Sort rows by a column
npm start -- sort people.csv age asc npm start -- sort people.csv age desc npm start -- sort people.csv name asc npm start -- sort people.csv city desc

OR

node src/index.js sort --file people.csv --column age --order asc

-- oder is optional (default is "asc")

Ouput: array of objects sorted by the specified column

## Export
Export the current CSV data (original or filterd/sorted) to a new file
npm start -- sort people.csv age asc --out output.csv npm start -- filter people.csv city Austin --out austin.csv npm start -- stats people.csv age --out age-stats.csv

OR

node src/index.js export --file people.csv --out output.csv

## Full Example: Sort + Export

Sort by age ascending and export to a new CSV
node src/index.js sort --file people.csv --column age --order asc node src/index.js export --file people.csv --out sorted_people.csv

## Important Notes
File paths for --file and --out are relative to the current terminal location.
Always provide --file for input CSV and --column for column-specific commands.
Column names must exactly match the headers in your CSV.
Numeric columns are automatically parsed for statistics.