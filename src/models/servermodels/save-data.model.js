class save_data{
    constructor(db,collection){
       this.model = db.conn.model(collection)
    }

    save(data){
        this.model = new this.model(data)
        this.model.save(console.log)
    }
}

module.exports = save_data