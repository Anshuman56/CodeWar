/*Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s
∗
(
s
−
a
)
∗
(
s
−
b
)
∗
(
s
−
c
)
s∗(s−a)∗(s−b)∗(s−c)
​
 
where: 
s
=
a
+
b
+
c
2
s= 
2
a+b+c
​
 

Note: You do not need to round anything. Answers will be tested for correctness within a margin of 0.01.*/


function heron(a, b, c) {
  let s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}