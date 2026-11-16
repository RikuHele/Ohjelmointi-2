import json
from flask import Flask, Response, request

with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)

app = Flask(__name__)
@app.route('/translate/<word>')
def translate(word):
    word = word.lower()

    if word in dictionary:
        finnish = dictionary[word]

    else:
        return Response (
        response=json.dumps({"error": "Word not found"}),
        status=404,
        mimetype="application/json"
        )

    return Response(
    response=json.dumps({
        "English": word,
        "Finnish": finnish
    }),
    status=200,
    mimetype="application/json"
    )   

@app.route('/words')
def words():
    words = list(dictionary.keys())
    return Response(
        response=json.dumps(words),
        mimetype="application/json"
    )

@app.route('/add')
def add():
    en = request.args.get("en")
    fi = request.args.get("fi")

    dictionary[en] = fi

    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)

    return Response(
        response=json.dumps({
            "English": en,
            "Finnish": fi
        }),
        status=200,
        mimetype="application/json"
    )

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)