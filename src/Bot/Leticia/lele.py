#                                       IMPORTS

from reportlab.pdfgen import canvas


#                                       BANCO
lista_n = ['Rafael', 'Lindomar'] #Nomes dos associados do banco


#                                       FUNÇÃO QUE GERA NOVOS PDF'S COM A INFORMAÇÃO FILTRADA

a = 0
a = a + 1
b = str(a)
num = b.zfill(4)

def GeneratePDF(lista):

    
    try:
        nome_pdf = lista_n[1]#Titulo que o PDF será salvo
        pdf = canvas.Canvas('{}.pdf'.format(nome_pdf)) 
        x = 720
        for nomes,informa in lista.items():
            x -= 20
            pdf.drawString(100,x, '{} : {}'.format(nomes,informa)) #Campos que vão ter no pdf e suas formatações
        pdf.setTitle(nome_pdf)
        pdf.setFont("Helvetica-Oblique", 14)
        pdf.drawString(100,750, f'Informações do Associado '+lista_n[1]+':') #formatação do subtitulo
        pdf.setFont("Helvetica-Bold", 12)
        pdf.drawString(100,724, 'Informações')#Formatação das informações de texto
        pdf.save()
        print('{}.pdf criado com sucesso!'.format(nome_pdf))
    except:
        print('Erro ao gerar {}.pdf'.format(nome_pdf))

lista_i = ['Artigo 2° - O crédito aberto pelo artigo anterior será coberto com recursos a que alude o inciso III, do § 1°, do artigo 43, da Lei Federal n° 4 320, de 17 de março de 1964, de conformidade com a legislação discriminada na Tabela 3, anexa.Artigo 3° - Fica alterada a Programação Orçamentária da Despesa do Estado, estabelecida pelo Anexo, de que trata o artigo 8°, do Decreto n° 66.436, de 13 de janeiro de 2022, de conformidade com a Tabela 2, anexa.Artigo 4° - Este decreto entra em vigor na data de sua publicação.Palácio dos Bandeirantes, 5 de outubro de 2022RODRIGO GARCIAMarcos Rodrigues PenidoSecretário de GovernoNelson Baeta Neves Filho Secretário de Orçamento e GestãoFelipe Scudeler SaltoSecretário da Fazenda e PlanejamentoCauê MacrisSecretário-Chefe da Casa CivilPublicado na Secretaria de Governo, aos 5 de outubro de 2022.']
lista = {f'Processo do '+lista_n[1]+'': f''+lista_i[0]+''} #Nome + informção
GeneratePDF(lista)