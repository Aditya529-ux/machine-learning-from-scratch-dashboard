import numpy as np

class RMSPropOptimizer:
    def __init__(self, lr=0.01, beta=0.9, epsilon=1e-8):
        self.lr = lr
        self.beta = beta
        self.epsilon = epsilon
        self.s = 0

    def update(self, param, grad):
        self.s = self.beta * self.s + (1 - self.beta) * (grad ** 2)

        param = param - self.lr * grad / (np.sqrt(self.s) + self.epsilon)

        return param