import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const userBlobData = sqliteTable('userBlobData', {

    id: text('id').primaryKey(),

    userName: text('userName', {
        mode: 'text'
    }),
    repoName: text('repoName', {
        mode: 'text',
    }),
    branchName: text('branchName', {
        mode: 'text',
    }),
    data: text('data', {
        mode: 'json'
    }),
});
