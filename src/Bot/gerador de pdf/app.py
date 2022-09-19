
import requests
from conector import criar_conexao, fechar_conexao

## cria conexao com o bd
con = criar_conexao("localhost", "root", "root", "api_midall")
# Seletor de links filtrados
def selecionar_links(con):
    cursor = con.cursor()
    sql = "SELECT * FROM links_de_pdf_filtrados"
    cursor.execute(sql)
    array_links = [[]]
    contador_links = 0
    for (id, link, assoc_nome) in cursor:
        array_links.insert(contador_links,[id, link, assoc_nome])
        contador_links = contador_links+1
    cursor.close()
    return array_links
link = selecionar_links(con)
count = 0

for x in range(len(link)):
    filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + link[count]
    pdfcreate = requests.get(filterlink_id, stream=True)
    with open(f'PDF\DOU{x+1}.pdf', "wb") as creation:
        creation.write(pdfcreate.content)
    count = count + 1
    


