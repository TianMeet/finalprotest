window.addEventListener('load',function(){
    var div = document.querySelector('.sayhey');
    var timeH = new Date();
    var H = timeH.getHours();
    if(H < 12)
    {
        div.innerHTML = '上午好啊,欢迎来到ACGN,收获你的快乐吧!'
    }else if (H < 18) {
        div.innerHTML = '下午好啊,欢迎来到ACGN,收获你的快乐吧!'
    }else {
        div.innerHTML = '晚上好啊,欢迎来到ACGN,收获你的快乐吧!'
    }
})