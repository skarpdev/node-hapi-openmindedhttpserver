Open-minded HTTP server
=======================

An HTTP server that accepts anything.

The idea is to use this with [docker-compose](https://docs.docker.com/compose/) in projects where you are integration with http services that does not yet exist. It could be that you are building a component in a microservice system where some of the microservices you will depend on does not exist yet. Then you can use this as a means of calling something.

The response
------------

The response contains the body `hello`.

The headers, on the other hand, contains a bit more info.

Consider the following example:

```
$ curl -i http://localhost:3000/someresource/1234/sub/666?for=glory
HTTP/1.1 200 OK
x-you-called: /someresource/1234/sub/666?for=glory
x-your-method: get
x-your-header-host: localhost:3000
x-your-header-user-agent: curl/7.47.0
x-your-header-accept: */*
content-type: text/html; charset=utf-8
cache-control: no-cache
content-length: 5
vary: accept-encoding
accept-ranges: bytes
Date: Wed, 07 Jun 2017 09:24:25 GMT
Connection: keep-alive

hello
```

Using it with docker-compose
----------------------------

```yaml
version: '2'
services:
  serviceplaceholder:
    image: "skarpdev/open-minded-http-server"
    ports:
      - "12345:3000"
```
