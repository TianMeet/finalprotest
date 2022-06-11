window.addEventListener('load',()=>{
    $('.top_nav ul li').hover(function(){
        $(this).children('ul').stop().slideToggle();
    })
    //搜索框的文字处理
    var ipt = document.querySelector('#ipt');
    var popctn = document.querySelector('.popular_content');
    var lis = document.querySelector('.search_bar').querySelectorAll('li');
    ipt.addEventListener('focus',function(){
        if(this.value==='喜欢本大爷的居然只有你一个'){
            this.value = '';
            popctn.style.left = 48 +'px';
        }
        for(let k = 0;k<lis.length;k++){
          lis[k].onclick = function(){
            ipt.value = this.innerHTML.substring(2)
            console.log(k);
            popctn.style.left = -99999+'px';
          }
        }
    })
    var arr = [];
    for(let i = 0;i<lis.length;i++){
      arr.push(lis[i].innerHTML.substring(2));
    }
// console.log(arr);
    ipt.addEventListener('blur',function(){
        if(this.value===''){
            this.value = '喜欢本大爷的居然只有你一个';
        }else{
           popctn.style.left = -99999+'px';
       }
      // popctn.style.left = -99999+'px';
    })
    //为上传键绑定事件
    $('#upload').hover(function(){
        $('#cbt').fadeIn(400);
    },function(){
        $('#cbt').fadeOut(400);
    })
    var currentnum = document.querySelector('#currentnum').querySelector('div');
    var choosebtns = document.querySelector('#choosenum').querySelectorAll('a');
    for(var i = 0;i<choosebtns.length;i++){
        choosebtns[i].setAttribute('index',i);
        choosebtns[i].addEventListener('click',function(){
            var index = parseInt(this.getAttribute('index'));
            // console.log(index);
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
//分享方式
    // var share = document.querySelector('.share');
    // var ways = document.querySelector('.ways');
    // share.addEventListener('mouseover',function(){
    //     ways.style.display = 'block';
    // })
    // share.addEventListener('mouseout',function(){
    //     ways.style.display = 'none';
    // })
    $('.share').hover(function(){
        $('.ways').fadeIn(300);
    },function(){
        $('.ways').fadeOut(300);
    })

    var addlikebtn = document.querySelector('.addlike');
    var downlikebtn = document.querySelector('.downlike');
    var addnum = addlikebtn.querySelector('.liketotle');
    var flag4 = true;
    var num = parseInt(addnum.innerHTML);
    addlikebtn.addEventListener('click',function(){
        if(flag5){
            if(flag4){
                this.style.color = 'orange';
                flag4 = false;
                addnum.innerHTML = num + 1;
            }else{
                this.style.color = '';
                flag4 = true;
                addnum.innerHTML = num ;
            }
        }
    })
    var flag5 = true;
    downlikebtn.addEventListener('click',function(){
        if(flag5){
            if(!flag4){
                flag4 = true;
                addlikebtn.style.color = '';
                this.style.color = 'orange';
                addnum.innerHTML = num ;
                flag5 = false;
            }else {
                this.style.color = 'orange';
                flag5 = false;
            }
        }else{
            this.style.color = '';
            flag5 = true;
        }
    })
    var textarea = document.querySelector('.context');
    var comsubtn = document.querySelector('.comment_submit');
    var comblock = document.querySelector('.comment_block');
    comsubtn.addEventListener('click',function(){
        if(textarea.value===''){
            alert('请把想法表达出来再发表哦!');
        }else{
            var text = textarea.value;
            var com = {comm :text}
            var htmlstr = template('comments',com);
            console.log(htmlstr);
            var comt = document.querySelector('#comment_block');
            comt.insertAdjacentHTML('beforeend',htmlstr);
            textarea.value = '';
        }
    })
// 查看更多按钮
    var distence = 800;
    $('#look_more').hide();
    $(window).scroll(function(){
      if($(this).scrollTop()>= distence){
        $('#look_more').fadeIn(800);
      }else{
        $('#look_more').fadeOut(800);
      }
    })
    var relecomm = document.querySelector('.relecomm_lists');
    var lookmore = document.querySelector('#look_more');
    var flaglook = true;
    lookmore.addEventListener('click',function(){
        // alert(1)
        if(flaglook){
            relecomm.style.height =  1000+'px';
            lookmore.innerHTML = 'ess'
            flaglook = false;
        }else{
            relecomm.style.height = 700+'px';
            lookmore.innerHTML = 'ore'
            flaglook = true;
        }
    })
    var distence = 200;
    $('#gotopbtn').hide();
    $(window).scroll(function(){
      if($(this).scrollTop()>= distence){
        $('#gotopbtn').fadeIn(500);
      }else{
        $('#gotopbtn').fadeOut(500);
      }
    })
    $('#gotopbtn').click(function(){
      $('body,html').animate({scrollTop:0},400)
    })
})