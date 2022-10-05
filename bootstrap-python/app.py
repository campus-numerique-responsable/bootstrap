from flask import Flask
import os
import sys

app = Flask(__name__)


@app.route("/ping")
def ping():
    login = os.environ.get('LOGIN_API_RTE')
    password = os.environ.get('PASSWORD_API_RTE')
    print('login : ' + login, file=sys.stderr)
    print('password : ' + password, file=sys.stderr)
    return "pong"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
