# Question
https://stackoverflow.com/questions/69906936/regex-pattern-to-not-to-include-zeros/69907156#69907156

I need to match a pattern for validation . I want to match a decimal number where numeric part can have upto 14 digits including + or - without 0 and after decimal has upto 4 digits. Valid patterns are :

    +1.23
    9857.6543
    -745290.0

Invalid patterns are:

  

     0
     0.00
     1.23456

I have tried ^[0-9]{0,14}\.[0-9]{0,4}$.
I am not getting how to match for +,- and 0 condition

# Answer
How about this?
```
^(?!0\.?0*$)[\+\-]?[0-9]{1,14}\.?[0-9]{0,4}$
```
Note: this does not match decimals without a leading 0 like ```.123``` and does not match numbers with spaces in between the + or -. Though, these could be added to the pattern.

Requiring a non-zero digit before a ```.``` eliminates fractions of whole numbers, like 0.123.

Also, if you <b>don't</b> want integers and only want decimals, you will need to modify to make the ```.``` required:
```
^(?!0\.?0*$)[\+\-]?[0-9]{1,14}\.[0-9]{0,4}$
```