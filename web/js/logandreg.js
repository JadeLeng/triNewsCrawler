
/*
$(function () {
	$('#registerbtn').click(function () {
		email = $("#emailtext").val();
		pwd = $("#password1").val();
		regid = $("#userregid").val();
        register();
    });
})
*/
function register(){
    var email = $("#emailtext").val();
    var pwd = $("#password1").val();
    var regid = $("#userregid").val();
    var pwd2 = $("#password2").val();
    
	console.log(email);
	console.log(pwd);
	console.log(regid);
    var flag = false;
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myreg.test(email))
    {
        alert("请输入有效的邮箱！");
        myreg.focus();
        return flag;
    }

    if (pwd.length<6){
        alert("密码长度小于六位！");
        return flag;
    }
 
    if (pwd != pwd2){
        alert("两次输入密码不一致！");
        return flag;
    }

	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/register.php",
        data: {
            usrname: regid,
            pwd: pwd,
            email: email
        },
        success: function(msg) {
            var data = JSON.parse(msg);
            console.log(data);
            index = data.indexOf("Duplicate");
            if (index != -1){
                newindex = data.indexOf("PRIMARY");
                if (newindex != -1){
                    var usrinput = document.getElementById("userregid");
                    usrinput.setCustomValidity("用户名已经被注册了！"); 

                    alert("用户名已经被注册了！");

                }
                else{
                    var emailinput = document.getElementById("emailtext");
                    emailtext.setCustomValidity("邮箱已经被注册了！"); 
                    alert("邮箱已经被注册了！");
                }

            }
            else{
                //usrinput.setCustomValidity('');
                //emailtext.setCustomValidity(''); 
                alert("注册成功！请在页面刷新后登录！")
                $("#registerbtn").popover();
                window.location.reload();
                flag = true;
            }
        },
        error: function() {}
    });

    return flag;
}

function login(){
    var usrname = $("#loginusrname").val();
    var pwd = $("#loginpwd").val();

    //while (true)
    console.log(usrname);
    //alert("正在登录，请稍等。");

    $.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/login.php",
        data: {
            usrname: usrname,
            pwd: pwd
            
        },
        success: function(msg) {
            var data = JSON.parse(msg);
            console.log(data);
            //alert("ajax");
            index = data.indexOf("wrongpwd");
            if (index != -1){
                alert("密码输入错误！");
                return false;
                

            }
            else{
                successindex = data.indexOf("success");
                if (successindex != -1){
                    alert("登陆成功！");
                    $.session.set('user', usrname);
                    console.log($.session.get('user'));
                    window.location.href = 'index.html';
                }
                else{
                    alert("数据库连接错误，请重新登录。");
                    //window.location.reload();
                }
            }
        },
        error: function() {}
    });

    return false;

}