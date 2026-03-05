require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function createBucket() {
  try {
    const { data, error } = await supabase.storage.createBucket('avatars', {
      public: true,
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
      fileSizeLimit: 5242880 // 5MB limit
    });
    
    if (error) {
      if(error.message.includes("already exists")) {
        console.log("Bucket 'avatars' already exists.");
      } else {
        console.error("Error creating bucket:", error);
      }
    } else {
      console.log("Successfully created public 'avatars' bucket!");
    }
  } catch (err) {
    console.error("Script Error:", err);
  }
}

createBucket();
