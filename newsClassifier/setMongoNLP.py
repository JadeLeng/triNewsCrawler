# -*- coding: utf-8 -*-


CLASSIFY_URL = 'http://api.bosonnlp.com/classify/analysis'

HOST = "127.0.0.1"
PORT = 27017
#连接mongoDB
client = pymongo.MongoClient(HOST, PORT)
NewsDB = client.NewsDB