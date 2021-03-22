from mlxtend.preprocessing import minmax_scaling
import numpy as nummpy
import pandas as pandas
x = np.array([1, 10, 7, 8, 21, 13, 15])

minmax_scaling(x, columns=[0, 1])
