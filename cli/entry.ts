import { Generator } from "./../src/Generator";
import { DatabaseConneciton } from "./../src/DatabaseConnection";
import { Command } from "commander";
import { Config } from "../src/Config";
// Initalise Commander
const program = new Command();

// Postgres connection string example: postgresql://username:password@localhost:port/databasename
// Set up CLI options
program.version("1.0.0");
program
  .requiredOption(
    "-cs, --connectionString <connectionString>",
    "Connection string to the database"
  )
  .option("-s, --schema <schema>", "DB schema to generate types from", "public")
  .option("-d, --debug", "Enable debug mode", false)
  .option(
    "-o, --output <output>",
    "Where TS types will be generated",
    "./src/types/generated/DBTypes.ts"
  )
  .option("-g, --generate", "Generate react hooks types", false)
  .action(async () => {
    const options = program.opts();
    const config = new Config(options);
    const db = new DatabaseConneciton(config);
    // TODO: Use Chalk to make this look prettier
    db.isReady()
      .then(async () => {
        console.log("\n[Success]: Database connection established!");
        // console.log(await db.getEnums());
        const generator = new Generator(db, config);
        console.log("[Success]: Generator initialised!");
        await generator.generate();
        console.log(
          `[Success]: Types have been generated to ${config.output} !`
        );
        process.exit(0);
      })
      .catch((err) => {
        console.log(`[Error]: \n ${err}`);
        process.exit(0);
      });
  });

program.parseAsync(process.argv);
