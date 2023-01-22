from flask_sqlalchemy import SQLAlchemy
from flaskext.mysql import MySQL
from flask import Flask
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
DB_NAME = "kupisajt"
mysql = MySQL()
ma = Marshmallow()

app=Flask(__name__)
app.config['SECRET_KEY'] = 'ioahdoah oaihdoah'
app.config['MYSQL_DATABASE_USER'] = 'kupisajt'
app.config['MYSQL_DATABASE_PASSWORD'] = 'eofZPPtWIQ29ugB'
app.config['MYSQL_DATABASE_DB'] = DB_NAME
app.config['MYSQL_DATABASE_HOST'] = '149.102.155.173:3306'
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://kupisajt:eofZPPtWIQ29ugB@149.102.155.173:3306/{DB_NAME}'

mysql.init_app(app)
db = SQLAlchemy(app)
db.init_app(app)
ma.init_app(app) 
