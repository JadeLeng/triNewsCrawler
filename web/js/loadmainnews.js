
$(function() {
    // 先执行一次
    //loadmain();
    loadinternational();
    loaddomestic();
    loadsocial();
    loadentertainment();
    loadfinance();
    loadmilitary();
    loadsports();
    loadtech();
    loadeducation();
    loadproperty();
    loadwoman();
    loadcar();
    loadgame();
    loadinternet();
});


var loadinternational = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'International'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=International';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#internationalnews-" + i).length == 0)
			        $("#internationalnews").append('<li id="internationalnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#internationalnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadmain = function(){
	var h=0;
	var s = new String("崇尚劳动的习近平");
	if ($("#topnews-" + h).length == 0)
        $("#topnews").append('<li id="topnews-' + h + '">' +
                            '<a href="'+ '#' + '">' + s + '</a>' +
                            '</li>');
    else
        $("#announce-" + h).html('<a href="'+ '#' + '">' + s + '</a>');
	//$("#main-news").append('<h1>崇尚劳动的习近平</h1>');
	//$("#main-news").append('<p>点赞劳动者、点赞劳模精神。十八大以来，习近平年年都会在“五一”国际劳动节前夕做这件事。习近平崇敬劳模，也热爱劳动。不满16岁，他就到陕北农村插队，种地、拉煤、打坝、挑粪……一干就是7年。今年“五一”国际劳动节来临之际，央视网微视频工作室推出微视频《崇尚劳动的习近平》，看看习近平是如何做到“案无积卷，事不过夜”的。</p>');

}

var loaddomestic = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Domestic'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Domestic';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#domesticnews-" + i).length == 0)
			        $("#domesticnews").append('<li id="domesticnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#domesticnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadsocial = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Social'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Social';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#socialnews-" + i).length == 0)
			        $("#socialnews").append('<li id="socialnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#socialnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadentertainment = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Entertainment'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Entertainment';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#entertainmentnews-" + i).length == 0)
			        $("#entertainmentnews").append('<li id="entertainmentnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#entertainmentnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadfinance = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Fin'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Fin';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#financenews-" + i).length == 0)
			        $("#financenews").append('<li id="financenews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#financenews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadmilitary = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Military'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Military';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#militarynews-" + i).length == 0)
			        $("#militarynews").append('<li id="militarynews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#militarynews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadsports = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Sports'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Sports';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#sportsnews-" + i).length == 0)
			        $("#sportsnews").append('<li id="sportsnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#sportsnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadtech = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Tech'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Tech';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#technews-" + i).length == 0)
			        $("#technews").append('<li id="technews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#technews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadproperty = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Property'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Property';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#propertynews-" + i).length == 0)
			        $("#propertynews").append('<li id="propertynews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#propertynews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadeducation = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Education'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Education';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#educationnews-" + i).length == 0)
			        $("#educationnews").append('<li id="educationnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#educationnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadwoman = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Women'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Women';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#womennews-" + i).length == 0)
			        $("#womennews").append('<li id="womennews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#womennews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadinternet = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Internet'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Internet';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#internetnews-" + i).length == 0)
			        $("#internetnews").append('<li id="internetnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#internetnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadcar = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Car'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Car';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#carnews-" + i).length == 0)
			        $("#carnews").append('<li id="carnews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#carnews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}

var loadgame = function(){
	$.ajax({
        type: "post",
        url: "http://120.24.57.3/triNewsCrawler/php/getmongo.php",
        data: {
        	collection : 'Game'
        },
        success: function(msg) {
            data = JSON.parse(msg);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                var date = data[i].date;
                var title = data[i].title;
                var oid = data[i].from_id.$oid;
                var source = data[i].source;
                var href = './news.html?source='+source+'&oid='+oid+'&type=Game';
                //console.log("date:"+title);
                //console.log("href"+href);
                if ($("#gamenews-" + i).length == 0)
			        $("#gamenews").append('<li id="gamenews-' + i + '">' +
			                            '<a href="'+ href + '">' + title + '</a>' +
			                            '</li>');
			    else
			        $("#gamenews-" + i).html('<a href="'+ href + '">' + title + '</a>');
            }
        }
    });
}


//