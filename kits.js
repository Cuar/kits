/* 要求使用对象的语法封装 */
var kits = {};

/* 封装一个获取随机整数的方法 */
kits.randomInt = function(n,m){
  return Math.floor(Math.random() * (m-n+1) + n);
}

/* 封装随机rgb颜色的方法 */
kits.randomRGB = function(){
  var r = kits.randomInt(0,255);
  var g = kits.randomInt(0,255);
  var b = kits.randomInt(0,255);
  return 'rgb('+r+','+g+','+b+')';
  
}

/* 封装随机十六进制颜色的方法 */
kits.randonHexColor = function(){

    return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6);
}
/* 将来如果还有跟多的可以重复使用的代码，就继续想kits这个对象身上添加就行 */