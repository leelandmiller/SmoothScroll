# SmoothScroll
#####A simple function to smoothly scroll to same page anchors!

This is really easy to use! 

#####Setup
1. Download smoothScroll.js
2. Add it to your directory
3. Link to the file in your HTML


Then, in your 
```javascript
$(document).ready(function () {

});
```

Add the following code, just like in the SampleHTML:

```javascript
  $("#idOfClickableLinkHere").on('click', function () {
      scrollToAnchor('idOfElementToScrollToHere');
  });
```

In the sample, I have 3 total links, each linking to a different section,
so this is what my $(document).ready() looks like:

```javascript
$(document).ready(function () {
  $("#scroll1Link").on('click', function () {
      scrollToAnchor('scroll1');
  });
  
  $("#scroll2Link").on('click', function () {
      scrollToAnchor('scroll2');
  });
  
  $("#scroll3Link").on('click', function () {
      scrollToAnchor('scroll3');
  });
});
```

That's all there is to it! Simple
