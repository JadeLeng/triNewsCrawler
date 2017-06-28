$(function(){
	// 登录状态 重排
	console.log("loadmainlike");
	if ($.session.get('user')){
		var usrname = $.session.get('user');

		$.ajax({
			url: "http://120.24.57.3/triNewsCrawler/loadmainlike.php",
			//datatype: 'json',
			type: "post",
			data: {
				usrname : usrname,
				//type: mytype,
			},
			success: function (msg) {
				
				//$("#main-container").html(name+'新闻');
				data = JSON.parse(msg);
				//console.log(data);

				var list = new Array();
				list.push({type:'汽车新闻',value:data[0]['car'],id:'carnews'});
				list.push({type:'国内新闻',value:data[0]['domestic'],id:'domesticnews'});
				list.push({type:'教育新闻',value:data[0]['education'],id:'educationnews'});
				list.push({type:'娱乐新闻',value:data[0]['entertainment'],id:'entertainmentnews'});
				list.push({type:'经济新闻',value:data[0]['fin'],id:'financenews'});
				list.push({type:'游戏新闻',value:data[0]['game'],id:'gamenews'});
				list.push({type:'国际新闻',value:data[0]['international'],id:'internationalnews'});
				list.push({type:'互联网新闻',value:data[0]['internet'],id:'internetnews'});
				list.push({type:'军事新闻',value:data[0]['military'],id:'militarynews'});
				list.push({type:'房产新闻',value:data[0]['property'],id:'propertynews'});
				list.push({type:'社会新闻',value:data[0]['social'],id:'socialnews'});
				list.push({type:'体育新闻',value:data[0]['sports'],id:'sportsnews'});
				list.push({type:'科技新闻',value:data[0]['tech'],id:'technews'});
				list.push({type:'女性新闻',value:data[0]['women'],id:'womennews'});
				console.log(list);
				// 给新闻排序
				list.sort(function(a,b){
	            	return b.value-a.value;
	            });

	            console.log(list);
				// 遍历
				for (var i = 0; i<14; i++){
					var type = list[i]['type'];
					var id = list[i]['id'];
					var fatherid = "news"+i;
					var fatherdiv = document.getElementById(fatherid);
					var sondiv1 = document.createElement('div');
					sondiv1.setAttribute('class','panel-heading');
					sondiv1.innerHTML = type;
					fatherdiv.appendChild(sondiv1);
					var sondiv2 = document.createElement('div');
					sondiv2.setAttribute('class','panel-body');
					
					var ul = document.createElement('ul');
					ul.setAttribute('class','list-unstyled');
					ul.setAttribute('id',id);
					
					sondiv2.appendChild(ul);
					fatherdiv.appendChild(sondiv2);
					// 根据排序给首页的panel添加内容
				}
				
				
	        }
	    });
	}
	// 未登录状态 默认视角
	else {
		var list = new Array();
		list.push({type:'国际新闻',id:'internationalnews'});
		list.push({type:'国内新闻',id:'domesticnews'});
		list.push({type:'社会新闻',id:'socialnews'});
		list.push({type:'娱乐新闻',id:'entertainmentnews'});
		list.push({type:'经济新闻',id:'financenews'});
		list.push({type:'体育新闻',id:'sportsnews'});
		list.push({type:'科技新闻',id:'technews'});
		list.push({type:'军事新闻',id:'militarynews'});
		list.push({type:'游戏新闻',id:'gamenews'});
		list.push({type:'教育新闻',id:'educationnews'});
		list.push({type:'汽车新闻',id:'carnews'});
		list.push({type:'互联网新闻',id:'internetnews'});
		list.push({type:'房产新闻',id:'propertynews'});		
		list.push({type:'女性新闻',id:'womennews'});

		// 遍历
		for (var i = 0; i<14; i++){
			var type = list[i]['type'];
			var id = list[i]['id'];
			var fatherid = "news"+i;
			var fatherdiv = document.getElementById(fatherid);
			var sondiv1 = document.createElement('div');
			sondiv1.setAttribute('class','panel-heading');
			sondiv1.innerHTML = type;
			fatherdiv.appendChild(sondiv1);
			var sondiv2 = document.createElement('div');
			sondiv2.setAttribute('class','panel-body');
					
			var ul = document.createElement('ul');
			ul.setAttribute('class','list-unstyled');
			ul.setAttribute('id',id);
			
			sondiv2.appendChild(ul);
			fatherdiv.appendChild(sondiv2);
			// 根据排序给首页的panel添加内容
		}

	}
})