
file = open("test.txt", "r")
content = file.readlines()
file.close()
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

for i in lyricList:
    