from optimizers.gradient_descent import GradientDescent

x = 5.0

optimizer = GradientDescent(lr=0.1)

for i in range(100):
    grad = 2 * x
    x = optimizer.update(x, grad)

print("Optimized value using Gradient Descent:")
print(x)