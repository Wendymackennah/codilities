/*a non-empty array  A consisting of N integers is given.The array contains an odd number of elements and each elememt of the array can be paired with another element that has the same value,except for one element that is left unpaired.

For example,in array A such that :

A[0] =9 A[1] =3  A[2] =9
A[3] =3 A[4] =9  A[5] =7
A[6] =9


The elements at indexes 0 and 2 have value 9
the elements at indexes 1 and 3 have value 3 
the elements at indexes 4 and 6 have value 9 
the element at index 5 has value 7 and is unpaired



write  a function:
class Solution {
  public int solution (it [] A;)
}
that,given an array A conisting of N integers fulfilling the above conditions,returns the vakue of the unpaired element.

fOR EXAMPLE,GIVEN ARRAY a SUCH THAT :
A[0]=9    A[1]=3   A[2]=9
A[3]=3    A[4]=9   A[5]=7
A[6]=9

THE FUNCTION SHOULD RETURN 7,AS EXPLAINED IN the example above:


Write an efficient algorithm for the following assumptions:
N is an odd omteger within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000];
all but one of the values in A occur an even number of times 

























def find_odd_one_out(arr):
    result =0
    for num in arr:
        result ^=num
    return result

# Example usage:
my_array = [1, 1, 2, 2, 3, 4, 3, 4, 5,5,7,7,10]
result = find_odd_one_out(my_array)
print(result)