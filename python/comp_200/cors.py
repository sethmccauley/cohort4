from flask_cors import CORS
from flask import Flask, jsonify, request, render_template, make_response

app = Flask(__name__)
# IMPORTANT!
CORS(app, suppots_credentials=True)

@app.route('/')
def home():
    return 'Nothing'
