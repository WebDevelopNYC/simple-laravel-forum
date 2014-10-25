$(document).ready(function() {
    $("#form_submit").click(function() {
        $("#target_form").submit();
    });

    $("#category_submit").click(function() {
        $("#category_form").submit();
    });

    $(".new_category").click(function()
    {
        var id = event.target.id;
        var pieces = id.split("-");
        $("#category_form").prop('action', '/forum/category/' + pieces[2] + '/new');
    });

    $(".delete_group").click(function(event) {
        $("#btn_delete_group").prop('href', '/forum/group/' + event.target.id + '/delete');
    });

    $(".delete_category").click(function(event) {
        $("#btn_delete_category").prop('href', '/forum/category/' + event.target.id + '/delete');
    });

    buttonElement = $(".list-group-item");
    imageElement.hover( // accepts two functions
        function() { // mouse goes over:
            $(this).toggleClass("normal", false); // remove one class first
            $(this).toggleClass("mouseOver", true); // add another one
        },
        function() { // mouse goes out
            $(this).toggleClass("mouseOver", false);
            $(this).toggleClass("normal", true);
        }
    );
});