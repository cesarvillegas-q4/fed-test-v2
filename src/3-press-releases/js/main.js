var pressReleaseWidget = {
    options: {
        containerSelector: '.module-press-release',
        template: (
            '{{#.}}' +
                '{{#filteredItems}}' +
                '<div class="module-press-release_item">' +
                    '<h2 class="module-press-release_headline">{{headline}}</h2>' +
                    '<p class="module-press-release_date">{{date}}</p>' +
                    '<p class="module-press-release_short-body">{{shortBody}}</p>' +
                    '<a class="button" href="{{relatedDoc}}">Download PDF</a>' +
                    '<a class="button" href="{{url}}">Read more</a>' +
                '</div>' +
                '{{/filteredItems}}' +
            '{{/.}}'                    
        )
    },

    init: function() {
        var templateItems = this.beforeRenderItems(prContent)
        this.renderPRs(templateItems || []);
        this.complete();
    },

    beforeRenderItems(content){

        console.log(content);
        content.filteredItems = [];

        content.items.forEach(function (el, ind, arr) {
            if(!el.headline.includes("*EARNINGS*")){
                content.filteredItems.push(el);
            };
        });

        console.log(content);
        return content;
    },

    renderPRs: function(prItems) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, prItems));
    },

    complete: function() {
        $('.module-press-release').slick({
            centerMode: true,
            mobileFirst: true,
            slidesToShow: 1,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
          });
    }
};

pressReleaseWidget.init();