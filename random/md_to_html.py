#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Aug 23 10:10:54 2020

@author: tfinney
"""

import markdown2
import sys
# import argparse

html_file = 'boilerplate.html'

with open(html_file,'r') as f:
    raw_html = f.read()
    f.close()
    
header = raw_html[:389]
footer = raw_html[389:]


if len(sys.argv) == 2:
    md_file = sys.argv[1]
else:
    print('No MD file provded!')
    exit()

#This is for debugging
# md_file = 'test.md'


with open(md_file,'r') as f:
    raw_md = f.read()
    f.close()
    

# print(raw_md)

markdowner = markdown2.Markdown()

proc_md = markdowner.convert(raw_md)


new_file_text  = header + proc_md + footer

out_file_name = md_file[:-3] + '.html'

f = open(out_file_name, 'w')
f.write(new_file_text)
f.close()

