window.addEventListener('load',function(){
    var currentnum = document.querySelector('#currentnum').querySelector('div');
    var choosebtns = document.querySelector('#choosenum').querySelectorAll('a');
    for(var i = 0;i<choosebtns.length;i++){
        choosebtns[i].setAttribute('index',i);
        choosebtns[i].addEventListener('click',function(){
            var index = parseInt(this.getAttribute('index'));
            console.log(index);
            for(var j = 0;j<choosebtns.length;j++){
                choosebtns[j].classList.remove('selcolor');
            }
            this.classList.add('selcolor');
            currentnum.innerHTML = index + 1;
        })
    }

    //点击点赞 收藏
    var likebtn = document.querySelector('#like');
    var sharebtn = document.querySelector('#share');
    var chaseacbtn = document.querySelector('#chase');
    var chasetexts = chaseacbtn.querySelectorAll('span');
    var flag1 = true;
    likebtn.addEventListener('click',function(){
        if(flag1){
            this.classList.add('colororanged');
            flag1 = false;
        }else {
            this.classList.remove('colororanged')
            flag1=true;
        }
    })
    var flag2 = true;
    sharebtn.addEventListener('click',function(){
        if(flag2){
            this.classList.add('colororanged');
            flag2 = false;
        }else {
            this.classList.remove('colororanged')
            flag2=true;
        }
    })
    var flag3 = true; 
    chaseacbtn.addEventListener('click',function(){
        if(flag3){
            chasetexts[0].innerHTML = ''
            chasetexts[1].innerHTML = '已追'
            this.classList.add('color_grew');
            flag3 = false;
        }else{
            chasetexts[0].innerHTML = ''
            chasetexts[1].innerHTML = '追AC'
            this.classList.remove('color_grew');
            flag3 = true;
        }
    })
    // // more_rele模块滑动显示
    // $('.more_relet').click(function(){
    //     $('.reletoneof').animate({top : '-270px'})
    // })
})