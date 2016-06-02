/**
 * Created by sherry on 2016/4/11.
 */
$(function () {
    var x = 0;
    var b = $(".selectOptions option:selected").text();
    $("#optionText").html(b);
    $("button").click(function () {
        $(".user").trigger("validate");

    });
    $(".user").validator({
        target:"#holder",
        valid: function () {
            alert("aaa");
        }
    });
    $(".selectOptions").change(function () {
        var a = $(".selectOptions option:selected").text();
        $("#optionText").html(a);
    });
    $("li").hover(function (e) {
            var mm = e.target;
            $(mm).css("color", "orange");
        },
        function (e) {
            var mm = e.target;
            $(mm).css("color", "black");
        });
     $("#onTime").bind("input propertychange",function(){
         var a = $("#onTime").val();
         $("#inputText").html(a);
     });
    $("#onTime").focus(function(){
        $(this).css("background-color","grey");
    })
    $(window).resize(function(){
        $("#db").text(x=x+1);
    });
    $(window).unload(function(){
        alert("good bye");
    });
    $("#showPic").click(function(){
        $("img").show("slow","linear");
    });
    var wholeLine = [];
    $("tr").each(function(i,item){
        var $selects = $(item).find("select");
        var line = {
            th:$selects.eq(0).val(),
            th1:$selects.eq(0).val(),
        }
        wholeLine.push(line);
    })
    $(".yes").click(function (){
        $(".zhao").show();
        $(".dialog").show();
        //if($("input:radio:checked").length == 0){
        //    $(".wrongInfo").show();return false;
        //}
        //else{
        //    $(".wrongInfo").hide();
        //    alert("hello");
        //}
    });
    //$("input:radio").change(function (){
    //    $(".wrongInfo").hide();
    //})
    $(".close").click(function (){
        $(".dialog").hide();
        $(".zhao").hide();
    })
    $("#wholeCk").click(function (){
        var isChecked = $("#wholeCk").is(":checked");
        $(".allCk input").prop("checked",isChecked);
    });
    $(".isAll").click(function (){
        if($(".allCk input").is(":checked")){
            $(".wrongIn").hide();
            alert("checked");
        }
        else{
           $(".wrongIn").show();
        }
    });
});
function all(){
    debugger;
}
function hello(e){
    e.target;
    debugger;
};
function changed(){
    $(".wrongIn").hide();
};


