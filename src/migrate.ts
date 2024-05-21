import { config } from 'dotenv';

config();

import { SlonikMigrator } from '@slonik/migrator';
import { createPool } from 'slonik';

const postgresURI = process.env.POSTGRES_URI || null;
if (!postgresURI) {
    throw new Error('POSTGRES_URI must be set');
}

const slonik = createPool(postgresURI);

const migrator = new SlonikMigrator({
    migrationsPath: 'migrations',
    migrationTableName: 'migration',
    slonik,
    logger: SlonikMigrator.prettyLogger,
});
  
migrator.runAsCLI();
