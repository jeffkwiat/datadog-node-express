# datadog-node-express
This repository demonstrates Datadog's monitoring prowess for a simple Node.JS application.  Here we create a simple Node.js application with the Datadog agent installed for APM monitoring.

## How to Install / Run
- Replace <YOU_DD_API_KEY> with your Datadog API key
- Run `docker-compose up --build` 
- The docker and docker-compose files open port 3000 on your host machine.  To start sending traffic using:
1) Open your browser to http://localhost/org/<any organization id>

2) Run the following command to hit loop through the first 1000 organizations:

    `curl http://localhost:3000/org/[1-1000]`

