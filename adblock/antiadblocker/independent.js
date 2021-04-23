(function($) {
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    
    function detectOnload(){
    document.body.appendChild(test);
    if (test.offsetHeight === 0) {
    document.body.classList.add('adblock');
    $('body').trigger('AdblockDetected');

    // add GA Events if defined
    if(typeof ga !== 'undefined'){
    ga('send', 'event', 'Adblock', 'Blocked', location.href);
    }
    } 
    
    else {
    $('body').trigger('AdblockNotDetected');
    // add GA Events if defined
    if(typeof ga !== 'undefined'){
    ga('send', 'event', 'Adblock', 'Unblocked', location.href);
    }
    // Old var should be depricat4d but used elsewhere
    window.runAds = true;
    }
    test.remove();
    }

    
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ? detectOnload
    : function() {
    oldonload();
    detectOnload();
    };
    }) (jQuery);