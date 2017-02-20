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

reset-test-db:
	@mysql -uroot < ./src/main/resources/db/refreshTestDatabase.sql
	@mysql -uroot band_lister_test < ./src/main/resources/db/schema.sql

reset-dev-db:
	@mysql -uroot < ./src/main/resources/db/refreshDevDatabase.sql
	@mysql -uroot band_lister_dev < ./src/main/resources/db/schema.sql

ci-unit: tests
