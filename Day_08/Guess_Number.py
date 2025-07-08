import random
number=random.randint(10,100)

count=0
num=int(input("Guess the Number:"))
count+=1

while number!=num:
    if(num<number):
        num=int(input("Too low! Try Again:"))
        count+=1
    else:
        num=int(input("Too High! Try Again:"))
        count+=1
if(count==1):
    print("Congratulations!! You tried ",count,"Time")
else:
     print("Congratulations!! You tried ",count,"Times")