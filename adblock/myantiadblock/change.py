with open("easylistChina.txt", "r",encoding='utf-8') as f:  # 打开文件
        data = f.read()  # 读取文件
        #print(data)
        k=data.replace("/","%2f")  #\\转义，反斜杠
        #print(k)
        fh = open('newlist.txt', 'w', encoding='utf-8')
        fh.write(k)
        fh.close()
		
