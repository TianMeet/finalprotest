window.addEventListener('load',function(){
    $('.top_nav ul li').hover(function(){
        $(this).children('ul').stop().slideToggle();
    })
    //搜索框的文字处理
    var ipt = document.querySelector('#ipt');
    ipt.addEventListener('focus',function(){
        if(this.value==='喜欢本大爷的居然只有你一个'){
            this.value = '';
        }
    })
    ipt.addEventListener('blur',function(){
        if(this.value===''){
            this.value = '喜欢本大爷的居然只有你一个';
        }
    })
    //为上传键绑定事件
    $('#upload').hover(function(){
        $('#cbt').fadeIn(400);
    },function(){
        $('#cbt').fadeOut(400);
    })
    //轮播图swiper插件制作
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      //tab切换栏制作
      var anibtn = document.querySelector('#animation');
      var carbtn = document.querySelector('#cartoon');
      var novbtn = document.querySelector('#novel')
      var anibox = document.querySelector('#anima_box');
      var carbox = document.querySelector('#cartn_box');
      var novbox = document.querySelector('#novel_box')
      anibtn.addEventListener('mouseover',function(){
            this.style.color = 'skyblue';
      })
      anibtn.addEventListener('mouseout',function(){
             this.style.color = '';
      })
      anibtn.addEventListener('click',function(){
            this.classList.add('boder');
            carbtn.classList.remove('boder');
            novbtn.classList.remove('boder');
            carbtn.style.color = ''
            novbtn.style.color = ''
            anibox.style.display = 'block';
            carbox.style.display = 'none';
            novbox.style.display = 'none';
      })
      carbtn.addEventListener('mouseover',function(){
            this.style.color = 'skyblue';
      })
      carbtn.addEventListener('mouseout',function(){
            this.style.color = '';
      })
      carbtn.addEventListener('click',function(){
            this.classList.add('boder');
            anibtn.classList.remove('boder');
            novbtn.classList.remove('boder');
            anibtn.style.color = '';
            novbtn.style.color = '';
            anibox.style.display = 'none';
            carbox.style.display = 'block';
            novbox.style.display = 'none';
      })
      novbtn.addEventListener('mouseover',function(){
            this.style.color = 'skyblue';
      })
      novbtn.addEventListener('mouseout',function(){
            this.style.color = '';
      })
      novbtn.addEventListener('click',function(){
        this.classList.add('boder');
        anibtn.classList.remove('boder');
        carbtn.classList.remove('boder');
        anibtn.style.color = ''
        carbtn.style.color = ''
        anibox.style.display = 'none';
        carbox.style.display = 'none';
        novbox.style.display = 'block';
      //
    })
})