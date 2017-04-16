# SmoothScroll
##### A simple plugin to smoothly scroll to same page anchors!
This is really easy to use! 
Demo: http://leelandmiller.github.io/SmoothScroll/

#### Setup
This plugin requires jQuery and jQueryUI (which also requires jQuery), so the first thing you'll need to do is either download/install jQuery to your directory,
or load a hosted version of jQuery and jQueryUI. You can easily just copy+paste the snippet below into your head tag:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script> 
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
```
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

####Customization
By default, the scroll duration is set to 1500 milliseconds, but this can be easily customized to any speed you want, whether it's 'fast', 'slow', or a specific amount of time (in milliseconds).


To do this, open ```smoothScroll.js```

Look for the .animate() method, which looks like this:

```javascript
.animate(
    {
        scrollTop: offset
    },
    {
        /*
        duration can be set to 
        'fast', 'slow', or any integer
        (in milliseconds)
        jQuery's default is 400.
        'fast' = 200, 'slow' = 600.
        I like it relatively slow.
        */
        duration: 1500,
        /* 
        'easeOutBack' provides the bouncy effect
        for other effects, please refer to README.md
        */
        easing: 'easeOutBack'
    }
);
```

For a slower scroll speed, make the number larger. To speed it up, make it smaller.

The next option you can customize is the easing effect.
By default, I've set the effect to 'easeOutBack' for a nice, smooth bounce, but there are many to choose from.

To see all the different easing effects and easily experiment with them, [Click Here](http://api.jqueryui.com/easings/)
