import numpy as np
from optimizers.adam import AdamOptimizer

x = 5.0

optimizer = AdamOptimizer(lr=0.1)

for i in range(100):
    grad = 2 * x
    x = optimizer.update(x, grad)

print("Optimized value using Adam:")
print(x)