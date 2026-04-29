import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from models.pca import PCA

df = pd.read_csv("datasets/iris.csv")

print(df.head())

X = df.iloc[:, :-1].values

X = X.astype(float)

pca = PCA(n_components=2)

pca.fit(X)

X_transformed = pca.transform(X)

print("Original Shape:", X.shape)
print("Transformed Shape:", X_transformed.shape)

plt.scatter(X_transformed[:, 0], X_transformed[:, 1])
plt.title("PCA on Iris Dataset")
plt.xlabel("Principal Component 1")
plt.ylabel("Principal Component 2")

plt.savefig("results/graphs/pca_real_data.png")
plt.show()