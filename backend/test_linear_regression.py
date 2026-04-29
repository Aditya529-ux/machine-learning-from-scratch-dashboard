import numpy as np
import matplotlib.pyplot as plt
from models.my_linear_regression import LinearRegression

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([5, 7, 9, 11, 13])

model = LinearRegression(lr=0.01, n_iters=1000)

model.fit(X, y)

predictions = model.predict(X)

print("Predictions:")
print(predictions)

plt.scatter(X, y)
plt.plot(X, predictions)
plt.title("Linear Regression From Scratch")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()