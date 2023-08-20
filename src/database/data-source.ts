import { Artist } from "src/models/artist";
import { Song } from "src/models/song";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "recomendasong",
    synchronize: true,
    logging: true,
    entities: [Song, Artist],
    subscribers: [],
    migrations: [],
})

// ep-fancy-waterfall-02718454.us-east-2.aws.neon.tech:5432/recomendasong