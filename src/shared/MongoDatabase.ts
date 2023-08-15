import { Collection, Db, MongoClient, MongoClientOptions, ObjectId, ServerApiVersion, OptionalId } from "mongodb";

const uri = "mongodb+srv://mongo:vhyOpdNivWASKrXX@cluster0.roluhax.mongodb.net/?retryWrites=true&w=majority";

export class MongoDatabase {
  public db: Db;

  constructor(database: string, connectionString: string) {
    let client: MongoClient = new MongoClient(connectionString, 
      {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    this.db = client.db(database);
    //this.collection = this.database.collection(collection);
  }

  public InsertRecord<T>(table: string, record: T): Boolean {
    try {
      let collection = this.db.collection<T>(table);
      collection.insertOne(record as OptionalId<T>);
      return true;
    }
    catch (error) {
      console.error(error.message);
      return false;
    }
  }

  public LoadRecordById<T>(table: string, id: string): T | void {
    try {
      let collection = this.db.collection<T>(table);
      let filter: any = { _id: id }; //! had to use any here because theres an error with Filter<T> and i can't solve it =C
      return collection.findOne(filter);
    } catch (error) {
      console.error(error.message);
      return;
    }
  }

  public async LoadRecordsByFilter<T>(table: string, filter: any): Promise<Array<T>> { //! Change the any from the filter
    try {
      let collection = this.db.collection<T>(table);
      if (filter === null) 
        return await collection.find().toArray();
      return await collection.find(filter).toArray();
    } catch (error) {
      console.error(error.message);
      return;
    }
  }

  public async LoadAllRecordsWithPagination<T>(table: string, currPage: number, qtPages: number): Promise<Array<T>> {
    try {
      let collection = this.db.collection<T>(table);
      return await collection.find().toArray();
    } catch (error) {
      console.error(error.message);
      return;
    }
  }
  //TODO - Put pagination here :)
  


}