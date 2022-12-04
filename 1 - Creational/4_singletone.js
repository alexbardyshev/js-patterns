// This pattern creates only one instance of certain class

// e.g It is used in Mongodb for get rid of not necessary connections

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }

    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySql')
console.log(mysql.getData())

const pg = new Database('PostgreSQL')
