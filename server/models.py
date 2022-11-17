from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from functools import wraps
import config
from datetime import datetime, timedelta
import jwt
import os
from uuid import uuid4
db = SQLAlchemy()
def get_uuid():
    return uuid4().hex
class User(db.Model):
    __tablename__ ="users"
    id = db.Column(db.String(32),primary_key=True,unique=True,default=get_uuid)
    name = db.Column(db.String(345),unique=False)
    email = db.Column(db.String(345),unique=False)
    password = db.Column(db.Text,nullable=False)
    # hash = db.relationship('HashTable', backref='users')
    # 
class BlockHash(db.Model):
    __tablename__ ="Hash"
    us_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    id = db.Column(db.String(32),primary_key=True,unique=True)
    nonce = db.Column(db.Integer, unique = True)
    hash = db.Column(db.String,unique=True)

