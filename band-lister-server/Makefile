.PHONY: tests run start

unit:
	@./gradlew clean build test

integration-react:
	@cd ../band-lister-react && make integration && cd -

integration-react-redux:
	@cd ../band-lister-react-redux && make integration && cd -

tests: unit integration-react integration-react-redux

run:
	@ DATABASE_URL=jdbc:mysql://localhost:3306/band_lister_dev java -jar ./build/libs/band-lister-server-0.0.1-SNAPSHOT.jar

start: unit run

startIntegration:
	@./gradlew clean build test && DATABASE_URL=jdbc:mysql://localhost:3306/band_lister_test java -Dserver.port=7070 -jar ./build/libs/band-lister-server-0.0.1-SNAPSHOT.jar &

stopIntegration:
	@./bin/stopIntegrationServer.sh

reset-test-db:
	@mysql -uroot < ./src/main/resources/db/refreshTestDatabase.sql
	@./gradlew flywayMigrateTest

reset-dev-db:
	@mysql -uroot < ./src/main/resources/db/refreshDevDatabase.sql
	@./gradlew flywayMigrateDev
	@mysql -uroot band_lister_dev < ./src/main/resources/db/seed.sql

ci-unit: unit
