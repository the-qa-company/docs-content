---
id: api-references
title: API Reference
sidebar_position: 10
---

The documentation of all APIs is available via Swagger at the following address:

[https://backend.app.qanswer.ai/swagger-ui/index.html ](https://backend.app.qanswer.ai/swagger-ui/index.html)

The APIs can be grouped into the following catergories:

* [User APIs](https://backend.app.qanswer.ai/swagger-ui/index.html#/user-controller), i.e. APIs to handle signup, login, datasets a user has access.
* [Dataset APIs](https://backend.app.qanswer.ai/swagger-ui/index.html#/dataset-controller), i.e. APIs to upload, index, remove an RDF dataset.
* [Feedback APIs](https://backend.app.qanswer.ai/swagger-ui/index.html#/feedback-controller), i.e. APIs to give feedback, train a new model bases on the feedback and upload download the already provided feedback in different formats.
* [Question Answering APIs](https://backend.app.qanswer.ai/swagger-ui/index.html#/qa-controller-kb), i.e. APIs to ask questions over indexed datasets.
* [SPARQL APIs](https://backend.app.qanswer.ai/swagger-ui/index.html#/sparql-endpoint-controller), i.e. APIs to make SPARQL queries over an indexed dataset.

Note: Most of the APIs are secured and a JSON Web Token is needed to access them.
Basically to get the JSON Web Token signin using:

```bash
 curl -XPOST 'https://backend.app.qanswer.ai/api/user/signin' --data "{\"usernameOrEmail\": \"USERNAME\", \"password\":\"PASSWORD\"}" -H "Content-Type: application/json"
```

which will return the access token:

```json
 {"accessToken":"eyJhbGciOi...A","tokenType":"Bearer"}
```

This must be specified in the authorization header to access the protected APIs. For example:

```bash
 curl  https://backend.app.qanswer.ai/api/feedback/upload -F json=@feed -H 'authorization: Bearer eyJhbGciOi...A'
```

The APIs can be used under the following [Terms of Use](terms-of-use).
