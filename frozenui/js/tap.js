!function(a,b){a.tapHandling=!1;var c=function(a){return a.off(".fz.tap")},d=function(c){return c.each(function(){function c(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopPropagation()}function d(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function e(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=d(a);j=b[0],i=b[1]}function f(a){if(!k){var b=d(a);b&&(Math.abs(i-b[1])>m||Math.abs(j-b[0])>m)&&(k=!0)}}function g(b){if(clearTimeout(h),h=setTimeout(function(){a.tapHandling=!1,k=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),k||a.tapHandling&&a.tapHandling!==b.type)return void(k=!1);a.tapHandling=b.type,c(b)}}var h,i,j,k,l=b(this),m=10;l.bind("touchstart.fz.tap MSPointerDown.fz.tap",e).bind("touchmove.fz.tap MSPointerMove.fz.tap",f).bind("touchend.fz.tap MSPointerUp.fz.tap",g).bind("click.fz.tap",g)})};if(b.event&&b.event.special)b.event.special.tap={add:function(){d(b(this))},remove:function(){c(b(this))}};else{var e=b.fn.on,f=b.fn.off;b.fn.on=function(a){return/(^| )tap( |$)/.test(a)&&(c(this),d(this)),e.apply(this,arguments)},b.fn.off=function(a){return/(^| )tap( |$)/.test(a)&&c(this),f.apply(this,arguments)}}b.fn.tap=function(a){this.on("tap",a)}}(this,Zepto);