document.addEventListener("DOMContentLoaded", function () {
    const urlToShare = window.location.href;

    document.getElementById("share-facebook").addEventListener("click", function() {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    });

    document.getElementById("share-twitter").addEventListener("click", function() {
        const textToShare = 'Check out this awesome content!';
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    });
});
