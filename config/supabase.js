import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'DIN_URL'
const supabaseKey = 'DIN_PUBLIC_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
