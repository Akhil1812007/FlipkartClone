
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tbupqeorvboaijjgqrxz.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidXBxZW9ydmJvYWlqamdxcnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4NDY1MzcsImV4cCI6MTk5NjQyMjUzN30.jg0DfF8OetiedQV5Wuml_tzcY-EL8l3Gst_jsrtgCTw")
export default supabase;