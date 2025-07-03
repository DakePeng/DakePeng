const dotenv = require('dotenv');
dotenv.config(); // Load env variables early

const { MongoClient, ServerApiVersion } = require('mongodb');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`

if (!url) {
  throw new Error("❌ MONGO_URL is not defined in your .env file");
}

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db; // cache db instance

const connectDB = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB and pinged successfully");

    // Set the DB for later access
    db = client.db(process.env.DB_NAME); // Optional: or hardcode db name
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

// Helper to get db instance later
const getDB = () => {
  if (!db) {
    throw new Error("❌ DB not initialized. Call connectDB() first.");
  }
  return db;
};

module.exports = { connectDB, getDB };
