import csv
import os
import shutil
from collections import deque

with open('../index.csv', 'r', newline='') as file:
    last_line = deque(file, maxlen=1)[0]
new_row = []
new_row.append(str(int(last_line.strip().split(',')[0])+1).zfill(4))

new_row.append(input("Laulu pealkiri: "))
new_row.append(input("Originaali pealkiri: "))
new_row.append(input("Viisi autor: "))
new_row.append(input("Sõnade autor: "))
new_row.append(input("Seade autor: "))
new_row.append(input("Tõlke autor: "))
new_row.append(input("Autoriõigused: "))
new_row.append(input("Faili nimi: "))
new_row.append(input("Olemasolev formaat (a/p/v): "))
new_row.append(input("Helistik: "))
new_row.append(input("Teemad (eraldatud /-ga): "))
new_row.append(input("Keeled (eraldatud /-ga) [nt: et/en]: "))



with open('../index.csv', 'a', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(new_row)



def clone_and_move_file(original_filename, destination_directory, new_filename):
    destination_path = os.path.join(destination_directory, new_filename)
    shutil.copy2(original_filename, destination_path)
    print(f"Fail '{original_filename}' kopeeritud ja liigutatud kausta '{destination_path}'.")

clone_and_move_file("laul.html", os.path.join("..", "laulud") , new_row[8]+".html")