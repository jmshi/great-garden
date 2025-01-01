---
title: mark down examples
draft: true
tags:
  - help doc
---
# this is a title

## this is a level 2 header
### Hello


==this is hightlight==

~~this is strike through~~  
**this is bold**  
_italic_  
this is line break(need fill in two space or an empty line to tell quartz to break the line)  
this is a new line 

this is also a new line but with one extra empty space above

this is a external link to a picture:
![penguin|12x12](https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg)

[this is an external link](https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg)

>this is a quote this is a quote this is a quote this is a quote this is a quote this is a quote this is a quote

```java
// this is in line formatting based on the code
void main() {
	System.out.printline("Hello World");
}
```

```js
var n = 0;
n ++;
```

let's embed an animation:

<video src="videos/test.mov" width="240" height="240" controls></video>

this would work if hosted movie such as from youtube:
```
<iframe width="560" height="315" src="https/link/to/movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```
[![alt text](https://img.youtube.com/vi/video-id/0.jpg)](https://www.youtube.com/watch?v=video-id)
```

![alt text|100](videos/test.mov)

