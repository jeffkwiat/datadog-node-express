const tracer = require('dd-trace').init({ service: 'node-express', // shows up as Service in Datadog UI
                                        hostname: 'agent', // references the `agent` service in docker-compose.yml
                                        debug: true }) // useful for seeing request/response and any logs

const express = require('express')
const app = express()

// enable express integration
tracer.use('express')

// Routes
app.get('/', (req, res) => res.send('GET home page'))

app.get('/org/:orgId', function (req, res) {
   res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))