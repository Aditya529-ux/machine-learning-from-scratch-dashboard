import numpy as np
from optimizers.rmsprop import RMSPropOptimizer

x = 5.0

optimizer = RMSPropOptimizer(lr=0.1)

for i in range(100):
    grad = 2 * x
    x = optimizer.update(x, grad)

print("Optimized value using RMSProp:")
print(x)