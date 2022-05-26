function animate(obj,target,callback){
    //给对象取一个名字 避免重复开空间
    // console.log(callback);
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        //步长写到定时器的里面
        //把步长改为整数
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft === target){
            //停止动画 停止定时器
            clearInterval(obj.timer);
            //当计时器结束的时候 如果有函数就调用
            // if(callback){
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}