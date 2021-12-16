# Supatyped [WIP]

Supatyped is a nodejs CLI tool that can be used to automaticall generate types from
any postgres database.

## How to use

```
Usage: supatyped [options]

Options:
  -V, --version                               output the version number
  -cs, --connectionString <connectionString>  Connection string to the database
  -s, --schema <schema>                       DB schema to generate types from (default: "public")
  -d, --debug                                 Enable debug mode (default: false)
  -o, --output <output>                       Where TS types will be generated (default: "./src/types/generated/DBTypes.ts")
  -g, --generate                              Generate react hooks types (default: false)
  -h, --help                                  display help for command
```

## Usage

The usage is very simple. Please run the cli and pass in your connection string to your postgres database

`supatyped -o postgresql://username:password@localhost:port/databasename`

supatyped will only be able to access tables you have permissions too.

## Features

- [x] Generate ENUM
- [x] Generate Table Types
- [ ] Generate Custom Types
- [ ] Generate Typed Supabase Client/React Hooks
