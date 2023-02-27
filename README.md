# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![./src/pages/scripts/images/Live site screenshot.jpg]

### Links

- Solution URL: [https://github.com/udhavrajnath/job-listings-filtering.git]
- Live Site URL: [https://udhavrajnath.github.io/job-listings-filtering/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

Used this project as a revision on my javascript data structures; storing and removing elements from arrays, mapping and filtering them to render the required features.

To see how you can add code snippets, see below:


```js
function UpdateSelectionList(val){
        var tempArray=[...optSlected]
            if(tempArray.includes(val)===false){
            tempArray=[...tempArray,val]
            }     
        setOptSelected(tempArray)
        console.log(tempArray)
    }
    function RemoveFromSelection(e){
        var tempArray=[...optSlected]
        tempArray.splice(optSlected.indexOf(e.target.value),1)
        setOptSelected(tempArray)
    }
```

## Author

- Website - [https://udhavrajnath.github.io/job-listings-filtering/]
- Frontend Mentor - [@udhavrajnath]->[https://www.frontendmentor.io/profile/udhavrajnath]

