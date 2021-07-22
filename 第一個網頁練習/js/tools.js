/*
            用來獲取指定元素當前樣式
            obj 要獲取樣式的元素
            name 要獲取的樣式名 
            */
        
            function getStyle(obj,name){
                if(window.getComputedStyle){
                    // 正常瀏覽器的方法,具有getComputedStyle()方法
                    return getComputedStyle(obj,null)[name];
                }else{
                    // IE8的方法,沒有getComputedStyle()方法
                    return obj.currentStyle[name];
                };
            };

        
        
        
        // 可執行簡單動畫的函數 
            /* 
            obj:要執行動畫的對象
            target:執行動畫的目標位置
            speed:移動速度
             */
             function move(obj,attr,target,speed,callback){
                clearInterval(obj.timer);
                // 判斷初始值與目標值間的大小來決定速度的正負值
                var current=parseInt(getStyle(obj,attr));
                if(current>target){
                    speed=-speed;
                }
                obj.timer = setInterval(function(){
                 // parseInt:把字符串裡的合法數值取出
                    var oldValue=parseInt(getStyle(obj,attr));
                    var newValue=oldValue+speed;
                    if((speed<0 && newValue<target) || (speed>0 && newValue>target)){
                        newValue=target
                    }
                    obj.style[attr]=newValue+"px";
                    if(newValue===target){
                        clearInterval(obj.timer);
                        callback && callback();
                    }
                },30);
            };                

