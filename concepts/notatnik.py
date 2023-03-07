

# row ="20221030;031005;+60;0.9513;5.42;0.7455;1.024;8.91;12.04;4.15;0.00;;;;;;"
row ="20221030;040005;+60;0.9510;5.47;0.7456;1.024;8.91;12.04;4.15;0.00;;;;;;16"
linia = row.split(";")
print (linia)
print(type(linia))


data = linia[0][:4] + "-" + linia[0][4:6] + "-" + linia[0][-2:] + " " + linia[1][:2] + ":" + linia[1][2:4] + ":" + linia[1][-2:]
czas_zimowy = linia[2]
empty1 = linia[3]
empty2 = linia[4]
empty3 = linia[5]
press_keller = linia[6]
temp_keller = linia[7]
volt = linia[8]
batt = linia[9]
solar = linia[10]
empty9 = linia[11]
empty10 = linia[12]
empty11 = linia[13]
empty12 = linia[14]
empty13 = linia[15]
rssi = linia[16]

# YYYY-MM-DD HH:MM:SS.SSS

print("data i godzina w ISO8601: ", data)
print("przesunięcie w minutach: ", czas_zimowy) 
print("empty1: ", empty1)
print("empty2: ", empty2)
print("empty3: ", empty3)
print("press_keller: ", press_keller)
print("temp_keller: ", temp_keller)
print("volt: ", volt)
print("batt: ", batt)
print("solar: ", solar)
print("empty9: ", empty9)
print("empty10: ", empty10)
print("empty11: ", empty11)
print("empty12: ", empty12)
print("empty13: ", empty13)
print("rssi: ", rssi)


