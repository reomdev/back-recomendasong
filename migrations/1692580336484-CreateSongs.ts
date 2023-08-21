import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSongs1692580336484 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (1,'Misty','1:00',2000,'{JAZZ,CINE}','https://www.youtube.com/embed/8fsScp3HTS8','https://media.gettyimages.com/photos/musician-dexter-gordon-recording-at-capitol-records-on-june-5-1947-in-picture-id73906509?s=612x612',1)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (2,'Ya me entere','1:00',2000,'{POP,SOLEDAD}','https://www.youtube.com/embed/7TWzV05kQ4w','https://www.debate.com.mx/__export/1608080403306/sites/debate/img/2020/12/15/la_agrupacixn_mexicana_reik_crop1608080100290.jpg_423682103.jpg',2)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (3,'Jaihouse Rock','1:00',2000,'{ROCK AND ROLL,DISCOTECA}','https://www.youtube.com/embed/gj0Rz-uP4Mk','https://dam.esquirelat.com/wp-content/uploads/2021/01/elvis-presley-biografia.jpg',3)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (4,'Drive','1:00',2000,'{TECHNO,PLAYA}','https://www.youtube.com/embed/32HANv-bdJs','https://i.musicaimg.com/letras/500/2406952.jpg',4)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (5,'Titanium','1:00',2000,'{TECHNO,LLUVIA}','https://www.youtube.com/embed/JRfuAukYTKg','https://static.wikia.nocookie.net/electropedia/images/c/cb/David_Guetta_-_Titanium.jpg/revision/latest?cb=20170521192630&path-prefix=es',5)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (6,'Could you be loved','1:00',2000,'{REGGAE,PLAYA}','https://www.youtube.com/embed/g3t6YDnGXAc','https://img.cdandlp.com/2017/01/imgL/118475191.jpg',6)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (7,'Apuesta por mi','1:00',2000,'{SALSA,SOLEDAD}','https://www.youtube.com/embed/kDhNkSalc8w','https://e.snmc.io/i/1200/s/2112a799265f6477eda98367873d151d/7677814',7)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (8,'Recuerdos','1:00',2000,'{SALSA,SOLEDAD}','https://www.youtube.com/embed/b93WU7LpXlk','https://impactovenezuela.com/wp-content/uploads/2021/06/adolescentes.jpg',8)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (9,'Aunque te fuiste','1:00',2000,'{REGGAETON,LLUVIA}','https://www.youtube.com/embed/s8bfCejnbE8','https://i.discogs.com/NUyDZcLND662Gw6XJWl_izl33QDYzbmBi0Ov9MZaHIM/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjk0/MzYzLTE1MDI1NTAw/MjctMTY3OC5qcGVn.jpeg',9)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (10,'Lose Yourself','1:00',2000,'{HIP HOP,SOLEDAD}','https://www.youtube.com/embed/_Yhyp-_hX2s','https://elmundodelamusicas.files.wordpress.com/2021/02/r-4407037-1567219126-9335.jpeg.jpg',10)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (11,'2/Catorce','1:00',2000,'{REGGAETON,DISCOTECA}','https://www.youtube.com/embed/3mPXwuPc650','https://i.ytimg.com/vi/U66VdYfC1OE/maxresdefault.jpg',11)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (12,'I hate everything about you','1:00',2000,'{ROCK,SOLEDAD}','https://www.youtube.com/embed/d8ekz_CSBVg','https://textypisni.youradio.cz/images/interpret/three-days-grace-28800.jpg',12)`,
    );
    await queryRunner.query(
      `INSERT INTO "song" ("id", "name", "duration", "year", "metadata", "url", "img", "artistId") VALUES (13,'Smells like teen spirit','1:00',2000,'{ROCK,LLUVIA}','https://www.youtube.com/embed/hTWKbfoikeg','https://lastfm.freetls.fastly.net/i/u/500x500/b2434f624d4f465cc6145dfb4751942c.jpg',13)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}