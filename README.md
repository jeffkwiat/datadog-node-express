# datadog-node-express

[![Git](https://app.soluble.cloud/api/v1/public/badges/6bde29a8-d6c8-43c7-ba2f-9cb650d91e47.svg?orgId=498499820349)](https://app.soluble.cloud/repos/details/github.com/jeffkwiat/datadog-node-express?orgId=498499820349)  
This repository demonstrates Datadog's monitoring prowess for a simple Node.JS application.  Here we create a simple Node.js application with the Datadog agent installed for APM monitoring.

## Prerequisites
1) You have a Datadog account.  If you do not have an account, sign up for a free 14-day trial here:
https://www.datadoghq.com/

2) You have Docker / Docker Compose installed for containerization.  Here are some links to get installed:
- **Docker**: https://www.docker.com/get-started
- **Docker Compose**: https://docs.docker.com/compose/install/


## How to Install / Run
- Replace <YOUR_DD_API_KEY> with your Datadog API key, which can be located here:


- Run `docker-compose up --build` 
- The docker and docker-compose files open port 3000 on your host machine.  To start sending traffic using:
1) Open your browser to http://localhost/org/<any organization id>

2) Run the following command to hit loop through the first 1000 organizations:

    `curl http://localhost:3000/org/[1-1000]`

