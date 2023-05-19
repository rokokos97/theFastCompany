build:
	docker build --platform linux/amd64 -t rokokos97/tfc .

run:
	docker run -d -p 80:8080 --name tfc --rm rokokos97/tfc
