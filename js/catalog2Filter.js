$(document).ready(function() {

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    $(".catalogFilter a").click(function() {
        event.preventDefault();
        var names = [];
        $('.catalogFilter').each(function(){
            names.push(this.id);
        })
        var parameters = {};

        for (var i = 0; i < names.length; i++) {
            if(names[i]) {
                parameters[names[i]] = getParameterByName(names[i]) ? getParameterByName(names[i]) : 'Any';
            }
        };
        parameters[$(this).closest('.catalogFilter').attr("id")] = $(this).attr("id");

        location.href = '?' + $.param(parameters);
    });
});
