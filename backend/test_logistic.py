import numpy as np
import matplotlib.pyplot as plt
from models.logistic_regression import LogisticRegression

print("RUNNING FILE...")

# Dataset (2D for visualization)
X = np.array([
    [1, 2],
    [2, 3],
    [3, 3],
    [5, 6],
    [6, 7],
    [7, 8]
])

y = np.array([0, 0, 0, 1, 1, 1])

# Train model
model = LogisticRegression(lr=0.1, epochs=1000)
model.fit(X, y)

predictions = model.predict(X)
print("Predictions:", predictions)

# Plot data points
for i in range(len(X)):
    if y[i] == 0:
        plt.scatter(X[i][0], X[i][1], color='blue')
    else:
        plt.scatter(X[i][0], X[i][1], color='red')

# Decision boundary
x_values = [min(X[:, 0]), max(X[:, 0])]
y_values = []

for x in x_values:
    y_val = -(model.weights[0] * x + model.bias) / model.weights[1]
    y_values.append(y_val)

plt.plot(x_values, y_values, color='green')
plt.title("Decision Boundary")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")

plt.show()