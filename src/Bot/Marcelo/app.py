
# from array import array
# import requests
# from conector import criar_conexao
# ###Alterar BD
# ###Arrumar cod
# ## cria conexao com o bd
# con = criar_conexao("localhost", "root", "root", "api_midall")
# # Seletor de links filtrados
# def selecionar_links(con):
#     cursor = con.cursor()
#     sql = "SELECT * FROM links_de_pdf_filtrados"
#     cursor.execute(sql)
#     array_links = [[]]
#     cont = 0
#     for link in cursor:
#         array_links.append(cont[link[1], link[2]])
#     cont = cont + 1
#     cursor.close()
#     return array_links

# array_final = selecionar_links()
# num = len(array_final)
# for links in range(num):
#     print(array_final[[0], [1]])
# # a =''

# # link = a
# # # nome = selecionar_nomes(con)
# # count = 0
# # # print(link)
# # # print(nome)

# ?????????
# ??  ?????
#     ????
#     ???
#     ??

#     ??

# for x in range(len(array_final)):
#         filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + array_final
#         pdfcreate = requests.get(filterlink_id, stream=True)
#         with open(f'../../Sistema_de_gerenciamento_de_assoc/public/assets/PDFS/DOU{x+1}.pdf', "wb") as creation:
#             creation.write(pdfcreate.content)
#         count = count + 1
    


