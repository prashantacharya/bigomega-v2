---
title: 'How much JavaScript is necessary to learn React?'
subtitle: 'A framework or library is just a set of tools that are created to solve a recurring problem more efficiently. Hence, there’s nothing that vanilla JS can’t…'
date: '2019-10-02'
published: true
---

A framework or library is just a set of tools that are created to solve a recurring problem more efficiently. Hence, there’s nothing that vanilla JS can’t solve which can be solved by using a framework like React, Angular or Vue. Most of the people jump into learning frameworks before learning enough JavaScript. It is not totally wrong but there’s just one problem. If one doesn’t have enough experience learning core JavaScript, he doesn’t know the benefits the particular framework/library provides nor the problem it tries to solve. So developers/programmers need to have a clear idea about what the framework is trying to provide and what is available in the language itself. Also, it is always a good thing to know what problems might have arisen if we had tried to solve the same problem with the basic language itself.

React JS

In this article, I will try to list out some of the core concepts that are necessary for learning a JavaScript library such as React.

#### Object-oriented programming and ES6 class keyword

Object-oriented programming principles play a vital role in react. Prior to React 16.08, all stateful components in React were created using class-based components and functional components were called stateless functional components. The newer addition of hooks allows us to create a state on functional components, but as it is a new feature added in the library, it might take time for adoption of this feature. Therefore it is important for the learners to learn about Object-oriented programming and the class keyword added in 2015 in the language. It is also necessary for people to know about prototypal inheritance, constructor functions and many more concepts such as inheritance and composition.

[Read the docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

<iframe src="https://carbon.now.sh/embed?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&amp;t=one-dark&amp;wt=none&amp;l=javascript&amp;ds=true&amp;dsyoff=27px&amp;dsblur=27px&amp;wc=true&amp;wa=true&amp;pv=90px&amp;ph=56px&amp;ln=false&amp;fl=1&amp;fm=dm&amp;fs=14.5px&amp;lh=116%25&amp;si=false&amp;es=1x&amp;wm=false&amp;code=class%2520Person%2520%257B%250A%2509constructor%28name%252C%2520age%29%257B%250A%2509%2509this.name%2520%253D%2520name%250A%2509%2509this.age%2520%253D%2520age%250A%2509%257D%250A%257D%250A%250Aclass%2520Student%2520extends%2520Person%2520%257B%250A%2509constructor%28name%252C%2520age%252C%2520major%29%257B%250A%2509%2509super%28name%252C%2520age%29%250A%2509%2509this.major%2520%253D%2520major%250A%2509%257D%250A%250A%2509showInfo%28%29%257B%250A%2509%2509console.log%28%2560%2524%257Bthis.name%257D%2520is%2520%2524%257Bthis.age%257D%2520and%2520studies%2520%2524%257Bthis.major%257D.%2560%29%250A%2509%257D%250A%257D%250A%250Alet%2520s1%2520%253D%2520new%2520Student%28%27Prashant%27%252C%252021%252C%2520%27Computer%2520Science%27%29%250As1.showInfo%28%29" width="700" height="328" frameborder="0" scrolling="no"></iframe>

Code like this shouldn’t get you banging head trying to understand what each line means

#### All sorts of different methods available

You should also be able to use different kinds of default methods available for data types like strings and arrays. You’ll have to sort, filter, map through a list of items more often than you imagine while building these kinds of applications. Therefore I recommend you learning at least some of the methods available on JavaScript.

The ones that I recommend are map, filter, reduce, sort, include etc for arrays, split, join, reverse etc for strings. You’ll explore more as you learn more stuff in react.

[Read the docs here](https://javascript.info/array-methods)

#### Promises, callbacks and asynchronous JavaScript

Asynchronous JavaScript is super important in Single Page Applications. You have to make network calls asynchronously and for that, the knowledge of asynchronous JS and the ways to handle AJAX requests becomes a necessity.

Promises provide a way to handle asynchronous code. Callbacks can do that too but Promises make the code a lot cleaner.

[Read the docs here](https://javascript.info/async)

#### Async Await

Async-await provides a simpler way to interact with promises. They make asynchronous code look synchronous and yet, the working is still asynchronous.

[Read the docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

#### Modules, import, export, babel

When working with React, you isolate your components on separate files. You export some component from a file and import in the another.

Facebook provides a tool called `create-react-app` that helps users to initialize a react project in a convenient fashion.

`create-react-app` comes with all these settings and configurations pre-built so you don’t have to do these manually but it is super important for you to understand how these things are happening behind the scenes.

**Babel** is a tool that compiles modern JavaScript to JavaScript version supported by all popular browsers. You can also explore how those work and try experimenting what the code you’re used to writing compiles to in the older versions.

[Read the docs here](https://javascript.info/modules)

The above list explained the concepts that you must be familiar before jumping to react. There’s one other thing that I would like to recommend and it is to build projects using Vanilla JS. To appreciate the full beauty of React or other frameworks, you should try building a project without using a framework or a library. That will help you to know and understand the complexity without the existence of that particular library.

A “to-do list” is kind of a standard and in my opinion, it is the project you should do too. A “to-do list” application should contain a form to add to-dos. There should also exist a button to delete the particular to-do and also mark them if they are completed or not.

Implementation of to-do with these features would be enough for you to understand how react works and the important concepts such as states, components, lifecycle, state change etc.

### Conclusion

Thank you for reading the article. If you like it and want to read more of my blogs you can check my website [https://bigomega.dev](https://bigomega.dev).
