
import requests
from conector import criar_conexao

# ## cria conexao com o bd
# con = criar_conexao("localhost", "root", "root", "api_midall")
# # Seletor de links filtrados
# def selecionar_links(con):
#     cursor = con.cursor()
#     sql = "SELECT * FROM links_de_pdf_filtrados"
#     cursor.execute(sql)
#     array_links = []
#     for (link) in cursor:
#         array_links.append(link)
#     cursor.close()
#     return array_links

# def selecionar_nomes(con):
#     cursor = con.cursor()
#     sql = "SELECT * FROM links_de_pdf_filtrados"
#     cursor.execute(sql)
#     array_nomes = []
#     for assoc_nome in cursor:
#         array_nomes.append(assoc_nome)
#     cursor.close()
#     return array_nomes



link = input(str('Insira o link: '))
# nome = selecionar_nomes(con)
count = 0
# print(link)
# print(nome)

for x in range(len(link)):
    filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + link
    pdfcreate = requests.get(filterlink_id, stream=True)
    with open(f'../../Sistema_de_gerenciamento_de_assoc/public/assets/PDFS/DOU{x+1}.pdf', "wb") as creation:
        creation.write(pdfcreate.content)
    count = count + 1
    


