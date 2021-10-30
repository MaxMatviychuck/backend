import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1635593737163 implements MigrationInterface {
    name = 'Init1635593737163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "img" character varying NOT NULL, "info" character varying NOT NULL, "brandId" integer NOT NULL, "typeId" integer NOT NULL, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brand_types_type" ("brandId" integer NOT NULL, "typeId" integer NOT NULL, CONSTRAINT "PK_95834838a054f2cf65d5dfe0181" PRIMARY KEY ("brandId", "typeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_54c76de09de432025758191f7d" ON "brand_types_type" ("brandId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ddd9b1b38e0be121c968f677e2" ON "brand_types_type" ("typeId") `);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_1d9d3cdfc95b3b64bcd33f414de" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_c0fa55937a2b35bbdc9d586fa03" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "brand_types_type" ADD CONSTRAINT "FK_54c76de09de432025758191f7d5" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "brand_types_type" ADD CONSTRAINT "FK_ddd9b1b38e0be121c968f677e22" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brand_types_type" DROP CONSTRAINT "FK_ddd9b1b38e0be121c968f677e22"`);
        await queryRunner.query(`ALTER TABLE "brand_types_type" DROP CONSTRAINT "FK_54c76de09de432025758191f7d5"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_c0fa55937a2b35bbdc9d586fa03"`);
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_1d9d3cdfc95b3b64bcd33f414de"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ddd9b1b38e0be121c968f677e2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_54c76de09de432025758191f7d"`);
        await queryRunner.query(`DROP TABLE "brand_types_type"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "brand"`);
        await queryRunner.query(`DROP TABLE "device"`);
        await queryRunner.query(`DROP TABLE "type"`);
    }

}
