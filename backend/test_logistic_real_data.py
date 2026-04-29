import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from models.logistic_regression import LogisticRegression

df = pd.read_csv("datasets/breast_cancer.csv")

print(df.head())

X = df.drop(["id", "diagnosis"], axis=1).values
y = df["diagnosis"].values

X = X.astype(float)
y = y.astype(float)

X = (X - np.mean(X, axis=0)) / np.std(X, axis=0)

indices = np.random.permutation(len(X))
X = X[indices]
y = y[indices]

split_index = int(0.8 * len(X))

X_train = X[:split_index]
X_test = X[split_index:]

y_train = y[:split_index]
y_test = y[split_index:]

model = LogisticRegression(lr=0.01, n_iters=3000)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

accuracy = np.sum(predictions == y_test) / len(y_test)

print("Accuracy:")
print(accuracy)

plt.scatter(range(len(y_test)), y_test, label="Actual")
plt.scatter(range(len(predictions)), predictions, label="Predicted")
plt.title("Logistic Regression on Breast Cancer Dataset")
plt.xlabel("Samples")
plt.ylabel("Class")
plt.legend()

plt.savefig("results/graphs/logistic_regression_real.png")
plt.show()