import pymysql

def get_connection():
    return pymysql.connect(
        host="127.0.0.1",
        port=3306,
        user="root",
        password="",
        database="accident_detection",
        cursorclass=pymysql.cursors.DictCursor
    )