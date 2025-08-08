import csv

faili_nimi = input("Soovitud faili nimi: ")
fail = "../akordifailid/" + faili_nimi + ".txt"
keel = input("Sihtkeel: ")
sihtfail = "../akordifailid/" + faili_nimi + "_" + keel + ".txt"


f = open(fail, "r")
read = f.readlines()
f.close()

uus_fail = []
jata_vahele = True
for i in read:
    if i.startswith("[") or i == "\n":
        uus_fail.append(i)
        continue
    if jata_vahele:
        jata_vahele = False
        uus_fail.append(i)
        continue
    jata_vahele = True
    tolge = input(i)
    if tolge == "exit":
        raise SystemExit(0)
    uus_fail.append(tolge + "\n")
    
siht = open(sihtfail, "x")
siht.writelines(uus_fail)
siht.close()


print('Fail asukohas "' + sihtfail + '" loodud.')

rows = []
with open("../index.csv", mode='r', newline='') as file:
    reader = csv.reader(file)
    for row in reader:
        if len(row) > 8 and row[8] == faili_nimi:
            row[12] = row[12] + "/" + keel
        rows.append(row)

# Write updated rows back to file
with open("../index.csv", mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(rows)
print("Keele lisamine õnnestus!")