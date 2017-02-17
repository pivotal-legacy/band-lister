.PHONY: tests run start

tests:
	@./gradlew clean build test

run:
	@java -jar ./build/libs/band-lister-server-0.0.1-SNAPSHOT.jar

start: tests run

startIntegration:
	@./gradlew clean build test && java -Dserver.port=7070 -jar ./build/libs/band-lister-server-0.0.1-SNAPSHOT.jar &

stopIntegration:
	@./bin/stopIntegrationServer.sh

ci-unit: tests
