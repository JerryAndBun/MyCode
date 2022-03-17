window.onload = function () {
    var loginbox = document.querySelector('.loginbox');
    var logintips = document.querySelector('.logintips');
    var click = document.querySelector('.click');
    var accountswitch = document.querySelector('.login-account-switch');
    var accountlogin = document.querySelector('.loginheader');
    var loginform = document.querySelector('.loginform');
    var switc = document.querySelector('.switch-img');
    var qrcodebox = document.querySelector('.qrcodebox');
    var statusbutton = document.querySelector('.statusbutton');
    var lilist = document.getElementsByClassName('guide');//li列表
    var wordlist = document.getElementsByClassName('word');//li下方的文字
    var iconlist = document.getElementsByClassName('guideicon');//icon列表
    var daohangbox = document.getElementsByClassName('daohangbox');
    var lv1guide = document.getElementsByClassName('lv1guide');
    var lv1 = lv1guide[0].getElementsByTagName('li');
    var lv1a = lv1guide[0].getElementsByTagName('a');
    var icongongneng = document.querySelector('.icon-gongneng');
    var daohangboxa = document.querySelector('.daohangboxa');
    var lv2guide = document.getElementsByClassName('lv2guide');
    var lv2guideul = lv2guide[0].getElementsByTagName('ul');
    var lv2 = new Array();

    for (let j = 0; j < 13; j++) {
        lv2[j] = new Array();
        lv2[j] = lv2guideul[j].getElementsByTagName('li');

    }
    var lv2a = new Array();
    for (let j = 0; j < 13; j++) {
        lv2a[j] = new Array();
        lv2a[j] = lv2guideul[j].getElementsByTagName('li');

    }
let fn =()=>{
    alert('2222222');
}
fn()
    var isqr = 1;
    for (let index = 0; index < 4; index++) {
        lilist[index].onmouseover = function () {
            // iconlist[index].style.transform='scale(10%)'
            iconlist[index].style.transform = 'translateY(-6px) scale(80%)'
            // iconlist[index].style.fontSize = '14px'
            wordlist[index].style.visibility = 'visible';
            wordlist[index].style.transform = 'translateY(-16px)'
            wordlist[index].style.opacity = '1'
            wordlist[index].style.color = '#fd4c5b'
            iconlist[index].style.color = '#fd4c5b'

        }
        lilist[index].onmouseout = function () {
            iconlist[index].style.transform = 'translateY(0px)'
            iconlist[index].style.fontSize = '18px'
            wordlist[index].style.visibility = 'hidden';
            wordlist[index].style.transform = 'translateY(-5px)'
            wordlist[index].style.opacity = '0'
            wordlist[index].style.color = '#999'
            iconlist[index].style.color = '#999'
        }
    }
    //鼠标悬浮显示一二级菜单
    //获取一级导航栏的范围
    let lv1menux = lv1guide[0].offsetLeft; //一级导航栏距离左边的距离 0
    let lv1menuy = lv1guide[0].offsetTop + 59;   //距离顶部的距离 60
    let lv1menuX = lv1guide[0].offsetLeft + lv1guide[0].offsetWidth;//宽 1k+
    let lv1menuY = lv1guide[0].offsetTop + lv1guide[0].offsetHeight + 59;  //底部距离顶部的距离

    let mouseX
    let mouseY
    let getmouse = function () {
        let event = window.event;
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    daohangbox[0].onmouseenter = function () {
        lv1guide[0].style.visibility = 'visible';
        console.log('出现了');

        icongongneng.style.transform = 'rotate(90deg)';
        icongongneng.style.color = '#999';
        daohangboxa.style.color = '#fd4c5b';
    }
    //移入移出导航区的判断
    daohangbox[0].onmouseleave = function () {

        //获取鼠标的坐标
        getmouse();
        // console.log("x:" + menux + "y:" + menuy + "X:" + menuX + "Y:" + menuY)
        // console.log("mouseX" + mouseX + "mouseY" + mouseY)
        if (mouseX < lv1menux || mouseX > lv1menuX || mouseY > lv1menuY || mouseY < lv1menuy) {
            lv1guide[0].style.visibility = 'hidden';
            daohangboxa.style.color = '#333';
            icongongneng.style.transform = 'rotate(-90deg)';

        }
    }
    //移出入一级li部分的的判断
    var timeout;
    for (let i = 0; i < 13; i++) {

        lv1[i].onmouseenter = function () {
            lv1a[i].style.color = '#fd4c5b';
            timeout = setTimeout(function () {
                lv2guideul[i].style.display = 'block';
                lv2guide[0].style.display = 'block';
            }, 250)
            // alert(123)
        }
        var lv1index;
        lv1[i].onmouseleave = function () {
            getmouse();
            clearTimeout(timeout)
            // console.log("x距离左边" + lv1[i].offsetLeft + "x+宽" + (lv1[i].offsetLeft + lv1[i].offsetWidth) + "y距离顶部:"+ lv1[i].offsetTop + 60)
            // console.log("mouseX" + mouseX + "mouseY" + mouseY)
            //如果移出lv1【i】，且是往二级菜单方向走的话
            if (mouseX > lv1[i].offsetLeft && mouseX < (lv1[i].offsetLeft + lv1[i].offsetWidth) && mouseY > (lv1[i].offsetTop + 98)) {
                console.log('在' + i)
                lv2guideul[i].style.display = 'block';
                lv1guide[0].style.visibility = 'visible'
                // console.log("x距离左边" + lv1[i].offsetLeft + "x+宽" + (lv1[i].offsetLeft + lv1[i].offsetWidth) + "y距离顶部:" + lv1[i].offsetTop + 59)
                // console.log("mouseX" + mouseX + "mouseY" + mouseY)
                lv2guide[0].style.display = 'block';
                lv1a[i].style.color = '#fd4c5b';
                console.log('往下走了')
                lv1index = i;
            }
            //不是的话，就是向其他li去了
            else {
                lv2guideul[i].style.display = 'none';
                if (lv2guideul[i].style.display == 'none') {
                    console.log(i + '已消失')
                }
                lv2guide[0].style.display = 'none';
                lv1a[i].style.color = '#333';

            }

        }
    }
    //移入移出一级导航区的判断
    lv1guide[0].onmouseout = function () {
        // let lv2menux = lv2guide[0].offsetLeft; //二级导航栏距离左边的距离 0
        // let lv2menuy = lv2guide[0].offsetTop + 60;   //距离顶部的距离 99
        // let lv2menuX = lv2guide[0].offsetLeft + lv1guide[0].offsetWidth;//宽 1k+
        // let lv2menuY = lv2guide[0].offsetTop + lv1guide[0].offsetHeight + 60;  //底部距离顶部的距离
        // console.log(lv2menuX, lv2menuY, lv2menux, lv2menuy)
        getmouse();
        // alert(lv2menuY)
        if (mouseX < lv1menux || mouseX > lv1menuX || mouseY < lv1menuy || mouseY > lv1menuY) {
            // console.log("x:" + menux + "y:" + menuy + "X:" + menuX + "Y:" + menuY)
            // console.log("mouseX" + mouseX + "mouseY" + mouseY)
            lv2guide[0].style.display = 'none';
            if (lv2guide[0].style.display == 'none') {
                console.log('离开一级导航栏导致消失')
            }
            lv2guideul[0].style.display = 'none'
            lv1guide[0].style.visibility = 'hidden';
            // alert(123)
            daohangboxa.style.color = '#333';
            icongongneng.style.transform = 'rotate(-90deg)';
        }
        // lv2menux = 0
        // lv2menuy = 0
        // lv2menuX = 0
        // lv2menuY = 0
    }
    //移入出二级导航的li的判断
    for (let j = 0; j < lv2.length; j++) {
        for (let k = 0; k < lv2[j].length; k++) {
            lv2[j][k].onmouseenter = function () {
                lv2a[j][k].style.color = '#fd4c5b';
            }
        }
    }
    //移入出二级导航区的判断

    lv2guide[0].onmouseleave = function () {
        getmouse()


        for (let i = 0; i < lv1.length; i++) {
            lv1a[i].style.color = '#333';
            if ((mouseX > lv1[i].offsetLeft || mouseX < (lv1[i].offsetLeft + lv1[i].offsetWidth)) && mouseY < (lv1[i].offsetTop + 100)) {
                setTimeout(function () {
                    lv2guideul[i].style.display = 'none'
                }, 250)
                // alert('延时执行')
            }
            if ((mouseX < lv1[i].offsetLeft || mouseX > (lv1[i].offsetLeft + lv1[i].offsetWidth)) && mouseY < (lv1[i].offsetTop + 100)) {
                // if((mouseX < lv1[i].offsetLeft || mouseX > (lv1[i].offsetLeft + lv1[i].offsetWidth)) )
                // {
                //     // alert(1111111)
                // }
                // console.log(lv1[1].offsetLeft)
                // console.log(lv1[1].offsetLeft+lv1[1].offsetWidth)
                // console.log(mouseX)
                // console.log(mouseY)
                lv2guide[0].style.display = 'none'
                lv2guideul[lv1index].style.display = 'none'
                console.log('2->1空隙导致消失')
            }
            // lv1guide[0].style.display='none';
        }
        if (mouseY > 139) {
            lv1guide[0].style.visibility = 'hidden'
            icongongneng.style.transform = 'rotate(-90deg)';
            lv2guide[0].style.display = 'none'
            daohangboxa.style.color = '#333'
        }

    }
    //定时三秒刷新的定时器函数体
    var timerrunner = function () {
        // count++;
        if (qrcodebox.style.visibility == 'visible') {
            // qrcodebox.style.visibility = 'hidden';
            clearInterval(timer);
        }
        qrcodebox.style.visibility = 'visible';
        // if (count == 6) {
        //     clearInterval(timer);
        // }
    }
    //启动定时器
    var timer = setInterval(timerrunner, 3000);
    statusbutton.addEventListener('click', function () {
        clearInterval(timer);
        qrcodebox.style.visibility = 'hidden';
        timer = setInterval(timerrunner, 3000);

    })
    //点击刷新
    switc.addEventListener('click', function () {
        if (isqr === 1) {
            loginbox.style.visibility = "hidden";
            logintips.style.visibility = "hidden";
            click.style.visibility = "hidden";
            accountswitch.innerHTML = "忘记密码";
            accountlogin.innerHTML = "账号登录";
            loginform.style.visibility = "visible";
            qrcodebox.style.visibility = 'hidden';
            clearInterval(timer);
            isqr = -isqr
        }
        else {
            loginform.style.visibility = "hidden";
            loginbox.style.visibility = "visible";
            logintips.style.visibility = "visible";
            click.style.visibility = "visible";
            accountswitch.innerHTML = "账号登录";
            accountlogin.innerHTML = "手机扫码登录";
            isqr = -isqr
            timer = setInterval(timerrunner, 3000);

        }

    })
}