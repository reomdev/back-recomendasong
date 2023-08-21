import { Artist } from "./artist";
export declare class Song {
    id: number;
    artist: Artist;
    name: string;
    duration: string;
    year: number;
    metadata: string[];
    url: string;
    img: string;
}
