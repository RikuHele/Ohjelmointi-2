from flask import Flask, jsonify

app = Flask(__name__)
@app.route('/prime_number/<int:number>')
def prime_number(number):
    isPrime = number > 1

    for i in range(2, number):
        if number % i == 0:
            isPrime = False
            break

    return jsonify ({
        "Number": number,
        "isPrime": isPrime
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)