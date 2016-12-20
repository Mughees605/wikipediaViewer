$(document).ready(function(){

$("#btn").click(function(){

    var search = $("#text").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ search +"&format=json&callback=?"
    $.ajax(url,{
       dataType:"jsonp",
       success:function(response){
           var articleList = response[1];
           $("#ul").html('');
           for(var i = 0 ; i < articleList.length; i++){
                 $("#ul").append("<li class='w3-card-4 w3-light-grey w3-leftbar w3-border-orange'><a href="+response[3][i]+"><h2>"+articleList[i]+"</h2><p>"+response[2][i]+"</p></li></a>")
           }
       }
    });
    $("#text").val("");
})

});