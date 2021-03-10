# mcg-test

## Framework
In this project I have used React CRA as it is the framework with which I familiar. 

## Animations
The brief called for animations but with little specification regarding how/where the animations should be implemented. 
I elected to use the package **react-spring**, known for creating 'physics-based' animations. 

I prefer using functional components, and therefore I used this library because it uses Hooks and provides a diverse set of animation options. 

I did not want to use excessive animation, so I used a simple parallax effect that responds to the mouse position, the behaviour is such that different page elements move as if being viewed from different distances, creating a three dimensionsal effect. 
This is a sublte but effective use of animation in my opinion. 

The second place in which animation has been used is in the menu open/close. Again I used the react-spring library, in combination with some css transitions. 

This was my first time using react-spring, and I found it to be easy to work with once the examples were understood. 

## Responsiveness
I decided to exclude certain page elements by hiding their display css property for mobile screens. 
The limited real-estate means that certain elements like the side bars (left and right), and the lower portion used for navigation should be omitted so as not to crowd the screen. 
The breakpoints used were 700 & 1000px for width. 

## Other notes
No content was provided for the 'our brands' or 'explore careers' tabs, however the site still funcitons when the user scroll is detected. I created a function to inc/decrement a state integer variable, as a turn of the scroll wheel (or a completed gesture for trackpads) results in the 'onWheel' being called multiple times, which makes the event far too sensitive. After the user has completed about '1 scroll', the 'section' changes, and the counter resets.

** I am very eager to receive feedback and to learn what I can do to improve on this site. 
