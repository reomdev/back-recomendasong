"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const song_1 = require("./models/song");
const data_source_1 = require("./database/data-source");
const utils_service_1 = require("./utils/utils.service");
const TAX_JSON = __importStar(require("./mocks/tax.json"));
const parseTaxes_1 = require("./mocks/parseTaxes");
let AppService = class AppService {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    async saveSongMultiple(songs) {
        try {
            for (const song of songs) {
                const songEntity = new song_1.Song();
                songEntity.artist = song.artistId;
                songEntity.duration = song.duration;
                songEntity.year = song.year;
                songEntity.name = song.name;
                songEntity.url = song.url;
                songEntity.img = song.img;
                songEntity.metadata = song.metadata;
                await data_source_1.AppDataSource.manager.save(songEntity);
            }
            return { code: 200, msg: 'Success' };
        }
        catch (error) {
            return { code: 500, error: error.message };
        }
    }
    async saveSong(song) {
        try {
            const songEntity = new song_1.Song();
            songEntity.artist = song.artistId;
            songEntity.duration = song.duration;
            songEntity.year = song.year;
            songEntity.name = song.name;
            songEntity.metadata = song.metadata;
            songEntity.url = song.url;
            songEntity.img = song.img;
            await data_source_1.AppDataSource.manager.save(songEntity);
            return { code: 200, msg: 'Success' };
        }
        catch (error) {
            return { code: 500, error: error.message };
        }
    }
    async getSongsMetadataSegment(body) {
        try {
            let song = await data_source_1.AppDataSource.getRepository(song_1.Song)
                .createQueryBuilder('song')
                .where('song.metadata && ARRAY[:...metadata]', {
                metadata: body.metadata,
            })
                .leftJoinAndSelect('song.artist', 'artist')
                .getMany();
            let randomSong = this.utilsService.rangeRandom(0, song.length);
            return { code: 200, msg: 'Success', song: song[randomSong] };
        }
        catch (error) {
            return { code: 500, error: error.message };
        }
    }
    async mapperTax() {
        const taxJson = TAX_JSON.data;
        const parseTaxes = new parseTaxes_1.ParseTaxes();
        parseTaxes.id_galicia_payment = taxJson.id_galicia_payment;
        parseTaxes.source = taxJson.source;
        parseTaxes.cuit = taxJson.document_number;
        parseTaxes.id_host = taxJson.id_host;
        const mapperTransactions = this.getComissionsTransactions(taxJson.transaction_tax_details);
        parseTaxes.commision = mapperTransactions.commision;
        parseTaxes.transaction = mapperTransactions.transaction;
        console.log(parseTaxes);
        return { status: 200, data: parseTaxes };
    }
    getComissionsTransactions(transactions) {
        let arrComissions = [];
        let amountComissions = 0;
        let arrTransactions = [];
        let amountTransactions = 0;
        for (let item of transactions) {
            if (item.source === 'COMM') {
                arrComissions.push({ tax_type: item.id_tax_type, amount: item.amount });
                amountComissions = amountComissions + item.amount;
            }
            else if (item.source === 'API') {
                arrTransactions.push({
                    tax_type: item.id_tax_type,
                    amount: item.amount,
                });
                amountTransactions = amountTransactions + item.amount;
            }
        }
        return {
            commision: {
                amount: Number(amountComissions.toFixed(2)),
                taxes: arrComissions,
            },
            transaction: {
                total_amount: Number(amountTransactions.toFixed(2)),
                taxes: arrTransactions,
            },
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utils_service_1.UtilsService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map