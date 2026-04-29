import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from optimizers.rmsprop import RMSPropOptimizer

df = pd.read_csv("datasets/clean_house_price.csv")

X = df[["Area", "Bedrooms", "Bathrooms", "Garage", "YearBuilt"]].values
y = df["Price"].values

X = X.astype(float)
y = y.astype(float)

X = (X - np.mean(X, axis=0)) / np.std(X, axis=0)

y_mean = np.mean(y)
y_std = np.std(y)
y = (y - y_mean) / y_std

weights = np.zeros(X.shape[1])
bias = 0

optimizer_w = RMSPropOptimizer(lr=0.01)
optimizer_b = RMSPropOptimizer(lr=0.01)

loss_history = []

for _ in range(1000):
    y_pred = np.dot(X, weights) + bias

    loss = np.mean((y - y_pred) ** 2)
    loss_history.append(loss)

    dw = (1 / len(X)) * np.dot(X.T, (y_pred - y))
    db = (1 / len(X)) * np.sum(y_pred - y)

    weights = optimizer_w.update(weights, dw)
    bias = optimizer_b.update(bias, db)

print("Final Loss (RMSProp):")
print(loss_history[-1])

plt.plot(loss_history)
plt.title("RMSProp Loss Curve")
plt.xlabel("Iterations")
plt.ylabel("Loss")

plt.savefig("results/graphs/rmsprop_loss_curve.png")
plt.show()