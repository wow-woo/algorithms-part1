# Algorithms, Part 1

Quick doesn't mean efficiency is great.
you can implement quickly, rather than good code.

<br/>

## Quick-find

- Eager approach
- n^2
- too slow
- easy to implement

## Quick-union

- lazy approach
- Just Union to root

## Weighted Quick-union

- smaller tree points to bigger tree
- depth of tree determine time complexity
- shorten route to root
- fast, log N
- x is node in tree.
- when depth of x increases ?
- depth increases by 1 as smaller tree merge in bigger tree.
- the number of nodes in tree at least doubles (bigger tree >= smaller tree).
- n : maximum depth. // [X] Union to root here.
- log N : maximum depth. // [0]
- 2 ^ () = n
- () === log N

## Quick-union with path compression

- flatten route from selected node to root.
- might as well make all nodes on route to root point to root.
