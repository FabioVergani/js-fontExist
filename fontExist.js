//autore:fabio.vergani
var fontExist=window.checkFont||(function($w){
 var w=$w, $d=w.document,
 S='72px',T='abcdefghijklmnopqrstuvwxyz0123456789',
 f=function(a,b){var o=w,p=a;return p in o?o[p]:(o[p]=b in o);},
 g=function(f,n){var d=$d,p='defaultFontWidth',k='monospace'; return (d[p]||(d[p]=f(k)))!==f(n+','+k);};
 if(f('hasCanvas','HTMLCanvasElement')&&f('supportCanvas2D','CanvasRenderingContext2D')){
  f=function(n){
	var d=$d, e=d.createElement('canvas'), s=e.getContext('2d');
	s=g(function(t){var o=s;o.font=S+' '+t;return o.measureText(T).width;},n);
	delete e;
	return s;
  };
 }else{//CanvasIsNotSupported:
  f=function(n){
  var d=$d, b=d.body, e=d.createElement('span'), s=e.style;
  e.appendChild(d.createTextNode(T));
  s.fontSize=S;
  b.appendChild(e);
  s=g(function(t){var o=s;o.display='none';o.fontFamily=t;o.display='inline';return e.offsetWidth;},n);
  b.removeChild(e);
  return s;
  };
 };
 return w.checkFont=f;
})(window);
//
console.log(fontExist('zzz'));
console.log(fontExist('arial'));


