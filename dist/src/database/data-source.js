"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const _1692576674561_CreateArtist_1 = require("../../migrations/1692576674561-CreateArtist");
const _1692580336484_CreateSongs_1 = require("../../migrations/1692580336484-CreateSongs");
const artist_1 = require("../models/artist");
const song_1 = require("../models/song");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'ep-fancy-waterfall-02718454.us-east-2.aws.neon.tech',
    port: 5432,
    username: 'fl0user',
    password: 'RAbUTeQZB0C3',
    database: 'recomendasong',
    synchronize: true,
    logging: true,
    entities: [artist_1.Artist, song_1.Song],
    subscribers: [],
    migrations: [_1692576674561_CreateArtist_1.CreateArtist1692576674561, _1692580336484_CreateSongs_1.CreateSongs1692580336484],
    migrationsRun: true,
    ssl: true,
});
//# sourceMappingURL=data-source.js.map