from database import get_connection

try:
    conn = get_connection()
    print("Database Connected Successfully")

    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE();")
    print(cursor.fetchone())

    conn.close()

except Exception as e:
    print(e)