function loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
    //for IE
    //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
var dsq=null;
//去除畅言广告
    dsq=setInterval('if(document.getElementById("feedAv")){document.getElementById("feedAv").id="feedAvi";window.clearInterval(dsq);}',1000);
    loadCssCode('#feedAvi{position: absolute !important;z-index: -9999;top: -1000px;}');
