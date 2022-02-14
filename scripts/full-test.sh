#!/usr/bin/env bash

npm --prefix ./connectors/sourcecred/server run test
npm --prefix ./connectors/coordinApe run test
npm --prefix ./connectors/issuer run test
npm --prefix ./connectors/github run test
npm --prefix ./connectors/discord run test
npm --prefix ./connectors/poap run test
npm --prefix ./issuer run test
