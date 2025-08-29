1.what is the difference between getElementsById,getElementsByClassName,and querySelector/querySelectorAll?
Ans:
getElementById("id")-
1.Selects one element by its unique id.
2.Returns a single element.
getElementsByClassName("class")
1.Selects all elements with a specific class name.
2.Returns a live HTMLCollection.
querySelector("selector")
1.Selects the first element that matches a CSS selector.
2.Returns a single element.
querySelectorAll("selector")
1.Selects all elements matching a CSS selector.
2.Returns a NodeList.


2.How do you create and new insert a new element into the DOM?
Ans:
যখন আমরা DOM-এ নতুন কিছু ঢোকাতে চাই, তখন আগে একটা Element তৈরি করতে হয়। এটা করার জন্য ব্যবহার করা হয় document.createElement() মেথড।


3. What is Event Bubbling and how does it work?
Ans:
Event Bubbling- When an event happens on an element, it first runs on that element, then moves upward to its parents, until it reaches the document.
Example:parent → grandparent → document.

4.What is the event delegation in javascript?why is it useful?
Ans:
Event delegation- Parent element-এ একটাই ইভেন্ট লিসেনার বসানো হয়, আর সেটার মাধ্যমে child element-এর ইভেন্টও ধরা হয়।
Useful:
প্রতিটা child-এ আলাদা event বসাতে হয় না। নতুন child যোগ হলেও কাজ করে। মেমোরি কম লাগে।

5.What is the different between preventDefult() and propagation() methods?
Ans:
preventDefault() → browser এর কাজ বন্ধ করে (যেমন: link redirect, form submit ইত্যাদি)।
stopPropagation() → event বাবল হয়ে parent এ যাওয়া বন্ধ করে।

