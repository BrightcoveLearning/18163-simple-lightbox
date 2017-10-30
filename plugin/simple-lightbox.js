videojs.registerPlugin('simpleLightbox', function() {
    // Get a reference to the player when it is ready
    var myPlayer = this,
      eContainer = document.getElementById("container"),
      eLightbox = document.getElementById("playerLightbox");

    // Listen for the loadstart event
    myPlayer.on('loadstart',function(){
      var str = "";
      // Get the video's poster image and use it in the img tag
      str += '<img src="' +
        myPlayer.mediainfo.posterSources[0].src + '" alt="' +
        myPlayer.mediainfo.name + '" width="100%" height="100%"/>';
      eContainer.innerHTML = str;

      // Add click event listener to the video still image
      eContainer.onclick = function(e) {
        // reveal the lightbox
        eLightbox.className = "playerShow";
        // play the video
        myPlayer.play();
      }

      // Listen for a click event on the close button
      playerClose.onclick = function(e) {
        myPlayer.pause();
        // hide the lightbox
        eLightbox.className = "playerHide";
      }
    })

});
