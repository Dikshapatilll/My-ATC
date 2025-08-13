import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://nerwigdvkhcjcgmkvthy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcndpZ2R2a2hjamNnbWt2dGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjU3OTEsImV4cCI6MjA2OTMwMTc5MX0.eb5rzjMIWByPgVDlt5N7Uu5v27nuRtAfO0Z2VTmyUxI'

const options = {
    auth: {
      storage: window.sessionStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
  }
export const supabase = createClient(supabaseUrl, supabaseKey, options)