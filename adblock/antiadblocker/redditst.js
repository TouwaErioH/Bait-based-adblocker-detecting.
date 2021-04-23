testAdblock: function() {
    var e = $("#adblock-test");
    return this.isHidden(e.get(0))
}

testAcceptableAds: function() {
    if (!this.testAdblock()) return null;
    var e = $("<div />").addClass("promotedlink").css({
    height: "1px",
    width: "1px",
    position: "absolute",
    left: "-100000px"
    }).appendTo($("body")).show();
    return !this.isHidden(e.get(0))
}


getAdblockLevel: function() {
    const e = this.testAdblock();
    return e ? this.testAcceptableAds() ? "whitelisted" : "on" :
    "off"
}

    <div class="GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250
    ad-banner adbar adbox1 ads-area adsense-ad box_ad googad"
    id="adblock-test"> // bait placed in its main page