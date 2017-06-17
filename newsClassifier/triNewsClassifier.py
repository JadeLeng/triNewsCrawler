# -*- coding: utf-8 -*-



import setMongoNLP
import newsClassifier
import pprint


NewsDB = setMongoNLP.NewsDB

class triNewsClassifier():
	def neteaseClassifier():
		posts = NewsDB.netease.find({'isClassified':False}, {'__id':1, 'news_title':1, 'news_source':1, 'news_date':1})
		entries = list(posts)[1:]
		#print(entries)
		for post in entries:
#		for posts in NewsDB.netease.find():
			#post = NewsDB.netease.find_one(lipost, criteria = {})
			print(post)

			source = post['news_source']
			collection_id = post['_id']
			title = post['news_title']
			date = post['news_date']
			print(source,'-',collection_id,'-',title,'-',date)
			neteaseClass = newsClassifier.newsClassifer(source, collection_id, title, date)
			#neteaseClass.Classify()
			neteaseClass.saveMongo()

	def sinaClassifier():
		posts = NewsDB.sina.find({'isClassified':False}, {'__id':1, 'news_title':1, 'news_source':1, 'news_date':1})
		entries = list(posts)[1:]
		#print(entries)
		for post in entries:
#		for posts in NewsDB.netease.find():
			#post = NewsDB.netease.find_one(lipost, criteria = {})
			print(post)

			source = post['news_source']
			collection_id = post['_id']
			title = post['news_title']
			date = post['news_date']
			print(source,'-',collection_id,'-',title,'-',date)
			sinaClass = newsClassifier.newsClassifer(source, collection_id, title, date)
			#neteaseClass.Classify()
			sinaClass.saveMongo()	

	def tencentClassifier():
		posts = NewsDB.tencent.find({'isClassified':False}, {'__id':1, 'news_title':1, 'news_source':1, 'news_date':1})
		entries = list(posts)[1:]
		#print(entries)
		for post in entries:
#		for posts in NewsDB.netease.find():
			#post = NewsDB.netease.find_one(lipost, criteria = {})
			print(post)

			source = post['news_source']
			collection_id = post['_id']
			title = post['news_title']
			date = post['news_date']
			print(source,'-',collection_id,'-',title,'-',date)
			tencentClass = newsClassifier.newsClassifer(source, collection_id, title, date)
			#neteaseClass.Classify()
			tencentClass.saveMongo()


