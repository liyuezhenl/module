let submit = document.querySelector('.submit');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
// console.log(submit);
submit.onclick = function() {
    // alert(1)
    let ajax = new XMLHttpRequest();
    ajax.open('post', 'http://localhost/01JS2005/task/loginregisty/php/login.php', true);
    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajax.send(`name = ${username.value} & pass = ${hex_sha1(password.value)}`);
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.responseText) {
                localStorage.setItem('name', username.value)
                location.href = 'http://localhost/01JS2005/task/loginregisty/src/index.html'
            } else {
                username.value = ''
                password.value = ''
                alert('密码或用户名错误')
            }
        }
    }
}