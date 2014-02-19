QuickAndDirtySound = {
  
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
