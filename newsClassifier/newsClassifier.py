# -*- coding: utf-8 -*-


# bosonnlp
from __future__ import print_function, unicode_literals
import json
import requests
import setMongoNLP

NewsDB = setMongoNLP.NewsDB
CLASSIFY_URL = setMongoNLP.CLASSIFY_URL

newsClass = setMongoNLP.newsClass
sourceClass = setMongoNLP.sourceClass


Sports = setMongoNLP.Sports
Education = setMongoNLP.Education
Fin = setMongoNLP.Fin
Social = setMongoNLP.Social
Entertainment = setMongoNLP.Entertainment
Military = setMongoNLP.Military
Domestic = setMongoNLP.Domestic
Tech = setMongoNLP.Tech
Internet = setMongoNLP.Internet
Property = setMongoNLP.Property
International = setMongoNLP.International
Women = setMongoNLP.Women
Car = setMongoNLP.Car
Game = setMongoNLP.Game

netease = setMongoNLP.netease
sina = setMongoNLP.sina
tencent = setMongoNLP.tencent


# 新闻类：
# source, id, title, date, classification
class newsClassifer():
	
	
	def __init__(self, source, id, title, date):
		self.source = source
		self.id = id
		self.title = title
		self.date = date
		self.classification = self.Classify(title)
		


	def Classify(self,title):
		#ltitle = list(title)
		data = json.dumps(title)
		print("title:",title)
		print("data",data)
		# my bosonNLP token
		headers = {'X-Token': '2WjuIxS3.15681.UHd8KL3fedaP'}
		resp = requests.post(CLASSIFY_URL, headers=headers, data=data.encode('utf-8'))
		print(resp.text)
		return resp.text
		

	def saveMongo(self):
		newsPiece = {
						"from_id": self.id,
						"source": self.source,
						"title": self.title,
						"date": self.date,

					}
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		#NewsDB.Sports.update(spec,{"$set": newsPiece}, upsert = True)
		classifyCollection = str(self.classification)
		print(classifyCollection)
		newsClass.get(classifyCollection)(newsPiece)
		#NewsDB.classifyCollection.update(spec, {"$set": newsPiece}, upsert = True)
		collectionSource = self.source
		sourceClass.get(self.source)(self)

