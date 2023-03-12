import csv
import os
import sqlite3

file_location = os.getcwd() + "/assets/data/dla_gios.csv"
src_file = os.path.isfile(file_location)

if src_file:
    with open(file_location, "r", newline="") as f:
        reader = csv.reader(f)
        lista = list(reader)
    print(lista[1])
else:
    print("błąd otwarcia pliku csv")


exit()

# row ="20221030;031005;+60;0.9513;5.42;0.7455;1.024;8.91;12.04;4.15;0.00;;;;;;"
row = [
    "20221030",
    "040005",
    "+60",
    0.9510,
    5.47,
    0.7456,
    1.024,
    8.91,
    12.04,
    4.15,
    0.00,
    0.00,
    0.00,
    0.00,
    0.00,
    0.00,
    16.00,
]
# linia = row #.split(",")
# print (linia)
# print(type(linia))


# data = linia[0][:4] + "-" + linia[0][4:6] + "-" + linia[0][-2:] + " " + linia[1][:2] + ":" + linia[1][2:4] + ":" + linia[1][-2:]
# czas_zimowy = linia[2]
# empty1 = linia[3]
# empty2 = linia[4]
# empty3 = linia[5]
# press_keller = linia[6]
# temp_keller = linia[7]
# volt = linia[8]
# batt = linia[9]
# solar = linia[10]
# empty9 = linia[11]
# empty10 = linia[12]
# empty11 = linia[13]
# empty12 = linia[14]
# empty13 = linia[15]
# rssi = linia[16]

# # YYYY-MM-DD HH:MM:SS.SSS

# print("data i godzina w ISO8601: ", data)
# print("przesunięcie w minutach: ", czas_zimowy)
# print("empty1: ", empty1)
# print("empty2: ", empty2)
# print("empty3: ", empty3)
# print("press_keller: ", press_keller)
# print("temp_keller: ", temp_keller)
# print("volt: ", volt)
# print("batt: ", batt)
# print("solar: ", solar)
# print("empty9: ", empty9)
# print("empty10: ", empty10)
# print("empty11: ", empty11)
# print("empty12: ", empty12)
# print("empty13: ", empty13)
# print("rssi: ", rssi)


# utworzenie połączenia z bazą przechowywaną na dysku
# lub w pamięci (':memory:')
con = sqlite3.connect("duda.db")

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


# print('INSERT INTO pomiar (date, time, time_zone, empty1, empty2, empty3, press_keller, temp_keller, volt, batt, solar, empty9, empty10, empty11, empty12, empty13, rssi) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', row.replace(";", ","))
print(row, " ", len(row))

cur.executemany(
    "INSERT INTO pomiar (date, time, time_zone, empty1, empty2, empty3, press_keller, temp_keller, volt, batt, solar, empty9, empty10, empty11, empty12, empty13, rssi) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [row],
)

# wstawiamy jeden rekord danych
# cur.execute('INSERT INTO klasa VALUES(NULL, ?, ?);', ('1A', 'matematyczny'))
# cur.execute('INSERT INTO klasa VALUES(NULL, ?, ?);', ('1B', 'humanistyczny'))

# wykonujemy zapytanie SQL, które pobierze id klasy "1A" z tabeli "klasa".
# cur.execute('SELECT id FROM klasa WHERE nazwa = ?', ('1A',))
# klasa_id = cur.fetchone()[0]

# tupla "uczniowie" zawiera tuple z danymi poszczególnych uczniów
# uczniowie = (
#    (None, 'Tomasz', 'Nowak', klasa_id),
#    (None, 'Jan', 'Kos', klasa_id),
#    (None, 'Piotr', 'Kowalski', klasa_id)
# )

# wstawiamy wiele rekordów
# cur.executemany('INSERT INTO uczen VALUES(?,?,?,?)', uczniowie)

# zatwierdzamy zmiany w bazie
con.commit()
