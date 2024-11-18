from flask import Flask, request, redirect, url_for, render_template
import sqlite3
#Application qui ouvre la main Page & créé Tableau Users
def init_db() :
    conn = sqlite3.connect('Drinks_Website.db')
    cursor = conn.cursor()
    #CREATION - Table Users
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS Users (   
                        userId INTEGER PRIMARY KEY,
                        username TEXT NOT NULL,
                        password TEXT NOT NULL,
                        wallet INTEGER,
                        region TEXT
                    )
                    ''')
    #CREATION - Table Cocktails
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS Cocktails (   
                        drinkId INTEGER PRIMARY KEY,
                        name TEXT NOT NULL,
                        description TEXT NOT NULL,
                        Glass TEXT NOT NULL,
                        Garnish TEXT,
                        Origin TEXT,
                        Price INTEGER NOT NULL,
                        Bottle INTEGER      --FK Table LiquorRoom
                    )
                    ''')
    #CREATION - Table pour Relation n-n
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS Achats (   
                        id INTEGER PRIMARY KEY,
                        client INTEGER NOT NULL,    --FK Table Users
                        drink INTEGER NOT NULL      --FK Table CockTails
                    )
                    ''')
    #CREATION - Table Inventory
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS LiquorRoom (   
                        bottleId INTEGER PRIMARY KEY,
                        Bottle TEXT NOT NULL,
                        Alcohol TEXT NOT NULL,
                        Quantity INTEGER NOT NULL,
                        Price INTEGER NOT NULL
                    )
                    ''')
    conn.commit()
    conn.close()
#Initialisation du Flask
app = Flask(__name__)

# -FONCTIONS AVEC @app.route- #
@app.route('/') #Page Principale, le routeur du app, page d'Accueil
def home():
    conn = sqlite3.connect('Drinks_Website.db')
    #variable pour racourcir la variable qui défini le curseur du Tableau
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Cocktails') #cherche dans Table Users
    Drinks = cursor.fetchall()
    conn.close()
    return render_template('home.html', drinks = Drinks) #variable(classe) dans HTML = cursor.fetchall()

# -Ajouter drink- #
@app.route('/add', methods=['GET', 'POST'])
def ajout_drink() :
    #using import request
    if request.method == 'POST':
        name = request.form['cocktail']
        desc = request.form['desc']
        glass = request.form['glass']
        garn = request.form['garnish']
        country = request.form['country']
        price = request.form['price']
        alcohol = request.form['bottle']

        #AMENER les changements dans la BD
        conn = sqlite3.connect('Drinks_Website.db')
        cursor = conn.cursor()
        #Insertion
        TableData = (name, desc, glass, garn, country, price, alcohol)
        cursor.execute('INSERT INTO Cocktails (name, description, Glass, Garnish, Origin, Price, Bottle) VALUES (?, ?, ?, ?, ?, ?, ?)', TableData)
        conn.commit()
        conn.close()
        return redirect(url_for('home')) #variable(classe) dans HTML = cursor.fetchall()
    #SINON, retourne a la page
    return render_template('add_drink.html') #variable(classe) dans HTML = cursor.fetchall()

if __name__ == "__main__" : #'main' prend 2 lignes (privé)
    init_db()
    app.run(debug=True)
