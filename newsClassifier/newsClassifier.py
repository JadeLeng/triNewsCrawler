# -*- coding: utf-8 -*-

import pymongo
# bosonnlp
from __future__ import print_function, unicode_literals
import json
import requests
import setMongoNLP



# 新闻类：
# source, id, title, date, classification
class newsClassifer(Object):

	newsClass = {'0': Sports, '1': Education, '2': Fin, '3': Social, '4': Entertainment, '5': Military, '6': Domestic, '7': Tech, '8': Internet, '9': Property, '10': International, '11': Women, '12': Car, '13': Game}
	
	def __init__(self, source, id, title, date, classification):
		self.source = source
		self.id = id
		self.title = title
		self.date = date
		self.classification = Classify(title)

	def Classify(self):
		data = json.dump(self.title)
		# my bosonNLP token
		headers = {'X-Token': '2WjuIxS3.15681.UHd8KL3fedaP'}
		resp = requests.post(CLASSIFY_URL, headers=headers, data=data.encode('utf-8'))
		self.classification = resp.text[0]

	def saveMongo(self):
		newsPiece = [{
						"from_id": self.id,
						"source": self.source,
						"title": self.title,
						"date": self.date,
					}]
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		#NewsDB.Sports.update(spec,{"$set": newsPiece}, upsert = True)
		NewsDB.get(self.classification).update(spec, {"$set": newsPiece}, upsert = True)
		

	def Sports(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Sports.update(spec,{"$set": newsPiece}, upsert = True)


	def Education(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Education.update(spec,{"$set": newsPiece}, upsert = True)

	def Fin(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Fin.update(spec,{"$set": newsPiece}, upsert = True)

	def Social(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Social.update(spec,{"$set": newsPiece}, upsert = True)

	def Entertainment(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Entertainment.update(spec,{"$set": newsPiece}, upsert = True)

	def Military(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Military.update(spec,{"$set": newsPiece}, upsert = True)

	def Domestic(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Domestic.update(spec,{"$set": newsPiece}, upsert = True)

	def Tech(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Tech.update(spec,{"$set": newsPiece}, upsert = True)

	def Internet(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Internet.update(spec,{"$set": newsPiece}, upsert = True)

	def Property(self, newsPiece):
		spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
		NewsDB.Property.update(spec,{"$set": newsPiece}, upsert = True)



