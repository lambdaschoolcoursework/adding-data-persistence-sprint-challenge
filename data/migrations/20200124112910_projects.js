exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments();
            table.string('name')
                .notNullable()
                .index();
            table.string('description');
            table.boolean('completed')
                .defaultTo('false');
        })
        .createTable('resources', table => {
            table.increments();
            table.string('name')
                .notNullable()
                .unique();
            table.string('description');
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('tasks', table => {
            table.increments();
            table.string('description')
                .notNullable();
            table.string('notes');
            table.boolean('completed')
                .defaultTo('false');
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
