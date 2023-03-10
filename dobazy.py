import os
import sqlite3
import csv

# config

file_location = os.getcwd()+'/assets/data/dla_gios.csv'
src_file = os.path.isfile(file_location)
db_location = os.getcwd()+'/assets/data/pomiary.db'
db_file = os.path.isfile(db_location)


def data_verification(to_verify):
    """ verification of extracted data and conversion of types """
    
    print("string do weryfikacji ", to_verify)
    tere = [s.replace(';', ',') for s in to_verify]
    tere = tere[0].split(',')
    validated = [str(tere[0]), str(tere[1]), str(tere[2])]
# TODO make list comprehensions
    for a in tere[3:]:
        if a == "" : a = 0.0
        a = float(a)          
        validated.append(a)

    return validated

def add_record():
    pass

def create_db(db):
    """ create a database connection to a SQLite database """

    conn = None
    try:
        conn = sqlite3.connect(db)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()

def create_table(db):
    """ create a table in SQLite database """
    
    conn = sqlite3.connect(db) 
    c = conn.cursor()

    c.execute('''
                CREATE TABLE IF NOT EXISTS pomiar (
        id INTEGER PRIMARY KEY ASC,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        time_zone TEXT NOT NULL,
        empty1  REAL NOT NULL,
        empty2 REAL NOT NULL,
        empty3  REAL NOT NULL,
        press_keller  REAL NOT NULL,
        temp_keller REAL NOT NULL,
        volt  REAL NOT NULL,
        batt  REAL NOT NULL,
        solar  REAL NOT NULL,
        empty9  REAL NOT NULL,
        empty10  REAL NOT NULL,
        empty11  REAL NOT NULL,
        empty12  REAL NOT NULL,
        empty13  REAL NOT NULL,
        rssi  REAL NOT NULL
    );
            ''')
 
    conn.commit()


# TODO maybe try except it's better?

if src_file: 
    with open(file_location, 'r', newline='')as f:
        reader = csv.reader(f)
        lista = list(reader)
        to_verify = lista[-1]
        #data_verification(to_verify)
        print("print82 linia ", data_verification(to_verify))

else:
    print("błąd otwarcia pliku csv")

if db_file: 
    print("baza istnieje")
    add_record()
else:
    print("brak pliku bazy danych")
    create_db(db_location)
    create_table(db_location)


exit()

# row ="20221030;031005;+60;0.9513;5.42;0.7455;1.024;8.91;12.04;4.15;0.00;;;;;;"
row =["20221030","040005","+60",0.9510,5.47,0.7456,1.024,8.91,12.04,4.15,0.00,0.00,0.00,0.00,0.00,0.00,16.00]
# linia = row #.split(",")
# print (linia)
# print(type(linia))


# data = linia[0][:4] + "-" + linia[0][4:6] + "-" + linia[0][-2:] + " " + linia[1][:2] + ":" + linia[1][2:4] + ":" + linia[1][-2:]
# # YYYY-MM-DD HH:MM:SS.SSS

# utworzenie połączenia z bazą przechowywaną na dysku
# lub w pamięci (':memory:')
con = sqlite3.connect('duda.db')

# dostęp do kolumn przez indeksy i przez nazwy
con.row_factory = sqlite3.Row

# utworzenie obiektu kursora
cur = con.cursor()

# tworzenie tabel
# cur.execute("DROP TABLE IF EXISTS pomiar;")

# cur.execute("""
#     CREATE TABLE IF NOT EXISTS pomiar (
#         id INTEGER PRIMARY KEY ASC,
#         datapomiaru varchar(250) NOT NULL,
#         termometr varchar(250) NOT NULL,
#         temperatura varchar(250) NOT NULL
#     )""")

cur.execute('INSERT INTO pomiar (date, time, time_zone, empty1, empty2, empty3, press_keller, temp_keller, volt, batt, solar, empty9, empty10, empty11, empty12, empty13, rssi) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [row])

# wiele rekordów cur.executemany('INSERT INTO pomiar (date, time, time_zone, empty1, empty2, empty3, press_keller, temp_keller, volt, batt, solar, empty9, empty10, empty11, empty12, empty13, rssi) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [row])

# zatwierdzamy zmiany w bazie
con.commit()
