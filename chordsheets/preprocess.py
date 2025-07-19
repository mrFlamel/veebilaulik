
file = open("test.txt", "r")
content = file.readlines()
file.close()
for idx, i in enumerate(content):
    content[idx] = i.rstrip()
print(content)

chordList = []
lyricList = []

chords = True
for i in content:
    if chords == True:
        chords = False
        chordList.append(i)
    else:
        chords = True
        lyricList.append(i)

chordLocations = []
chordStarts = False
for i in chordList:
    for idx, l in enumerate(i):
        if l == " ":
            chordStarts = False
            continue
        else:
            if chordStarts:
                continue
            else:
                chordStarts = True
                chordLocations.append(idx)
    chordLocations.append(" ")
print(chordLocations)

for i in lyricList:
    for l in chordLocations:
        if l == " ":
            chordLocations.remove(l)
            break
        else:
            print(i)
            print(l)
            print(i[l-1])
            if i[l-1] == " ":
                continue
            else:
                print("oi")
            
            
            
            

print(chordLocations)