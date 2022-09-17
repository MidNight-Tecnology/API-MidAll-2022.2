#                                               FILTRO DE DOWNLOAD


#                                               IMPORTS

from datetime import date
from tkinter.font import names
from googletrans import Translator 
import datetime
import requests

#                                               CRIAÇÃO DE ARQUIVO .TXT DO FILTRO

arq = open ("links.txt", "w+")


# #                                              GERAÇÃO DE DATA

trad = Translator()
today = date.today()


# Geração de data atual
# calendar = str(datetime.date.today())

# day = calendar[8:10]

# month = calendar[5:7]

# year = calendar[0:4]


# Geração de data manual
day = str(input('Digite o dia que deseja: '))

month = str(input('Digite o mês que deseja: '))

year = str(input('Digite o ano que deseja: '))


#                                           GERAÇÃO/FILTRAGEM DE NOMES DOS ASSOCIADOS

# Input manual de nome de associados.
names = str(input('Digite o nome do Associado: ')) 

# Ou

# Lista com nomes dos associados que estão cadastrados no banco de dados.
# Ex.:
# names = ['Lucas Pocay Alves da Silva', 'Rodrigo Garcia']
# names = []


names_id = names

names_id = names.replace(" ", "2%b")

names_id_2 = names.replace(' ', '+')


# Busca avançada direto no site do DOU
links = f'\nhttp://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave="+{names_id_2}+"&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{day}.{month}.{year}%3c%3d{day}.{month}.{year}%5d({names_id})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={year}{month}{day}&filtroperiodo={day}%2f{month}%2f{year}+a+{day}%2f{month}%2f{year}&filtrodatainiciosalvar={year}{month}{day}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl'

print(links, file=arq)



#                                             FILTRAGEM DE LINKS EXTERNOS

# Input manual de url não tratado: ?link=%...
# link = str(input('Link para filtrar ')) 

# Ou

# Aqui irá ter a lista de url não tratados(Possivelmente do banco de dados): ?link=%... assim por diante, que será enviado para o banco de dados,
# Ex.:
link = ['?link=%2f2022%2fexecutivo+secao+ii%2fjaneiro%2f20%2fpag_0031_7f795a8d668744d84c57ecadc601b8e0.pdf&pagina=31&data=20/01/2022&caderno=Executivo%20II&paginaordenacao=100031', '?link=%2f2022%2fexecutivo+secao+i%2fsetembro%2f16%2fpag_0045_80434f8a1e32ff34d5425238dcaccb00.pdf&pagina=45&data=16/09/2022&caderno=ExecutivoI&paginaordenacao=100045'] #Lista com os links filtrados do Jr.
# link = []
count = 0

# A partir daqui irá pegar cada link filtrado e irá transformar cada url em um pdf
for x in range(len(link)):
    filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + link[count]
    pdfcreate = requests.get(filterlink_id, stream = True)
    with open(f'PDF\DOU{x+1}.pdf', "wb") as creation:
        creation.write(pdfcreate.content)
    count = count + 1

# print(filterlink_id)









#                                     TESTE DE CÓDIGOS QUE NÃO FORAM IMPLEMENTADOS










#     download(links[x],f'a-pag{x+1}.pdf')

# print(filterlink_id)

# pdfkit.from_string('https://www.google.com', 'names.pdf')

#                                            MÉTODO PARA TRANSFORMAR HTML/URL EM PDF

# urllink = str(input('Digite url que deseja em pdf: '))

    # pdfcreate = requests.get(filterlink_id, stream = True)
    # with open('nomedopdf.pdf', "wb") as creation:
    #     creation.write(pdfcreate.content)


# for x in range(len(link)):
#     filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + link[i]
#     pdfcreate = requests.get(filterlink_id, stream = True)
#     with open('DOU{names}.pdf', "wb") as creation:
#         creation.write(pdfcreate.content)
#     i = i + 1

# print(filterlink_id)