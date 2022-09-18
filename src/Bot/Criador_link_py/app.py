# IMPORTS
from datetime import date
from tkinter.font import names
import datetime
from conector import criar_conexao, fechar_conexao


# Conecta com Banco de dados
con = criar_conexao("localhost", "root", "root", "api_midall")
# Insere link


def insere_link(con, link, assoc_id):
    cursor = con.cursor()
    sql = "INSERT INTO link_de_pdf (link, id_assoc) values (%s, %s)"
    valores = (link, assoc_id)
    cursor.execute(sql, valores)
    cursor.close()
    con.commit()

# select associados


def selecionar_associados(con):
    cursor = con.cursor()
    sql = "SELECT * FROM associados"
    cursor.execute(sql)
    array_assoc = [[]]
    contador_assoc = 0
    for (id, nome) in cursor:
        array_assoc.insert(contador_assoc, [id, nome])
        contador_assoc = contador_assoc+1
    cursor.close()
    return array_assoc


# Geração de data atual
calendar = str(datetime.date.today())
day = calendar[8:10]
month = calendar[5:7]
year = calendar[0:4]


# GERAÇÃO/FILTRAGEM DE NOMES DOS ASSOCIADOS
assoc = selecionar_associados(con)
for eles in assoc:
    id_assoc = eles[0]
    nome_id = eles[1]
    names_id = names
    names_id = names.replace(" ", "2%b")
    names_id_2 = names.replace(' ', '+')
    # Busca avançada direto no site do DOU
    links = f'\nhttp://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave="+{names_id_2}+"&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{day}.{month}.{year}%3c%3d{day}.{month}.{year}%5d({names_id})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={year}{month}{day}&filtroperiodo={day}%2f{month}%2f{year}+a+{day}%2f{month}%2f{year}&filtrodatainiciosalvar={year}{month}{day}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl'
    # Jogar link no Banco de dados
    insere_link(con, links, id_assoc)

fechar_conexao()
