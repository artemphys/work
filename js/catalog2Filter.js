$(document).ready(function() {

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    var collectionId = getParameterByName('field_collection_tid');
    var materialId= getParameterByName('field_collection_tid');
    var assemblyId= getParameterByName('field_collection_tid');

        $(".js-collection ul li a").click(function() {
        event.preventDefault();
        console.log(this.url);
        location.href = 'catalog2.html?field_collection_tid='+$(this).attr("id")+'&field_material_tid='+materialId+'&field_assembly_tid='+assemblyId;
    });

    $(".js-material ul li a").click(function() {
        event.preventDefault();
        console.log(event.target.id);
        location.href = 'catalog2.html?field_collection_tid='+collectionId+'&field_material_tid='+$(this).attr("id")+'&field_assembly_tid='+assemblyId;
    });

    $(".js-assembly ul li a").click(function() {
        event.preventDefault();
        console.log(event.target.id);
        location.href = 'catalog2.html?field_collection_tid='+collectionId+'&field_material_tid='+materialId+'&field_assembly_tid='+$(this).attr("id");
    });

});
