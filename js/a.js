$(function(){

    $("button").click(function(){
        var time = new Date();
        var time1 = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
        $("#tt").html(time1);
        //$("#aa").html("Love you£¡");
        //location.href = "second.html";
    })


});
