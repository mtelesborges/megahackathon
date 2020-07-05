import Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('childs', table => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('dataNascimento', 10).notNullable();
    table.string('mothFace', 255).notNullable();
    table.string('mothName', 255).notNullable();
    table.string('mothEyes', 255).notNullable();
    table.string('mothMouth', 255).notNullable();
    table.string('mothRings', 255).notNullable();
    table.string('mothBody', 255).notNullable();
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('childs');
}

