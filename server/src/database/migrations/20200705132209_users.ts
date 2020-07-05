import Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('responsible', (table) =>{
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('phoneNumber', 255).notNullable().unique();
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('responsible')
}

