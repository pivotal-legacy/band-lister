.PHONY: tests run start

tests:
	@./gradlew clean build test

run:
	@java -jar ./build/libs/band-lister-server-0.0.1-SNAPSHOT.jar

start: tests run
