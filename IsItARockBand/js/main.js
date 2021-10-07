$(document).ready(function(){
    var cityStr = "san francisco, ca";

    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=parse&page=Pet_door&prop=text&formatversion=2';
 
    var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
    var params = "action=parse&page=Pet_door&prop=text&formatversion=2&format=json";

    /**
     * Send the request to get the images
     */
    fetch(apiEndpoint + "?" + params + "&origin=*")
        .then(function(response){return response.json();})
        .then(function(response) {
            console.log(response);
        });

    /*   
    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        success: function( response ) {
            var articleList = response[1];
            console.log(articleList);
        
        }
    })
/*    
    $('.submit').on('click',function(){
        var bandName = $('.bandname').val()
        console.log(bandName);  
    });
*/
})