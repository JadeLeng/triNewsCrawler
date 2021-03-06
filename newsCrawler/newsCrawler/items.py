# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class newsCrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    news_thread = scrapy.Field()
    news_title = scrapy.Field()
    news_url = scrapy.Field()
    news_time = scrapy.Field()
    news_from = scrapy.Field()
    from_url = scrapy.Field()
    news_body = scrapy.Field()
    news_source = scrapy.Field()
    news_img = scrapy.Field()
    news_date = scrapy.Field()
    is_classified = False
