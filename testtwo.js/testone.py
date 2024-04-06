
# Write a function 
# function solution (R, V);

# that, given a string R and an array of integers V, both of length N returns an array of 2 integers. The integers shhould represent the minimum initial account balances for banks A and B in the following order : [bank A, bank B]

def solution(R,V):
    minA = 0
    minB= 0

    balA = 0
    balB = 0

    for i in range(len(R)):
        if R[i] == "A" :
            balA += V[i]
            balB -= V[i]


        if (balB < minB):
          minB = balB
        elif
          R[i] == "A"



        if R[i] == "B":
         balB += V[i]
         balA -= V[i]

         if balA < minA:
           minA = balA

      
            
        

    
