# Query frontend example

## Query graphiql

```
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    topic
    url
  }
}

query getCourses($courseTopic: String) {
  courses(topic: $courseTopic) {
    title
    author
    topic
    url
  }
}
```

### Variable query
```
{
  "courseID": 1,
  "courseTopic": "Java"
}
```
