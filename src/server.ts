import fastfy from 'fastify'

const app = fastfy();

app.get('/hello', () => {
    return "Hello oi"
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running')
})