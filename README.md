quickndirtysoundjs
==================

A quick & dirty sound player for JavaScript.

* Triggers a sound in an HTML page.
* Doesn't care about audio codec; A given user agent should work if it has HTML5 Audio support OR
  a plugin that likes the given format (e.g., QuickTime, Windows Media, etc).
* Does no pre-caching. Intended for short sounds with small file sizes.
* Leverages the ersatz-standard browser behavior that plays a sound file that is opened in its
  own tab/window.
* Also leverages my assumption that this brain-dead approach might work in enough cases
  to justify not using a more robust JS sound library :)
  

Usage
=====

```
QuickAndDirtySound.play("http://example.com/assets/audio/cough.wav",6);
```

Argument|Type|Description
*===|*===|*===
@url | (string) | Absolute path to soundfile
@maxDur | (number - optional) | Time until sound-containing element is deleted. Should be slightly longer than the load time + sound duration. Default = 4 seconds.

  
  
TODO
====

* Test user agent compatibility. Works in Chrome 31/Mac. 
* Find out what happens when extension/codec is not understood. 
* Write a console log msg if <audio> not supported.
* If possible, write a console log msg if the format is not supported by <audio> OR any plugins.
