.PHONY: start unit integration tests startIntegrationClient

start:
	@npm start

unit:
	@npm test

integration:
	@npm run integration

tests: unit integration

startIntegrationClient:
	@npm run startIntegrationClient

startIntegrationServer:
	@cd ../band-lister-server && make startIntegration && cd ../band-lister-client

stopIntegrationServer:
	@cd ../band-lister-server && make stopIntegration && cd ../band-lister-client

startSelenium:
	@./node_modules/selenium-standalone/bin/selenium-standalone start &

stopSelenium:
	@./bin/stopSelenium.sh

npm-install:
	@npm install

ci-unit: npm-install unit
