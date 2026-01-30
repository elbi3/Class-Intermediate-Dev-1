# TypeScript

## Interfaces

purpose of an interface is to define the structure of an object, specifying the expected properties and their types.

use keyword `interface` to define an interface in TS

Optional properties in an interface are denoted by placing a '?' after the property name, indicating that the property is not required.

The `readonly` keyword makes a property immutable after its initial assignment (it can't be reassigned)

When a class implements an interface, it must provide an implementation for ALL the properties and methods defined in the interface.

Interfaces can be extended using the `extends` keyword, allowing one interface to inherit properties from another.

Interfaces can define function types by specifying the *parameters* and the *return type* of the function.

interfaces define structure and cannot be instantiated directly

Implementing an interface with a class: The class must provide concrete implementations for all properties and methods declared in the interface.

benefit of extending interfaces: code reusability 

## Classes

use `class` keyword to define a class in TS
use `new` keyword to create a new instance of a class
a `constructor` initializes the class's properties (special method to initialize new objects, sets up the initial state of an object)
`privte` access modifier makes a member accessible only within the class it is declared
a class inherits properties & methods from another class using `extends` keyword
`super()` function is used within a derived class to call the constructor of its parent class
`implements` keyword is used to implement an interface
`constructor()` method called when creating a new instance of a class
`readonly` keyword is used to make ap roperty immutable after its initial assignment
`super.methodName()` calls a method from the parent class in a subclass

## Decorators
Decorators are an experimental feature in TypeScript and must be enabled by setting "experimentalDecorators": true in the tsconfig.json.

Method decorators are applied to the property descriptors of methods and can modify, observe, or replace method definitions.

Property decorators are used to modify or process class properties.

A class decorator can return a new constructor function to replace the class definition.

When multiple decorators are applied to a single declaration, they are composed together from bottom to top.

A decorator factory is a function that returns a decorator. It allows for customizable decorator logic.

Accessor decorators are applied specifically to accessor methods (getters and setters) in a class.

Multiple method decorators in TypeScript are executed in reverse order, meaning the decorator written lowest in the code is applied first, followed by the one above it, and so on. 

While decorators can modify behavior or metadata, they cannot automatically rewrite the actual source code of a class.

Decorators allow developers to add compile-time annotations and behaviors, enhancing metadata and extending functionalities without altering the original source code.

## Generics

The primary purpose of generics is to allow code components to handle values of multiple types without sacrificing type safety.

The syntax function genFunction<T>(arg: T) { } correctly defines a generic function with T as a type variable applied to its parameter.

The extends keyword in a generic constraint limits the types that can be passed to a generic function by specifying a condition that the types must fulfill.

The Partial utility type in TypeScript takes an existing type and converts all its properties to optional.

Generics improve software development by making code more reusable and maintainable through type safety and flexibility.

The correct syntax for a generic interface in TypeScript is interface GenericInterface<T> { key: T }.

Generics do not inherently increase runtime complexity; instead, they provide benefits such as code reusability, type safety, and flexibility.

Generics should be used when the types of variables or data a function handles are not known until runtime, allowing for type safety with flexibility.

The Readonly utility type in TypeScript makes all properties of a type read-only.

Generics help solve the problem of code duplication and loss of type safety by allowing functions and components to handle multiple types without sacrificing the benefits of static typing.