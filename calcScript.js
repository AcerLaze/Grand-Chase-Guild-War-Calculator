function calcu(){

	var gMaxPoint 		= document.getElementsByName("gScore")[0].value,
		eStarSurvived1 	= document.getElementsByName("eStarSurvived1")[0].value,
		eStarSurvived4 	= document.getElementsByName("eStarSurvived4")[0].value, 
		eStarSurvived6 	= document.getElementsByName("eStarSurvived6")[0].value, 
		eStarSurvived11 = document.getElementsByName("eStarSurvived11")[0].value,
		eStarSurvived21 = document.getElementsByName("eStarSurvived21")[0].value,
		gChance 		= document.getElementsByName("gChance")[0].value;

	var eStar = [eStarSurvived1, eStarSurvived4, eStarSurvived6, eStarSurvived11, eStarSurvived21];

	var eMaxPoint 		= document.getElementsByName("eScore")[0].value,
		gStarSurvived1 	= document.getElementsByName("gStarSurvived1")[0].value,
		gStarSurvived4 	= document.getElementsByName("gStarSurvived4")[0].value, 
		gStarSurvived6 	= document.getElementsByName("gStarSurvived6")[0].value, 
		gStarSurvived11 = document.getElementsByName("gStarSurvived11")[0].value,
		gStarSurvived21 = document.getElementsByName("gStarSurvived21")[0].value,
		eChance 		= document.getElementsByName("eChance")[0].value;

	var gStar = [gStarSurvived1, gStarSurvived4, gStarSurvived6, gStarSurvived11, gStarSurvived21];

	for(var i = 0; i < 5; i++){
		
		if(gChance > 0){

			if(parseInt(gChance) >= parseInt(eStar[i])){

				gMaxPoint = parseInt(gMaxPoint) + (eStar[i] * (5-i) * 3);
				gChance = parseInt(gChance) - parseInt(eStar[i]);

			} else {

				gMaxPoint = parseInt(gMaxPoint) + (gChance * (5-i) * 3);
				gChance = 0;

			}

		} else break;

	}

	for(var i = 0; i < 5; i++){

		if(eChance > 0){

			if(parseInt(eChance) >= parseInt(gStar[i])){

				eMaxPoint = parseInt(eMaxPoint) + (gStar[i] * (5-i) * 3);
				eChance = parseInt(eChance) - parseInt(gStar[i]);

			} else {

				eMaxPoint = parseInt(eMaxPoint) + (eChance * (5-i) * 3);
				eChance = 0;

			}

		} else break;

	}

	gMaxPoint = parseInt(gMaxPoint) + (gChance * 15);
	eMaxPoint = parseInt(eMaxPoint) + (eChance * 15);

	document.getElementsByName("gMaxPoint")[0].value = gMaxPoint;

	document.getElementsByName("eMaxPoint")[0].value = eMaxPoint;

}