/*!version: 190705.1609 */ function fnDefer(){window.jQuery?(window.innerWidth<=1e3&&(window.disableAdtimaBanner=!0),AdtimaZingNews.init()):setTimeout(function(){fnDefer()},50)}var AdtimaZingNews={config:{},pageWidth:function(){var a=$("body > .page-wrapper").outerWidth();return $("body > .page-wrapper").length||(a=$("body > .wrapper").outerWidth()),a>=1100?1100:1e3},getPageType:function(){var a=window.getPageType(),b=document.getElementsByTagName("body")[0];return"article"==a&&("page-video"==b.getAttribute("id")&&(a="video"),b.classList.contains("layout-no-sidebar")&&(a="article_nosidebar")),a},position:{top:{id:"advTop",size:"970x250",type:"",other:"",demoId:"2337806631644381514"},r3:{id:"advR3",size:"300x600",type:"",other:"",demoId:"1875626867369138608"},r4:{id:"advR4",size:"300x600",type:"",other:"",demoId:"2082100874594175863"},prBox1:{id:"advPrBox1",size:"300x600",type:"",other:"",demoId:"1398205440981422685"},prBox2:{id:"advPrBox2",size:"300x600",type:"",other:"",demoId:""},halfPage:{id:"advHalfPage",size:"300x600",type:"",other:"",demoId:"1769830265111658824"},mastheadInline:{id:"advMastheadInline",size:"980x250",type:"",other:' z2-close="true" ',demoId:"418185395427558454"},mastheadInline2:{id:"advMastheadInline2",size:"980x250",type:"",other:' z2-close="true" ',demoId:""},bgL:{id:"advBgLeft",size:null,type:"backgroundleft",other:"",demoId:"2029139942104846766"},bgR:{id:"advBgRight",size:null,type:"backgroundright",other:"",demoId:"2597107598443893152"},canvas:{id:"advCanvas",size:"2000x1200",type:"canvas",other:"",demoId:"2411750412109956487"},idle:{id:"advIdle",size:"640x360",type:"",other:"",demoId:"367744749747520477"},fullBg:{id:"fullBg",size:"2000x1200",type:"fullBg",other:"",demoId:"2791895502167687168"},articleBottom:{id:"advArticleBottom",size:null,type:"tvcBottom",other:' z2-soundhover="true" ',demoId:"1425387266795588713"},articleMiddle:{id:"prInpageBanner",size:"660x300",type:"",other:"",demoId:"1541245792016614657"},articleImage:{id:"advArticleImage",size:"1x1",type:"inImage",other:' z2-close="black-circle" ',demoId:"1786550327981864439"},articleInread:{id:"advArticleInread",size:null,type:"inread",other:' z2-responsive="true" z2-inread="pc" ',demoId:"2481475405114470955"},middleNoSidebar:{id:"advMiddle1",size:null,type:"970x250",other:"",demoId:"2782058279008172787"},middleNoSidebar2:{id:"advMiddle2",size:"970x250",type:"",other:"",demoId:"839646065123095838"},middleNoSidebar3:{id:"advMiddle3",size:"970x250",type:"",other:"",demoId:"1407681805283718416"},middleNoSidebar4:{id:"advMiddle4",size:"970x250",type:"",other:"",demoId:"1975077646856844562"}},getZoneId:function(a){var b=null,c=this.getPageType();if(window.adtimaData&&window.adtimaData.zones)for(var d in this.position)a.id==this.position[d].id&&(b=this.position[d].demoId);else{if("video"==c)return;switch(c){case"home":a.id==this.position.r3.id&&(b="1875626867369138608"),a.id==this.position.top.id&&(b="599158038627572817"),a.id==this.position.halfPage.id&&(b="1994042083542255665"),a.id==this.position.mastheadInline.id&&(b="1761266482575537658"),a.id==this.position.mastheadInline2.id&&(b="2329293443823007228"),a.id==this.position.prBox1.id&&(b="1398205440981422685"),a.id==this.position.prBox2.id&&(b="2724583988725763970");break;case"topic":a.id==this.position.top.id&&(b="2337806631644381514"),a.id==this.position.bgL.id&&(b="2029139942104846766"),a.id==this.position.bgR.id&&(b="2597107598443893152"),a.id==this.position.fullBg.id&&(b="1461130590223290796");break;case"category":a.id==this.position.top.id&&(b="2337806631644381514"),a.id==this.position.r3.id&&(b="1277050658443706793"),a.id==this.position.halfPage.id&&(b="1769830265111658824"),a.id==this.position.bgL.id&&(b="91083752770847055"),a.id==this.position.bgR.id&&(b="659051340390416705"),a.id==this.position.canvas.id&&(b="1227060692271972675"),a.id==this.position.fullBg.id&&(b="646736814454292593"),a.id==this.position.prBox1.id&&(b="2514651162732872089");break;case"article_nosidebar":case"article":a.id==this.position.top.id&&(b="2337806631644381514"),a.id==this.position.articleBottom.id&&(b="1424750048267685500"),a.id==this.position.mastheadInline.id&&(b="418185395427558454"),a.id==this.position.articleMiddle.id&&(b="1541245792016614657"),a.id==this.position.bgR.id&&(b="659051340390416705"),a.id==this.position.bgL.id&&(b="91083752770847055"),a.id==this.position.canvas.id&&(b="1227060692271972675"),a.id==this.position.fullBg.id&&(b="646736814454292593"),a.id==this.position.r4.id&&(b="965929502468699463"),a.id==this.position.articleImage.id&&(b="1786550327981864439"),"article_nosidebar"==c?(a.id==this.position.middleNoSidebar.id&&(b="2782058279008172787"),a.id==this.position.middleNoSidebar2.id&&(b="839646065123095838"),a.id==this.position.middleNoSidebar3.id&&(b="1407681805283718416"),a.id==this.position.middleNoSidebar4.id&&(b="1975077646856844562")):(a.id==this.position.r3.id&&(b="1277050658443706793"),a.id==this.position.halfPage.id&&(b="1769830265111658824"),a.id==this.position.articleInread.id&&(b="2481475405114470955"))}a.id==this.position.idle.id&&(b="39903101405578060")}return b},addBaseScript:function(a,b,c){window.adtimaDocumentReady=!0;var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.type="text/javascript",d.async=!0,d.id=c,d.src="//adtima-static.zadn.vn/resource/js/zad/adr.190705.1609.js",e.parentNode.insertBefore(d,e))},addCriteoScript:function(a,b,c){window.adtimaDocumentReady=!0,window.CriteoZones={"2405389651443931836":912529,"1201794507771167094,633835733424488820":912530,"1277050658443706793":912531,"2337806631644381514":912533,"418185395427558454":912532},window.adtimaData&&(window.CriteoZones["1261477437740895431"]=772229);for(var d in window.CriteoZones){var e={slotid:"criteo_"+window.CriteoZones[d],zoneid:window.CriteoZones[d]};window.CriteoZones[d]=e}var f,g=a.getElementsByTagName(b)[0];a.getElementById(c)||(f=a.createElement(b),f.type="text/javascript",f.async=!0,f.id=c,f.src="//static.criteo.net/js/ld/publishertag.js",g.parentNode.insertBefore(f,g))},setPrebidZones:function(){window.AdtimaHBZones=window.AdtimaHBZones||{},window.AdtimaHBZones.gamma={"2337806631644381514":{mediaTypes:{banner:{sizes:[[970,250]]}},siteId:"1500458483",zoneId:"1531106597"},"633835733424488820":{mediaTypes:{banner:{sizes:[[300,250]]}},siteId:"1500458483",zoneId:"1508490267"}},window.AdtimaHBZones.ix={"2337806631644381514":{mediaTypes:{banner:{sizes:[[728,90]]}},siteId:"283529",size:[970,250]},"1769830265111658824":{mediaTypes:{banner:{sizes:[[300,600]]}},siteId:"286173",size:[300,600]},"418185395427558454,2782058279008172787":{mediaTypes:{banner:{sizes:[[970,250]]}},siteId:"295741",size:[970,250]}},window.AdtimaHBZones.rtbhouse={"1277050658443706793,1769830265111658824":{mediaTypes:{banner:{sizes:[[300,600]]}},publisherId:"D4Irs4ZbbxRC8x8Rj46G",region:"prebid-asia"},"418185395427558454":{mediaTypes:{banner:{sizes:[[970,250]]}},publisherId:"D4Irs4ZbbxRC8x8Rj46G",region:"prebid-asia"}},window.AdtimaHBZones.appier={"1769830265111658824":{mediaTypes:{banner:{sizes:[[300,600]]}},hzid:"WUMJWIOp"},"418185395427558454,2782058279008172787":{mediaTypes:{banner:{sizes:[[970,250]]}},hzid:"WUMJWFOp"},"1277050658443706793":{mediaTypes:{banner:{sizes:[[300,600]]}},hzid:"WUMJWzOp"}}},addAdtimaDiv:function(a,b){if(null!=b&&""!=b){var c=' z2-width="1" z2-height="1"',d="",e=a.size;if(null!=e&&e.indexOf("x")>0){var f=e.split("x");2==f.length&&(c='z2-width="'+f[0]+'" z2-height="'+f[1]+'"')}""!=a.type&&(d=' z2-type="'+a.type+'"');var g='<div id="adtima-zone-'+b+'" z2-zoneid="'+b+'" '+c+d+a.other+' class="z2-zads-zone" ></div>';$("#"+a.id).html(g)}},getParameterByName:function(a){var b=window.location.href;a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null},UpdateViewCount:function(a){try{var b=$("[data-id="+a+"]");b.length>0&&b.find("#pr_tracking").each(function(a){var b=$(this),c=b.attr("src");if(c){var d=c.split("/");c=d[d.length-1],d=c.split("|");var e=d[0],f=window.AdtimaRender.getRenderUrl(1,e);AdtimaRender.Helpers.includeScript(document,f)}})}catch(a){}},applyFullBgEffect:function(a){$("#advBgLeft, #advBgRight").hide();var b=$("#adtima-zone-"+a.zid),c=AdtimaZingNews.pageWidth();b.css({width:a.banners[0].width+"px","margin-left":"-"+parseInt(a.banners[0].width)/2+"px",left:"50%",height:a.banners[0].height+"px",position:"fixed",top:0,border:0,overflow:"hidden","z-index":1}),$("body").addClass("adtimaCanvas"),$("footer > .wrapper").css({"z-index":3,width:c+"px","margin-left":"-"+c/2+"px","background-color":"#fff","margin-top":"-20px","padding-top":"20px",overflow:"hidden"}),$("footer .copyright").css({padding:"10px"}),$("#homepage").css({"background-color":"#fff","margin-top":"-10px"}),$("#"+this.position.top.id).hide(),$("body > .wrapper, body > .page-wrapper").prepend('<div style="diplay:none"></div>'),$("head").append('<style id="adtimaFullbgFixed">body.adtimaCanvas #weather { top: auto; }</style>')},applyCanvasEffect:function(a){AdtimaZingNews.Helpers.hideSidebar();var b=AdtimaZingNews.pageWidth();$("#adtima-zone-"+a.zid).css({width:a.banners[0].width+"px","margin-left":"-"+parseInt(a.banners[0].width)/2+"px",left:"50%",height:a.banners[0].height+"px",position:"fixed",top:0,border:0,overflow:"hidden","z-index":1}),$("body").addClass("adtimaCanvas"),$("footer > .wrapper").css({"z-index":3,width:b+"px","margin-left":"-"+b/2+"px","background-color":"#fff","margin-top":"-20px","padding-top":"20px",overflow:"hidden"}),$("footer .copyright").css({padding:"10px"}),$("#homepage").css({"background-color":"#fff","margin-top":"-10px"}),$("body").append("<style>.advBgCanvasShadow {box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.75);}.advBgCanvasIcon {transform: translate3d(0, 0, 0);}.bounce {animation: bounce 2s infinite;-webkit-animation: bounce 2s infinite;-moz-animation: bounce 2s infinite;-o-animation: bounce 2s infinite;}@-webkit-keyframes bounce {0%, 20%, 50%, 80%, 100% { -webkit-transform: translateX(0); }40% { -webkit-transform: translateX(-12px); }60% { -webkit-transform: translateX(-8px); }}@-moz-keyframes bounce {0%, 20%, 50%, 80%, 100% { -moz-transform: translateX(0); }40% { -moz-transform: translateX(-12px); }60% { -moz-transform: translateX(-8px); }}@-o-keyframes bounce {0%, 20%, 50%, 80%, 100% { -o-transform: translateX(0); }40% { -o-transform: translateX(-12px); }60% { -o-transform: translateX(-8px); }}@keyframes bounce {0%, 20%, 50%, 80%, 100% { transform: translateX(0); }40% { transform: translateX(-12px); }60% { transform: translateX(-8px); }}</style>"),$("body").append('<div id="advBgCanvasOverlay" style="cursor: pointer;width:100%;height: 100%;position:fixed;top:0;border:0;overflow:hidden;z-index: 2;"></div>'),$pageWrapper=$('<div id="pageWrapper/>'),$pageWrapper.append($("body > .wrapper, body > .page-wrapper")),$("#"+this.position.top.id).hide(),$("body > .wrapper, body > .page-wrapper, footer > .wrapper").prepend('<div class="advContentOverlay" style="position:absolute;width:100%;height:100%;z-index:1000000000000;display:none;cursor:pointer;"/>'),$("body > .wrapper, body > .page-wrapper").prepend('<div class="advBgCanvasIcon" style="display:none;margin-left:-65px;width:32px;height:32px;background:url(//adtima-static.zadn.vn/resource/img/ac/canvas_bg.png) no-repeat;"><div class="bounce" style="width:32px;height:32px;background:url(//adtima-static.zadn.vn/resource/img/ac/canvas_arrow.png) no-repeat;"></div></div><style></style>');var c=0,d=function(){if($("body").css({"overflow-x":null}),c>0){c=0,$(".advContentOverlay, .advBgCanvasIcon").hide(),$("#advBgCanvasOverlay").show(),$("body > .wrapper, body > .page-wrapper, footer > .wrapper").css({transform:"",transition:"-webkit-transform 800ms,-moz-transform 800ms,-ms-transform 800ms,-o-transform 800ms,transform 800ms"}).removeClass("advBgCanvasShadow");var b=document.getElementById("adtimaIFrameWrapper_"+a.zid);try{b.contentWindow.stopEffect()}catch(a){}}};$("#advBgCanvasOverlay").on("click",function(){$("body").css({"overflow-x":"hidden"});var b=document.getElementById("adtimaIFrameWrapper_"+a.zid);try{b.contentWindow.loadEffect()}catch(a){}c=$(window).width()-($(window).width()/2-500)-200,$("body > .wrapper, body > .page-wrapper, footer > .wrapper").css({transform:"translateX("+c+"px)",transition:"-webkit-transform 800ms,-moz-transform 800ms,-ms-transform 800ms,-o-transform 800ms,transform 800ms"}).addClass("advBgCanvasShadow"),$(".advContentOverlay").show(),$("#advBgCanvasOverlay").hide(),setTimeout(function(){$(".advBgCanvasIcon").css({position:"fixed",top:$(window).scrollTop()+$(window).height()/2+"px"}).show()},600)}),$(".advContentOverlay").on("click",d),$(".advContentOverlay").hover(function(){c=$(window).width()-($(window).width()/2-500)-200-200,$("body > .wrapper, body > .page-wrapper, footer > .wrapper").css({transform:"translateX("+c+"px)",transition:"-webkit-transform 800ms,-moz-transform 800ms,-ms-transform 800ms,-o-transform 800ms,transform 800ms"})},function(){c>0&&(c=$(window).width()-($(window).width()/2-500)-200,$("body > .wrapper, body > .page-wrapper, footer > .wrapper").css({transform:"translateX("+c+"px)",transition:"-webkit-transform 800ms,-moz-transform 800ms,-ms-transform 800ms,-o-transform 800ms,transform 800ms"}))}),$(window).scroll(d)},init:function(){if(!window.disableAdtimaBanner){this.getParameterByName("zone")&&this.position[this.getParameterByName("zone")]&&this.position[this.getParameterByName("zone")].demoId&&(window.adtimaData={zones:this.position[this.getParameterByName("zone")].demoId+"|"+this.getParameterByName("bid")});var a=this.getPageType();window.adtimaConfig=window.adtimaConfig||{};try{if($("body").append('<div id="'+this.position.bgL.id+'"></div>'),$("body").append('<div id="'+this.position.bgR.id+'"></div>'),$("body").append('<div id="'+this.position.canvas.id+'"></div>'),$("body").append('<div id="'+this.position.fullBg.id+'"></div>'),"article"==a){var b=$("#articleRating").parent();b.length||(b=$(".the-article-tags")),b.length&&b.after('<div id="'+this.position.articleBottom.id+'"></div>')}var c=["thoi-su","phap-luat","the-gioi","kinh-doanh-tai-chinh"];if(a.indexOf("article")>-1&&-1==c.indexOf(window.cate_path)){$("article table.picture .pic").each(function(){var a=$(this).find("> img");if(a&&a.width()>400&&a.height()>300&&!AdtimaZingNews.config.articleImageSelector){AdtimaZingNews.config.articleImageSelector=$(this),AdtimaZingNews.config.articleImageWidth=a.width();var b=$("#"+AdtimaZingNews.position.articleImage.id);b.length||(b=$('<div id="'+AdtimaZingNews.position.articleImage.id+'" />').css({height:1,width:1,position:"absolute",zIndex:-1,left:-1e3,bottom:-1e3}),$("body").append(b))}})}}catch(a){}this.addAdtimaDiv(this.position.top,this.getZoneId(this.position.top)),this.addAdtimaDiv(this.position.r3,this.getZoneId(this.position.r3)),this.addAdtimaDiv(this.position.r4,this.getZoneId(this.position.r4)),this.addAdtimaDiv(this.position.prBox1,this.getZoneId(this.position.prBox1)),this.addAdtimaDiv(this.position.prBox2,this.getZoneId(this.position.prBox2)),this.addAdtimaDiv(this.position.halfPage,this.getZoneId(this.position.halfPage)),this.addAdtimaDiv(this.position.bgL,this.getZoneId(this.position.bgL)),this.addAdtimaDiv(this.position.bgR,this.getZoneId(this.position.bgR)),this.addAdtimaDiv(this.position.articleBottom,this.getZoneId(this.position.articleBottom)),this.addAdtimaDiv(this.position.mastheadInline,this.getZoneId(this.position.mastheadInline)),this.addAdtimaDiv(this.position.mastheadInline2,this.getZoneId(this.position.mastheadInline2)),this.addAdtimaDiv(this.position.articleMiddle,this.getZoneId(this.position.articleMiddle)),this.addAdtimaDiv(this.position.articleImage,this.getZoneId(this.position.articleImage)),this.addAdtimaDiv(this.position.articleInread,this.getZoneId(this.position.articleInread)),this.addAdtimaDiv(this.position.middleNoSidebar,this.getZoneId(this.position.middleNoSidebar)),this.addAdtimaDiv(this.position.middleNoSidebar2,this.getZoneId(this.position.middleNoSidebar2)),this.addAdtimaDiv(this.position.middleNoSidebar3,this.getZoneId(this.position.middleNoSidebar3)),this.addAdtimaDiv(this.position.middleNoSidebar4,this.getZoneId(this.position.middleNoSidebar4)),window.innerWidth>1024&&(this.addAdtimaDiv(this.position.fullBg,this.getZoneId(this.position.fullBg)),this.addAdtimaDiv(this.position.canvas,this.getZoneId(this.position.canvas)),window.adtimaConfig.idleZoneId="video"!=a&&"367744749747520477");var d=window.adtimaConfig.vsParams?[window.adtimaConfig.vsParams]:[],e={};d.push("znpostid=disable");var f=window.location.href.toLowerCase();if(pos2=f.indexOf(".html"),["topic","category"].indexOf(a)>-1&&d.push("znurl="+f.substr(0,pos2+5)),a.indexOf("article")>-1){var g=document.querySelector("article[article-id]");if(g){var h=g.getAttribute("article-id");e.articleId=h,d.push("postid="+h)}var i=document.querySelector('meta[property="article:published_time"]'),j=function(a,b){return Math.round(Math.abs((a.getTime()-b.getTime())/864e5))};if(i){j(new Date(i.getAttribute("content")),new Date)>730&&d.push("oldpost=1")}}window.cate_path&&(d.push("cate="+window.cate_path),e.cate_path=window.cate_path),window.zaConfig&&(window.zaConfig.pageid&&d.push("pageid="+window.zaConfig.pageid),window.zaConfig.topicid&&d.push("topicid="+window.zaConfig.topicid)),window.adtimaConfig.ifrData=e,window.adtimaConfig.vsParams=d.join(";"),window.adtimaConfig.rtbSiteID="11","disabled"==this.getParameterByName("active_view")&&(window.adtimaConfig.disableActiveViewTracking=!0),this.setPrebidZones(),this.addCriteoScript(document,"script","criteo-cdb"),this.addBaseScript(document,"script","z2-jssdk")}}},AdtimaCanvasBanner={hideCanvasOverlay:function(){$("#advBgCanvasOverlay").css({top:"-10000px"})},startEffect:function(){var a=$("#advBgCanvasOverlay");a.length>0&&a.trigger("click")}};AdtimaZingNews.Helpers={nextArticle:function(a,b){$('.z2-zads-zone, [id*="adtima-zone-"]').each(function(b){var c=$(this),d=c.attr("z2-zoneid");d!=AdtimaZingNews.getZoneId(AdtimaZingNews.position.mastheadInline)&&(c.removeAttr("z2-zoneid"),c.removeAttr("id"),d!=AdtimaZingNews.getZoneId(AdtimaZingNews.position.r3)&&d!=AdtimaZingNews.getZoneId(AdtimaZingNews.position.halfPage)||(c.parent().attr("id",c.parent().attr("id")+"-"+a),c.children().each(function(){$(this).removeAttr("id")})))}),window.adtimaConfig=window.adtimaConfig||{},window.adtimaConfig.vsParams="brand=disable;postid="+a+";cate="+b;var c=[];[AdtimaZingNews.position.r3,AdtimaZingNews.position.halfPage].forEach(function(a){AdtimaZingNews.getZoneId(a)&&(AdtimaZingNews.addAdtimaDiv(a,AdtimaZingNews.getZoneId(a)),c.push(AdtimaZingNews.getZoneId(a)))});var d=window.AdtimaRender.Prepare;d.createWrappers(c,d.finishPrepare)},reloadBanner:function(a){if(null!=window.zaConfig&&null!=window.zaConfig.pageid&&null!=a){window.adtimaBannerQueue=window.adtimaBannerQueue||[];try{switch(a.id){case AdtimaZingNews.position.r4.id:case AdtimaZingNews.position.mastheadInline.id:if(window.adtimaBannerReloading)return void window.adtimaBannerQueue.push(a);window.adtimaBannerReloading=!0;var b=AdtimaZingNews.getZoneId(a),c=$("#adtima-zone-"+b);b&&(c.length&&(AdtimaZingNews.position.r4.id==a.id?$("#"+a.id).empty():(c.removeAttr("z2-zoneid"),c.removeAttr("id"),c.children().each(function(){$(this).removeAttr("id")}))),window.AdtimaRender?window.AdtimaRender.Proceed.renderBanner(a.id,b,""):(window.adtimazones=window.adtimazones||[],window.adtimazones.push({elementId:a.id,zoneId:b,type:""})))}}catch(a){}}},showBanner:function(a){document.getElementById(a.id).style.display=""},hideBanner:function(a){document.getElementById(a.id).style.display="none"},hideSidebar:function(){try{"article"==AdtimaZingNews.getPageType()?setTimeout(function(){try{DEVICE.screen="standard"}catch(a){}$("#cssVerticalPushNotification").remove(),$("#pushnotification").css({bottom:"0",display:"block"}),$("#toolbox").remove(),$(".btnToTop").remove();var a=window.location.href.split("#")[0],b='<div class="fb-like" data-href="'+a+'" data-width="120" locale="en_US" data-layout="button_count" data-show-faces="false" data-share="false"></div>',c=$("#pushnotification .btnSocial");c.length>0&&(c.html(b),FB.XFBML.parse(c[0]))},10):($("#toolbox").remove(),$(".btnToTop").remove())}catch(a){}},addAdtimaQueryString:function(a,b){if(window.adtimaQueryString){var c=window.adtimaQueryString;if(c.indexOf(a+"=")>-1){for(var d="",e=c.split("&"),f=0;f<e.length;f++)e[f].indexOf(a+"=")<0&&(d+="&"+e[f]);window.adtimaQueryString=a+"="+encodeURIComponent(b)+d}else window.adtimaQueryString+="&"+a+"="+encodeURIComponent(b)}else window.adtimaQueryString=a+"="+encodeURIComponent(b)}};var AdtimaRenderConfig={ScrollBanner:{top:45,fixedBottom:1,pageWidth:1e3},BackgroundBanner:{pageWidth:1e3},CanvasBanner:{hideCanvasOverlay:function(){$("#advBgCanvasOverlay").length>0?$("#advBgCanvasOverlay").css({top:"-10000px"}):setTimeout(function(){AdtimaRenderConfig.CanvasBanner.hideCanvasOverlay()},100)},startEffect:function(){var a=$("#advBgCanvasOverlay");a.length>0&&a.trigger("click")}}};fnDefer(),window.adtimaCallBack={startShow:function(a){switch(a.zid){case AdtimaZingNews.getZoneId(AdtimaZingNews.position.halfPage):$(".contact").hide(),["networkzalopostbanner","networkzalopagebanner"].indexOf(a.kind.toLowerCase())>=0&&(a.extend.adtemplate="38");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.top):if(["networkzalopostbanner","networkzalopagebanner"].indexOf(a.kind.toLowerCase())>=0)a.extend.adtemplate="39";else if(a.banners[0].height>=280){$("#adtima-zone-"+a.zid).attr("z2-responsive","true"),$("body").addClass("super-masthead");var b="#"+AdtimaZingNews.position.top.id+"{width: 100% !important; height: 100% !important;}";b+="body.super-masthead>#site-header {padding-top: 0 !important; padding-bottom: 30px !important;}",AdtimaRender.Helpers.includeStyle(document,"adtimaSuperMasthead",b)}break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleMiddle):$(".content-wrap").css({"z-index":1});break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleBottom):var c=$("#adtima-zone-"+a.zid).parent();"none"==c.css("display")&&c.css("display","block"),"networkmedia"==a.kind.toLowerCase()&&$("#adtima-zone-"+a.zid).attr("z2-autoheight","true");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.bgL):$("#multi").length&&$("head").append($("<style />").html("#advBgLeft, #advBgRight {z-index: 0 !important;}")),a.banners[0].width>1&&$("body").addClass("adtima-bglr");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.middleNoSidebar):$("#"+AdtimaZingNews.position.middleNoSidebar.id).show(),["networkzalopostbanner","networkzalopagebanner"].indexOf(a.kind.toLowerCase())>=0&&(a.extend.adtemplate="39");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.r3):case AdtimaZingNews.getZoneId(AdtimaZingNews.position.r4):["networkzalopostbanner","networkzalopagebanner"].indexOf(a.kind.toLowerCase())>=0&&(a.extend.adtemplate="38");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.mastheadInline):case AdtimaZingNews.getZoneId(AdtimaZingNews.position.mastheadInline2):var d=document.getElementById("adtima-zone-"+a.zid);"home"==AdtimaZingNews.getPageType()&&d.removeAttribute("z2-close");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleImage):var e=$("#adtima-zone-"+a.zid),f=e.parent(),g=AdtimaZingNews.config.articleImageSelector.find("img").width(),h=g*(a.banners[0].height/a.banners[0].width);a.kind.toLowerCase().indexOf("html")<0&&AdtimaZingNews.config.articleImageSelector&&(e.attr({"z2-logo-position":"bottom","z2-responsive":"true","z2-scale-origin":"left top"}),"networkExpandable"==a.kind&&(a.banners[0].width=g,a.banners[0].height=h),f.css({display:"none",width:"100%",height:h,position:"absolute",left:0,bottom:0,zIndex:1}).appendTo(AdtimaZingNews.config.articleImageSelector));break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleInread):var e=$("#adtima-zone-"+a.zid);e.parent().show()}},endShow:function(a){var b=AdtimaZingNews.getPageType();switch(a.zid){case AdtimaZingNews.getZoneId(AdtimaZingNews.position.canvas):AdtimaZingNews.applyCanvasEffect(a),$("#advBgLeft, #advBgRight").hide();break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.fullBg):AdtimaZingNews.applyFullBgEffect(a);break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.mastheadInline):if($("#"+AdtimaZingNews.position.mastheadInline.id).removeAttr("id"),window.adtimaBannerReloading=!1,b.indexOf("article")>-1&&window.adtimaBannerQueue&&window.adtimaBannerQueue.length){var c=window.adtimaBannerQueue.shift();AdtimaZingNews.Helpers.reloadBanner(c)}break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.bgL):if(AdtimaZingNews.pageWidth()>=1100){var d=$("#adtima-zone-"+a.zid),e=parseInt(d.css("marginLeft").replace("px",""));d.css({width:d.width()+50,"margin-left":e<0?e-100:e+100})}break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.bgR):if(AdtimaZingNews.pageWidth()>=1100){var d=$("#adtima-zone-"+a.zid),e=parseInt(d.css("marginLeft").replace("px",""));d.css({width:d.width()+50,"margin-left":e+50+"px"})}break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.middleNoSidebar):["networkzalopostbanner","networkzalopagebanner"].indexOf(a.kind.toLowerCase())>=0&&$("#adtima-logo-"+a.zid).css("top","25px");break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.r4):window.adtimaBannerReloading=!1;break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleImage):var f=$("#adtima-zone-"+a.zid),g=f.parent(),h=AdtimaZingNews.config.articleImageSelector.find("img"),i=a.banners[0];a.kind.toLowerCase().indexOf("html")<0&&(g.show(),$("#adtimaLogoStyle").append("table.picture .z2-zads-zone .adtimalogo img {width: 17px !important;} table.picture .z2-zads-zone .adtimalogo br {display: block !important;}"),"networkExpandable"==a.kind?(AdtimaZingNews.config.articleImageWidth=h.width(),$(window).resize(function(){AdtimaZingNews.config.articleImageSelector.find("img").width()!=AdtimaZingNews.config.articleImageWidth?f.parent().hide():f.parent().show()}),$("head").append("<style>#adtimaPopupBackground{background: #000 !important; opacity: .4}</style>")):($("head").append("<style>#"+AdtimaZingNews.position.articleImage.id+" iframe {object-fit: unset !important; -o-object-fit: unset !important;}</style>"),$(window).resize(function(){var b=AdtimaZingNews.config.articleImageSelector.find("img");if(b.width()!=AdtimaZingNews.config.articleImageWidth)if(b.width()>i.width)f.parent().hide();else{f.parent().show(),AdtimaZingNews.config.articleImageWidth=b.width(),window.AdtimaRender.Helpers.Banner.scaleBanner({width:i.width,height:i.height},f.find(".z2-zad-iframe")[0],f[0]);var c=b.width()*(a.banners[0].height/a.banners[0].width);f.parent().css("height",c)}})));break;case AdtimaZingNews.getZoneId(AdtimaZingNews.position.prBox1):case AdtimaZingNews.getZoneId(AdtimaZingNews.position.prBox2):window.Waypoint&&"function"==typeof Waypoint.refreshAll&&Waypoint.refreshAll()}},wrapperLoaded:function(a){switch(a.zid){case AdtimaZingNews.getZoneId(AdtimaZingNews.position.top):if(a.banners[0].width>=1e3){$("#adtima-zone-"+a.zid).find(".z2-zad-iframe").css("height",a.banners[0].height+"px")}}},startPushDown:function(a,b){try{a.zoneId==AdtimaZingNews.getZoneId(AdtimaZingNews.position.top)&&($("#site-header")[0].style.height="auto",$("#banner_top")[0].style.height="auto")}catch(a){}},stopPushDown:function(a,b){try{a.zoneId==AdtimaZingNews.getZoneId(AdtimaZingNews.position.top)&&$("#site-header").height(100)}catch(a){}},close:function(a){switch(a){case AdtimaZingNews.getZoneId(AdtimaZingNews.position.articleImage):$("#"+AdtimaZingNews.position.articleImage.id).hide()}}};var fnGetArticleInfo=function(){if("article"==AdtimaZingNews.getPageType()){var a=document.URL,b=$("#content header h1").html().trim(),c=$("#content header .summary p").html().trim(),d="[zad]";return a+d+b+d+c}return""};