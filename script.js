	img = new Array();
	img['url'] = new Array('0','1','2','3','4','5','6','7','8','9','10');
	img['done'] = new Array(true,true,true,true,true,true,false,false,false,false, false);
	slot = new Array('0','1','2','3','4','5');
	
	function refreshAffichage(pic,myslot){
			$('#anim img').eq(myslot).fadeOut('slow',function(){
			$('#anim img').eq(myslot).attr("src","img/mini"+pic+".jpg");
		});
		$('#anim img').eq(myslot).fadeIn('slow');
		img['done'][slot[myslot]] = false;
		img['done'][pic] = true;
		slot[myslot] = pic;
	} 
	
	function refresh()
	{
		myslot = Math.floor(Math.random()*6);
		cpt = 0;
		do{
				var i = Math.floor(Math.random()*(img['url'].length-1));
				if(!img["done"][i]){
					refreshAffichage(img['url'][i],myslot);
					break;
				}
				cpt++;
			}while(img["done"][i] && cpt < (img['url'].length-1));
		setTimeout("refresh()", 3000);
	}
	refresh();