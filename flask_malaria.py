from flask import Flask, render_template, redirect
from pymongo import MongoClient
from scrape import scrape

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017")
db = client.who_malaria
collection = db.scrape_malaria


@app.route("/")
def home():
    return render_template("index.html", malaria=collection.find_one())

@app.route("/scrape", methods=['GET', 'POST'])
def reload():
    collection.update({"_id": 1}, {"$set": scrape()}, upsert = True)
    return redirect("http://localhost:5000/", code=302)
    

if __name__ == '__main__':
    app.run(debug=True)
