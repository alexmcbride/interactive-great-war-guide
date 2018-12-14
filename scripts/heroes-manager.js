// Module to encapsulate heroes master/detail list.
var heroesManager = (function () {
    var generateHtml = function (pageData, hero) {
        var html = '';
        html += '<h2>' + pageData.title + '</h2>';
        html += '<p>Select a hero from the list to learn more about them:</p>';
        html += '<div class="row">';
        html += '<div class="col-5" id="master">';
        html += '<ul>';
        pageData.heroes.forEach(function (hero, index) {
            var hash = urlHelper.generateHash(pageData.type, pageData.id, index);
            html += '<li><a href="#' + hash + '">' + hero.title.slice(1, -1) + '</a></li>';
        });
        html += '</ul>';
        html += '</div>';
        html += '<div class="col" id="detail">';
        html += '<h3>' + hero.title.slice(1, -1) + '</h3>';
        html += '<ul class="list-unstyled">';
        html += '<li>Date: ' + hero.publDate + '</li>';
        html += '<li>Descript: ' + hero.descript + '</li>';
        html += '<li>History: ' + hero.history + '</li>';
        html += '<li>Subject: ' + hero.subject + '</li>';
        html += '<li>Source: ' + hero.source + '</li>';         
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        return html;
    };

    var display = function (pageData) {
        var index = urlHelper.index();
        var hero = pageData.heroes[index];
        var html = generateHtml(pageData, hero);
        content.render(html);
    };

    return {
        display: display
    };
})();