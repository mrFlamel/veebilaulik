import os
import csv

with open('../nimekiri.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    
    # Skip header (line 0)
    next(reader)

    target_paths = []
    for row in reader:
        if len(row) > 6:  # Ensure the row has at least 6 elements
            target_paths.append("../laulud/" + str(row[6]) + ".html")
    
    target_paths.append("laul.html")

    source_path = input("Veaparanduse faili nimi: ")
    source_path = "../laulud/" + source_path + ".html"


    if not os.path.isfile(source_path):
        raise FileNotFoundError(f"Ei leia faili: {source_path}")

    with open(source_path, 'r', encoding='utf-8') as f:
        content = f.read()
        f.close()

    for target in target_paths:
        with open(target, 'w', encoding='utf-8') as tf:
            tf.write(content)
            tf.close()
        print(f"Uuendatud: {target}")
