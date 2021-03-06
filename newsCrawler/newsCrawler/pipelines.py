# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from .store import NewsDB

class NewscrawlerPipeline(object):
    def process_item(self, item, spider):
        #if spider.name != "news":
            #print ("spider.name!=news")
        #    return item
        dict2 = {'isClassified':False}
        if item.get("news_thread",None) is None:
            print("item.get(thread)=none")
            return item
        spec = {"news_thread":item["news_thread"]}
        dictMerged = dict(item);
        dictMerged.update(dict2);
        if item['news_source'] == 'tencent':
            if NewsDB.tencent.find_one(spec):
                print(spec)
                print("duplicated in tencent")
                return
            NewsDB.tencent.update(spec,{"$set":dictMerged}, upsert = True)
        elif item['news_source'] == 'sina':
            if NewsDB.sina.find_one(spec):
                print(spec)
                print("duplicated in sina")
                return
            NewsDB.sina.update(spec,{"$set":dictMerged}, upsert = True)
        else:
            if "每日易乐" in item['news_title']:
                print("drop!:",item['news_title'])
                return
            print(NewsDB.netease.find_one(spec))
            if NewsDB.netease.find_one(spec):
                print(spec)
                print("duplicated in netease")
                return
            NewsDB.netease.update(spec,{"$set":dictMerged}, upsert = True)
	#print("update in mongodb")
        return None
