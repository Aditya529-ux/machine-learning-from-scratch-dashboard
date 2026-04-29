import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from models.my_linear_regression import LinearRegression

df = pd.read_csv("datasets/clean_house_price.csv")

df = df[df["Price"] < 200000000]

X = df[["Area", "Bedrooms", "Bathrooms", "Garage", "YearBuilt"]].values
y = df["Price"].values

X = X.astype(float)
y = y.astype(float)

X = (X - np.mean(X, axis=0)) / np.std(X, axis=0)

y_mean = np.mean(y)
y_std = np.std(y)

y = (y - y_mean) / y_std

indices = np.random.permutation(len(X))
X = X[indices]
y = y[indices]

split_index = int(0.8 * len(X))

X_train = X[:split_index]
X_test = X[split_index:]

y_train = y[:split_index]
y_test = y[split_index:]

model = LinearRegression(lr=0.001, n_iters=10000)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

predictions = predictions * y_std + y_mean
y_test = y_test * y_std + y_mean

print("First 10 Predictions:")
print(predictions[:10])

plt.figure(figsize=(8,6))
plt.scatter(y_test, predictions)

min_val = min(min(y_test), min(predictions))
max_val = max(max(y_test), max(predictions))

plt.plot([min_val, max_val], [min_val, max_val])

plt.xlabel("Actual Price")
plt.ylabel("Predicted Price")
plt.title("Improved Linear Regression on Housing Dataset")

plt.savefig("results/graphs/improved_linear_regression.png")
plt.show()