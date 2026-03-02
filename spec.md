# Marwadi UI OS

## Current State
A mobile OS simulator with 16 apps (UPI Pay, Dukaan, Sabzi Mandi, Mandir, Cricket, Samachar, Panchang, Phone, Messages, Camera, Weather, Settings, Maps, Music, Rickshaw, Chai). Fully working apps for UPI Pay, Dukaan, Mandir, Cricket, Samachar, Panchang. Rest show "Coming Soon". Uses Rajasthani wallpaper and Devanagari/Hindi fonts.

## Requested Changes (Diff)

### Add
- 8 new swadeshi/Indian apps based on the uploaded Marwadi Mobile Company project plan image:
  1. **Prototype Testing** (प्रोटोटाइप) - app development showcase
  2. **Dealer Network** (डीलर नेटवर्क) - dealer/franchise management
  3. **Local Marketing** (स्थानीय मार्केटिंग) - local campaigns & schemes
  4. **Sales & Service** (बिक्री और सेवा) - sales tracking and after-sales service
  5. **Funding & Growth** (फंडिंग और विकास) - funding tracker and business growth
  6. **Community & Culture** (समाज और संस्कृति) - community news and Marwadi culture
  7. **Grand Launch Event** (भव्य लॉन्च) - events and festivals
  8. **Smart Accessories** (स्मार्ट एक्सेसरीज) - Marwadi-branded accessories store
- Project plan image displayed in the HomeScreen header area as a collapsible banner
- Use uploaded plan image `/assets/uploads/1772377339426-1.png` in the HomeScreen top area

### Modify
- Expand total apps from 16 to 24 swadeshi apps
- Implement full interactive screens for: Rickshaw booking, Chai ordering, Sabzi Mandi ordering, Weather, Music
- Show project plan image as a tappable banner on the home screen
- Update dock to include UPI Pay as a dock shortcut
- Give all "Coming Soon" apps working minimal screens

### Remove
- Nothing removed

## Implementation Plan
1. Add 8 new apps to INITIAL_APPS in apps.ts with IDs 17-24
2. Add working screens for all previously "Coming Soon" apps: Rickshaw, Chai, Sabzi Mandi, Weather, Music, Maps, Phone, Messages, Camera, Settings
3. Add a project plan banner to HomeScreen using the uploaded image
4. Register new app screens in APP_CONTENT_MAP in AppView.tsx
5. Update DOCK_APP_IDS to reflect phone, messages, UPI Pay, camera
