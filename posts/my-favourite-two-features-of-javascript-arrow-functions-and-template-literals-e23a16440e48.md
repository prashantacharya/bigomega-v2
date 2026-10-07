---
title: 'My favourite two features of JavaScript: Arrow Functions and Template Literals'
subtitle: 'I have been programming on JavaScript for about a year now and there are so many things that I absolutely love about the language. However, there are few…'
date: '2018-11-02'
published: true
---

I have been programming on JavaScript for about a year now and there are so many things that I absolutely love about the language. However, there are few things that are totally awesome in JavaScript. As mentioned in the title, I love arrow functions and template literals the most in JavaScript. In this short blog, I plan to explain the fundamental concepts of what they are and how you could use them on your JavaScript programs.

### **Arrow Functions**

Arrow functions are a **more concise way of writing functions** in JavaScript. They are similar to **lambda expressions in Python**. Consider an example of writing a traditional function that takes in 2 parameters and returns the **sum of those numbers**.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/xTgqWv-tr.png)

Function to add 2 numbers

The way you would write it as an **arrow function** is pretty simple. Here’s how you could do it

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/sH5FbH4MU.png)

The font is Fira-code. The arrow is just an **equal to sign and a greater** than sign. (=>)

It’s pretty neat right. In this example, we didn’t do much. We just removed the function keyword. Declared a variable named sum and written a function. Now what I am going to show you amazed me when I saw it in the beginning.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/SIZHpb_6D.png)

Now that is awesome. We saved many keystrokes and it is cleaner. The thing is if you just have **a single line of code in a function** then you could **just type the value that you would like to return** after the fat arrow.

If you have multiple lines, within the curly braces ‘{}’ you could type all the function definition and return the end result as you would do previously.

Arrow functions can be used as given in the picture below for simplicity as well. However, you could also enclose single parameters within parenthesis. That is optional.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/VY-eAvVs5.png)

The ways in which Arrow functions can be written.

Arrow functions are super useful on higher-order functions like map and filter.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/4GFPPlAf2.png)

I hope you got a basic understanding of Arrow functions through this blog. You could still refer to [***MDN’s Arrow function***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) guide for complete instruction about how & where to use it, when to skip it etc.

### **Template Literals**

Template literals are strings that allow **embedded expressions** within them. They can be written by using two backticks \`\` (the key below the escape key in the keyboard). Instead of **writing strings** within single or double quotes, you can write them within 2 backticks. The **advantage** that you get is you could **embed expressions** in between. Let’s start off by writing *a function that takes in a name as a parameter and greets Hello to the person without using template literals*.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/aWSYr_Zyc.png)

Without the use of template literals

This is a pretty basic example so there is not much complication. What if you have a person object where you store the person’s name, age, his likes, dislikes and a function that prints all those in a sentence like ‘Prashant is 20 years old. He likes something and dislikes the other thing’. The way you would do it would be something like this.

![](/blogs/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48/M0uFR6wXs.png)

Now, this is where we get to see complications. You have to care about the + operator, add space at the beginning and the end of a part of a string and so on. Template literals come **really handy in these situations**. Let me show you the **same example by using template literals**.

The above example with the use of template literals.

Now that is so much simplified. You just have to put a dollar sign ‘$’ and within the curly braces ‘{}’, you could **write your javascript expressions**.

That is pretty much all I wanted to cover through this blog. I hope you like the blog. I would appreciate if you could drop your feedback on the comments below.
