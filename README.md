### Fitness App (WIP)

Thank you for taking a look at my project. This is currently a work in progress, but I hope to have it working by the end of the summer.

#### About

This will be a full-featured fitness routine app built in React. It’s a work-in-progress – the first part that I’ve built is the actual timer, figuring that would be the most challenging.

The timer receives an array containing information about each exercise in the routine and dynamically generates the inner and outer rings. It runs using requestAnimationFrame and bases its timing on the timestamp passed to the callback function, which makes it fairly accurate. It also means that it will ‘catch up’ if the computer can’t keep up with the timer for whatever reason or the user leaves the window.

It also only triggers the next requestAnimationFrame every 10th of a second (at default 60hz), so it should be fairly CPU-friendly.

Eventually it will have a pop-up indicating the next exercise, as well as audio indicators that can be controlled by the user. The exercises will come from a routine builder. The user will be able to save several routines, as well as add them to a calendar to receive reminder alerts and build a fitness program.
