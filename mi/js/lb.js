onload=function(){
	var img=document.getElementById("theme-2");
	var imgs=["img/1.jpg","img/2.jpg","img/1.jpg","img/1.jpg"];
	var t=0;
	setInterval(function () {
        img.style.background=imgs[t];
        t++;
        if(t==3)
        {
            t=0;
        }
    },500)
}
