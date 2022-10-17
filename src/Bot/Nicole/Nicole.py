#                                               IMPORTS


from csv import reader
import PyPDF2
from conector import criar_conexao
# Imports Marcelo
from array import array
import requests
# Imports Joaum
import os
import glob

#                                               CONEXÃO BANCO

con = criar_conexao("localhost", "root", "root", "crud")

#                                               BANCO

# nomezin = ['Rafael', 'Maria', 'Luciana Silva', 'FERNANDA APARECIDA BARBOZA', 'João Doria', 'João', 'Pedro', 'Rodrigo Garcia'] #Seria a lista de nomes que se tem cadastrado no banco de dados


# Inserção de informações do usuário no BD
def insere_info(con, assoc_nome):
    cursor = con.cursor()
    sql = "INSERT INTO emails (nome_assoc, assunto, email, createdAt, updatedAt) values (%s, %s, %s, %s)"
    valores = (assoc_nome, '')
    cursor.execute(sql, valores)
    cursor.close()
    con.commit()


# Selecionar os usuários no banco
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

# Seletor de links filtrados (Marcelo)
def selecionar_links(con):
    cursor = con.cursor()
    sql = "SELECT * FROM links_de_pdf_filtrados"
    cursor.execute(sql)
    array_links = [[]]
    cont = 0
    for link in cursor:
        array_links.append(cont[link[1], link[2]])
    cont = cont + 1
    cursor.close()
    return array_links

array_final = selecionar_links()
num = len(array_final)
for links in range(num):
    print(array_final[[0], [1]])



#                                               FUNÇÃO QUE FILTRA AS INFORMAÇÕES DOS ASSOCIADOS DENTRO DO PDF

# Geração do download via html (Marcelo)
for x in range(len(array_final)):
        filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + array_final
        pdfcreate = requests.get(filterlink_id, stream=True)
        with open(f'../../Sistema_de_gerenciamento_de_assoc/public/assets/PDFS/DOU{x+1}.pdf', "wb") as creation:
            creation.write(pdfcreate.content)
        count = count + 1

assoc = selecionar_associados(con)
count = len(assoc)

a = 0
while a < x: # Um while para percorrer as paginas (qt_pag_cidade = nome da variavel que armazena as paginas), na linha de código só está um exemplo dá variavel;
    a = a + 1
    b = str(a)
    num = b.zfill(4)

pdf = open(f'../../Sistema_de_gerenciamento_de_assoc/public/assets/PDFS/DOU{num}.pdf', 'rb') #Aqui é para colocar o diretorio que o pdf esta sendo direcionado, na linha de código só está um exemplo do diretório
reader2 = PyPDF2.PdfFileReader(pdf) # Vai ler a variavel pdf depois que ela for aberta

for i in range(count):
    assoc_nome = str(assoc[i])

for n in range(reader2.getNumPages()):
    pagina = reader2.getPage(n)
    conteudo = pagina.extractText()
    for paragrafo in conteudo.replace('"',"'").split('\n'):
        if assoc_nome.upper() in paragrafo.upper():# um if para percorrer o nome do associado dentro dos pdf
            print(f'-==--=-=-=-=-=-=-=-=-==--=-=-=-PAGINA DOU_{num} -==--=-=-=-=-=-=-=-=-==--=-=-=-')
            print(paragrafo)
            
            # Jogar informação do associado no banco
            insere_info(con, paragrafo, assoc_nome)

        else:
            print()

# Remoção dos pdf's (Joaum)

            
pdf_files = glob.glob(f'../../Sistema_de_gerenciamento_de_assoc/public/assets/PDFS/DOU{num}.pdf')

for pdf_file in pdf_files:
    os.remove(pdf_file)
