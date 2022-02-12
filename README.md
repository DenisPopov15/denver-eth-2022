# denver-eth-2022
Place for the Denver ETH 2022 HACK

## Overview

Project Contains:

- Number connectors (which pulling data from connector sepcific placa/data hub <usually take some user auth as input> and pulled data)
- Issuer, its recieve data from trusted data connector and issue (sign) strctured [Ceramic](https://ceramic.network/) Data according to the specific schema and store that data at the [Ceramic Stream](https://developers.ceramic.network/streamtypes/overview/)


Currently supported connectors:

- [Githib](https://github.com/)
- [Coordinape](https://coordinape.com/)
- [Sourcecred](https://sourcecred.io/)
- [Discord](https://discord.com/)
- [Poap](https://poap.xyz/)


## Setup

 - Not Required, but good to have whole system to run locally: Make sure you have setup [pm2](https://www.npmjs.com/package/pm2) on your machine
 - Setup SorceCred instance, go to the `connectors/sourceCred/instance` - create `.env` from `.env.example`, set there SOURCECRED_GITHUB_TOKEN, for this: [setup github token](https://github.com/settings/tokens) with read packages access only. And SOURCECRED_DISCORD_TOKEN - its discord bot token (for hackathon test purpose - ask Denis to provide it, specially setup for this purpose)
 - Go to connectors (+ issuer) folder and create `.env` file from `.env.example` there you will need mostly just add SERVICE_PRIVATE_KEY for each connector (which should/could be the same for each connector) and then set for the issuer `.env` paired to that TRUSTED_PUBLIC_KEY
 - Install dependencies for each services - just run `npm run fullInstall` from root project folder
 - Run the system `npm run startSystem` (will work only if pm2 installed)