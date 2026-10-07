---
title: 'We are repeating the same mistakes'
subtitle: 'For the last 2 years, I have been working with Dr. James Walden at Miami University on research that focuses on Large Language Models, Cybersecurity, and…'
date: '2026-05-25'
published: true
---

For the last 2 years, I have been working with Dr. James Walden at Miami University on research that focuses on Large Language Models, Cybersecurity, and their implications for software engineering. The research we are working on uses different datasets covering the most frequent vulnerabilities that arise in software engineering. I became curious and decided to see how many of these vulnerabilities repeat every single year. A simple data analysis on the Top 25 CWEs for the last 5 years made me realize that we are not learning from our mistakes.

### Common Weakness Enumeration (CWEs)

Common Weakness Enumeration (CWEs) is a community-developed classification system that lists common weaknesses and vulnerabilities found in software and hardware systems. It is maintained by MITRE, and it provides standard identifiers called CWE IDs so developers, security researchers, and organizations can talk about security issues in a consistent way.

Each CWE entry describes a specific type of weakness, like SQL Injection (CWE-89) or Cross-Site Scripting (CWE-79). It also includes information about how the weakness occurs, its potential impact, and how it can be detected or fixed. New CWE IDs are added when cybersecurity researchers, industry experts, government agencies, or the wider security community identify recurring patterns in real-world systems.

Every year, MITRE publishes the “Top 25 Most Dangerous Software Weaknesses” by analyzing thousands of publicly disclosed CVEs (Common Vulnerabilities and Exposures). These rankings are based on how often a weakness appears and how severe its impact is. The goal is to highlight the most common and persistent security problems that continue to affect modern software systems.

### CWEs focused on the web

I am most familiar with web development and have around 5 years of experience working in it. Because of that, I want to write a series of blogs focused on common vulnerabilities in web applications and share practical ideas on how to mitigate them while writing code.

*   CWE-79 — Cross-Site Scripting (XSS)
    
*   CWE-89 — SQL Injection
    
*   CWE-352 — Cross-Site Request Forgery (CSRF)
    
*   CWE-862 — Missing Authorization
    
*   CWE-434 — Unrestricted File Upload
    
*   CWE-20 — Improper Input Validation
    
*   CWE-502 — Deserialization of Untrusted Data
    
*   CWE-287 — Improper Authentication
    
*   CWE-306 — Missing Authentication for Critical Function
    
*   CWE-918 — Server-Side Request Forgery (SSRF)
    
*   CWE-77 — Command Injection
    

### The repeating pattern

I created a chart showing how often each vulnerability appears across the last five years. What stood out is that 8 of these CWEs (focused on web) show up every single year, and 2 more appear in 4 out of the 5 years. It’s a pretty clear signal that these aren’t one-off issues; they keep coming back in practice, year after year.

![](/blogs/we-are-repeating-the-same-mistakes/254549ff-a43a-4bb0-b6e1-60a433139877.png)

### AI is not saving us

You probably knew this already, but AI is not saving us. Many current code-generation models are trained on large amounts of existing code, and a significant portion of that code already contains security vulnerabilities. As a result, the same insecure patterns tend to repeat in the output as well.

To mitigate this, developers using these tools need to be familiar with these common vulnerabilities. Instead of blindly relying on generated code, prompts should be more security-aware, and the output should always be carefully reviewed before use in production. These tools can help speed things up, but they don’t replace an understanding of secure coding practices.

This is also reflected in benchmark results like [BaxBench](https://baxbench.com/?utm_source=chatgpt.com), which evaluates how well models generate code for full backend systems that is both functionally correct and secure. Even the best-performing models in their evaluation only produce secure and correct code about 56% of the time. That’s barely better than a coin toss, which shows how fragile “out-of-the-box” code generation still is when it comes to security.

### The next steps (for me)

Going forward, I want to write blogs in the next few days that focus on how to mitigate these vulnerabilities while actually writing code. I’ll mainly use languages like JavaScript/TypeScript, Go, and Python since these are the ones I have the most experience with. The goal is to connect these common CWEs to practical coding patterns, so it’s easier to avoid them in day-to-day development instead of just understanding them in theory.
