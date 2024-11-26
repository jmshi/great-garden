import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# Define the function to fit
def func(x, a, b, c):
    return a * (b ** x) + c

# Generate some sample data
xdata = np.linspace(1, 50, 50)
openFile = open("data/log_lookandsay.txt", "r")
ydata = []
for line in openFile:
    ydata.append(float(line))


# Fit the curve
popt, pcov = curve_fit(func, xdata, ydata)
print("popt"):
print(popt)
print("pcov")
print(pcov)
# Plot the data and the fitted curve
plt.plot(xdata, ydata, 'o', label='data')
plt.plot(xdata, func(xdata, *popt), '-', label='fit')
plt.xlabel('Iteration')
plt.ylabel('Log Value')
plt.legend()
plt.show()
openFile.close()
