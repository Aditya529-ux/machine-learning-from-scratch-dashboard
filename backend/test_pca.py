import numpy as np
import matplotlib.pyplot as plt
from models.pca import PCA

X = np.array([
    [2.5, 2.4],
    [0.5, 0.7],
    [2.2, 2.9],
    [1.9, 2.2],
    [3.1, 3.0],
    [2.3, 2.7],
    [2.0, 1.6],
    [1.0, 1.1],
    [1.5, 1.6],
    [1.1, 0.9]
])

pca = PCA(n_components=1)

X_transformed = pca.fit_transform(X)

print("Original Shape:", X.shape)
print("Reduced Shape:", X_transformed.shape)

print("\nTransformed Data:")
print(X_transformed)

plt.scatter(X[:, 0], X[:, 1])
plt.title("Original Data")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()

plt.scatter(X_transformed, np.zeros_like(X_transformed))
plt.title("PCA Reduced Data")
plt.xlabel("Principal Component 1")
plt.show()