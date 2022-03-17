# 倒库
from matplotlib import axis
import matplotlib.pyplot as plt  # 画图的
import numpy as np  # 处理数组的
import pandas as pd     #

from math import pow
import math as m
from cProfile import label
from tkinter import font
from turtle import color
from unicodedata import name


s = 'asdad'
# 列表[] 字典{键1：值1，键2：值2}   元组()  集合{}
l = [1, 2, 3, 'eee', [1, 22, 333, 'rrr']]
# 以下是列表的各类方法
l.append('ooo')
l.reverse()
l.insert(2, '3_1')
# 列表切片  左闭右开第一个第三个及以后
l[:2]
l[2:]
# print(l[:2])
# 遍历  for in l
# 字典
# 字典的遍历for i,j in d.items():
#           print(i,j)
d = {'name': 'Jerry', 'sex': 'female', 'phone': '110'}
# print(d.values())
# print(d.keys())
# print(d.items())

# 元组 :()  y=(1,2,3,4,5,6,7)
# y = (1, 2, 3, 4, 5, 6, 7)
# print(y)
# # 转换为字符串  str()
# print(type(str(y)))
# # 导库
# # import 库名 as 别名
# print(m.sin(30))
# # from 库名 import 函数
# print(pow(2, 3))
# ar = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# print(ar)
#   第三方库
''' Numpy matplotlib  pandas  Scikit-learn
    Numpy   提供数组支持    基石，以下库都要依靠他
    matplotlib  强大的可视化工具
    pandas  强大灵活的数据分析和探索工具

'''
# 显示中文
plt.rcParams['font.sans-serif'] = ['SimHei']
# 显示负号
plt.rcParams['axes.unicode_minus'] = False

x = np.linspace(-10, 10, 1000)
y = np.sin(x)+1
z = np.cos(x**2)+1
plt.figure(figsize=(8, 4))
plt.plot(x, y, label='$\sin x+1$', color='red')
plt.plot(x, z, 'b--', label='$\cos x^2+1$')
plt.xlabel('Time(s)')
plt.ylabel('Volt')
plt.title('哈哈')
plt.ylim(0, 2.2)
plt.legend()
# plt.show()
# 随机生成数组      开头 ，结尾     大小
r2 = np.random.randint(20, 100, size=(100, 5))
print(r2)
# 输出了大小
# print(r2.shape)
# print(r2.sum(axis=0))     axis=0求二维数组列的和
# print(r2.sum(axis=1))     axis=1求二维数组行的和
# r2[1:4]                   输出低一行到第五行的数据
