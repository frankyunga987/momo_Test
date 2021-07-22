function addClass(obj,cn){
    if(!hasClass(obj,cn)){
        obj.className+=" "+cn;
    }
}
function hasClass(obj,cn){
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
function removeClass(obj,cn){
    var reg=new RegExp("\\b"+cn+"\\b");
    obj.className=obj.className.replace(reg,"");
}
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }
    else{
        addClass(obj,cn);
    }
}