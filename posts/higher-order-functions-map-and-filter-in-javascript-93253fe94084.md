---
title: 'Higher-order functions: Map and Filter in JavaScript'
subtitle: 'A higher-order function is a function that either returns a function or takes in a function as an argument. Map, filter and reduce are some of the built-in…'
date: '2019-01-18'
published: true
---

A higher-order function is a function that either returns a function or takes in a function as an argument. Map, filter and reduce are some of the built-in higher-order functions in JavaScript. They can be used in arrays and I am going to briefly describe how to work with map and filter in this blog.

#### Map

The map method called on an array will return the array of the **same size**. The returned array can be the **result of the operation you apply on** the array call the method on.

![](/blogs/higher-order-functions-map-and-filter-in-javascript-93253fe94084/PUogFP10_.png)

An example of a map function

Here in the above example, in line no 2, the map method is called on the object. The map function takes a *callback as an argument*. Here the **arrow function that takes x as a parameter and returns two times of x** is the callback function. Here the map function iterates over every single element in the numbers array and stores 2 times of the current value in the twiceOfNumbers array. The solution can also be implemented as the code given below:

![](/blogs/higher-order-functions-map-and-filter-in-javascript-93253fe94084/scB-dRd4K.png)

The looping solution.

If you want to know about arrow functions, read my blog by clicking this [link](https://medium.com/@Prashacharya/my-favourite-two-features-of-javascript-arrow-functions-and-template-literals-e23a16440e48).

![](/blogs/higher-order-functions-map-and-filter-in-javascript-93253fe94084/9_GjBLcKl.png)

Map function to calculate the square of each number in the numbers array.

#### Filter

Filter, as you have guessed, is a method that helps to filter the array. The filter function takes in a call back that returns either true or false value. Those items in the array that return the true value on the test condition will be the element of the new filtered array.

Filter function to find even numbers from an array

Here the filter function takes the call back which will be called with every single element in the numbers array. The items that are even will pass the test *x modulo 2 equals 0* will be **returned into the new array**.

![](/blogs/higher-order-functions-map-and-filter-in-javascript-93253fe94084/iOGnelXab.png)

The looping solution.

The above solution tries to show the working if the filter function by looping through every single element of the numbers array and pushing the items that pass the *x modulo 2 equals 0* test.

#### Conclusion

In this short blog, I tried to explain map and filter briefly. I absolutely love them and how they simplify the code so much. There’s also another higher order function called reduce which is the king of list transformations. If you want to know more about that, Please watch this video

<iframe src="https://www.youtube.com/embed/videoseries?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84" width="700" height="393" frameborder="0" scrolling="no"></iframe>
