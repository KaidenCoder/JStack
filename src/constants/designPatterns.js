export const designPatterns = {
    Creational: [
        {
            name: 'Singleton',
            code:`// class
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        this.value = Math.random()
        Singleton.instance = this
    }
}

const s1 = new Singleton()
const s2 = new Singleton()
console.log(s1 == s2) // true

// functional
const Singleton = (() => {
  let instance;

  const createInstance = (() => ({
    value: Math.random()
  })

                          return () => {
    if (!instance) {
      instance = createInstance()
    }
    return instance
  }
  })() const s1 = new Singleton()
const s2 = new Singleton()
console.log(s1 == s2) // true`,
            description: `The Singleton pattern is a design pattern that ensures:

Only one instance of a class/object can exist in the entire application.

Provides a global point of access to that instance.

📌 Why use Singleton?

When you need shared state across your app (e.g., configuration, logging, caching, database connection).

To avoid multiple objects doing the same thing and causing inconsistencies.

🔹 Example (Conceptual)

Imagine you have a Logger.
If every part of your app created its own Logger instance, logs would scatter.
Singleton ensures there’s just one logger for the whole app.`
        },
        {
            name: 'Factory',
            code: `// class
class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer"
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester"
    }
}

class EmployeeFactory {
    static create(name, type) {
        switch (type) {
            case "dev":
                return new Developer(name);
            case "tester":
                return new Tester(name)
        }
    }
}

const emp1 = EmployeeFactory.create("KS", "dev")
console.log(emp1)

// functional
const Developer = name => ({
    name,
    type: "Developer"
})
const Tester = name => ({
    name,
    type: "Tester"
})
const EmployeeFactory = (name, type) => {
    switch (type) {
        case "dev":
            return Developer(name)
        case "tester":
            return Tester(name)
    }
}

const emp1 = EmployeeFactory("KS", "dev")
console.log(emp1)`,
            description: `The Factory Pattern is a creational design pattern that provides an interface for creating objects, but lets subclasses or functions decide which exact object/class to instantiate.

Instead of calling new directly, you delegate object creation to a factory function/class.

📌 Why use Factory Pattern?

When the exact type of object to create is determined at runtime.

To avoid duplicating object creation logic.

To make code more flexible, reusable, and testable.`
        }
    ],
    Structural: [
        {
            name: 'Module',
            code: `const Counter = (() => {

    let count = 0

    return {

        increment: () => ++count,

        decrement: () => --count

    }

})()

Counter.increment() // 1

class Counter {

    #count = 0

    increment() {

        return ++this.#count

    }

    decrement() {

        return --this.#count

    }

}

const count = new Counter()

count.increment()`,
            description: `The Module Pattern in JavaScript is a design pattern used to organize related code into a single unit (a module). It allows you to keep certain variables and functions private (hidden from outside access) while exposing only the parts you want through a public API.

It is typically implemented using closures and Immediately Invoked Function Expressions (IIFE), which create a private scope for the module.

The main goals of the Module Pattern are:

* Encapsulation → Hide internal details, expose only what’s necessary.

* Avoid global namespace pollution → Prevent conflicts in large codebases.

* Code organization → Group related logic together.

In modern JavaScript, the Module Pattern is often replaced by ES6 Modules (import/export), but the concept remains useful for creating private state and controlled public interfaces.`
        },
        {
            name: 'Decorator',
            code: `const withLogger = (fn) ⇒ (…args) ⇒ {

    const result = fn(…args)

    return result

}

const add = (a,b) ⇒ a + b

const loggerAdd = withLogger(add)

loggerAdd(2,3)`,
            description: `The Decorator Pattern is a structural design pattern that lets you add new behavior to an object dynamically without altering its existing structure or modifying its source code.

🔹 Key Idea

Instead of subclassing (which can lead to rigid, deep inheritance trees), you “wrap” an object with another object (a decorator) that enhances or modifies its behavior.

This provides flexibility — you can add, remove, or combine features at runtime.

🔹 Real-world Analogy

Think of a coffee shop:

You start with a base coffee.

You can add decorators like milk, sugar, whipped cream, caramel.

Each decorator adds new functionality (taste/cost) without changing the original coffee class.

🔹 In JavaScript

In JS, the decorator pattern can be implemented using higher-order functions (functions that return enhanced versions of other functions or objects).`
        }
    ],
    Behavioral: [
        {
            name: 'Observer',
            code: `class Subject {

    constructor() {

        this.observers = []

    }

    subscribe(value) {

        this.observers.push(value)

    }

    unsubscribe(value) {

        this.observers = this.observers.filter((observer)⇒ observer !== value)

    }

    notify(value) {

        this.observers.forEach((observer)⇒ observer.update(value))

    }

}

class Observer {

    constructor(name) {

        this.name = name

    }

    update(value) {

        console.log("Hello " + {
            this.name
        } + ", new value: " + {
            value
        })

    }

}

const observer1 = new Subject()

observer1.subscribe(new Observer(”Dev1”));

observer1.subscribe(new Observer(”Dev2”));

Observer1.notify(”Javascript”);`,
            description: `The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects.

🔹 Key Idea

When the subject (also called observable) changes its state, it automatically notifies all its observers (subscribers).

Observers can then react accordingly, without the subject needing to know their exact implementation.

🔹 Real-world Analogy

Think of a YouTube channel:

The channel is the subject.

Subscribers are the observers.

When the channel uploads a new video, all subscribers get notified.

🔹 In JavaScript

You can implement the observer pattern using event systems or custom logic.`
        },
        {
            name: 'Strategy',
            code: `function add(a., b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

class Calculator {

    constructor(strategy) {

        this.strategy = strategy

    }

    execute(a, b) {

        return this.strategy(a, b)

    }

}

const calc1 = new Calculator(add)

calc1.execute(1, 2)`,
            description: `The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, put each of them in a separate class (or function), and make them interchangeable at runtime.

🔹 Key Idea

Instead of hardcoding multiple behaviors inside a single class, you encapsulate each behavior (strategy) separately.

The context (main object) can then switch between these strategies dynamically.

🔹 Real-world Analogy

Think of a navigation app (Google Maps):

You can choose a strategy for driving, walking, cycling, or public transport.

The app (context) stays the same, but the strategy for route calculation changes.

🔹 In JavaScript

You can implement the Strategy Pattern using functions or classes.`
        }
    ]
}