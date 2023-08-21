import { Song } from './models/song';
import { UtilsService } from './utils/utils.service';
import { ParseTaxes } from './mocks/parseTaxes';
export declare class AppService {
    private utilsService;
    constructor(utilsService: UtilsService);
    saveSongMultiple(songs: Array<any>): Promise<{
        code: number;
        msg: string;
        error?: undefined;
    } | {
        code: number;
        error: any;
        msg?: undefined;
    }>;
    saveSong(song: any): Promise<{
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
        song: Song;
        error?: undefined;
    } | {
        code: number;
        error: any;
        msg?: undefined;
        song?: undefined;
    }>;
    mapperTax(): Promise<{
        status: number;
        data: ParseTaxes;
    }>;
    getComissionsTransactions(transactions: Array<any>): {
        commision: {
            amount: number;
            taxes: any[];
        };
        transaction: {
            total_amount: number;
            taxes: any[];
        };
    };
}
