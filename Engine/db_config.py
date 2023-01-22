from flask_sqlalchemy import SQLAlchemy
from flaskext.mysql import MySQL
from flask import Flask
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
DB_NAME = "drs-project-313635ceea"
mysql = MySQL()
ma = Marshmallow()

app=Flask(__name__)
app.config['SECRET_KEY'] = 'ioahdoah oaihdoah'
app.config['MYSQL_DATABASE_USER'] = 'root-f35a'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Slatkamalasladakja123!'
app.config['MYSQL_DATABASE_DB'] = DB_NAME
app.config['MYSQL_DATABASE_HOST'] = 'mysql.gb.stackcp.com:52926'
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://root-f35a:Slatkamalasladakja123!@mysql.gb.stackcp.com:52926/{DB_NAME}'

mysql.init_app(app)
db = SQLAlchemy(app)
db.init_app(app)
ma.init_app(app) 
