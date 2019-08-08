var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd ();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function () {
	boilerplate.DynamicContentElements();
	
	var bgimage = document.getElementById("bgimage");//Load hero image
	bgimage.onload = function() {
		document.getElementById("banner").className = "show"; //show banner
		boilerplate.executeAnimation();
	};
}

boilerplate.DynamicContentElements = function () {

	Enabler.setProfileId(10472045);
    var devDynamicContent = {};

    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50 = [{}];
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0]._id = 0;
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].unique_id = 1;
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].reporting = "1_In  Advertising,  Marketing & PR";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].courses = "In  Advertising,  Marketing & PR";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].logo = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].logo.Type = "file";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20190710173521679_logo.png";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].bg_image = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].bg_image.Type = "file";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].bg_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20190710173643450_background_1_320x50.jpg";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].hero_image = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].hero_image.Type = "file";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].hero_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20190715175346474_heroimage_1_320x50.png";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].be_image = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].be_image.Type = "file";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].be_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20190710173541644_be.png";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].bg_color = "#8c84d6";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f1_text = "Be <br\/>Trained";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f1_text_styles = "17px\/20px\/#000000";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f2_text = "by Industry Experts";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f2_text_styles = "17px\/20px\/#000000";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f3_text = "In <br\/>Advertising, <br\/>Marketing & PR";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f3_text_styles = "17px\/20px\/#000000";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f4_text_img = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f4_text_img.Type = "file";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].f4_text_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20190710173548168_be_ambitious.png";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].rto_code = "RTO 90003 | CRICOS 00591E | HEP PRV12049";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].rto_code_styles = "7px\/9px\/#000000";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].cta_text = "Apply Now";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].cta_text_styles = "15px\/#313131";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].exitUrl = {};
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].exitUrl.Url = "https://www.tafensw.edu.au/international/course-search-results?k=&s=48&i=0&c=0&q=0";
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].isDefault = false;
    devDynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0].isActive = true;
    Enabler.setDevDynamicContent(devDynamicContent);
	
	var dyGlobal = dynamicContent.TAFEInternationalDynamicBannersPhase2_320x50[0];
	
	f1_text = document.getElementById('f1_text');
	f2_text = document.getElementById('f2_text');
	f3_text = document.getElementById('f3_text');
	f4_text = document.getElementById('f4_text');
	bgimage = document.getElementById('bgimage');
	logo = document.getElementById('logo');
	be_image = document.getElementById('betxt');
	heroimage = document.getElementById('heroimage');
	rto = document.getElementById('rto');
	banner = document.getElementById('banner');
	bg_Color = document.getElementById('bg_Color');
	cta = document.getElementById('cta');
	
	bg_Color.style.cssText = "background-color:" + dyGlobal.bg_color;
	logo.src = dyGlobal.logo.Url;
	be_image.src = dyGlobal.be_image.Url;
	bgimage.src = dyGlobal.bg_image.Url;
	heroimage.src = dyGlobal.hero_image.Url;
	f1_text.innerHTML = dyGlobal.f1_text;
	f2_text.innerHTML = dyGlobal.f2_text;
	f3_text.innerHTML = dyGlobal.f3_text;
	f4_text.src = dyGlobal.f4_text_img.Url;
	rto.innerHTML = dyGlobal.rto_code;
	cta.innerHTML = dyGlobal.cta_text;
	exitUrl = dyGlobal.exitUrl.Url;
	
	f1_text_style = dyGlobal.f1_text_styles.split(/[.,\/ -]/); //Array output
	f2_text_style = dyGlobal.f2_text_styles.split(/[.,\/ -]/);
	f3_text_style = dyGlobal.f3_text_styles.split(/[.,\/ -]/);
	cta_text_style = dyGlobal.cta_text_styles.split(/[.,\/ -]/);
	rto_code_style = dyGlobal.rto_code_styles.split(/[.,\/ -]/);
	
	f1_text.style.cssText = "font-size:" + f1_text_style[0] + "; line-height:" + f1_text_style[1] + "; color:" + f1_text_style[2];
	f2_text.style.cssText = "font-size:" + f2_text_style[0] + "; line-height:" + f2_text_style[1] + "; color:" + f2_text_style[2];
	f3_text.style.cssText = "font-size:" + f3_text_style[0] + "; line-height:" + f3_text_style[1] + "; color:" + f3_text_style[2];
	rto.style.cssText = "font-size:" + rto_code_style[0] + "; line-height:" + rto_code_style[1] + "; color:" + rto_code_style[2];
	cta.style.cssText = "font-size:" + cta_text_style[0] + "; color:" + cta_text_style[1] + ";";

	click_through.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};

 }

boilerplate.executeAnimation = function (){
	var tl=new TimelineMax({repeat:0, repeatDelay:5});
 	tl.to('#loading', 0.8, {autoAlpha:0,rotationZ: 0.01},"+=0")
		.to('#bg_Color', 0.8, {autoAlpha:1, x:-86, rotationZ: 0.01},"-=0.2")
		.to('#logo', 0.8, {autoAlpha:1, x:-160, rotationZ: 0.01},"-=0.8")
		.to('#betxt', 0.8, {autoAlpha:1, y:54, rotationZ: 0.01},"-=0.8")
		.to('#heroimage', 0.8, {autoAlpha:1, y:-50, rotationZ: 0.01},"-=0.5")

		.to('#f1_text', 0.8, {clip:"rect(0px, 80px, 80px, 0px)"},"-=0.0")
		.to('#betxt', 0.8, {y:-50, delay:1},"-=0.0")
		.to('#f1_text',0.8, {y:70},"-=0.8")
		.to('#f2_text', 0.8, {autoAlpha:1, y:62, rotationZ: 0.01},"-=0.5")
		.to('#f2_text', 1, {y:160, delay:1.5},"-=0.0")
	
		if (f3_text.innerHTML !== "") {
			tl.to('#f3_text', 0.8, {autoAlpha:1, y:41, rotationZ: 0.01},"-=0.5")
			.to('#f3_text', 1, {y:100, delay:1.5},"-=0.0")
		}

		tl.to('#line', 0.8, {clip:"rect(0px, 160px, 80px, 0px)"},"-=0.5")
		.to('#f4_text', 1, {autoAlpha:1},"-=0.2")		
		.to('#rto', 0.5, {autoAlpha:1},"-=0.8")
		.to('#f4_text', 0.5, {autoAlpha:0},"+=0.5")
		.to('#line', 0.8, {autoAlpha:0},"-=0.5")
		.to('#cta', 0.5, {autoAlpha:1},"-=0.5")
}

window.onload = function() {
	boilerplate.loadFunction ();
}
