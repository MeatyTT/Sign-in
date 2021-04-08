$(document).ready(function(){
    
    $("#sign").click(function(){
        var name = $("#username").val();
        var pass = $("#password").val();
        if(name == ""){
            alert("Input your username");
        }
        else if(pass == ""){
            alert("Input your password");
        }
        else {
            alert("Sign in successfully");
            console.log(name);
            console.log(pass);
        }
    });
    $(".thu").click(function(){
        alert("Đang ở trang đăng ký rồi mà còn ấn")
    })
});