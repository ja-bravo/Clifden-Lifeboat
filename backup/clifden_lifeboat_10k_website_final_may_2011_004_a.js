/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.bw=IDP.bw / 1.33;
	IDP.bd=IDP.bd / 1.33;
	IDP[1]={	x:new Array(593,623,653,683,713,743,773,803),
				y:new Array(498,528,498,528,498,528,498,528),
				s:5 };
	IDP[2]=(V5)?document.getElementById('e25').style:(IE)?e25.style:document.e25;
	window.setTimeout('DoRoute(2,1,0,0,0,100)',0);
}


/*--- EndOfFile ---*/
