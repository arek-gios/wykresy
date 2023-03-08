import os
import sqlite3

historia_temperatury = '.\historia_temperatury.csv'
def pobierz_dane():
    """
    Funkcja zwraca tuplę tupli zawierających dane pobrane z pliku csv
    do zapisania w tabeli.
    """
    print ("robi sie wogóle")
    pomiary = []  # deklarujemy pustą listę
    if os.path.isfile('.\historia_temperatury.csv'):  # sprawdzamy czy plik istnieje na dysku
        print("plik jest")
        with open(historia_temperatury, "r") as zawartosc:  # otwieramy plik do odczytu
            print(historia_temperatury)
            for linia in zawartosc:
                linia = linia.replace("\n", "")  # usuwamy znaki końca linii
                linia = linia.replace("\r", "")  # usuwamy znaki końca linii
#                linia = linia.decode("utf-8")  # odczytujemy znaki jako utf-8
                # dodajemy elementy do tupli a tuplę do listy
                pomiary.append(tuple(linia.split(";")))
    else:
        print ("pliku nie ma")
        print ("Plik z danymi", historia_temperatury, "nie istnieje!")
    duda= tuple(pomiary)
    return duda  # przekształcamy listę na tuplę i zwracamy ją

cwok = pobierz_dane()

print(cwok)

# utworzenie połączenia z bazą przechowywaną na dysku
# lub w pamięci (':memory:')
con = sqlite3.connect('historia_temperatury.db')

# dostęp do kolumn przez indeksy i przez nazwy
con.row_factory = sqlite3.Row

# utworzenie obiektu kursora
cur = con.cursor()

# tworzenie tabel
cur.execute("DROP TABLE IF EXISTS pomiar;")

cur.execute("""
    CREATE TABLE IF NOT EXISTS pomiar (
        id INTEGER PRIMARY KEY ASC,
        datapomiaru varchar(250) NOT NULL,
        termometr varchar(250) NOT NULL,
        temperatura varchar(250) NOT NULL
    )""")

cur.executemany('INSERT INTO pomiar (datapomiaru,termometr,temperatura) VALUES(?,?,?)', cwok)

# wstawiamy jeden rekord danych
#cur.execute('INSERT INTO klasa VALUES(NULL, ?, ?);', ('1A', 'matematyczny'))
#cur.execute('INSERT INTO klasa VALUES(NULL, ?, ?);', ('1B', 'humanistyczny'))

# wykonujemy zapytanie SQL, które pobierze id klasy "1A" z tabeli "klasa".
#cur.execute('SELECT id FROM klasa WHERE nazwa = ?', ('1A',))
#klasa_id = cur.fetchone()[0]

# tupla "uczniowie" zawiera tuple z danymi poszczególnych uczniów
#uczniowie = (
#    (None, 'Tomasz', 'Nowak', klasa_id),
#    (None, 'Jan', 'Kos', klasa_id),
#    (None, 'Piotr', 'Kowalski', klasa_id)
#)

# wstawiamy wiele rekordów
# cur.executemany('INSERT INTO uczen VALUES(?,?,?,?)', uczniowie)

# zatwierdzamy zmiany w bazie
con.commit()