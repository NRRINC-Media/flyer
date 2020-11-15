import mysql.connector
# i know nothing about python, didnt want to use PHP because python comes with most Linux Distros.
mydb = mysql.connector.connect(
  host="localhost",
  user="myusername",
  password="mypassword"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM customers")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)