**Typescript**

**Typescript is the same as writing Javascript with some extra documentation**
Typescript has no effect on how our code gets executed by the browser or Node
It is best to think of Typescript as being like a friend sitting behind you while you are coding
Helper to help us cache us error

**Type System**

- Helps us each errors during development
- Uses ‘type annotations’ to analyze our code
- Only active during during development
- Doesn’t type any performance optimization

_Installing typescript_
`npm i -g typescript ts-node`
**Type annotations -**
a code we add to tell Typescript what type of value a vairable will refer to () - developers tell typescript the type
_When to use type annotations_

- when a function returns the any type and we need to clarify the value
- when we declare a variable on one line then initialize it later
- when we want a variable to have a type that can't be inferred

**Type inference**

- typescript itself tries to figure out what type of value a varible refers to
- typescript guesses the type
  _when to use_
  all the time

_if declaration and initialization are on the same line, typescript will figure out the type of color for us_
