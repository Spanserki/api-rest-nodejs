import fastfy from 'fastify';
import { knex } from './database';
import { env } from './env';

const app = fastfy();

app.get('/hello', async () => {
    const transaction = await knex('transactions').select('*')
    return transaction
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running')
})