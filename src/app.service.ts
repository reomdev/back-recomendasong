import { Injectable } from '@nestjs/common';
import { Song } from './models/song';
import { AppDataSource } from './database/data-source';
import { UtilsService } from './utils/utils.service';
import * as TAX_JSON from './mocks/tax.json'
import { ParseTaxes } from './models/parseTaxes';

@Injectable()
export class AppService {
  
  constructor(private utilsService : UtilsService){}


  async saveSongMultiple(songs : Array<any>) {
    try {
      for(let song of songs){
        let songEntity = new Song();
        songEntity.artist = song.artistId;
        songEntity.duration = song.duration;
        songEntity.year = song.year;
        songEntity.name = song.name;
        songEntity.url = song.url;
        songEntity.img = song.img;
        songEntity.metadata = song.metadata;

        await AppDataSource.manager.save(songEntity)
      }
    
      return { code : 200, msg : "Success" }

    } catch (error) {
        return { code : 500, error : error.message }
    }
  }

  async saveSong(song : any) {
    try {
        let songEntity = new Song();
        songEntity.artist = song.artistId;
        songEntity.duration = song.duration;
        songEntity.year = song.year;
        songEntity.name = song.name;
        songEntity.metadata = song.metadata;
        songEntity.url = song.url;
        songEntity.img = song.img;

        await AppDataSource.manager.save(songEntity)
        
        return { code : 200, msg : "Success" }
    } catch (error) {
        return { code : 500, error : error.message }
    }
  }

  async getSongsMetadataSegment(body : any){
    try{
        let song = await AppDataSource.getRepository(Song)
        .createQueryBuilder('song')
        .where('song.metadata && ARRAY[:...metadata]', { metadata : body.metadata })
        .leftJoinAndSelect("song.artist", "artist")
        .getMany();
        
        let randomSong = this.utilsService.rangeRandom(0, song.length);

        return { code : 200, msg : "Success", song : song[randomSong] }
                      
    }catch(error){

      return { code : 500, error: error.message }
    
    }
  }

  async mapperTax(){
    let taxJson : any = TAX_JSON.data;
    let parseTaxes = new ParseTaxes();

    parseTaxes.id_galicia_payment = taxJson.id_galicia_payment;
    parseTaxes.source = taxJson.source;
    parseTaxes.cuit = taxJson.document_number;
    parseTaxes.id_host = taxJson.id_host;

    let mapperTransactions = this.getComissionsTransactions(taxJson.transaction_tax_details)

    parseTaxes.commision = mapperTransactions.commision;
    parseTaxes.transaction = mapperTransactions.transaction;

    console.log(parseTaxes)

    return {status : 200, data : parseTaxes};

  }

  getComissionsTransactions(transactions : Array<any>){
    
    let arrComissions = [];
    let amountComissions : number = 0;
    let arrTransactions = [];
    let amountTransactions : number = 0;

    for (let item of transactions){
      if(item.source === 'COMM'){
        arrComissions.push({tax_type : item.id_tax_type, amount: item.amount});
        amountComissions = amountComissions + item.amount;
      }else if(item.source === 'API'){
        arrTransactions.push({tax_type : item.id_tax_type, amount: item.amount});
        amountTransactions = amountTransactions + item.amount;
      }
    }

    return {
      commision : {
        amount : Number(amountComissions.toFixed(2)),
        taxes : arrComissions
      },
      transaction : {
        total_amount : Number(amountTransactions.toFixed(2)),
        taxes : arrTransactions
      }
    }
  }

}
