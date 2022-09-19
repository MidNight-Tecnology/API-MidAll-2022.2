import mysql.connector

def criar_conexao(host, user, passw, db):
    return mysql.connector.connect(host = host, user = user, password = passw, database = db)
