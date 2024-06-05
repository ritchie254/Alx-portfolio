#!/usr/bin/python3

"""
     flask apllication
"""

from flask import Flask, render_template, url_for, redirect, request, jsonify


app = Flask(__name__)

all_user = []
@app.route("/login", methods=["GET", "POST"], strict_slashes=False)
def login():
    """
        login page view page
    """
    if request.method == "POST":
        email = request.form['email'].lower()
        password = request.form['password'].lower()
        user = {"email":email, "password":password}
        all_user.append(user)
        return redirect('dashboard')
    return render_template("login.html")

@app.route("/signup", methods=["GET", "POST"], strict_slashes=False)
def signup():
    """
        signup page
    """
    if request.method == "POST":
        username = request.form['username'].lower()
        email = request.form['email'].lower()
        password = request.form['password']
        confirmed = request.form['confirmed_password']
        return redirect(url_for('dashboard'))
    return render_template("signup.html")

@app.route('/reset', strict_slashes=False)
def reset():
    """
        reseting user password
    """
    return render_template("password_reset.html")

@app.route("/dashboard", strict_slashes=False)
def dashboard():
    """
        displays the dashboard of the website
    """
    return render_template("dashboard.html")

@app.route("/", strict_slashes=False)
def home():
    """
        project landing/home page
    """
    return render_template("index.html")


@app.route("/about", strict_slashes=False)
def about():
    """
        about page for the website
    """
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
