 function windowLoad() {
            if (!Enabler.isInitialized()) {
                Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
            } else {
                enablerInitialized();
            }
        }

        function enablerInitialized() {
		 init();
         getdynamicDataAvailable();
        }

      
	function getdynamicDataAvailable() {
	 Enabler.setProfileId(10456462);
    var devDynamicContent = {};

    devDynamicContent.International_Dynamic_Sheet1 = [{}];
    devDynamicContent.International_Dynamic_Sheet1[0]._id = 0;
    devDynamicContent.International_Dynamic_Sheet1[0].Unique_ID = 1;
    devDynamicContent.International_Dynamic_Sheet1[0].Reporting_Label = "D1";
    devDynamicContent.International_Dynamic_Sheet1[0].Dynamic_Targeting_Key = "";
    devDynamicContent.International_Dynamic_Sheet1[0].Background_Colour = "#8c84d6";
    devDynamicContent.International_Dynamic_Sheet1[0].Background_Image = {};
    devDynamicContent.International_Dynamic_Sheet1[0].Background_Image.Type = "file";
    devDynamicContent.International_Dynamic_Sheet1[0].Background_Image.Url = "background_160x600.jpg";
    devDynamicContent.International_Dynamic_Sheet1[0].Hero_Image = {};
    devDynamicContent.International_Dynamic_Sheet1[0].Hero_Image.Type = "file";
    devDynamicContent.International_Dynamic_Sheet1[0].Hero_Image.Url = "heroimage_160xx600.png";
    devDynamicContent.International_Dynamic_Sheet1[0].Frame2_Copy = "Be <br\/>Trained ";
    devDynamicContent.International_Dynamic_Sheet1[0].Frame3_Copy = "by<br\/> Industry <br\/>Experts";
    devDynamicContent.International_Dynamic_Sheet1[0].Frame4_Copy = "In <br\/>Advertising, <br\/>Marketing & PR";
    devDynamicContent.International_Dynamic_Sheet1[0].CTA_Copy = "Apply Now";
    devDynamicContent.International_Dynamic_Sheet1[0].Exit_URL = {};
    devDynamicContent.International_Dynamic_Sheet1[0].Exit_URL.Url = "https://www.google.com/";
    devDynamicContent.International_Dynamic_Sheet1[0].Default = false;
    devDynamicContent.International_Dynamic_Sheet1[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);
	
		
	var Unique_ID = dynamicContent.International_Dynamic_Sheet1[0].Unique_ID;
	document.getElementById('cta').innerHTML=dynamicContent.International_Dynamic_Sheet1[0].CTA_Copy;
	
	document.getElementById('bgimage').src=dynamicContent.International_Dynamic_Sheet1[0].Background_Image.Url;
	document.getElementById('heroimage').src=dynamicContent.International_Dynamic_Sheet1[0].Hero_Image.Url;
	document.getElementById('copyA_a').innerHTML=dynamicContent.International_Dynamic_Sheet1[0].Frame2_Copy;
	document.getElementById('copyA_b').innerHTML=dynamicContent.International_Dynamic_Sheet1[0].Frame3_Copy;
	document.getElementById('copyA_c').innerHTML=dynamicContent.International_Dynamic_Sheet1[0].Frame4_Copy;
	
    document.getElementById('bg_Color').style.backgroundColor=dynamicContent.International_Dynamic_Sheet1[0].Background_Colour;
	

	document.getElementById('clickLayer').addEventListener('click', function()
	 {
		//console.log(dynamicContent.woolies_Sheet2[0].Exit_URL.Url);
		Enabler.exitOverride("Exit",dynamicContent.International_Dynamic_Sheet1[0].Exit_URL.Url); 
	 });

 }

        window.onload = function() {
            windowLoad();
        };


        function init() {
            startAnimation();
        }

        function startAnimation() {  
        var tl=new TimelineMax({repeat:0, repeatDelay:5});
		 tl      
		        
				.to('#bg_Color', 0.7, {autoAlpha:1, x:160, rotationZ: 0.01},"-=0.2")
				.to('#loading', 0.7, {autoAlpha:0,rotationZ: 0.01},"+=0")
				.to('#logo', 0.7, {autoAlpha:1, x:160, rotationZ: 0.01},"-=1.4")
				.to('#copy_2', 0.7, {autoAlpha:1, x:158, rotationZ: 0.01},"-=1")
				.to('#heroimage', 0.7, {autoAlpha:1, x:-160, rotationZ: 0.01},"-=1")
			
				
				.to('#copyA_a', 0.8, {clip:"rect(0px, 140px, 100px, 0px)"},"-=0.0")
				.to('#copy_2', 0.8, {x:-160, delay:1},"-=0.0")
				.to('#copyA_a', 1.3, {x:-300},"-=0.8")
				.to('#copyA_b', 0.8, {autoAlpha:1, x:-222, rotationZ: 0.01},"-=1")
				.to('#copyA_b', 1, {x:-550, delay:1.5},"-=0.0")
				.to('#copyA_c', 0.8, {autoAlpha:1, delay:1, x:-12, rotationZ: 0.01},"-=1")
				.to('#copyA_c', 0.8, {x:-200, delay:1.5},"-=0.0")
				
				.to('#line', 0.8, {clip:"rect(0px, 200px, 80px, 0px)"},"-=0.5")
				
				.to('#copyA_d', 1, {autoAlpha:1},"-=0.2")
				.to('#cta', 0.5, {autoAlpha:1},"-=0.2")
				.to('#rto', 0.5, {autoAlpha:1},"-=0.8")
		
		
        }
		
		



