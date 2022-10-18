function  sortedArrayOfNumbers(arr)
{    
    var min = arr[0];
    var max = arr[arr.length-1];
    var result = [];    
    for(var i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            result.push(max);
            max = sortNextMax(arr,max);
        }
        else
        {
            result.push(min);
            min = sortNextMin(arr,min);
        }
    }    
    return result;
}
function sortNextMin(arr,num)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>num)
        {
            return arr[i];
        }
    }
}
function sortNextMax(arr,num)
{
    for(var i=arr.length-1;i>=0;i--)
    {
        if(arr[i]<num)
        {
            return arr[i];
        }
    }
}
var arr = [2, 4, 6, 8, 10];
console.log(sortedArrayOfNumbers(arr));