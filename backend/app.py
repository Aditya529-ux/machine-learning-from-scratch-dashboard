from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "ML Backend Running Successfully"

@app.route("/api/predict")
def predict():
    return jsonify({
        "prediction": "Backend Connected Successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)