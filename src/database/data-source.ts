
import { CreateArtist1692576674561 } from 'migrations/1692576674561-CreateArtist';
import { CreateSongs1692580336484 } from 'migrations/1692580336484-CreateSongs';
import { Artist } from 'src/models/artist';
import { Song } from 'src/models/song';
import { DataSource } from 'typeorm';

//Local
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "recomendasong",
//     synchronize: true,
//     logging: true,
//     entities: [Song, Artist],
//     subscribers: [],
//     migrations: [],
// })

//Server
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ep-fancy-waterfall-02718454.us-east-2.aws.neon.tech',
  port: 5432,
  username: 'fl0user',
  password: 'RAbUTeQZB0C3',
  database: 'recomendasong',
  synchronize: true,
  logging: true,
  entities: [Artist, Song],
  subscribers: [],
  migrations: [CreateArtist1692576674561, CreateSongs1692580336484],
  migrationsRun: true,
  ssl: true,
});
