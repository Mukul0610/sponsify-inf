import mongoose, {Mongoose} from 'mongoose'

const Mongoodb_url=process.env.MONGOODB_URL;

interface MongooseConnection {
    conn:Mongoose |null;
    promise: Promise<Mongoose>|null;
}

let cached: MongooseConnection= (global as any).mongoose

if(!cached){
    cached=(global as any).mongoose={
        conn:null,promise:null
    }
}

export const connectToDatabase= async ()=>{
    if(cached.conn) return cached.conn;

    if(!Mongoodb_url) throw new Error('Missing Mongoodb_url');

    cached.promise=
        cached.promise ||
        mongoose.connect(Mongoodb_url,{
            dbName:'sponsify',bufferCommands:false
        })

        cached.conn=await cached.promise;

        return cached.conn;
}