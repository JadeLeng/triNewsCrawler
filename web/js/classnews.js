var mytype = type?type:'International';
var main_display = name? name:'国际';
var mytype = type;


$(function () {
		var page = 0;
		console.log(mytype);


		$.ajax({
			url: "http://120.24.57.3/triNewsCrawler/php/newsclass.php",
			//datatype: 'json',
			type: "post",
			data: {
				collection : mytype,
				page: page,
			},
			success: function (msg) {
				console.log(msg);
				$("#main-container").html(name+'新闻');
				data = JSON.parse(msg);
				// 遍历
				if (data != null) {
					
					for (var i = 0; i < data.length; i++) {
	                var date = data[i].date;
	                var title = data[i].title;
	                var oid = data[i].from_id.$oid;
	                var source = data[i].source;
	                var href = './news.html?source='+source+'&oid='+oid+'&tpye='+type;
	                //console.log("date:"+title);
	                //console.log("href"+href);
	                
	                $("#list").append('<tr><td><a href="'+href+'">'+title+'</a></td><td>'+date+'</td></tr>');
					

	                
	            	}
	            	

	            }
	        }
	    });

	    


	});
	            

			