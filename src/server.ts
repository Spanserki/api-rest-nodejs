import fastfy from 'fastify'
import { knex } from './database'
import { v4 } from 'uuid'

const app = fastfy();

app.get('/hello', async () => {
    const transaction = await knex('transactions').select('*')
    return transaction
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running')
})