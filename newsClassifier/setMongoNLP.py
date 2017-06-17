# -*- coding: utf-8 -*-
import pymongo
import random
CLASSIFY_URL = 'http://api.bosonnlp.com/classify/analysis'

HOST = "127.0.0.1"
PORT = 27017
#连接mongoDB
client = pymongo.MongoClient(HOST, PORT)
NewsDB = client.NewsDB


def Sports(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Sports.update(spec,{"$set": newsPiece}, upsert = True)


def Education(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Education.update(spec,{"$set": newsPiece}, upsert = True)

def Fin(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Fin.update(spec,{"$set": newsPiece}, upsert = True)

def Social(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Social.update(spec,{"$set": newsPiece}, upsert = True)

def Entertainment(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Entertainment.update(spec,{"$set": newsPiece}, upsert = True)

def Military(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Military.update(spec,{"$set": newsPiece}, upsert = True)

def Domestic(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Domestic.update(spec,{"$set": newsPiece}, upsert = True)

def Tech(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Tech.update(spec,{"$set": newsPiece}, upsert = True)

def Internet(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Internet.update(spec,{"$set": newsPiece}, upsert = True)

def Property(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Property.update(spec,{"$set": newsPiece}, upsert = True)

def International(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.International.update(spec,{"$set": newsPiece}, upsert = True)

def Women(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Women.update(spec,{"$set": newsPiece}, upsert = True)

def Car(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Car.update(spec,{"$set": newsPiece}, upsert = True)

def Game(newsPiece):
	spec = {"from_id":newsPiece["from_id"], "source":newsPiece["source"]}
	NewsDB.Game.update(spec,{"$set": newsPiece}, upsert = True)

def netease(self):
	NewsDB.netease.update({"_id":self.id},{"$set":{"isClassified": True}},upsert = True)

def sina(self):
	NewsDB.sina.update({"_id":self.id},{"$set":{"isClassified": True}},upsert = True)

def tencent(self):
	NewsDB.tencent.update({"_id":self.id},{"$set":{"isClassified": True}},upsert = True)

newsClass = {'[0]': Sports, '[1]': Education, '[2]': Fin, '[3]': Social, '[4]': Entertainment, '[5]': Military, '[6]': Domestic, '[7]': Tech, '[8]': Internet, '[9]': Property, '[10]': International, '[11]': Women, '[12]': Car, '[13]': Game,}
sourceClass = {'netease': netease, 'sina': sina, 'tencent': tencent}
