import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Attempting to connect database...");

    
    await mongoose.connect(process.env.MONGO_URI, {

      
      serverSelectionTimeoutMS: 30000, // Increased timeout if needed
      socketTimeoutMS: 45000,          // Increased socket timeout if needed
    }
     
  );

  console.log("Attempting to connect database...   tryying ....");
    
    console.log("Database connected successfully");
  } catch (error) {
    console.log("hey I am error");
    console.log("Failed to connect:", error.message);
    process.exit(1);
  }
};

export default connect;
