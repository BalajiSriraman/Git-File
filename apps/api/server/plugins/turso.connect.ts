import { drizzle } from 'drizzle-orm/libsql';
import * as userBlobData from '../models/db/schema';
import { createClient } from '@libsql/client';


const config = useRuntimeConfig();

const client = createClient({
    url: config.turso.url,
    authToken: config.turso.authToken,
});

export default function db() {
    return drizzle(client, {
        schema: userBlobData
    });
}