import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    saveSongMultiple(body: any): Promise<{
        code: number;
        msg: string;
        error?: undefined;
    } | {
        code: number;
        error: any;
        msg?: undefined;
    }>;
    saveSong(body: any): Promise<{
        code: number;
        msg: string;
        error?: undefined;
    } | {
        code: number;
        error: any;
        msg?: undefined;
    }>;
    getSongsMetadataSegment(body: any): Promise<{
        code: number;
        msg: string;
        song: import("./models/song").Song;
        error?: undefined;
    } | {
        code: number;
        error: any;
        msg?: undefined;
        song?: undefined;
    }>;
    mapper(): Promise<{
        status: number;
        data: import("./mocks/parseTaxes").ParseTaxes;
    }>;
}
