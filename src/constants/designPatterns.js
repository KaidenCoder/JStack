export const designPatterns = {
    Creational: [
        {
            name: 'Singleton',
            code:`
            // class
            class Singleton {
                constructor(){
                    if(Singleton.instance){
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
                    if(!instance){
                        instance = createInstance()
                    }
                    return instance
                }
            })()
            const s1 = new Singleton()
            const s2 = new Singleton()
            console.log(s1 == s2) // true
            `,
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
            code: `
            // class
            class Developer {
                constructor(name){
                    this.name = name;
                    this.type = "Developer"
                }  
            }

            class Tester {
                constructor(name){
                    this.name = name;
                    this.type = "Tester"
                }
            }

            class EmployeeFactory{
                static create(name, type){
                    switch(type){
                        case "dev": return new Developer(name);
                        case "tester": return new Tester(name)
                    }
                }
            }

            const emp1 = EmployeeFactory.create("KS", "dev")
            console.log(emp1)

            // functional
            const Developer = name => ({name, type: "Developer"})
            const Tester = name => ({name, type:"Tester"})
            const EmployeeFactory = (name, type) => {
                switch(type){
                    case "dev": return Developer(name)
                    case "tester": return Tester(name)
                }    
            }
            
            const emp1 = EmployeeFactory("KS","dev")
            console.log(emp1)
            `,
            description: `The Factory Pattern is a creational design pattern that provides an interface for creating objects, but lets subclasses or functions decide which exact object/class to instantiate.

Instead of calling new directly, you delegate object creation to a factory function/class.

📌 Why use Factory Pattern?

When the exact type of object to create is determined at runtime.

To avoid duplicating object creation logic.

To make code more flexible, reusable, and testable.`
        }
    ]
}