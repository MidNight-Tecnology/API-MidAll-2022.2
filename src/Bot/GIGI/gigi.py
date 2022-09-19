import os 
import PyPDF2 as pdf #pip install pypdf2
from glob import glob #pip install glob


def concatenaPdf(caminho):
    """
    Função procura todos os arquivos pdf do caminho informado
    e, cria uma pasta e armazena um versão em pdf com todos
    arquivos de origem concatenados.
    Argumentos:
        str caminho: diretório dos arquivos de origem
    """
    os.chdir(caminho)

    arquivos = glob('*.pdf')
    
    destino = r'../Sistema_de_gerenciamento_assoc/public/assets/PDF_Final/Arquivo_Final.pdf'

    #Cria o diretório de resultado, caso não exista
    if not os.path.exists('Arquivos'):
        os.makedirs(r'.\Arquivos')
        print('Diretório de destino criado\nProsseguindo...')
    else:
        print('Diretório de destino já existente\nProsseguindo...')

    try:
        #Abertura dos arquivos
        pdfWriter = pdf.PdfFileWriter()

        #Leitura de todos os arquivos do diretório
        for j in range(0, len(arquivos)):
            pdfDoc = open(arquivos[j], 'rb')

            pdfReader = pdf.PdfFileReader(pdfDoc)

            #Adiciona todas as páginas de cada arquivo
            for k in range(0, pdfReader.numPages):
                pagina = pdfReader.getPage(k)
                pdfWriter.addPage(pagina)

            pdfResultado = open(destino, 'ab')
            pdfWriter.write(pdfResultado)
            
            pdfDoc.close()
            pdfResultado.close()
    except Exception as exc:
        print('Administrador: verificar existência de exceções')
        return str(exc)

    print(f'Arquivo gerado em:\n{os.getcwd()}\{destino}')
    return f'Arquivo gerado em:\n{os.getcwd()}\{destino}'


def main():
    """
    Função principal para para definição do caminho e
    execução da função de concatenção de arquivos PDF
    """
    #Informe o caminho desejado nesta variável com o diretorio completo onde estao os pdfs desejados para o merge
    #logo após será gerada uma pasta concatenado com o pdf com o nome concatenado.
    caminho = r'../Sistema_de_gerenciamento_assoc/public/assets/PDFS' 
    response = concatenaPdf(caminho)
    """
    Uso da variável response apenas para conferir retorno da função.
    Caso não tenha esta necessidade, basta suprimir a variável,
    chamando a função diretamente.
    """

main()