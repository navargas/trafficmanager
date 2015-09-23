#!/usr/bin/env python

import sys

def main(xsize, ysize, xcount, ycount, xgap=0, ygap=0, inital_xgap=0, inital_ygap=0):
  #  print('Size', xsize,ysize)
  #  print('NumberOfItems', xcount,ycount)
  #  print('Padding', xgap, ygap)
  #  print('Frame', inital_xgap, inital_ygap)
  print('\n\n<!-- AUTO GEN TAGS BY NICK VARGAS -->')
  y = inital_ygap
  x = inital_xgap
  for xitem in xrange(xcount):
    for yitem in xrange(ycount):
      print('<view id=\'coord{0}-{1}\' viewBox=\'{2} {3} {4} {5}\' />'.format(xitem,yitem,x,y,xsize,ysize))
      y += ygap + ysize
    y = inital_ygap
    x += xgap + xsize
  print('<!-- END AUTO GEN TAGS -->')




main(
  int(sys.argv[1]),
  int(sys.argv[2]),
  int(sys.argv[3]),
  int(sys.argv[4]),
  xgap=int(sys.argv[5]), ygap=int(sys.argv[5]),
  inital_xgap=int(sys.argv[6]), inital_ygap=int(sys.argv[6])
)
