from conector import criar_conexao

con = criar_conexao("localhost", "root", "root", "crud")


def selecionar_links(con):
    cursor = con.cursor()
    sql = "SELECT * FROM filterlinks"
    cursor.execute(sql)
    array_links = []
    array_nomes = []
    # cont = 0
    for link_pdf in cursor:
        array_links.append(link_pdf)
    # cont = cont + 1
    cursor.close()
    return array_links


array_final = selecionar_links(con)

print(len(array_final))
print(array_final)
for array in array_final:
    print(f'{array[1]}  {array[2]}')
