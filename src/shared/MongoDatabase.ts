import { Collection, Db, MongoClient, MongoClientOptions, ObjectId, ServerApiVersion, OptionalId } from "mongodb";

const uri = "mongodb+srv://mongo:vhyOpdNivWASKrXX@cluster0.roluhax.mongodb.net/?retryWrites=true&w=majority";

export class MongoDatabase {
  private client: MongoClient;
  public db: Db;

  constructor(database: string, connectionString: string) {
    this.client = new MongoClient(connectionString, 
      {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    this.db = this.client.db(database);
  }

  public async InsertRecord<T>(table: string, record: T): Promise<Boolean> {
    try {
      await this.client.connect();
      let collection = this.db.collection<T>(table);
      await collection.insertOne(record as OptionalId<T>);
      return true;
    }
    catch (error) {
      console.error(error.message);
      return false;
    } finally {
      await this.client.close();
    }
  }

  public async LoadRecordById<T>(table: string, id: ObjectId): Promise<T> {
    try {
      await this.client.connect();
      let collection = this.db.collection<T>(table);
      let filter = { _id: id };
      return collection.find(filter as any).toArray()[0]; //! had to use any here because theres an error with Filter<T> and i can't solve it =C
    } catch (error) {
      console.error(error.message);
      return;
    } finally {
      await this.client.close();
    }
  }

  public async LoadRecordsByFilter<T>(table: string, filter: any): Promise<Array<T>> { //! Change the any from the filter
    try {
      await this.client.connect();
      let collection = this.db.collection<T>(table);
      if (filter === null) 
        return await collection.find().toArray();
      return await collection.find(filter).toArray();
    } catch (error) {
      console.error(error.message);
      return;
    } finally {
      await this.client.close();
    }
  }

  public async LoadAllRecordsWithPagination<T>(table: string, currPage: number, qtPages: number): Promise<Array<T>> {
    // ? Since getting all 20k+ results take a while, i added pagination.
    try {
      await this.client.connect();
      let collection = this.db.collection<T>(table);
      return await collection.find().skip(qtPages * currPage).limit(qtPages).toArray();
    } catch (error) {
      console.error(error.message);
      return;
    } finally {
      await this.client.close();
    }
  }
}