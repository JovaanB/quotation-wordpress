
var wpAjaxUrl='https://www.sc1aeya0291.universe.wf/wp-admin/admin-ajax.php';var flBuilderUrl='https://www.sc1aeya0291.universe.wf/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://www.sc1aeya0291.universe.wf/wp-content/plugins/bb-plugin/',wpAjaxUrl:'https://www.sc1aeya0291.universe.wf/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:992},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},reloadGoogleMap:function(element){var $element='undefined'==typeof element?$('body'):$(element),googleMap=$element.find('iframe[src*="google.com/maps"]');if(googleMap.length){googleMap.attr('src',function(i,val){return val;});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if($(window).width()<FLBuilderLayoutConfig.breakpoints.small){body.addClass('fl-builder-breakpoint-small');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.small&&$(window).width()<FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-medium');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-large');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),videoMobile=wrap.data('video-mobile'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if(!FLBuilderLayout._isMobile()||(FLBuilderLayout._isMobile()&&"yes"==videoMobile)){if('undefined'!=typeof youtube){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}}
else{videoTag.attr('src','')
wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('start')?playerWrap.data('start'):0,endTime='undefined'!==typeof playerWrap.data('end')?playerWrap.data('end'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,stateCount=0,player,fallback_showing;if(videoId){fallback=playerWrap.data('fallback')||false
if(fallback){playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');fallbackTag.css('background-size','cover');fallbackTag.css('transition','background-image 1s')
playerWrap.append(fallbackTag);fallback_showing=true;}
FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio||FLBuilderLayout._isMobile()){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0&&!FLBuilderLayout._isMobile()){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(event.data===1){if(fallback_showing){$('.fl-bg-video-fallback').css('background-image','url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)')}}
if(stateCount<4){stateCount++;}
if(stateCount>1&&(-1===event.data||2===event.data)&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:startTime,end:endTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth(),ua=navigator.userAgent;if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if(ua.indexOf("Safari")>-1||ua.indexOf("Chrome")>-1){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay')),duration=parseFloat(module.data('animation-duration'));if(!isNaN(duration)){module.css('animation-duration',duration+'s');}
if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}else{setTimeout(function(){module.addClass('fl-animated');},1);}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){if(link.hasClass('fl-scroll-link')||element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module')){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);jQuery(function($){$(function(){$('.fl-node-63690e37428cc .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){PPAdvancedMenu=function(settings){this.settingsId=settings.id;this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .pp-advanced-menu';this.type=settings.type;this.mobileToggle=settings.mobile;this.mobileBelowRow='below'===settings.menuPosition;this.breakPoints=settings.breakPoints;this.mobileBreakpoint=settings.mobileBreakpoint;this.mediaBreakpoint=settings.mediaBreakpoint;this.mobileMenuType=settings.mobileMenuType;this.offCanvasDirection=settings.offCanvasDirection;this.isBuilderActive=settings.isBuilderActive;this.currentBrowserWidth=window.innerWidth;this.fullScreenMenu=null;this.offCanvasMenu=null;this.$submenus=null;$(document).ready($.proxy(this._initMenu,this));$(window).on('resize',$.proxy(function(e){var width=window.innerWidth;if(width!=this.currentBrowserWidth){this._initMenu();this._clickOrHover();this.currentBrowserWidth=width;}},this));};PPAdvancedMenu.prototype={nodeClass:'',wrapperClass:'',type:'',breakPoints:{},$submenus:null,fullScreenMenu:null,offCanvasMenu:null,_isMobile:function(){return window.innerWidth<=this.breakPoints.small?true:false;},_isMedium:function(){return window.innerWidth<=this.breakPoints.medium?true:false;},_isCustom:function(){return window.innerWidth<=this.breakPoints.custom?true:false;},_isTouch:function(){var prefixes=' -webkit- -moz- -o- -ms- '.split(' ');var mq=function(query){return window.matchMedia(query).matches;}
if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){return true;}
var query=['(',prefixes.join('touch-enabled),('),'heartz',')'].join('');return mq(query);},_isMenuToggle:function(){if('always'==this.mobileBreakpoint||(this._isMobile()&&'mobile'==this.mobileBreakpoint)||(this._isMedium()&&'medium-mobile'==this.mobileBreakpoint)||(this._isCustom()&&'custom'==this.mobileBreakpoint)){return true;}
return false;},_bindSettingsFormEvents:function()
{},_initMenu:function(){this._menuOnFocus();this._submenuOnClick();if($(this.nodeClass).length&&this.type=='horizontal'){this._initMegaMenus();}
if(this.type=='horizontal'||this.type=='vertical'){var self=this;$(this.wrapperClass).find('.pp-has-submenu-container').on('click',function(e){if(self.mobileMenuType!=='off-canvas'&&self.mobileMenuType!=='full-screen'){if(self._isTouch()){if(!$(this).hasClass('first-click')){e.preventDefault();$(this).addClass('first-click');}}}});}
if(this._isMenuToggle()||this.type=='accordion'){$(this.wrapperClass).off('mouseenter mouseleave');this._menuOnClick();this._clickOrHover();}else{$(this.wrapperClass).off('click');this._submenuOnRight();this._submenuRowZindexFix();}
if(this.mobileToggle!='expanded'){this._toggleForMobile();if(this.mobileMenuType==='off-canvas'){this._initOffCanvas();}
if(this.mobileMenuType==='full-screen'){this._initFullScreen();}}
$(this.wrapperClass).find('li:not(.menu-item-has-children)').on('click','a',$.proxy(function(e){$(this.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(this.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');},this));},_menuOnFocus:function(){$(this.nodeClass).off('focus').on('focus','a',$.proxy(function(e){var $menuItem=$(e.target).parents('.menu-item').first(),$parents=$(e.target).parentsUntil(this.wrapperClass);$('.pp-advanced-menu .focus').removeClass('focus');$menuItem.addClass('focus');$parents.addClass('focus');},this)).on('focusout','a',$.proxy(function(e){if($('.pp-advanced-menu .focus').hasClass('pp-has-submenu')){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus').find('.pp-has-submenu-container').removeClass('first-click');}},this));},_menuOnClick:function(){var self=this;var $mainItem='';$(this.wrapperClass).off().on('click.pp-advanced-menu','.pp-has-submenu-container',$.proxy(function(e){if(self._isTouch()){if(!$(this).hasClass('first-click')){e.preventDefault();$(this).addClass('first-click');}}
var isMainEl=$(e.target).parents('.menu-item').parent().parent().hasClass('pp-advanced-menu');if(isMainEl&&$mainItem===''){$mainItem=$(e.target).parents('.menu-item');}
var $link=$(e.target).parents('.pp-has-submenu').first(),$subMenu=$link.children('.sub-menu').first(),$href=$link.children('.pp-has-submenu-container').first().find('> a').attr('href'),$subMenuParents=$(e.target).parents('.sub-menu'),$activeParent=$(e.target).closest('.pp-has-submenu.pp-active');if(!$subMenu.is(':visible')||$(e.target).hasClass('pp-menu-toggle')||($subMenu.is(':visible')&&(typeof $href==='undefined'||$href=='#'))){e.preventDefault();if($(e.target).hasClass('pp-menu-toggle')){e.stopPropagation();}}
else{e.stopPropagation();window.location.href=$href;return;}
if($(this.wrapperClass).hasClass('pp-advanced-menu-accordion-collapse')){if(!$link.parents('.menu-item').hasClass('pp-active')){$('.menu .pp-active',this.wrapperClass).not($link).removeClass('pp-active');}
else if($link.parents('.menu-item').hasClass('pp-active')&&$link.parent('.sub-menu').length){$('.menu .pp-active',this.wrapperClass).not($link).not($activeParent).removeClass('pp-active');}
$('.sub-menu',this.wrapperClass).not($subMenu).not($subMenuParents).slideUp('normal');}
if($(self.wrapperClass).find('.sub-menu:visible').length>0){$(self.wrapperClass).find('.sub-menu:visible').parent().addClass('pp-active');}
$subMenu.slideToggle(400,function(){$(e.target).parents('.pp-has-submenu-container').parent().parent().find('> .menu-item.pp-active').removeClass('pp-active');if($mainItem!==''){$mainItem.parent().find('.menu-item.pp-active').removeClass('pp-active');$(self.wrapperClass).find('.sub-menu').parent().removeClass('pp-active');if($(self.wrapperClass).find('.sub-menu:visible').length>0){$(self.wrapperClass).find('.sub-menu:visible').parent().addClass('pp-active');}else{$link.toggleClass('pp-active');$mainItem.removeClass('pp-active');}}else{$link.toggleClass('pp-active');}
if(!$subMenu.is(':visible')){$subMenu.parent().removeClass('pp-active');}});},this));},_submenuOnClick:function(){$(this.wrapperClass+' .sub-menu').off().on('click','a',$.proxy(function(e){if($(e.target).parent().hasClass('focus')){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus');}},this));},_clickOrHover:function(){this.$submenus=this.$submenus||$(this.wrapperClass).find('.sub-menu');var $wrapper=$(this.wrapperClass),$menu=$wrapper.find('.menu');$li=$wrapper.find('.pp-has-submenu');if(this._isMenuToggle()){$li.each(function(el){if(!$(this).hasClass('pp-active')){$(this).find('.sub-menu').fadeOut();}});}else{$li.each(function(el){if(!$(this).hasClass('pp-active')){$(this).find('.sub-menu').css({'display':'','opacity':''});}});}},_submenuOnRight:function(){$(this.wrapperClass).on('mouseenter','.pp-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
var $link=$(e.currentTarget),$parent=$link.parent(),$subMenu=$link.find('.sub-menu'),subMenuWidth=$subMenu.width(),subMenuPos=0,winWidth=window.innerWidth;if($link.closest('.pp-menu-submenu-right').length!==0){$link.addClass('pp-menu-submenu-right');}else if($('body').hasClass('rtl')){subMenuPos=$parent.is('.sub-menu')?$parent.offset().left-subMenuWidth:$link.offset().left-subMenuWidth;if(subMenuPos<=0){$link.addClass('pp-menu-submenu-right');}}else{subMenuPos=$parent.is('.sub-menu')?$parent.offset().left+$parent.width()+subMenuWidth:$link.offset().left+subMenuWidth;if(subMenuPos>winWidth){$link.addClass('pp-menu-submenu-right');}}},this)).on('mouseleave','.pp-has-submenu',$.proxy(function(e){$(e.currentTarget).removeClass('pp-menu-submenu-right');},this));},_submenuRowZindexFix:function(e){$(this.wrapperClass).on('mouseenter','ul.menu > .pp-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','10');},this)).on('mouseleave','ul.menu > .pp-has-submenu',$.proxy(function(e){$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','');},this));},_toggleForMobile:function(){var $wrapper=null,$menu=null;if(this._isMenuToggle()){if(this._isMobileBelowRowEnabled()){this._placeMobileMenuBelowRow();$wrapper=$(this.wrapperClass);$menu=$(this.nodeClass+'-clone');$menu.find('ul.menu').show();}else{$wrapper=$(this.wrapperClass);$menu=$wrapper.children('.menu');}
if(!$wrapper.find('.pp-advanced-menu-mobile-toggle').hasClass('pp-active')){$menu.css({display:'none'});}
$wrapper.on('click','.pp-advanced-menu-mobile-toggle',function(e){$(this).toggleClass('pp-active');$menu.slideToggle();});$menu.on('click','.menu-item > a[href*="#"]',function(e){var $href=$(this).attr('href'),$targetID='';if($href!=='#'){$targetID=$href.split('#')[1];if($('body').find('#'+$targetID).length>0){e.preventDefault();$(this).toggleClass('pp-active');$menu.slideToggle('fast',function(){setTimeout(function(){$('html, body').animate({scrollTop:$('#'+$targetID).offset().top},1000,function(){window.location.hash=$targetID;});},500);});}}});}
else{if(this._isMobileBelowRowEnabled()){this._removeMenuFromBelowRow();}
$wrapper=$(this.wrapperClass),$menu=$wrapper.children('.menu');$wrapper.find('.pp-advanced-menu-mobile-toggle').removeClass('pp-active');$menu.css({display:''});}},_initMegaMenus:function(){var module=$(this.nodeClass),rowContent=module.closest('.fl-row-content'),rowWidth=rowContent.width(),rowOffset=rowContent.offset().left,megas=module.find('.mega-menu'),disabled=module.find('.mega-menu-disabled'),isToggle=this._isMenuToggle();if(isToggle){megas.removeClass('mega-menu').addClass('mega-menu-disabled');module.find('li.mega-menu-disabled > ul.sub-menu').css('width','');rowContent.css('position','');}else{disabled.removeClass('mega-menu-disabled').addClass('mega-menu');module.find('li.mega-menu > ul.sub-menu').css('width',rowWidth+'px');rowContent.css('position','relative');}},_initOffCanvas:function(){$('html').addClass('pp-off-canvas-menu-module');$('html').addClass('pp-off-canvas-menu-'+this.offCanvasDirection);if(this.isBuilderActive){this._toggleMenu();return;}
if('always'===this.mediaBreakpoint||this.mediaBreakpoint>=this.currentBrowserWidth){if(null===this.offCanvasMenu&&$(this.nodeClass).find('.pp-advanced-menu.off-canvas').length>0){this.offCanvasMenu=$(this.nodeClass).find('.pp-advanced-menu.off-canvas');}
if($('#pp-advanced-menu-off-canvas-'+this.settingsId).length===0&&null!==this.offCanvasMenu){this.offCanvasMenu.appendTo('body').wrap('<div id="pp-advanced-menu-off-canvas-'+this.settingsId+'" class="fl-node-'+this.settingsId+'">');}}
this._toggleMenu();},_initFullScreen:function(){$('html').addClass('pp-full-screen-menu-module');if(this.isBuilderActive){this._toggleMenu();return;}
if('always'===this.mediaBreakpoint||this.mediaBreakpoint>=this.currentBrowserWidth){if(null===this.offCanvasMenu&&$(this.nodeClass).find('.pp-advanced-menu.full-screen').length>0){this.fullScreenMenu=$(this.nodeClass).find('.pp-advanced-menu.full-screen');if($('#pp-advanced-menu-full-screen-'+this.settingsId).length===0){this.fullScreenMenu.appendTo('body').wrap('<div id="pp-advanced-menu-full-screen-'+this.settingsId+'" class="fl-node-'+this.settingsId+'">');}}}
this._toggleMenu();},_toggleMenu:function(){var self=this;var singleInstance=true;if(self.mobileMenuType==='full-screen'){var winHeight=$(window).height();$(self.nodeClass).find('.pp-menu-overlay').css('height',winHeight+'px');$(window).resize(function(){winHeight=$(window).height();$(self.nodeClass).find('.pp-menu-overlay').css('height',winHeight+'px');});}
$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').off('click').on('click',function(){if(singleInstance){if($('.pp-advanced-menu.menu-open').length>0){$('.pp-advanced-menu').removeClass('menu-open');$('html').removeClass('pp-full-screen-menu-open');}}
if($(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$(self.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');}else{$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-open');if(self.mobileMenuType==='off-canvas'){$('html').addClass('pp-off-canvas-menu-open');}
if(self.mobileMenuType==='full-screen'){$('html').addClass('pp-full-screen-menu-open');}}});$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle .pp-hamburger').on('keyup',function(e){if(13===e.keyCode||13===e.which){$(this).trigger('click');}});$(self.nodeClass).find('.pp-advanced-menu .pp-menu-close-btn, .pp-clear').on('click',function(){$(self.nodeClass).find('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu').addClass('menu-close');$('html').removeClass('pp-off-canvas-menu-open');$('html').removeClass('pp-full-screen-menu-open');});if(this.isBuilderActive){setTimeout(function(){if($('.fl-builder-settings[data-node="'+self.settingsId+'"]').length>0){$('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').trigger('click');}},600);FLBuilder.addHook('settings-form-init',function(){if(!$('.fl-builder-settings[data-node="'+self.settingsId+'"]').length>0){return;}
if(!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('.pp-advanced-menu').removeClass('menu-open');$(self.nodeClass).find('.pp-advanced-menu-mobile-toggle').trigger('click');}});if($('html').hasClass('pp-full-screen-menu-open')&&!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('html').removeClass('pp-full-screen-menu-open');}
if($('html').hasClass('pp-off-canvas-menu-open')&&!$(self.nodeClass).find('.pp-advanced-menu').hasClass('menu-open')){$('html').removeClass('pp-off-canvas-menu-open');}}},_isMobileBelowRowEnabled:function(){if(this.mobileMenuType==='default'){return this.mobileBelowRow&&$(this.nodeClass).closest('.fl-col').length;}
return false;},_placeMobileMenuBelowRow:function(){if($(this.nodeClass+'-clone').length){return;}
if($('html').hasClass('fl-builder-is-showing-toolbar')){return;}
var module=$(this.nodeClass),clone=module.clone(),col=module.closest('.fl-col');module.find('ul.menu').remove();clone.addClass((this.nodeClass+'-clone').replace('.',''));clone.find('.pp-advanced-menu-mobile-toggle').remove();col.after(clone);if(module.hasClass('fl-animation')){clone.removeClass('fl-animation');}
this._menuOnClick();},_removeMenuFromBelowRow:function(){if(!$(this.nodeClass+'-clone').length){return;}
var module=$(this.nodeClass),clone=$(this.nodeClass+'-clone'),menu=clone.find('ul.menu');module.find('.pp-advanced-menu-mobile-toggle').after(menu);clone.remove();}};})(jQuery);var pp_menu_63690f1c6c736;(function($){pp_menu_63690f1c6c736=new PPAdvancedMenu({id:'63690f1c6c736',type:'horizontal',mobile:'hamburger-label',menuPosition:'below',breakPoints:{medium:992,small:768,custom:768},mobileBreakpoint:'mobile',mediaBreakpoint:'768',mobileMenuType:'default',offCanvasDirection:'left',fullScreenAnimation:'',isBuilderActive:false});})(jQuery);(function($){FLThemeBuilderHeaderLayout={win:null,body:null,header:null,overlay:false,hasAdminBar:false,breakpointWidth:0,init:function()
{var editing=$('html.fl-builder-edit').length,header=$('.fl-builder-content[data-type=header]'),breakpoint=null;if(!editing&&header.length){header.imagesLoaded($.proxy(function(){this.win=$(window);this.body=$('body');this.header=header.eq(0);this.overlay=!!Number(header.attr('data-overlay'));this.hasAdminBar=!!$('body.admin-bar').length;breakpoint=this.header.data('sticky-breakpoint');if(typeof FLBuilderLayoutConfig.breakpoints[breakpoint]!==undefined){this.breakpointWidth=FLBuilderLayoutConfig.breakpoints[breakpoint];}
else{this.breakpointWidth=FLBuilderLayoutConfig.breakpoints.medium;}
if(Number(header.attr('data-sticky'))){this.header.data('original-top',this.header.offset().top);this.win.on('resize',$.throttle(500,$.proxy(this._initSticky,this)));this._initSticky();if(Number(header.attr('data-shrink'))){this.header.data('original-height',this.header.outerHeight());this.win.on('resize',$.throttle(500,$.proxy(this._initShrink,this)));this._initShrink();}}},this));}},_initSticky:function()
{if(this.win.width()>=this.breakpointWidth){this.win.on('scroll.fl-theme-builder-header-sticky',$.proxy(this._doSticky,this));this._doSticky();}else{this.win.off('scroll.fl-theme-builder-header-sticky');this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}},_doSticky:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),hasStickyClass=this.header.hasClass('fl-theme-builder-header-sticky'),hasScrolledClass=this.header.hasClass('fl-theme-builder-header-scrolled');if(this.hasAdminBar){winTop+=32;}
if(winTop>=headerTop){if(!hasStickyClass){this.header.addClass('fl-theme-builder-header-sticky');if(!this.overlay){this.body.css('padding-top',this.header.outerHeight()+'px');}}}
else if(hasStickyClass){this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}
if(winTop>headerTop){if(!hasScrolledClass){this.header.addClass('fl-theme-builder-header-scrolled');}}else if(hasScrolledClass){this.header.removeClass('fl-theme-builder-header-scrolled');}},_initShrink:function()
{if(this.win.width()>=this.breakpointWidth){this.win.on('scroll.fl-theme-builder-header-shrink',$.proxy(this._doShrink,this));this._setImageMaxHeight();if(this.win.scrollTop()>0){this._doShrink();}}else{this.body.css('padding-top','0');this.win.off('scroll.fl-theme-builder-header-shrink');this._removeShrink();this._removeImageMaxHeight();}},_doShrink:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),headerHeight=this.header.data('original-height'),shrinkImageHeight=this.header.data('shrink-image-height'),hasClass=this.header.hasClass('fl-theme-builder-header-shrink');if(this.hasAdminBar){winTop+=32;}
if(winTop>headerTop+headerHeight){if(!hasClass){this.header.addClass('fl-theme-builder-header-shrink');this.header.find('img').css('max-height',shrinkImageHeight);this.header.find('.fl-row-content-wrap').each(function(){var row=$(this);if(parseInt(row.css('padding-bottom'))>5){row.addClass('fl-theme-builder-header-shrink-row-bottom');}
if(parseInt(row.css('padding-top'))>5){row.addClass('fl-theme-builder-header-shrink-row-top');}});this.header.find('.fl-module-content').each(function(){var module=$(this);if(parseInt(module.css('margin-bottom'))>5){module.addClass('fl-theme-builder-header-shrink-module-bottom');}
if(parseInt(module.css('margin-top'))>5){module.addClass('fl-theme-builder-header-shrink-module-top');}});}}else if(hasClass){this.header.find('img').css('max-height','');this._removeShrink();}},_removeShrink:function()
{var rows=this.header.find('.fl-row-content-wrap'),modules=this.header.find('.fl-module-content');rows.removeClass('fl-theme-builder-header-shrink-row-bottom');rows.removeClass('fl-theme-builder-header-shrink-row-top');modules.removeClass('fl-theme-builder-header-shrink-module-bottom');modules.removeClass('fl-theme-builder-header-shrink-module-top');this.header.removeClass('fl-theme-builder-header-shrink');},_setImageMaxHeight:function()
{var head=$('head'),stylesId='fl-header-styles-'+this.header.data('post-id'),styles='',images=this.header.find('.fl-module-content img');if($('#'+stylesId).length){return;}
images.each(function(i){var image=$(this),height=image.height(),node=image.closest('.fl-module').data('node'),className='fl-node-'+node+'-img-'+i;image.addClass(className);styles+='.'+className+' { max-height: '+height+'px }';});if(''!==styles){head.append('<style id="'+stylesId+'">'+styles+'</style>');}},_removeImageMaxHeight:function()
{$('#fl-header-styles-'+this.header.data('post-id')).remove();},};$(function(){FLThemeBuilderHeaderLayout.init();});})(jQuery);