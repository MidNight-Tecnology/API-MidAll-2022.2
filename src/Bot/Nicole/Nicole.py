#                                               IMPORTS


from csv import reader
import PyPDF2


#N
from conector import criar_conexao
#                                               BANCO

nomezin = ['Rafael', 'Maria', 'Luciana Silva', 'FERNANDA APARECIDA BARBOZA', 'João Doria', 'João', 'Pedro', 'Rodrigo Garcia'] #Seria a lista de nomes que se tem cadastrado no banco de dados


#                                               FUNÇÃO QUE FILTRA AS INFORMAÇÕES DOS ASSOCIADOS DENTRO DO PDF

a = 0
while a < qt_pag_cidade: # Um while para percorrer as paginas dos qt_pag_cidade = nome da variavel que armazena as paginas
    a = a + 1
    b = str(a)
    num = b.zfill(4)

pdf = open(f'PDF/PDF_CIDADE/CIDADE_pag_{num}.pdf', 'rb') #Aqui é para colocar o diretorio que o pdf esta sendo direcionado
reader2 = PyPDF2.PdfFileReader(pdf) # Vai ler a variavel pdf depois que ela for aberta



for n in range(reader2.getNumPages()):
    pagina = reader2.getPage(n)
    conteudo = pagina.extractText()
    for paragrafo in conteudo.replace('"',"'").split('\n'):
        if nomezin[7].upper() in paragrafo.upper():# um if para percorrer o nome do associado dentro dos pdf
            print(f'-==--=-=-=-=-=-=-=-=-==--=-=-=-PAGINA DOU_{num} -==--=-=-=-=-=-=-=-=-==--=-=-=-')
            print(paragrafo)
        else:
            print()