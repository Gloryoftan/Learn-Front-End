import re
import time
import requests
import pandas as pd
from retrying import retry
from concurrent.futures import ThreadPoolExecutor

start = time.clock()   #计时-开始

#plist 为1-100页的URL的编号num
plist = []
for i in range(1,100):
    j = 44*(i-1)
    plist.append(j)

listno = plist
datatmsp = pd.DataFrame(columns=[])

while True:
  @retry(stop_max_attempt_number = 8)  #设置最大重试次数
  def network_programmung(num):
     url='https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=女装&clk1=94e473cc327b61b91dfe58d192eff5ec&upsid=94e473cc327b61b91dfe58d192eff5ec'+ str(num)
     web= request.get(url, headers=headers)
     web.encoding = 'utf-8'
     return web

#  多线程
  def multithreading():
        number = listno    #每次爬取未爬取成功的页
        event = []
     
        with ThreadPoolExecutor(max_workers=10) as executor:
          for result in executor.map(network_programming, number,chunksize=10):
              event.append(result)
        return event
    
# 隐藏：修改headers参数
  headers = {'User-Agent':'Mozilla/5.0(Windows NT 10.0;WOW64) \AppleWebKit/537.36(KHTML,like Gecko)\Chrome/55.0.2883.87 Safari/537.36'
                }
     
  listpg = []
  event = multithreading()
  for i in event:
        json = re.findall('"auctions":(.*?),"recommendAuctions"',i.text)
        if len(json):
            table = pd.read_json(json[0])
            datatmsp = pd.concat([datatmsp,table],axis=1,ignore_index=Ture)
            
            pg = re.findall('"pageNum":(.*?),"p4pbottom_up"',i.text)[0]
            listpg.append(pg)     #记入每一次爬取成功的页码

  list=[]
  for a in listpg:
         b = 44*(int(a)-1)
         lists.append(b)  #将爬取成功的页码转为url中的num值

  listn=listno
      
  listno = []  #将本次爬取失败的页记入列表中 用于循环爬取
  for p in listno:
        if p not in lists:
            listno.append(p)	

  if len(listno) == 0: #当未爬取页数为0时 终止循环
        break
        
# 导出数据为Excel 
datatmsp.to_excel('datatmsp.xls', index = False)
 
end = time.clock()   #计时-结束
print('爬取完成 用时：',end - start, 's')


