import math

# First version using int

def break_up(num):
    lst = []
    power = int(math.floor(math.log(num, 10)))
    for i in range(power + 1):
        lst.append(num // (10 ** power))
        num = num % (10 ** power)
        power -= 1
    return lst

def become_num(lst):
    total = 0;
    multfactor = 10 ** (len(lst) - 1);
    for i in range(len(lst)):
        total += lst[i] * multfactor
        multfactor /= 10
    return total
def iterate1(num):
    num = break_up(num)
    list_of_num = []
    equal = 0
    equal_num = num[0]
    for i in range(len(num)):
        if num[i] == equal_num:
            equal += 1
        else:
            list_of_num.append(equal)
            list_of_num.append(equal_num)
            equal_num = num[i]
            equal = 1
        if i == len(num) - 1:
            list_of_num.append(equal)
            list_of_num.append(equal_num)
    return become_num(list_of_num)




# works but is slow, because I used a list
def iterate2(num):
    list_of_num = []
    equal = 0
    equal_num = num[0]
    for i in range(len(num)):
        if num[i] == equal_num:
            equal += 1
        else:
            list_of_num.append(equal)
            list_of_num.append(equal_num)
            equal_num = num[i]
            equal = 1
        if i == len(num) - 1:
            list_of_num.append(equal)
            list_of_num.append(equal_num)
    return become_n(list_of_num)

def become_n(lst):
    total = 0;
    multfactor = (len(lst) - 1);
    for i in range(len(lst)):
        
        total += int(lst[i]) * (10 ** multfactor )
        multfactor -= 1
    return int(total)




# Best version
def iterate3(num):
    s = ""
    equal = 0
    equalnum = num[0]
    for i in range(len(num)):
        if num[i] == equalnum:
            equal += 1
        else:
            s += str(equal)
            s += str(equalnum)
            equalnum = num[i]
            equal = 1
        if i == len(num) - 1:
            s += str(equal)
            s += str(equalnum)
    return s

lst = [1]
start = '1'
outFile = open('lookandsay.txt', 'w')
for i in range(100):
    t = iterate3(start)
    lst.append(t)
    #outFile.write("Num " + str(i + 1) + ": " + t)
    #outFile.write("\n")
    print(str(i) + " " + str(math.log(int(t), 10)))
    
    start = t
a = 9000000
#for i in range(a, a + 1000000):
#    if i == iterate2(str(i)):
#        print(i)
#print("Done")
outFile.close()






