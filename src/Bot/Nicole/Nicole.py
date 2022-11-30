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


# Inserção de informações do usuário no BD
def insere_info(con, assoc_nome, dia, mes, ano, caderno, pagina, x, email):
    cursor = con.cursor()
    sql = "INSERT INTO emails (nome_assoc, assunto, email, dia, mes, ano, caderno, pagina, createdAt, updatedAt) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    assunto = f'Você foi citado(a) na pagina {x} do diario de hoje.'
    now = datetime.now()
    valores = (assoc_nome, assunto, email, dia, mes, ano, caderno, pagina, now, now)
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
    other = []
    # cont = 0
    for link_pdf in cursor:
        array.append(link_pdf)

    for nl in array:
        array_nomes.append(nl[1])
        array_links.append(nl[2])
        other.append([nl[3],nl[4], nl[5], nl[6], nl[7]])
    # cont = cont + 1
    cursor.close()
    if (op == 1):
        return array_links
    if (op == 2):
        return array_nomes
    if (op == 3):
        return other


array_final = selecionar_links(con, 1)
array_final_nomes = selecionar_links(con, 2)
array_lerdepois = []
other = selecionar_links(con, 3)
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
    array_lerdepois.append([array_final_nomes[cont], cont+1, other[cont][0],other[cont][1],other[cont][2], other[cont][3], other[cont][4]])
    cont = cont+1




for assoc in array_lerdepois:
        # Aqui é para colocar o diretorio que o pdf esta sendo direcionado, na linha de código só está um exemplo do diretório
        pdf = open(f'./PDFS/{assoc[0]}{assoc[1]}.pdf', 'rb')
        # Vai ler a variavel pdf depois que ela for aberta
        reader2 = PyPDF2.PdfFileReader(pdf)

        for n in range(reader2.getNumPages()):
            pagina = reader2.getPage(n)
            conteudo = pagina.extractText()
            for paragrafo in conteudo.replace('"', "'").split('\n'):
                if assoc[0].upper() in paragrafo.upper():  # um if para percorrer o nome do associado dentro dos pdf
                    print(
                        f'-==--=-=-=-=-=-=-=-=-==--=-=-=-PAGINA {assoc[1]} {assoc[0]} -==--=-=-=-=-=-=-=-=-==--=-=-=-')
                    print(paragrafo)

                    # # Jogar informação do associado no bancoasso
                    # con, assoc[0], assoc[1], paragrafo, assoc[2], assoc[3], assoc[4]
                    insere_info(con,assoc[0],assoc[2],assoc[3],assoc[4], assoc[5], assoc[6], assoc[1] ,paragrafo)

                    # Assoc [0] = nome do associado
                    # assoc [1] = id
                    # paragrafo = menção
                    # assoc [2] = data
                    # assoc [3] = caderno
                    # assoc [4] = pagina
        pdf.close()
                    



# Remoção dos pdf's (Joaum)
contadapaga = 1
for apaga in array_final_nomes:
    pdf_files = glob.glob(f'./PDFS/{apaga}{contadapaga}.pdf')
    contadapaga = contadapaga+1
    for pdf_file in pdf_files:
        os.remove(pdf_file)
