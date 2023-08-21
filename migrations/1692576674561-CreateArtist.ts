import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArtist1692576674561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Dexter','Gordon',0,'Dexter Gordon')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Reik','Reik',0,'Reik')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Elvis Aaron','Presley',0,'Elvis Presley')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Nkosinathi','Maphumulo',0,'Black Coffe')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Pierre David','Ghetta',0,'David Ghetta')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Robert Nesta','Marley',0,'Bob Marley')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Richie','Valdes',0,'Richie Valdes')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Los Adolescentes','Los Adolescentes',0,'Los Adolescentes')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('William Omar','Landrón Rivera',0,'Don Omar')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Marshall Bruce','Mathers',0,'Eminem')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Raúl Alejandro','Ocasio Ruiz',0,'Rauw Alejandro')`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Three Days Grace','Three Days Grace',0,'Three Days Grace');`,
    );
    await queryRunner.query(
      `INSERT INTO "artist" ("name", "lastname", "age", "artist") VALUES ('Nirvana','Nirvana',0,'Nirvana')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
