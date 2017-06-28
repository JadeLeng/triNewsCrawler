# Browser & Server Project - News Website
News website from tencent, sina and 163

## running config

Before running, you need to install the following environment:  
*(Mine is based on AliCloud Ubuntu 16.04)*
  
Python 3.5.2  
Scrapy 1.3.3  
PHP 7.0.15  
MongoDB 2.6.10  -- you need a database named **NewsDB**  
mysql 14.14 -- you need a database named **BS** and load the file of **mysql.sql** in your client

**For android app, you might need**  
Android studio 2.2  
Android 5.1(Lollipop)  API 22

### For crawler:
It's in the folder newsCrawler  
Running on:  

```python
scrapy crawl `crawlername` 
// available: news, tencentNews, sinaNews
```

### For classifier:  
It's in the folder newsClassifier  
Running on:

```python
python3 run.py
```  
Take care if your network connection is not that stable.  

### For web php:  
It' all in the folder php, see if you need.  
The php file includes the connection to MongoDB and Mysql using mysqli. 

### For web view  
It' all in the folder web, including the html file and js file.

### For android app  
It' all in the android file. The app is using jcenter() to config the dependency.