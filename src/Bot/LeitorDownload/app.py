#                                               FILTRO DE DOWNLOAD


#                                               IMPORTS

from csv import reader
import PyPDF2
from ast import If
from datetime import date
import webbrowser
from googletrans import Translator 
import requests
import datetime
from nturl2path import url2pathname

#                                               CRIAÇÃO DE ARQUIVO .TXT DO FILTRO

arq = open ("links.txt", "w+")


#                                               GERAÇÃO DE DATA ATUAL

trad = Translator()
today = date.today()

calendar = str(datetime.date.today())

day = calendar[8:10]

mes = calendar[5:7]

ano = calendar[0:4]


#                                              GERAÇÃO DE NOMES DOS ASSOCIADOS

# names = str(input('Digite o nome do Associado: '))

names = ['Lucas Pocay Alves da Silva', 'Rodrigo Garcia'] #Nome do amiguinho 

names_id = names

names_id = names.replace(" ", "2%b")

names_id_2 = names.replace(' ', '+')

links = f'\nhttp://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave="+{names_id_2}+"&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{day}.{mes}.{ano}%3c%3d{day}.{mes}.{ano}%5d({names_id})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={ano}{mes}{day}&filtroperiodo={day}%2f{mes}%2f{ano}+a+{day}%2f{mes}%2f{ano}&filtrodatainiciosalvar={ano}{mes}{day}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl'

print(links, file=arq)

# 01000110 01100001 01110100 01100101 01100011 00100000 01101100 01101001 01111000 01101111 