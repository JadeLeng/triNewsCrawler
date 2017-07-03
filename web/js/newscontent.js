var mysource = source;
var myoid = oid;
var mytype=type;


$(function () {
		var page = 0;

		console.log(mysource);
		console.log(myoid);
		$.ajax({
			url: "http://120.24.57.3/triNewsCrawler/php/newscontent.php",
			//datatype: 'json',
			type: "post",
			data: {
				collection : mysource,
				oid: myoid,
			},
			success: function (msg) {
				//console.log(name);
				
				data = JSON.parse(msg);
				// 遍历
				if (data != null) {
					console.log(data);

					var date = data[0].news_date;
					console.log(date);
					var ul = document.getElementById("newsdate");
					var li = document.createElement('li');
					var p = document.createElement('p');
					var a = document.createElement('a');
					p.innerHTML = "<p>日期："+date+"</p>";
					console.log(p);
					li.appendChild(p);
                    ul.appendChild(li);

					var source = data[0].news_source;
					ul = document.getElementById("newssource");
					li = document.createElement('li');
					p = document.createElement('p');
					p.innerHTML = "<p>来源："+source+"</p>";
					console.log(p);
					li.appendChild(p);
                    ul.appendChild(li);

					var sourceurl = data[0].news_url;
					ul = document.getElementById("sourceurl");
					li = document.createElement('li');
					 
					a.innerHTML = "<a href=\""+sourceurl+"\" target=\"_blank\">"+"来源网址"+"</a>";
					console.log(a);
					li.appendChild(a);
                    ul.appendChild(li);

                    var title = data[0].news_title;
                    $("#title").html(title);
                    var content = data[0].news_body;
                    ul = document.getElementById("newscontent");
                    li = document.createElement('li');
                    for (var i =0;i<content.length;i++){
                    	paragraph = content[i];
                    	p = document.createElement('p');
                    	p.innerHTML = "<p>"+paragraph+"</p>";
                    	li.appendChild(p);
                    }
                    ul.appendChild(li);

                    var newsimg = data[0].news_img;
                    
                    ul = document.getElementById("newsimg");
                    li = document.createElement('li');
                    for (var i=0;i<newsimg.length;i++){
                    	var img=document.createElement("img");
                    	img.src=newsimg[i];
                    	li.appendChild(img);

                    }
                    ul.appendChild(li);
                    
	                
	            }
	            	

	        
	        }
	    });
	    if ($.session.get('user')){
	    	var usrname = $.session.get('user');
	    	$.ajax({
			url: "http://120.24.57.3/triNewsCrawler/usrlike.php",
			//datatype: 'json',
			type: "post",
			data: {
				usrname : usrname,
				type: mytype,
			},
			success: function (msg) {
				console.log(msg);
				//$("#main-container").html(name+'新闻');
				data = JSON.parse(msg);
				// 遍历
				
	        }
	    });
	    }
	});
	            

			