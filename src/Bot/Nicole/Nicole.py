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
from datetime import datetime


#                                               CONEXÃO BANCO

con = criar_conexao("localhost", "root", "root", "crud")

#                                               BANCO

# nomezin = ['Rafael', 'Maria', 'Luciana Silva', 'FERNANDA APARECIDA BARBOZA', 'João Doria', 'João', 'Pedro', 'Rodrigo Garcia'] #Seria a lista de nomes que se tem cadastrado no banco de dados


# Inserção de informações do usuário no BD
def insere_info(con, assoc_nome, x, email):
    cursor = con.cursor()
    sql = "INSERT INTO emails (nome_assoc, assunto, email, createdAt, updatedAt) values (%s, %s, %s, %s, %s)"
    assunto = f'Você foi citado(a) na pagina {x} do diario de hoje.'
    now = datetime.now()
    valores = (assoc_nome, assunto, email, now, now)
    cursor.execute(sql, valores)
    cursor.close()
    con.commit()


# Selecionar os usuários no banco
# Seletor de links filtrados (Marcelo)
def selecionar_links(con, op):
    cursor = con.cursor()
    sql = "SELECT * FROM filterlinks"
    cursor.execute(sql)
    array = []
    array_nomes = []
    array_links = []
    # cont = 0
    for link_pdf in cursor:
        array.append(link_pdf)

    for nl in array:
        array_nomes.append(nl[1])
        array_links.append(nl[2])
    # cont = cont + 1
    cursor.close()
    if (op == 1):
        return array_links
    if (op == 2):
        return array_nomes


array_final = selecionar_links(con, 1)
array_final_nomes = selecionar_links(con, 2)
# num = len(array_final)
# for links in range(num):
#     print(array_final)


#                                               FUNÇÃO QUE FILTRA AS INFORMAÇÕES DOS ASSOCIADOS DENTRO DO PDF

# Geração do download via html (Marcelo)
cont = 0
for x in array_final:
    filterlink_id = 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx' + \
        str(array_final[cont])
    pdfcreate = requests.get(filterlink_id, stream=True)
    with open(f'./PDFS/{array_final_nomes[cont]}{cont+1}.pdf', "wb") as creation:
        creation.write(pdfcreate.content)
    cont = cont+1


a = 0
# # Um while para percorrer as paginas (qt_pag_cidade = nome da variavel que armazena as paginas), na linha de código só está um exemplo dá variavel;
while (a <= cont):
    a = a + 1
    b = str(a)
    num = b.zfill(4)


cont = len(array_final)
numero = 1
for assoc_nome in array_final_nomes:
    while numero <= cont:
        # Aqui é para colocar o diretorio que o pdf esta sendo direcionado, na linha de código só está um exemplo do diretório
        pdf = open(f'./PDFS/{assoc_nome}{numero}.pdf', 'rb')
        # Vai ler a variavel pdf depois que ela for aberta
        reader2 = PyPDF2.PdfFileReader(pdf)

        for n in range(reader2.getNumPages()):
            pagina = reader2.getPage(n)
            conteudo = pagina.extractText()
            for paragrafo in conteudo.replace('"', "'").split('\n'):
                if assoc_nome.upper() in paragrafo.upper():  # um if para percorrer o nome do associado dentro dos pdf
                    print(
                        f'-==--=-=-=-=-=-=-=-=-==--=-=-=-PAGINA {num} {assoc_nome}-==--=-=-=-=-=-=-=-=-==--=-=-=-')
                    print(paragrafo)

                    # # Jogar informação do associado no banco
                    insere_info(con, assoc_nome, num, paragrafo)
        numero = numero+1

# Remoção dos pdf's (Joaum)
contadapaga = 1
for apaga in array_final_nomes:
    pdf_files = glob.glob(f'./PDFS/{apaga}{contadapaga}.pdf')
    contadapaga = contadapaga+1
    for pdf_file in pdf_files:
        os.remove(pdf_file)
