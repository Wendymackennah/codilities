/*
You are given a list of N transfers(numbered from 0 to N-1) between 2 banks: bank A and bank B. The K-th transfer is described by two values:
1. R[K] (either "A" or "B") representing the recipient(the bank the transfer is sent to);
2. V[K] denoting the value sent via the transfer 


R = receipient = Bank A or Bank B
V = value (how much is being sent )

minimum balance  0+ 

output = [bank A, bank B]

All transfers are completed in the order they appear on the list The banks fo not want to go in debt(in other words, their account balance may not drop below 0). What minimum intiial account balance in eachh bank is necessary in order to complete the transfers?

Write a function 
function solution (R, V);

that, given a string R and an array of integers V, both of length N returns an array of 2 integers. The integers shhould represent the minimum initial account balances for banks A and B in the following order : [bank A, bank B]

Result array should be returned as an array of integers. 

Examples
1. given R =" BAABA" and V = [2, 4, 1, 1, 2] the function should return [2,4]. 




2. Given R =" ABAB" and V = [100], the function should return [100,0]

Write an efficient algorithm for the following assumptions 
1. string R and array V are both of length N;
2. N is an integer within the range [1..100,000]
3. each element of array V is an integer within the range [1.. 10,000]
4. String R is made only of the characters 'A' and /or 'B'

*/



function solution(R, V){

    // variable for min amount 
    let minA = 0
    let minB = 0 

    // variable for current balance 
    let balA = 0
    let balB = 0

    // iterate through the bank transfers and find out who is receiving the transfer and how much theyre receiving 
    /// A B B A  = BANKS RECEIVING THE MONEY 
    /// 2 1 2 1  = Values/ amounts transfered 
    for (let i =0 ; i < R.length ; i++){
        if(R[i] === "A"){
            balA += V[i]
            balB -= V[i] 
            
            if(balB < minB){
                minB = balB
            
            }
        }
        else if(R[i] === "B"){
            balB += V[i]
            balA -= V[i]

            if(balA < minA){
                minA = balA 
            }
        } 
    }


    return [Math.abs(minA), Math.abs(minB)]
    //return [minA, minB]

}

/*
def 

*/

