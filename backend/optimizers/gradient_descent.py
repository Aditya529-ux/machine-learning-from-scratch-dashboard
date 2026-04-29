import numpy as np

class GradientDescent:
    def __init__(self, lr=0.01):
        self.lr = lr

    def update(self, param, grad):
        param = param - self.lr * grad
        return param