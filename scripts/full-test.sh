#!/usr/bin/env bash

npm --prefix ./connectors/sourcecred/server run test 
npm --prefix ./connectors/coordinApe run test 
npm --prefix ./connectors/issuer run test
npm --prefix ./connectors/github run test
