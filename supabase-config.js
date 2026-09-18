// Shared Supabase connection config for index.html and admin/index.html.
// The publishable/anon key is safe to expose client-side — it only grants
// what Row Level Security policies allow (public read; writes require login).
window.RECED_SUPABASE = {
  url: 'https://keqqnjofygsrttpjkfjd.supabase.co',
  publishableKey: 'sb_publishable_KZkn1I04uHCCyeyUZ2qHgw_yE-voJpN',
  mediaBucket: 'portfolio-media'
};
