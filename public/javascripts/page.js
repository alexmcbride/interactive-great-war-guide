//a page updating module that puts the actual content on to the page

var page = (function () {
    var home = function () {
        var html = '<h2>Home</h2><p>Intro to web site and stuff...</p>';
        contentLoader.render(html);
    }

    var post = function (data) {
        var html = '<div class="post">' +
            '<h3>' + data.title + '</h3>' +
            '<p>' + data.content + '</p>' +
            '<p>Posted by ' + data.author + ' on ' + data.created + '</p>' +
            '</div>';
        contentLoader.render(html);
    }

    var image = function (data) {
        var html = '<div class="image">' +
            '<h3>' + data.title + '</h3>' +
            '<p><img src="' + data.src + '"></p>' +
            '</div>';
        contentLoader.render(html);
    }

    var video = function (data) {
        var html = '<div class="video">' +
            '<h3>' + data.title + '</h3>' +
            '<video width="640" height="480" controls>' +
            '<source src="' + data.src + '" type="' + data.contentType + '">' +
            'Your browser does not support this video' +
            '</video>' +
            '</div>';
        contentLoader.render(html);
    }

    var slideshow = function (data) {
        slideshowManager.display(data);
    }

    var quiz = function (data) {
        quizManager.display(data);
    }

    var notFound = function () {
        var html = '<h3>Not found</h3>';
        html += "<p>Aww, we couldn't find that page. :(</p>";
        contentLoader.render(html);
    }

    var login = function() {
        adminManager.display();
    }

    return {
        home: home,
        post: post,
        image: image,
        video: video,
        slideshow: slideshow,
        quiz: quiz,
        notFound: notFound,
        login: login
    }
})();
