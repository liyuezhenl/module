let username = $(".username");
console.log(username);
username.onblur = function() {
    // alert('1')
    let ajax = new XMLHttpRequest();
    ajax.open('post', 'http://localhost/01JS2005/task/loginregisty/php/reg.php', true);
    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajax.send('name=' + this.value);
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            console.log(ajax.responseText);
            if (!ajax.responseText) {
                $(".span").innerHTML = "可以注册"
                $(".span").style.color = "green"
            } else {
                $(".span").innerHTML = "用户名已被注册"
                $(".span").style.color = "red"
            }
        }
    }
}