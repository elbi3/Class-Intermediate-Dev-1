## constructor and this/self
```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```
`this` is implicit, however in Python:
to
```py
class Person:
    def __init__(self, name):
        self.name = name
```
pass `self`: Python makes you pass the instance as the first parameter (explicit)

## methods
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name)
  }
}
```

```py
class Person:
    def __init__(self, name):
        self.name = name
    #must include self:
    def greet(self):
      print(self.name)

```