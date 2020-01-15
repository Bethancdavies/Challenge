var reportsWidget = {
    options: {
        containerSelector: '.reports', 
        // mustache template for all items being imported from dataSet
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                         /*missing concat (+)  */
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}}</a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

// label function for looping of mustache statements
    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();