# run
    > node index.js

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

# Fragmentos (Example 2)
```
query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1){
    ...courseFields
  } 
  course2: course(id: $courseID2){
    ...courseFields
  }
  
}

fragment courseFields on Course{
	title
  id
  author
  topic
  url
}
```

### Variable query
```
{
  "courseID1": 1,
  "courseID2": 3
}
```

## Mutation (UPDATE)
```
mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}
```

### variable query
~~~
{
  "id": 3,
  "topic": "Java 8" 
}
~~~