import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase Project details
const supabaseUrl = 'https://mumgjrczbxbsydxsuikx.supabase.co'
const supabaseKey = 'sb_publishable_ZPq3y1AAj9AuY3csEPVfoQ_Qf_aakUU'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;