

$('.delete_job').on('click', function(){

    var _id = $(this) .attr(data-id);

    $.ajax({
        method: "POST",
        url : "dashboards/delete_job",
        data : {"_id":_id},
        success : function(result){
            if(_id == $_id){
                location.reload();
            }
        }
    })

});