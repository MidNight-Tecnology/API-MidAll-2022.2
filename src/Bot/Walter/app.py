# IMPORTS
from datetime import date
from tkinter.font import names
import datetime
from conector import criar_conexao

print('<<< Walter Ta ON 🤖 >>>')
# Conecta com Banco de dados
con = criar_conexao("localhost", "root", "root", "crud")
# Insere link


def insere_link(con, link, assoc_nome):
    cursor = con.cursor()
    sql = "INSERT INTO pdfs (nome_assoc, link_pdf, createdAt, updatedAt) values (%s, %s, %s, %s)"
    valores = (assoc_nome, link, datetime.date.today(), datetime.date.today())
    cursor.execute(sql, valores)
    cursor.close()
    con.commit()
# select associados


def selecionar_associados(con):
    cursor = con.cursor()
    sql = "SELECT nome FROM associados"
    cursor.execute(sql)
    array_assoc = []
    for nome in cursor:
        a = str(nome).split("'")
        array_assoc.append(a[1])
    cursor.close()
    return array_assoc


# Geração de data atual
calendar = str(datetime.date.today())

# day = str(input("Coloque o dia desejado (dd): "))
# month = str(input("Coloque o mês desejado (mm): "))
# year = str(input("Coloque o ano desejado (aaaa): "))

day = calendar[8:10]
month = calendar[5:7]
year = calendar[0:4]

# day = 24
# month = 11
# year = 2022


# GERAÇÃO/FILTRAGEM DE NOMES DOS ASSOCIADOS
assoc = selecionar_associados(con)
count = len(assoc)


for i in range(count):
    assoc_nome = str(assoc[i])
    nome_id = str(assoc[i])
    nome_id2 = str(assoc[i])

    id = nome_id.replace(" ", "2%b")
    id2 = nome_id2.replace(' ', '+')

# names_id = names
# names_id = names.replace(" ", "2%b")
# names_id_2 = names.replace(' ', '+')
# Busca avançada direto no site do DOU
    links = f'\nhttp://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave="+{id2}+"&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{day}.{month}.{year}%3c%3d{day}.{month}.{year}%5d({id})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={year}{month}{day}&filtroperiodo={day}%2f{month}%2f{year}+a+{day}%2f{month}%2f{year}&filtrodatainiciosalvar={year}{month}{day}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl'
# Jogar link no Banco de dados
    insere_link(con, links, assoc_nome)

    print(links)

con.close()
print('<<< Walter Ta OFF 🤖 >>>')

