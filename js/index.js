window.onload = function(){

    //触屏轮播图
    banner();

    // 设置产品模块tab导航宽度
    setWidth();

    // 初始化提示工具
    $('.bao').tooltip();
    $('.bei').tooltip();
}

// 轮播图方法封装

function banner(){
    // 获取wjs-banner盒子，绑定触屏事件
    var banner = document.querySelector('.wjs-banner');

    //存储触屏数据
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

    //开始
    banner.addEventListener('touchstart',function(e){
        
        startX = e.targetTouches[0].clientX;

    })
    //触屏中
    banner.addEventListener('touchmove',function(e){

        moveX = e.targetTouches[0].clientX;
        
        // 计算距离差
        distanceX = moveX - startX;
    })
    // 结束
    banner.addEventListener('touchend',function(e){
        
        // 判断距离差
    if(distanceX<0){
      //向左滑动  下一张
      console.log('下一张');
      $('.carousel').carousel('next');
    }

    if(distanceX>0){
      //向右滑动 上一张
      console.log('上一张');
      $('.carousel').carousel('prev');
    }


    //数据重置
      startX=0;
      moveX=0;
      distanceX=0;

    })
}

//设置产品模块tab导航宽度
function setWidth(){
    //获取product-tabs里边所有li的累加宽度 把总和赋值给product-tabs
    var w = 0;//累加li的宽度
    $('.product-tabs li').each(function(index,e){
        w+=$(e).outerWidth(true);
    });
    //把总和赋值给product-tabs
    $('.product-tabs').width(w);

}