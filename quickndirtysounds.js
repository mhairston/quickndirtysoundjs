
QuickAndDirtySound = {
  
  /*
    quickndirtysoundjs
    ==================
    
    A quick & dirty sound player for JavaScript
    
    @Author: Michael Hairston (mhairston@gmail.com)
    
    * Triggers a sound in an HTML page.
    * Doesn't care about audio codec; A given user agent should work if it has HTML5 Audio support OR
      a plugin that likes the given format (e.g., QuickTime, Windows Media, etc).
    * Does no pre-caching. Intended for short sounds with small file sizes.
    * Leverages the ersatz-standard browser behavior that plays a sound file that is opened in its
      own tab/window.
    * Also leverages my assumption that this brain-dead approach might work in enough cases
      to justify not using a more robust JS sound library :)
      
    
    @url | (string) | Absolute path to soundfile
    @maxDur | (number) | (optional) Time until sound-containing element is deleted. Should be slightly longer than the load time + sound duration. Default = 4 seconds.
    
  
    ###TODO: 
    
    * Test user agent compatibility. Works in Chrome 31/Mac. 
    * Find out what happens when extension/codec is not understood. 
    * Write a console log msg if <audio> not supported.
    * If possible, write a console log msg if the format is not supported by <audio> OR any plugins.
  
  */
  
  play: function(url,maxDur){
    maxDur = maxDur || 4; // default (seconds)
    
    // add the sound as a hidden iframe, let the browser auto-play: 
    var sf = document.createElement('iframe');
    
    // replicate "hide only visually" from html5boilerplate: 
    sf.style.border = "0";
    sf.style.clip = "rect(0 0 0 0)";
    sf.style.height = "1px";
    sf.style.margin = "-1px";
    sf.style.overflow = "hidden";
    sf.style.padding = "0";
    sf.style.position = "absolute";
    sf.style.width = "1px";
    
    sf.src = url;
    document.body.appendChild(sf);
    
    // Clean up - remove iframe after some seconds:
    window.setTimeout(function(){
      sf.parentNode.removeChild(sf);
    }, maxDur * 1000);

  }

}
