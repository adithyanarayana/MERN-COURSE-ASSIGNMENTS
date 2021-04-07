function countDigit(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}
console.log(countDigit(12345));
console.log(countDigit(23456890));