# 兒歌彈彈樂 Tap Tap Music for Toddlers

A tiny offline-capable web app for toddlers: pick a song, then every tap anywhere on the screen plays the next note.
Songs: 小兔子乖乖 (Little Bunny), Row Row Row Your Boat, Twinkle Twinkle Little Star, London Bridge, さくら Sakura.
Tapping a song picture says its word in Cantonese and then English (pre-recorded clips).

Single `index.html` (HTML + CSS + JS, no dependencies) plus icons and short pre-recorded voice clips.
Play it: https://julianzhumin.github.io/tap-tap-music-for-toddlers/

## Bilingual screen (tap-tunes-v9, 2026-10-05b-bilingual)

Every Chinese line on screen has its English directly below: 「選一首歌」 / Pick a song, the song title, 「拍一拍！」 /
Tap anywhere!, 「好叻！」 / Hooray!, the dialogs and the goodbye screen. 小兔子乖乖 shows an English line under each
Chinese lyric line. In portrait, the picker and play screens show the same rotate hint as the other games:
「打橫部機，會更好玩！」 / "Turn the phone sideways — it's more fun!". Gameplay is unchanged.

## Hub exit + mic release (tap-tunes-v10, 2026-10-05c-hub-exit)

「返學樂園」 / Back to AstraGarten on No navigates to 星星學樂園. After goodbye audio the play-again
prompt opens automatically. Leaving the tab/page at any point fully releases SpeechRecognition / mic
(pagehide, beforeunload, unload, visibility hidden).
