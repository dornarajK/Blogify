$(document).ready(function(){
   // Handle the form submission for adding a user
   $("#add_Artical").submit(function (event) {
    alert('Data inserted Successfully!');
});

    // Handle the form submission for updating a user
    $("#update-Artical").submit(function (event) {
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {};

        $.map(unindexed_array, function (n, i) {
            data[n['name']] = n['value'];
        });

        var request = {
            "url": `/api/blog/${data.id}`, // Use relat ive URL
            "method": "PUT",
            "data": data
        };

        $.ajax(request).done(function (response) {
            alert('Data Updated Successfully!');
        });
    })


if (window.location.pathname == "/") {
    $(".optioButton a.Delete").click(function () {
        var id = $(this).attr('data-id');  // Get the ID of the blog post

        var request = {
            "url": `/api/blog/${id}`,  // Adjust the URL to your API endpoint
            "method": "DELETE"
        };

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert('Data Deleted Successfully!');
                location.reload();  // Reload the page after successful deletion
            });
        }
    });
}




})