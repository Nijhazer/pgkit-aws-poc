"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const migrator_1 = require("@slonik/migrator");
const slonik_1 = require("slonik");
const postgresURI = process.env.POSTGRES_URI || null;
if (!postgresURI) {
    throw new Error('POSTGRES_URI must be set');
}
const slonik = (0, slonik_1.createPool)(postgresURI);
const migrator = new migrator_1.SlonikMigrator({
    migrationsPath: 'migrations',
    migrationTableName: 'migration',
    slonik,
    logger: migrator_1.SlonikMigrator.prettyLogger,
});
migrator.runAsCLI();
