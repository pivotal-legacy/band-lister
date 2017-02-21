.PHONY: setpipeline

setpipeline:
	@fly -t lite set-pipeline -p band-lister -c ./ci/pipeline.yml
