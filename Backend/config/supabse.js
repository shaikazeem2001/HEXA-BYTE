import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ujgiftdmfkjeamdhfpqo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ2lmdGRtZmtqZWFtZGhmcHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTE0ODIsImV4cCI6MjA4NTI4NzQ4Mn0.jYV_3LIY4V07B93_9jCLJ8muVtDiVdD1pA_iYewHjRc')