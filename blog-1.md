# The Problem with **any**: Understanding Type Holes and the Power of **unknown**, What is Type Narrowing?

## a. any VS unknown
Typescript's main focused goal is to cheack the type before we run the code. But there is a type named **any** in Typescript which actaully turn off that security. Here are some points why it cause's security issues:

- With this **any** type we can assign any kind of variable. Like you can call a function, access a property like object.
- Typescript doesnt shows any error for this type. Thats why while runtime the program can throw error beacause there is no type safety or expected output.


On the other hand **unknown** is more safe than **any**. It can also assign any type of vriable. But there are some rule it follow's:

- In **unknown** type we cant access any property or call a function directly.
- It forces to check the type before use.
- It makes sure that we don't accidentally perform an incorrect operation, which reduces runtime errors


## b. Type Narrowing

Type Narrowing is a process by which we can convert a board type (like 'unknown') into a specific type. Basically by using Type Narrowing method we can ensure that this type will work in the code in a specific type. We can do it using **typeof** checks in the code.

Here is a example:

```
function inputData(input: unknown) {
  // we can't write "input.toUpperCase()" directly, because the type is unknown

  if (typeof input === "string") {
    //Now TypeScript knows "input" is a string।
    console.log(input.toUpperCase()); 

  } else {
    console.log("Not a string!");
  }
}

```


So the Final thing is if we use **any** there is a scope that system can cause error or security issue, meanwhile if we use **unknown** and it ensures system that we dont know what is the type but will check it before we use. And this examine of type using **typeof** method before using it is called **Type Narrowing**.