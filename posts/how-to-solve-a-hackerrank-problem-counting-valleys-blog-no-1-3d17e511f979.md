---
title: 'How to solve a HackerRank Problem | Counting Valleys | Blog No 1.'
subtitle: 'Solving coding challenges is one of my favourite things to do. Whenever I get free time, I log into hackerrank and start solving the challenges. Some are…'
date: '2019-03-19'
published: true
---

Solving **coding challenges** is one of my favourite things to do. Whenever I get free time, I log into [hackerrank](https://www.hackerrank.com) and start solving the challenges. Some are tough and some are very easy. This is going to be **a series of blogs** in which I will be writing about how I solved a particular coding challenge. I will be writing codes in JavaScript but the ***logic will be valid for all programming languages***. Also, I will be writing **solutions on step by step basis** so it will be awesome if you could follow along with the entire story so you get the idea of how things work. First I would like to talk about the approach to solve a challenge.

#### How would you solve a coding challenge?

Solving coding challenges is really fun but they can be really tough sometimes and when you don’t find the solution, this fun hobby might as well turn out to be a nightmare. Below will be the few steps which you might put under considerations while solving a coding challenge.

**Read the problems properly and when you’re in a good mood.**

When you are solving a challenge, you should read the problem properly. When you are not feeling good about yourself or you are in a bad mood you can not understand what the problem is. When you cannot understand the problem it is impossible to approach a solution. When I am bored or sleepy, I have misjudged some challenges as really tough but actually, they were really simple. So it is necessary for you to have a fresh mind when you approach a problem.

**Do some research.**

The other thing that you’d want to do is to learn about the things that you are going to solve. If a problem you are dealing with involves arrays, you should read about arrays and things you could do with them and so on.

After this, you are ready to solve the problem. *Start writing the code. Make some progress, fail at a point and rethink the solution.* **It’s okay if you cannot find the solution in an hour or so.** In fact, I thought that it would be impossible for me to solve the problem that I am explaining below. My brain struck up with the idea to solve the problem when I was on the way returning from my college. The solutions can come in your mind at any point. My ability to solve coding challenge has improved because I have been trying to do it for a long time. You will not be good at it instantly but it’s okay to fail.

#### Solving Counting Valleys Problem

Click [here](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup) to read the problem. The problem talks about a hiker who takes some steps to walk from a point to another point. Every step he takes is an uphill (***represented by U***) or a downhill (***represented by D***). The person always starts his journey from the sea level and ends at sea level as well. So our task is to calculate the no of valleys he comes across while making this journey.

Let us take an example of the path that the person takes.

DUDU

The path would be something like this.

![](/blogs/how-to-solve-a-hackerrank-problem-counting-valleys-blog-no-1-3d17e511f979/ROeJVYfo6.png)

Here the hiker has walked a step downhill and a step uphill to reach sea level and passed from 1 valley. He again goes a step down and a step up to reach sea level again. That means he has passed from another valley. So we have to say that the hiker has completed a journey travelling from two valleys.

Let’s solve this problem. Hackerrank gives us a template. We have to complete a function named countValleys that takes in a string as an argument and expects it to return the number of valleys. Let’s do that. (If you want to copy and paste the codes, it’s in the bottom of the page. Please scroll through the page)

![](/blogs/how-to-solve-a-hackerrank-problem-counting-valleys-blog-no-1-3d17e511f979/iL0o6ekKX.png)

#### **The problem-solving approach**:

To solve the problem, I have declared 3 variables: ***noOfValleys, currentStep*** and ***previousStep*** and they all have the value set to 0 initially*. noOfValleys* will be **incremented by 1** if the hiker passes through a valley, while **currentStep** will be **incremented by 1** when the current character in the string is ‘U’ and **decremented by 1** when the current character in the string is ‘L’. Before incrementing the currentStep, we **assign the previous step to currentStep** and then only **increment the currentStep**. I referred to the current character above and by that I mean we are going to loop from 1 to the no of characters in the string.

![](/blogs/how-to-solve-a-hackerrank-problem-counting-valleys-blog-no-1-3d17e511f979/sRwqR2fZS.png)

\* in the second line, I declared steps accidentally. it should be currentStep and nextStep.

If we visualise the problem by assigning numbers to the steps, we’d see the following result.

![](/blogs/how-to-solve-a-hackerrank-problem-counting-valleys-blog-no-1-3d17e511f979/fmV8psq6p.png)

Here the box represents a valley.

Look at the image carefully. There is a pattern you might notice. If the step changes from -1 to 0, we have crossed one valley. Do you see it? Now let’s write that in the code. It should go inside the same loop we used to change the value of the steps.

Copy and paste the following code:

function countValleys(str) {                                        
 let noOfValleys = 0  
 let currentStep = 0, prevStep = 0  
 for(let i = 0; i < str.length; i++){  
  if(str\[i\] == 'D'){  
   prevStep = currentStep  
   currentStep--  
  }  
  else if(str\[i\] == 'U'){  
   prevStep = currentStep  
   currentStep++  
  }

if(currentStep == 0 && prevStep == -1)  
   noOfValleys++  
 }  
 return noOfValleys  
}

This should solve the problem. Submit the challenge to hackerrank. It will run your program with the test cases and give you points.

#### Conclusion

I hope you like the first blog in this series of blogs. If you do please share this with your friends and as always feedbacks are always appreciated. By the way, did you know you could clap 50 times? 😉
