(function(c){function n(e,a,d){var b=g[e];h=c("#"+b.id).find("ul:first").clone(!0);h.css(b.menuStyle).find("li").css(b.itemStyle).hover(function(){c(this).css(b.itemHoverStyle)},function(){c(this).css(b.itemStyle)}).find("img").css({verticalAlign:"middle",paddingRight:"2px"});f.html(h);b.onShowMenu&&(f=b.onShowMenu(d,f));c.each(b.bindings,function(b,d){c("#"+b,f).bind("click",function(){l();d(a,m)})});f.css({left:d[b.eventPosX],top:d[b.eventPosY]}).show();b.shadow&&k.css({width:f.width(),height:f.height(),
left:d.pageX+2,top:d.pageY+2}).show();c(document).one("click",l)}function l(){f.hide();k.hide()}var f,k,h,g,m,e={menuStyle:{listStyle:"none",padding:"1px",margin:"0px",backgroundColor:"#fff",border:"1px solid #999",width:"100px"},itemStyle:{margin:"0px",color:"#000",display:"block",cursor:"default",padding:"3px",border:"1px solid #fff",backgroundColor:"transparent"},itemHoverStyle:{border:"1px solid #0a246a",backgroundColor:"#b6bdd2"},eventPosX:"pageX",eventPosY:"pageY",shadow:!0,onContextMenu:null,
onShowMenu:null};c.fn.contextMenu=function(h,a){f||(f=c('<div id="jqContextMenu"></div>').hide().css({position:"absolute",zIndex:"500"}).appendTo("body").bind("click",function(b){b.stopPropagation()}));k||(k=c("<div></div>").css({backgroundColor:"#000",position:"absolute",opacity:.2,zIndex:499}).appendTo("body").hide());g=g||[];g.push({id:h,menuStyle:c.extend({},e.menuStyle,a.menuStyle||{}),itemStyle:c.extend({},e.itemStyle,a.itemStyle||{}),itemHoverStyle:c.extend({},e.itemHoverStyle,a.itemHoverStyle||
{}),bindings:a.bindings||{},shadow:a.shadow||!1===a.shadow?a.shadow:e.shadow,onContextMenu:a.onContextMenu||e.onContextMenu,onShowMenu:a.onShowMenu||e.onShowMenu,eventPosX:a.eventPosX||e.eventPosX,eventPosY:a.eventPosY||e.eventPosY});var d=g.length-1;c(this).bind("contextmenu",function(b){var a=g[d].onContextMenu?g[d].onContextMenu(b):!0;m=b.target;if(a)return n(d,this,b),!1});return this};c.contextMenu={defaults:function(f){c.each(f,function(a,d){"object"==typeof d&&e[a]?c.extend(e[a],d):e[a]=d})}}})(jQuery);
$(function(){$("div.contextMenu").hide()});