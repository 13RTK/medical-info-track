---
title: medical-info-track v1.0.0
language_tabs:
  - javascript: JavaScript
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# medical-info-track

> v1.0.0

Base URLs:

* <a href="http://server-ip:port/api/v1">remote-server: http://server-ip:port/api/v1</a>

# remote/issue

## GET Query issue

GET /issue

接口直接返回对应id的issue实体

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issueId|query|string| 否 |none|

> 返回示例

> 成功

```json
{
  "status": "query success",
  "data": {
    "issue": {
      "id": 1,
      "poster": "的安陆分",
      "description": "恶法后诶差",
      "image": "http://image-server-id:port/images/image-1693880894111.jpg",
      "state": "wait",
      "fixedDate": null,
      "createDate": "2023-09-05T10:28:14.000Z",
      "staffId": null
    }
  }
}
```

> 记录不存在

```json
{
  "status": "Not found",
  "message": "Issue not found"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|记录不存在|Inline|

### 返回数据结构

## POST Create issue remote

POST /issue

响应中data.issue数组内第一个元素为插入实体的id值

> Body 请求参数

```yaml
desc: desc
poster: alex
image: file:///Users/alex/Pictures/idols/hani 220711.jpg

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» desc|body|string| 否 |none|
|» poster|body|string| 否 |none|
|» image|body|string(binary)| 否 |none|

> 返回示例

> 成功

```json
{
  "status": "File uploaded",
  "data": {
    "issue": [
      2,
      1
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH Update issue staff

PATCH /issue

> Body 请求参数

```json
{
  "id": 5,
  "staffId": 2
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 成功

```json
{
  "status": "success"
}
```

> 请求有误

```json
{
  "status": "bad request",
  "message": "wrong field value"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|请求有误|Inline|

### 返回数据结构

## GET 获取所有issue

GET /issue-all

> 返回示例

> 成功

```json
{
  "status": "success",
  "length": 4,
  "data": {
    "issueArr": [
      {
        "id": 1,
        "poster": "的安陆分",
        "description": "恶法后诶差",
        "image": "http://image-server-id:port/images/image-1693880894111.jpg",
        "state": "wait",
        "fixedDate": null,
        "createDate": "2023-09-05T10:28:14.000Z",
        "staffId": null
      },
      {
        "id": 2,
        "poster": "alex",
        "description": "desc",
        "image": "http://image-server-id:port/images/image-1693882098771.jpg",
        "state": "wait",
        "fixedDate": null,
        "createDate": "2023-09-05T10:48:18.000Z",
        "staffId": null
      },
      {
        "id": 3,
        "poster": "非忽略阿福",
        "description": "的哈鲁发恶",
        "image": "http://image-server-id:port/images/image-1693883040973.jpg",
        "state": "wait",
        "fixedDate": null,
        "createDate": "2023-09-05T11:04:00.000Z",
        "staffId": null
      },
      {
        "id": 4,
        "poster": "eafaef",
        "description": "eafafeaf",
        "image": "http://image-server-id:port/images/image-1693884418245.jpg",
        "state": "wait",
        "fixedDate": null,
        "createDate": "2023-09-05T11:26:58.000Z",
        "staffId": null
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get all the issues for single staff

GET /staff-issue-all

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|staffId|query|string| 否 |none|

> 返回示例

> 成功

```json
{
  "status": "success",
  "data": {
    "issueList": [
      {
        "id": 1,
        "poster": "的安陆分",
        "create_date": "2023-09-05T10:28:14.000Z",
        "description": "恶法后诶差",
        "image": "http://image-server-id:port/images/image-1693880894111.jpg",
        "state": "wait",
        "fixed_date": null,
        "staff_id": 1
      },
      {
        "id": 2,
        "poster": "alex",
        "create_date": "2023-09-05T10:48:18.000Z",
        "description": "desc",
        "image": "http://image-server-id:port/images/image-1693882098771.jpg",
        "state": "wait",
        "fixed_date": null,
        "staff_id": 1
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Complete issue

GET /issue-complete

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issueId|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# remote/user

## POST verify the post user data

POST /staff

> Body 请求参数

```json
{
  "username": "alex",
  "password": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 成功

```json
{
  "status": "query success",
  "data": {
    "user": {
      "id": 1,
      "staffName": "alex",
      "staffRole": "staff",
      "password": "123456"
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get staff by id

GET /staff

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|staffId|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET Get all staff

GET /staff-all

> 返回示例

> 成功

```json
{
  "status": "success",
  "length": 2,
  "data": [
    {
      "id": 1,
      "staffName": "alex",
      "staffRole": "admin",
      "password": "123456"
    },
    {
      "id": 2,
      "staffName": "john",
      "staffRole": "staff",
      "password": "123456"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

