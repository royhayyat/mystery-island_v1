<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>אי המסתורין - הרפתקה בחשבון (V4.3 - Debug)</title>
    
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2a1b15">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="אי המסתורין">
    <link rel="apple-touch-icon" href="maps/island1.jpg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Cinzel+Decorative:wght@700&family=Rubik+Wet+Paint&family=Suez+One&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --paper-bg: #e3dac9;        
            --wood-dark: #2a1b15;       
            --wood-light: #8d6e63;      
            --gold: #ffc107;            
            --ancient-gold: #d4af37;
            --ocean: #004d40;           
            --success: #1b5e20;
            --danger: #c62828;
            
            --font-title: 'Rubik Wet Paint', cursive;
            --font-story: 'Amatic SC', cursive;
            --font-num: 'Cinzel Decorative', serif;
            --font-hebrew-block: 'Suez One', serif;
        }

        /* --- BASE STYLES --- */
        body {
            margin: 0; padding: 0; 
            font-family: var(--font-story); 
            font-size: 1.5rem; 
            background-color: #0f1526; 
            background-image: radial-gradient(circle at center, #1a237e 0%, #000000 100%);
            overflow: hidden; 
            user-select: none; -webkit-user-select: none;
            color: var(--wood-dark);
            touch-action: manipulation;
        }

        #game-container {
            width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;
            position: relative;
        }

        /* --- SCREENS --- */
        .screen {
            width: 95%; max-width: 950px; height: 95%; max-height: 800px;
            background-color: var(--paper-bg);
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZTNkYWM5Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkM2MwYjQiLz4KPC9zdmc+');
            border: 15px solid var(--wood-dark);
            border-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='%233e2723'/%3E%3Cpath d='M2 2h26v26H2z' fill='none' stroke='%235d4037' stroke-width='2'/%3E%3Cpath d='M5 5h20v20H5z' fill='none' stroke='%238d6e63' stroke-width='1'/%3E%3C/svg%3E") 30 stretch;
            border-radius: 5px; 
            box-shadow: inset 0 0 100px rgba(0,0,0,0.4), 0 30px 80px rgba(0,0,0,0.9);
            display: none; flex-direction: column; padding: 20px; box-sizing: border-box;
            position: relative; z-index: 10;
        }
        
        .screen.active { display: flex; animation: fadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(5px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }

        #video-screen { background: #000; border: none; padding: 0; box-shadow: none; border-image: none; pointer-events: auto; }
        #game-screen, #level-select-screen { background: transparent; border: none; box-shadow: none; padding: 0; pointer-events: auto; border-image: none; }
        
        /* --- UI ELEMENTS --- */
        h1 { 
            font-family: var(--font-title); font-size: 4.5rem; color: var(--wood-dark); 
            text-align: center; margin: 10px 0; text-shadow: 3px 3px 0px rgba(189, 146, 24, 0.4);
            letter-spacing: 3px; transform: rotate(-1deg);
        }
        h2 { 
            font-family: var(--font-title); text-align: center; color: var(--ocean); 
            font-size: 2.8rem; margin-top: 0; text-shadow: 1px 1px 0px rgba(255,255,255,0.3);
        }
        h3 { font-family: var(--font-hebrew-block); font-size: 1.8rem; color: #4e342e; }

        input[type="text"], input[type="email"], input[type="password"] {
            font-family: var(--font-title); font-size: 2rem; padding: 15px; border-radius: 8px;
            border: 4px solid var(--wood-light); text-align: center; width: 60%; margin: 20px auto;
            display: block; background: #fff8e1; color: var(--wood-dark);
        }

        .btn {
            padding: 12px 35px; margin: 10px; font-size: 1.8rem; font-family: var(--font-title); 
            color: #ffe082; border: 2px solid #3e2723; border-radius: 8px; cursor: pointer; 
            background: linear-gradient(to bottom, #5d4037, #3e2723);
            box-shadow: 0 5px 0 #1a100c, 0 10px 10px rgba(0,0,0,0.3); transition: all 0.1s;
        }
        .btn:active { transform: translateY(5px); box-shadow: 0 0 0 #1a100c; }
        .btn-secondary { background: linear-gradient(to bottom, #00695c, #004d40); color: #b2dfdb; }
        .btn-danger { background: linear-gradient(to bottom, #c62828, #b71c1c); color: #ffcdd2; }
        .btn-success { background: linear-gradient(to bottom, #2e7d32, #1b5e20); color: #c8e6c9; border-color: #1b5e20; }

        .btn-skip { 
            position: absolute; bottom: 40px; right: 40px; background: rgba(0, 0, 0, 0.7); color: #fff; 
            border: 2px solid rgba(255,255,255,0.5); border-radius: 50px; padding: 10px 25px; 
            font-size: 1.5rem; cursor: pointer; z-index: 9999; 
        }

        .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; overflow-y: auto; padding: 10px; flex-grow: 1; min-height: 300px; }
        
        .island-card, .char-card, .trophy-card {
            background: #fff8e1; border: 4px solid var(--wood-light); border-radius: 10px; 
            overflow: hidden; cursor: pointer; text-align: center; display: flex; flex-direction: column;
            transition: transform 0.3s; height: 230px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            position: relative;
        }
        .island-card:hover, .char-card:hover { transform: scale(1.03) translateY(-5px); border-color: var(--ancient-gold); }
        
        .island-card.current-location-highlight {
            border: 6px solid #d50000;
            box-shadow: 0 0 25px rgba(255, 215, 0, 0.8);
            animation: pulse-border 2s infinite;
        }
        @keyframes pulse-border { 0% { border-color: #d50000; } 50% { border-color: #ffca28; } 100% { border-color: #d50000; } }

        .island-img-container, .card-img-container { 
            height: 130px; width: 100%; overflow: hidden; background: #d7ccc8; 
            border-bottom: 3px dashed var(--wood-light); display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
        }
        .island-map-img, .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .island-card:hover .island-map-img { transform: scale(1.1); }
        .fallback-icon { font-size: 4rem; opacity: 0.5; filter: grayscale(1); }
        
        .map-player-marker {
            position: absolute; top: -25px; right: -25px; width: 75px; height: 75px;
            border-radius: 50%; border: 4px solid #fff; background: var(--gold);
            z-index: 20; object-fit: cover; box-shadow: 0 5px 15px rgba(0,0,0,0.6);
            animation: float 2s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        .location-label {
            position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.7); color: #fff;
            padding: 3px 8px; border-radius: 4px; font-size: 1.1rem; font-family: var(--font-hebrew-block);
            z-index: 15;
        }

        .island-content {
            flex-grow: 1; display: flex; flex-direction: column; justify-content: flex-start; 
            align-items: center; background: #fff8e1; padding: 5px;
        }
        .island-content h3 { 
            margin: 5px 0 0 0; font-size: 1.4rem; color: var(--wood-dark); font-family: var(--font-story); font-weight: bold;
            height: 45px; display: flex; align-items: center; justify-content: center; line-height: 1.1; text-align: center; width: 100%;
        }
        .island-content p { margin: 0; margin-top: auto; padding-bottom: 5px; }

        .island-card.locked { filter: grayscale(1) brightness(0.7); pointer-events: none; }
        .island-card.completed { border-color: var(--success); }

        .level-node {
            position: absolute; width: 60px; height: 60px; 
            background: #fff8e1; border-radius: 50%; border: 4px solid var(--wood-dark);
            display: flex; align-items: center; justify-content: center; font-size: 2.2rem; cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,0,0,0.6); transform: translate(-50%, -50%); transition: transform 0.2s; z-index: 5;
            font-family: var(--font-num); font-weight: bold; color: var(--wood-dark);
        }
        .level-node:hover { transform: translate(-50%, -50%) scale(1.2); z-index: 20; }
        .level-node.locked { filter: grayscale(1); opacity: 0.6; pointer-events: none; }
        .level-node.completed { filter: sepia(1) hue-rotate(50deg); border-color: #2e7d32; }
        .level-node.current { background: var(--gold); animation: pulse 1.5s infinite; width: 75px; height: 75px; z-index: 10; }
        
        .node-label {
            position: absolute; top: -40px; left: 50%; transform: translateX(-50%); 
            background: var(--wood-dark); color: var(--gold); padding: 5px 12px; border-radius: 4px; 
            font-size: 1.2rem; pointer-events: none; opacity: 0; transition: opacity 0.2s;
            font-family: var(--font-story); white-space: nowrap;
        }
        .level-node:hover .node-label { opacity: 1; }
        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7); } 70% { transform: translate(-50%, -50%) scale(1.15); box-shadow: 0 0 0 20px rgba(255, 193, 7, 0); } 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); } }

        /* Game HUD */
        .game-ui-overlay {
            position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 95%; max-width: 700px;
            background: rgba(255, 253, 230, 0.95); border: 8px solid var(--wood-dark); border-radius: 15px; padding: 25px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.8); z-index: 20; pointer-events: auto; /* Ensure active */
        }
        .hud-top {
            display: flex; justify-content: space-between; align-items: center; background: var(--wood-dark); 
            color: var(--gold); padding: 10px 20px; border-radius: 8px; margin-bottom: 20px; font-size: 1.4rem;
            font-family: var(--font-title); border: 2px solid #5d4037;
        }
        .progress-container {
            position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 60%; height: 20px;
            background: #2c1a16; border: 4px solid var(--wood-light); border-radius: 10px; overflow: hidden;
        }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #ff8f00, #ffc107, #ff8f00); width: 0%; transition: width 0.5s; }

        .question-area { position: relative; display: flex; align-items: center; justify-content: center; min-height: 140px; margin-bottom: 25px; }
        .question-text { 
            font-family: var(--font-num); font-size: 3.5rem; font-weight: 700; color: var(--wood-dark); 
            direction: ltr; flex-grow: 1; text-align: center; line-height: 1.3;
        }
        .answers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; direction: ltr; pointer-events: auto; }
        .answer-btn {
            background: #fff; border: 3px solid var(--wood-light); color: var(--wood-dark); font-family: var(--font-num);
            font-size: 2.2rem; padding: 15px; border-radius: 12px; cursor: pointer; font-weight: bold; transition: 0.2s;
            pointer-events: auto; 
        }
        .answer-btn:hover:not(:disabled) { background: #fff8e1; transform: translateY(-3px); border-color: var(--ancient-gold); }
        .answer-btn.correct { background: #a5d6a7; border-color: #2e7d32; color: #1b5e20; }
        .answer-btn.wrong { background: #ef9a9a; border-color: #c62828; animation: shake 0.4s; }
        .answer-btn.hidden { visibility: hidden; pointer-events: none; }
        
        .powerup-bar { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
        .powerup-btn { 
            background: #fff; border: 3px solid var(--wood-dark); border-radius: 12px; 
            padding: 8px 20px; font-family: var(--font-story); cursor: pointer; display: flex; align-items: center; gap: 10px;
            box-shadow: 0 6px 0 rgba(0,0,0,0.3); transition: all 0.1s; font-size: 1.3rem; font-weight: bold;
            min-width: 140px; justify-content: center; z-index: 50;
        }
        .powerup-btn span { font-family: var(--font-num); font-size: 1.5rem; }
        .powerup-btn:active { transform: translateY(4px); box-shadow: 0 2px 0 rgba(0,0,0,0.3); }
        .powerup-btn:disabled { opacity: 0.5; filter: grayscale(1); cursor: not-allowed; transform: none; box-shadow: none; border-color: #999; }
        
        #btn-use-parrot { border-color: #2E7D32; color: #1B5E20; background: #E8F5E9; }
        #btn-use-potion { border-color: #7B1FA2; color: #4A148C; background: #F3E5F5; }

        .streak-badge { 
            position: absolute; top: -50px; right: 0; background: var(--gold); color: var(--wood-dark);
            padding: 10px; border-radius: 50%; font-weight: bold; font-family: var(--font-title);
            animation: bounce 0.5s infinite alternate; border: 3px solid #fff; z-index: 50;
        }
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }

        /* Trophies */
        .trophy-card { height: 180px; }
        .trophy-card.locked { filter: grayscale(1); opacity: 0.6; }
        .trophy-icon { font-size: 4rem; margin-top: 20px; }

        #win-image {
            width: 100%; max-width: 500px; max-height: 400px; object-fit: contain; border: 8px solid var(--gold);
            border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); margin: 20px auto; display: none; background: #fff;
        }

        /* Nav Buttons */
        .nav-btn {
            background: var(--wood-dark); color: var(--gold); border: 2px solid #5d4037;
            width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.4); transition: transform 0.1s; pointer-events: auto;
        }
        .nav-btn:active { transform: scale(0.9); }
        .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; filter: grayscale(1); }

        /* LEADERBOARD & AUTH MODAL STYLES */
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); z-index: 1000; display: none;
            justify-content: center; align-items: center;
        }
        .modal-content {
            background: var(--paper-bg); border: 8px solid var(--wood-dark); border-radius: 15px;
            padding: 20px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto;
            position: relative; box-shadow: 0 0 50px rgba(0,0,0,0.8); text-align: center;
        }
        
        .leaderboard-item {
            display: flex; justify-content: space-between; align-items: center;
            background: #fff; border: 2px solid var(--wood-light); border-radius: 12px;
            margin: 10px 0; padding: 12px; font-family: var(--font-story); font-size: 1.4rem;
            transition: transform 0.2s;
        }
        .leaderboard-item:hover { transform: scale(1.02); border-color: var(--gold); }
        
        .rank-badge {
            width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
            font-weight: bold; color: #fff; margin-left: 15px; font-family: var(--font-num); font-size: 1.5rem;
            flex-shrink: 0;
        }
        .rank-1 { background: linear-gradient(135deg, #FFD700, #FDB931); border: 3px solid #DAA520; box-shadow: 0 0 15px #FFD700; color: #5d4037; }
        .rank-2 { background: linear-gradient(135deg, #E0E0E0, #BDBDBD); border: 3px solid #9E9E9E; color: #424242; }
        .rank-3 { background: linear-gradient(135deg, #CD7F32, #A0522D); border: 3px solid #8B4513; }
        .rank-other { background: var(--wood-light); border: 2px solid var(--wood-dark); font-size: 1.2rem; }

        .player-info { flex-grow: 1; text-align: right; }
        .player-name-text { font-weight:bold; font-size:1.8rem; color:var(--wood-dark); cursor: pointer; transition: color 0.2s; }
        .player-name-text:hover { color: var(--ocean); text-decoration: underline; }
        .player-stats { font-size: 1.1rem; color: #666; font-family: var(--font-hebrew-block); display: flex; align-items: center; gap: 10px; margin-top: 2px; }
        
        .delete-btn { 
            background: #FFEBEE; color: var(--danger); border: 2px solid var(--danger); 
            border-radius: 8px; padding: 5px 12px; cursor: pointer; font-size: 1.2rem;
            transition: all 0.2s; margin-right: 10px;
        }
        .delete-btn:hover { background: var(--danger); color: #fff; }

        /* AUTH BAR STYLES */
        .auth-container {
            background: rgba(0, 0, 0, 0.4);
            border: 2px solid var(--gold);
            border-radius: 12px;
            padding: 8px 15px;
            margin: 0 auto 15px auto;
            max-width: 90%;
            width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .auth-text {
            font-family: 'Amatic SC', cursive;
            font-size: 1.6rem;
            color: var(--paper-bg);
            margin-left: 15px;
        }
        .auth-btn {
            background: var(--gold);
            color: var(--wood-dark);
            border: 2px solid #fff;
            font-family: 'Suez One', serif;
            font-size: 1rem;
            padding: 6px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s;
        }
        .auth-btn:hover { transform: scale(1.05); background: #fff; }
        .auth-btn.logout { background: #c0392b; color: white; border-color: #e74c3c; }
        .hidden { display: none !important; }

        #video-player { width: 100%; height: 100%; object-fit: cover; }
        .feedback { position: absolute; top:40%; left:50%; transform:translate(-50%,-50%); font-size: 8rem; z-index: 30; display: none; text-shadow: 0 5px 20px rgba(0,0,0,0.5); width: 100%; text-align: center; }
        #character-display { position: absolute; bottom: 92%; left: 10px; width: 100px; height: 100px; z-index: 25; }
        #character-display img { width: 100%; height: 100%; object-fit: contain; }
        #confetti-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 50; }
        
        #dev-panel { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; background: var(--paper-bg); border: 5px solid var(--wood-dark); padding: 20px; z-index: 10001; text-align: right; }

        /* --- MOBILE & TABLET OPTIMIZATIONS --- */
        @media screen and (max-width: 768px) {
            h1 { font-size: 3.5rem; margin: 15px 0; }
            h2 { font-size: 2.2rem; }
            
            .screen {
                width: 100%;
                height: 100%;
                border-width: 5px; 
                border-radius: 0;
                padding: 10px;
                max-width: none;
                max-height: none;
                border-image: none; 
                border-color: var(--wood-dark);
            }

            .grid-container {
                grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                padding: 5px;
                gap: 10px;
            }

            .island-card, .char-card { height: 190px; }
            .island-img-container, .card-img-container { height: 100px; }

            input[type="text"], input[type="email"], input[type="password"] {
                width: 90%; font-size: 1.5rem; padding: 10px;
            }

            .btn {
                padding: 10px 25px; font-size: 1.4rem; width: 90%; margin: 5px auto; display: block;
            }

            .hud-top { font-size: 1rem; padding: 5px 10px; }
            .question-text { font-size: 2.5rem; }
            .answers-grid { gap: 10px; }
            .answer-btn { padding: 10px; font-size: 1.8rem; height: 70px; }
            .powerup-bar { gap: 10px; }
            .powerup-btn { min-width: auto; padding: 8px 12px; font-size: 1.1rem; }
            .level-node { width: 45px; height: 45px; font-size: 1.5rem; }
            .level-node.current { width: 55px; height: 55px; }
            .node-label { display: none; }
            .auth-container { width: 95%; padding: 5px; }
            .auth-text { font-size: 1.3rem; margin-left: 5px; }
            .modal-content { width: 95%; padding: 15px; }
        }
    </style>
</head>
<body>

    <div style="position: fixed; top: 0; right: 0; width: 80px; height: 80px; z-index: 10000;" onclick="dev.toggle()"></div>

    <div id="dev-panel">
        <h3 style="margin-top:0; text-align: center;">🔧 בקרת מפתח</h3>
        <p style="text-align:center; font-size:0.9rem; color: green; font-weight:bold;">מצב מנהל הופעל! ✅</p>
        <label>קפוץ לאי:</label> <select id="dev-island-select" onchange="dev.updateLevels()"></select>
        <label>קפוץ לשלב:</label> <select id="dev-level-select"></select>
        <button class="btn btn-secondary" style="width:100%; margin: 10px 0; font-size:1.2rem;" onclick="dev.jumpTo()">קפוץ 🚀</button>
        <hr>
        <div style="display:flex; gap:5px;">
            <button class="btn" style="flex:1; font-size:0.9rem; padding:8px;" onclick="game.addCoins(1000)">+1000💰</button>
            <button class="btn" style="flex:1; font-size:0.9rem; padding:8px;" onclick="game.unlockAllIslands()">הכל🔓</button>
        </div>
        <button class="btn" style="width:100%; margin-top:5px; font-size:1rem;" onclick="game.forceWinLevel()">דלג על השאלה ⏩</button>
        <button class="btn btn-danger" style="width:100%; margin-top:10px; font-size:1rem;" onclick="localStorage.clear(); location.reload()">איפוס מלא ⚠️</button>
        <button class="btn" style="width:100%; margin-top:10px; font-size:1.2rem;" onclick="dev.close()">סגור</button>
    </div>

    <div id="load-game-modal" class="modal-overlay">
        <div class="modal-content">
            <h2 id="leaderboard-title" style="font-size:3rem; margin-bottom:10px;">🏆 טבלת האלופים 🏆</h2>
            <div id="saved-players-list"></div>
            <button class="btn btn-secondary" onclick="document.getElementById('load-game-modal').style.display='none'">סגור</button>
        </div>
    </div>

    <div id="login-modal" class="modal-overlay">
        <div class="modal-content">
            <h2 style="font-family: 'Rubik Wet Paint'; color: var(--wood-dark); margin-top: 0;">כניסה לגילדה</h2>
            <p style="font-family: 'Amatic SC'; font-size: 1.4rem; color: var(--wood-dark);">הכנס פרטים לשמירה בענן</p>
            <input type="email" id="login-email" placeholder="אימייל של פיראט" style="width:90%">
            <input type="password" id="login-pass" placeholder="סיסמה סודית" style="width:90%; margin-top:10px;">
            <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                <button onclick="AuthManager.mockLogin()" class="auth-btn" style="width: 48%; font-size: 1.2rem;">כניסה</button>
                <button onclick="AuthManager.closeLoginModal()" class="auth-btn" style="background: #95a5a6; width: 48%; font-size: 1.2rem; border-color:#7f8c8d;">ביטול</button>
            </div>
            <div style="font-size: 0.8rem; margin-top: 15px; opacity: 0.6;">(התחברות זו היא סימולציה)</div>
        </div>
    </div>

    <div id="game-container">
        <div id="feedback-correct" class="feedback">✅</div>
        <div id="feedback-wrong" class="feedback">❌</div>
        <div id="feedback-bonus" class="feedback" style="font-size: 4rem; color: var(--gold);">בונוס רצף! +10 💰</div>

        <div id="video-screen" class="screen">
            <video id="video-player" playsinline onerror="game.skipVideo()">
                <source src="moves/intro.mp4" type="video/mp4">
            </video>
            <button class="btn-skip" onclick="game.skipVideo()">דלג על הסרטון >></button>
            <button id="start-video-btn" class="btn btn-success" onclick="game.playVideo()" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); display:none; padding:15px 40px; font-size:2.5rem; z-index:100;">התחל בהרפתקה! ▶️</button>
        </div>

        <div id="start-screen" class="screen active">
            <h1>אי המסתורין</h1>
            <div id="auth-bar" class="auth-container">
                <div id="guest-view">
                    <span class="auth-text">🏴‍☠️ אורח (שמירה במכשיר)</span>
                    <button onclick="AuthManager.openLoginModal()" class="auth-btn">התחבר לענן ☁️</button>
                </div>
                <div id="user-view" class="hidden">
                    <span class="auth-text" id="user-greeting">👋 שלום!</span>
                    <button onclick="AuthManager.logout()" class="auth-btn logout">התנתק</button>
                </div>
            </div>
            <div id="guest-input-section">
                <h3>היי, איך קוראים לך?</h3>
                <input type="text" id="player-name" placeholder="כתוב את שמך כאן..." />
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-success" style="padding:15px 50px; font-size: 2.2rem;" onclick="game.initPlayer()">התחל בהרפתקה!</button>
                </div>
            </div>
            <div id="user-start-section" class="hidden" style="text-align: center; margin-top: 20px;">
                <h3>מוכן להמשיך מהענן?</h3>
                <button class="btn btn-success" style="padding:15px 50px; font-size: 2.2rem;" onclick="game.initPlayer()">המשך במשחק ▶️</button>
            </div>
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-secondary" onclick="game.openLoadMenu()">🏆 טבלת האלופים</button>
            </div>
        </div>

        <div id="grade-screen" class="screen">
             <h1>שלום <span id="welcome-name" style="color:var(--ocean)"></span>!</h1>
             <h3>באיזו כיתה אתה?</h3>
             <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top:30px;">
                <button class="btn" onclick="game.setGrade(1)">כיתה א'</button>
                <button class="btn" onclick="game.setGrade(2)">כיתה ב'</button>
                <button class="btn" onclick="game.setGrade(3)">כיתה ג'</button>
                <button class="btn" onclick="game.setGrade(4)">כיתה ד'</button>
            </div>
        </div>

        <div id="char-select-screen" class="screen">
            <h1>מי הגיבור שלך?</h1>
            <div id="char-grid" class="grid-container"></div>
            <button class="btn btn-secondary" style="margin-top:auto" onclick="ui.showScreen('grade-screen')">חזור</button>
        </div>

        <div id="map-screen" class="screen">
            <div class="hud-top">
                <span>👤 <span id="hud-name"></span></span>
                <span>🎒 כיתה <span id="hud-grade" style="font-family: var(--font-hebrew-block);"></span></span>
                <span>💰 <span id="hud-coins" style="font-family: var(--font-num);">0</span></span>
                <div>
                    <button onclick="ui.showScreen('achievements-screen')" style="background:none; border:none; cursor:pointer; font-size:2rem;">🏆</button>
                    <button onclick="ui.showScreen('shop-screen')" style="background:none; border:none; cursor:pointer; font-size:2rem;">🛒</button>
                </div>
            </div>
            <h2>מפת האיים</h2>
            <div id="islands-grid" class="grid-container"></div>
        </div>

        <div id="achievements-screen" class="screen">
            <h2>חדר הגביעים</h2>
            <div id="achievements-grid" class="grid-container"></div>
            <button class="btn btn-secondary" style="margin-top:auto" onclick="ui.showScreen('map-screen')">חזור למפה</button>
        </div>

        <div id="level-select-screen" class="screen">
            <div id="active-map-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; background-color: #1a237e;"></div>
            <button class="btn btn-secondary" style="position:absolute; bottom:20px; right:20px; z-index:30;" onclick="ui.showScreen('map-screen')">חזור למפה 🗺️</button>
        </div>

        <div id="story-screen" class="screen">
            <h2 id="story-title" style="font-size:3rem; margin-bottom:15px; color:var(--wood-dark); font-family: var(--font-title);"></h2>
            <div style="flex-grow:1; display:flex; align-items:center; justify-content:center; padding:20px; text-align:center; line-height:1.4; color:#3e2723;">
                 <div id="story-content" style="font-family: var(--font-story); font-size: 2.5rem; font-weight: 700;"></div>
            </div>
            <button class="btn btn-success" style="font-size:2.5rem;" onclick="game.startLevel()">התחל אתגר! ⚔️</button>
        </div>

        <div id="game-screen" class="screen">
            <div id="game-background-layer" style="position:absolute; width:100%; height:100%; background-size:cover; background-position:center; background-color: #1a237e;"></div>
            <div id="level-nodes-layer" style="position: absolute; top:0; left:0; width:100%; height:100%; z-index: 5;"></div>

            <div class="game-ui-overlay">
                <div id="character-display"></div>
                <div class="progress-container"><div id="level-progress-bar" class="progress-fill"></div></div>
                <div class="hud-top">
                    <span id="game-level-info" style="font-family:var(--font-hebrew-block); font-size: 1.5rem; color:#ffd700; text-shadow: 1px 1px 0 #000;"></span>
                    <span style="font-family: var(--font-num);"><span id="game-q-num">1</span>/15</span>
                    <span>💰 <span id="game-coins" style="font-family: var(--font-num);">0</span></span>
                    <button onclick="game.openShopInGame()" style="background:#ffb300; border:2px solid #3e2723; border-radius:50%; width:40px; height:40px; cursor:pointer; font-size:1.4rem;">🛒</button>
                </div>
                <div style="position:relative; display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                    <button id="btn-prev-q" class="nav-btn" onclick="game.prevQuestion()">◀</button>
                    <div class="question-area" style="flex-grow:1; margin:0 10px;">
                        <div class="question-text" id="question-text">?</div>
                        <div id="streak-indicator" class="streak-badge" style="display:none;"></div>
                    </div>
                    <button id="btn-next-q" class="nav-btn" onclick="game.nextQuestionNav()">▶</button>
                </div>
                <div class="answers-grid" id="answers-area"></div>
                <div class="powerup-bar">
                    <button id="btn-use-parrot" class="powerup-btn" onclick="game.usePowerUp('parrot')">🦜 תוכי <span id="qty-parrot">0</span></button>
                    <button id="btn-use-potion" class="powerup-btn" onclick="game.usePowerUp('potion')">🧪 שיקוי <span id="qty-potion">0</span></button>
                </div>
                <div style="text-align:center; margin-top:15px;">
                    <button class="btn btn-secondary" style="font-size:1.2rem; padding:8px 20px;" onclick="ui.showScreen('level-select-screen')">יציאה למפה</button>
                </div>
            </div>
        </div>

        <div id="complete-screen" class="screen" style="text-align: center; justify-content:center; overflow-y: auto;">
            <canvas id="confetti-canvas"></canvas>
            <h1 style="color:var(--success); border:none; font-size:4rem; margin: 0;">כל הכבוד!</h1>
            <img id="win-image" src="" alt="Victory Image">
            <p style="font-size: 2.2rem; font-family: var(--font-story);">הרווחת <span id="level-earnings" style="font-weight:bold; color:var(--wood-dark); font-family:var(--font-num);">0</span> מטבעות</p>
            <div style="margin-top: 20px; position:relative; z-index:100;">
                <button class="btn btn-success" onclick="game.nextLevel()">השלב הבא</button>
                <button class="btn" onclick="ui.showScreen('level-select-screen')">חזור למפה</button>
            </div>
        </div>

        <div id="shop-screen" class="screen">
            <h2>חנות המסתורין</h2>
            <div style="text-align:center; font-size:2.5rem; font-family:var(--font-num); color:var(--wood-dark); margin-bottom:10px;">💰 <span id="shop-coins">0</span></div>
            <div style="display:flex; justify-content:center; gap:10px; margin-bottom:10px;">
                <button class="btn" onclick="ui.renderShop('chars')">דמויות</button>
                <button class="btn" onclick="ui.renderShop('items')">עזרים</button>
            </div>
            <div id="shop-grid" class="grid-container"></div>
            <button class="btn btn-secondary" style="margin-top:auto" onclick="ui.returnFromShop()">חזור</button>
        </div>
    </div>

    <script>
        window.onerror = e => console.log(e);
        let currentVideoType = 'intro';
        let previousScreen = 'map-screen'; 

        const PATHS = {
            default: [ {l:20,t:80}, {l:35,t:70}, {l:50,t:60}, {l:65,t:50}, {l:50,t:40}, {l:35,t:30}, {l:50,t:20}, {l:65,t:15}, {l:80,t:10}, {l:50,t:5} ],
            island1: [ {l:15,t:80}, {l:25,t:70}, {l:20,t:55}, {l:35,t:50}, {l:50,t:45}, {l:65,t:60}, {l:80,t:50}, {l:70,t:35}, {l:50,t:30}, {l:50,t:15} ],
            island2: [ {l:10,t:85}, {l:25,t:80}, {l:40,t:75}, {l:50,t:60}, {l:65,t:55}, {l:75,t:45}, {l:65,t:35}, {l:50,t:30}, {l:40,t:20}, {l:60,t:15} ],
            island3: [ {l:20,t:85}, {l:40,t:80}, {l:55,t:70}, {l:45,t:60}, {l:30,t:55}, {l:25,t:40}, {l:40,t:35}, {l:60,t:30}, {l:70,t:20}, {l:60,t:10} ],
            island4: [ {l:20,t:80}, {l:35,t:85}, {l:50,t:75}, {l:65,t:65}, {l:75,t:50}, {l:65,t:40}, {l:50,t:45}, {l:35,t:40}, {l:30,t:30}, {l:50,t:15} ],
            island5: [ {l:20,t:80}, {l:30,t:70}, {l:25,t:55}, {l:30,t:40}, {l:45,t:30}, {l:60,t:30}, {l:75,t:40}, {l:80,t:55}, {l:70,t:70}, {l:50,t:50} ],
            island6: [ {l:50,t:90}, {l:30,t:80}, {l:20,t:60}, {l:25,t:40}, {l:40,t:25}, {l:60,t:25}, {l:80,t:40}, {l:75,t:60}, {l:60,t:70}, {l:50,t:50} ],
            island9: [ {l:15,t:85}, {l:30,t:75}, {l:35,t:60}, {l:25,t:50}, {l:30,t:35}, {l:45,t:40}, {l:60,t:50}, {l:75,t:45}, {l:70,t:30}, {l:50,t:20} ],
            island10: [ {l:30,t:80}, {l:50,t:85}, {l:70,t:80}, {l:60,t:65}, {l:40,t:65}, {l:50,t:55}, {l:35,t:40}, {l:65,t:40}, {l:50,t:30}, {l:50,t:10} ]
        };

        const LEVEL_DETAILS = {
            1: { names: ['שער הג\'ונגל','שביל הקופים','מפל נסתר','גשר עץ','מחנה עתיק','פסל האבן','מערת העטלף','צמרות העצים','מדרגות המקדש','אוצר האצטקים'], icons: ['🚪','🐒','💧','🌉','⛺','🗿','🦇','🌴','🪜','💎'] },
            2: { names: ['השוק הסואן','נהר הגנגס','מקדש הלוטוס','פיל המלך','טיגריס הזהב','ארמון השיש','גן התבלינים','מגדל השמירה','מערת הזהב','כתר המהרג\'ה'], icons: ['🍱','🌊','🪷','🐘','🐅','🕌','🌶️','🗼','🟡','👑'] },
            3: { names: ['חוף האלמוגים','סירת הקאנו','כפר הדייגים','לגונה כחולה','פסל הטיקי','הר הגעש','מערת הלבה','ריקוד האש','שרשרת הפרחים','הפנינה השחורה'], icons: ['🐚','🛶','🛖','🐟','🗿','🌋','🔥','💃','🌺','⚫'] },
            4: { names: ['ביצת הדינוזאור','עקבות ענק','יער השרכים','העמק הנעלם','ביצת הטריצרטופס','הר געש מעשן','מערת המאובנים','כנפי הפטרודקטיל','מלך הדינוזאורים','שן הטי-רקס'], icons: ['🥚','🐾','🌿','🌫️','🦕','🌋','🦴','🦅','🦖','🦷'] },
            5: { names: ['מפרץ הגולגולת','ספינה טרופה','תיבת האוצר','תוכי מדבר','מפת האוצר','חבית רום','עוגן חלוד','דגל הפיראטים','תמנון ענק','מטמון הזהב'], icons: ['💀','⛵','📦','🦜','🗺️','🛢️','⚓','🏴‍☠️','🐙','💰'] },
            6: { names: ['חפיר המים','גשר מתרומם','חצר הטירה','אורוות הסוסים','נשקייה','מגדל הקוסם','צינוק','אולם המלוכה','הדרקון','חרב האקסקליבר'], icons: ['🌊','🌉','🛡️','🐴','⚔️','🧙','⛓️','👑','🐉','🗡️'] },
            7: { names: ['שדה האורז','גשר הבמבוק','פנס סיני','דרקון הנייר','מקדש הזהב','לוחם הנינג\'ה','סמוראי','גן הזן','עץ הדובדבן','מגילת הסודות'], icons: ['🍚','🎋','🏮','🐲','🏯','🥷','⚔️','🪨','🌸','📜'] },
            8: { names: ['קרחון צף','פינגווין קיסרי','איגלו','מזחלת שלג','דוב הקוטב','סופת שלגים','מערת הקריסטל','איש השלג','זאב לבן','יהלום הקרח'], icons: ['🧊','🐧','🏠','🛷','🐻‍❄️','❄️','💎','⛄','🐺','✨'] },
            9: { names: ['הנילוס','ספינת המדבר','נחש הקוברה','הספינקס','פירמידה גדולה','כתב חרטומים','מומיה','קבר הפרעה','אל השמש','עין הורוס'], icons: ['🌊','🐫','🐍','🦁','🔺','📜','🤕','⚰️','☀️','👁️'] },
            10: { names: ['חוף השלדים','יער מכושף','ביצה רעילה','עכביש ענק','מערת האימה','רוח רפאים','מכשפה','קדירת השיקוי','מלך השלדים','הגביע הקדוש'], icons: ['🦴','🌲','🤢','🕷️','🕳️','👻','🧙‍♀️','🧪','💀','🏆'] }
        };

        const ACHIEVEMENTS = [
            { id: 'first_blood', name: 'התחלה טובה', desc: 'ענה על שאלה ראשונה נכון', icon: '🐣', req: (s) => s.totalCorrect >= 1 },
            { id: 'rich', name: 'הפיראט העשיר', desc: 'צבור 100 מטבעות', icon: '💰', req: (s) => s.coins >= 100 },
            { id: 'streak10', name: 'על הגל', desc: 'רצף של 10 תשובות נכונות', icon: '🔥', req: (s) => s.maxStreak >= 10 },
            { id: 'island1', name: 'מלך הג\'ונגל', desc: 'סיים את האי הראשון', icon: '🌴', req: (s) => s.maxIslandUnlocked >= 1 && s.maxLevelReached > 1 },
            { id: 'shopper', name: 'בזבזן', desc: 'קנה דמות חדשה', icon: '🛍️', req: (s) => s.inventory.length > 3 },
            { id: 'brain', name: 'גאון חשבון', desc: 'פתר 50 תרגילים', icon: '🧠', req: (s) => s.totalCorrect >= 50 }
        ];

        const createLevels = (islandId) => {
            const data = LEVEL_DETAILS[islandId];
            const levels = [];
            for (let i = 0; i < 10; i++) {
                levels.push({ id: i+1, name: data ? data.names[i] : `שלב ${i+1}`, icon: data ? data.icons[i] : '🚩' });
            }
            return levels;
        };

        const StoryGen = {
            phrases: {
                generic: [
                    "הרוח שורקת בין העצים...", 
                    "מצאת מטבע עתיק על השביל!", 
                    "השמש מאירה את הדרך.", 
                    "ציפור נדירה מתעופפת מעליך.",
                    "הדרך מתפתלת ולוקחת אותך עמוק יותר..."
                ],
                jungle: [
                    "קוף שובב זרק עליך בננה!", 
                    "הגשר העתיק חורק תחת רגליך...", 
                    "שמעת שאגה רחוקה של יגואר.", 
                    "העשב הגבוה מסתיר סודות...",
                    "גילית פסל עתיק מכוסה בטחב."
                ],
                water: [
                    "גלים מתנפצים על הסלעים.",
                    "מצאת צדפה זוהרת בחול.",
                    "סרטן ענק חוסם את הדרך!",
                    "המים צלולים, אתה רואה דגים צבעוניים.",
                    "סירה נטושה מחכה בחוף..."
                ],
                cave: [
                    "עטלפים מתעופפים בבהלה!",
                    "הלפיד שלך מהבהב ברוח הקרה.",
                    "הד צעדיך נשמע למרחקים.",
                    "קריסטלים זוהרים מאירים את האפלה.",
                    "נזהרת לא ליפול לבור עמוק..."
                ],
                spooky: [
                    "ערפל סמיך מכסה את האדמה...",
                    "האם שמעת לחישה באוזן?",
                    "צללים מרקדים על הקירות.",
                    "האוויר כאן קר ומצמרר...",
                    "אתה מרגיש שמישהו צופה בך."
                ]
            },

            getStory: (islandId, levelNum) => {
                const islandName = CONFIG.islands.find(i => i.id === islandId).name;
                const levelName = LEVEL_DETAILS[islandId] ? LEVEL_DETAILS[islandId].names[levelNum-1] : `שלב ${levelNum}`;

                if (levelNum === 1) {
                    return `הספינה עגנה ב${islandName}. קח נשימה עמוקה, ההרפתקה מתחילה!`;
                }
                if (levelNum === 10) {
                    return `הגעת ל${levelName}! השומר הגדול מחכה לך. האם תצליח לקחת את האוצר?`;
                }

                let type = 'generic';
                if ([1, 5].includes(islandId)) type = 'jungle';
                else if ([3, 6].includes(islandId)) type = 'water';
                else if ([4, 8].includes(islandId)) type = 'cave';
                else if ([9, 10].includes(islandId)) type = 'spooky';

                const mainPhrase = StoryGen.phrases[type][Math.floor(Math.random() * StoryGen.phrases[type].length)];
                const actions = ["המשכת ללכת ו...", "לפתע, ", "בזהירות רבה, ", ""];
                const prefix = actions[Math.floor(Math.random() * actions.length)];

                return `${prefix}${mainPhrase} הגעת ל${levelName}.`;
            }
        };

        const CONFIG = {
            questionsPerLevel: 15, coinsPerRight: 2,
            islands: [
                { id: 1, type: 'basic', name: 'חוף המספרים', image: 'maps/island1.jpg', path: PATHS.island1, levels: createLevels(1) },
                { id: 2, type: 'basic', name: 'יער החיבור', image: 'maps/island2.jpg', path: PATHS.island2, levels: createLevels(2) },
                { id: 3, type: 'word', name: 'כפר הסיפורים', image: 'maps/island3.jpg', path: PATHS.island3, levels: createLevels(3) },
                { id: 4, type: 'mul_div', name: 'מערת הכפל', image: 'maps/island4.jpg', path: PATHS.island4, levels: createLevels(4) },
                { id: 5, type: 'mixed', name: 'הג\'ונגל המעורב', image: 'maps/island5.jpg', path: PATHS.island5, levels: createLevels(5) },
                { id: 6, type: 'mixed', name: 'מבצר האתגר', image: 'maps/island6.jpg', path: PATHS.island6, levels: createLevels(6) },
                { id: 7, type: 'logic', name: 'אי החידות', image: 'maps/island7.jpg', path: PATHS.default, levels: createLevels(7) },
                { id: 8, type: 'logic', name: 'פסגת ההיגיון', image: 'maps/island8.jpg', path: PATHS.default, levels: createLevels(8) },
                { id: 9, type: 'boss', name: 'ממלכת הפרעונים', image: 'maps/island9.jpg', path: PATHS.island9, levels: createLevels(9) },
                { id: 10, type: 'boss', name: 'האי האסור', image: 'maps/island10.jpg', path: PATHS.island10, levels: createLevels(10) }
            ],
            characters: [
                { id: 'gal', name: 'גיבורת הים', price: 0, image: 'players/Gal.jpg' },
                { id: 'nicole', name: 'השודדת', price: 0, image: 'players/Nicole.jpg' },
                { id: 'noam', name: 'נועם', price: 0, image: 'players/noam_p.jpg' },
                { id: 'p1', name: 'שודד ים', price: 100, image: 'players/playr1.jpg' },
                { id: 'p2', name: 'קפטן הוק', price: 250, image: 'players/playr2.jpg' },
                { id: 'p3', name: 'פיראטית אדמונית', price: 500, image: 'players/playr3.jpg' },
                { id: 'p4', name: 'קפטנית', price: 750, image: 'players/playr4.jpg' },
                { id: 'p5', name: 'פיראט צעיר', price: 1000, image: 'players/playr5.jpg' }
            ],
            items: [
                { id: 'parrot', name: 'תוכי חכם', desc: 'מסיר 2 תשובות', price: 20, icon: '🦜' },
                { id: 'potion', name: 'שיקוי מזל', desc: 'פי 2 מטבעות (5 תורות)', price: 30, icon: '🧪' }
            ]
        };

        let state = {
            playerName: '', grade: 1, currentIslandIndex: 0, currentLevel: 1, maxIslandUnlocked: 0, maxLevelReached: 1,
            coins: 0, inventory: ['gal', 'nicole', 'noam'], selectedChar: 'gal', questionIndex: 0, sessionEarnings: 0,
            levelQuestions: [], viewingIndex: 0, isReturning: false,
            devMode: false,
            streak: 0, maxStreak: 0, totalCorrect: 0, unlockedAchievements: [],
            consumables: { parrot: 0, potion: 0 },
            activePotionMoves: 0,
            videoCallback: null
        };

        // --- AUTH MANAGER ---
        const AuthManager = {
            mode: 'guest', // 'guest' | 'user'
            currentUser: null,

            openLoginModal: () => {
                document.getElementById('login-modal').style.display = 'flex';
                document.getElementById('login-email').focus();
            },
            closeLoginModal: () => {
                document.getElementById('login-modal').style.display = 'none';
            },
            mockLogin: () => {
                const email = document.getElementById('login-email').value;
                if (!email.includes('@')) { alert("אנא הכנס כתובת אימייל תקינה של פיראט!"); return; }
                
                // Simulating a logged in user
                AuthManager.currentUser = { email: email, name: email.split('@')[0] };
                AuthManager.mode = 'user';
                AuthManager.updateUI();
                AuthManager.closeLoginModal();
                
                // Update start screen info
                game.initPlayer(); 
            },
            logout: () => {
                if(!confirm("האם אתה בטוח?")) return;
                AuthManager.mode = 'guest';
                AuthManager.currentUser = null;
                AuthManager.updateUI();
                // Clear state
                state.playerName = '';
                document.getElementById('player-name').value = '';
            },
            updateUI: () => {
                const guestView = document.getElementById('guest-view');
                const userView = document.getElementById('user-view');
                const guestInput = document.getElementById('guest-input-section');
                const userStart = document.getElementById('user-start-section');

                if (AuthManager.mode === 'user') {
                    guestView.classList.add('hidden');
                    userView.classList.remove('hidden');
                    document.getElementById('user-greeting').innerText = `👋 אהוי, ${AuthManager.currentUser.name}!`;
                    
                    guestInput.classList.add('hidden');
                    userStart.classList.remove('hidden');
                } else {
                    guestView.classList.remove('hidden');
                    userView.classList.add('hidden');
                    
                    guestInput.classList.remove('hidden');
                    userStart.classList.add('hidden');
                }
            }
        };

        const Sound = {
            ctx: null,
            init: function() { try { const A=window.AudioContext||window.webkitAudioContext; if(A)this.ctx=new A(); } catch(e){} },
            play: (type, freq, vol=0.1) => {
                if(!Sound.ctx) return;
                try {
                    if(Sound.ctx.state==='suspended') Sound.ctx.resume();
                    const osc = Sound.ctx.createOscillator(), g=Sound.ctx.createGain();
                    osc.type=type; osc.frequency.value=freq; osc.connect(g); g.connect(Sound.ctx.destination);
                    osc.start(); g.gain.setValueAtTime(vol, Sound.ctx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.00001, Sound.ctx.currentTime+0.3); osc.stop(Sound.ctx.currentTime+0.3);
                } catch(e){}
            },
            click:()=>Sound.play('sine',400), correct:()=>Sound.play('sine',600), wrong:()=>Sound.play('sawtooth',150),
            levelUp:()=>Sound.play('square',600), bonus:()=>Sound.play('triangle',800)
        };
        try { Sound.init(); } catch(e) {}

        const MathGen = {
            db: {
                names: ['דנה', 'יוסי', 'עומר', 'נועה', 'רון', 'מיה', 'גיא', 'שירה', 'איתי', 'תמר', 'עידו', 'אורי', 'אלה', 'דניאל', 'ליאן'],
                items: ['תפוחים', 'גולות', 'בלונים', 'מחברות', 'עפרונות', 'סוכריות', 'מדבקות', 'קלפים', 'בובות', 'מטבעות'],
                places: ['בחנות', 'בכיתה', 'בגינה', 'באוטובוס', 'בספרייה', 'במסיבה', 'במגרש', 'בארמון'],
                actions_add: ['מצא', 'קיבל', 'קנה', 'הוסיף', 'אסף', 'זכה ב'],
                actions_sub: ['איבד', 'נתן', 'אכל', 'זרק', 'שבר', 'הביא לחבר']
            },
            rnd: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
            pick: (arr) => arr[Math.floor(Math.random() * arr.length)],

            generate: (typeIgnored, grade, level, qIdx) => {
                const islandId = state.currentIslandIndex + 1;
                if (islandId <= 2) return MathGen.getBasicMath(grade, level);
                if (islandId === 3) return MathGen.getWordProblem(grade, 'basic');
                if (islandId === 4) return MathGen.getMulDiv(grade);
                if (islandId <= 6) {
                    const r = Math.random();
                    if (r < 0.4) return MathGen.getBasicMath(grade, level);
                    if (r < 0.7) return MathGen.getMulDiv(grade);
                    return MathGen.getWordProblem(grade, 'mixed');
                }
                if (islandId <= 8) return MathGen.getLogic(grade);
                const r = Math.random();
                if (r < 0.25) return MathGen.getBasicMath(grade, level);
                if (r < 0.5) return MathGen.getMulDiv(grade);
                if (r < 0.75) return MathGen.getWordProblem(grade, 'complex');
                return MathGen.getLogic(grade);
            },
            getBasicMath: (grade, level) => {
                let max = 10;
                if (grade === 1) max = (level > 5) ? 20 : 10;
                else if (grade === 2) max = 100;
                else if (grade === 3) max = 1000;
                else max = 10000;
                const isAdd = Math.random() > 0.5;
                let n1, n2;
                if (isAdd) {
                    n1 = MathGen.rnd(1, max / 2);
                    n2 = MathGen.rnd(1, max / 2);
                    if (grade === 1 && n1+n2 > 20) n2 = 20 - n1; 
                    return MathGen.formatQ(`${n1} + ${n2} = ?`, n1 + n2);
                } else {
                    n1 = MathGen.rnd(Math.floor(max/4), max);
                    n2 = MathGen.rnd(1, n1);
                    return MathGen.formatQ(`${n1} - ${n2} = ?`, n1 - n2);
                }
            },
            getMulDiv: (grade) => {
                if (grade === 1) {
                    if (Math.random() > 0.5) {
                        const n = MathGen.rnd(2, 4);
                        return MathGen.formatQ(`${n} + ${n} + ${n} = ?`, n * 3);
                    } else {
                        const n = MathGen.rnd(1, 5);
                        return MathGen.formatQ(`${n} × 1 = ?`, n);
                    }
                }
                let maxN = (grade === 2) ? 5 : 10; 
                if (grade === 4) maxN = 12;
                if (Math.random() > 0.5) { 
                    let n1 = MathGen.rnd(1, maxN);
                    let n2 = MathGen.rnd(1, maxN); 
                    if(grade === 2) n2 = MathGen.rnd(1, 5); 
                    return MathGen.formatQ(`${n1} × ${n2} = ?`, n1 * n2);
                } else { 
                    let ans = MathGen.rnd(1, maxN);
                    let n2 = MathGen.rnd(1, maxN);
                    if(grade === 2) n2 = MathGen.rnd(1, 5);
                    let n1 = ans * n2;
                    return MathGen.formatQ(`${n1} : ${n2} = ?`, ans);
                }
            },
            getWordProblem: (grade, complexity) => {
                const name = MathGen.pick(MathGen.db.names);
                const item = MathGen.pick(MathGen.db.items);
                let limit = 10;
                if (grade === 2) limit = 20;
                if (grade >= 3) limit = 50;
                if (grade === 4 && Math.random() > 0.5) {
                    let dist = MathGen.rnd(100, 500);
                    let extra = MathGen.rnd(50, 200);
                    return MathGen.formatQ(`דני רץ ${dist} מטר ואז הלך עוד ${extra} מטר. כמה עבר סה"כ?`, dist + extra, true);
                }
                let n1 = MathGen.rnd(3, limit);
                let n2 = MathGen.rnd(2, limit/2);
                if (Math.random() > 0.5) { 
                    let action = MathGen.pick(MathGen.db.actions_add);
                    return MathGen.formatQ(`ל${name} היו ${n1} ${item}. הוא ${action} עוד ${n2}. כמה יש לו עכשיו?`, n1 + n2, true);
                } else { 
                    let total = n1 + n2;
                    let action = MathGen.pick(MathGen.db.actions_sub);
                    return MathGen.formatQ(`ל${name} היו ${total} ${item}. הוא ${action} ${n2}. כמה נשארו?`, n1, true);
                }
            },
            getLogic: (grade) => {
                const type = MathGen.rnd(1, 3);
                if (type === 1) { 
                    let start = MathGen.rnd(1, 10);
                    let jump = MathGen.rnd(2, 5);
                    if (grade === 1) jump = 1; 
                    return MathGen.formatQ(`${start}, ${start+jump}, ${start+jump*2}, ?`, start+jump*3);
                }
                if (type === 2) { 
                    let a = MathGen.rnd(1, 10);
                    let b = MathGen.rnd(1, 10);
                    let res = a + b;
                    return MathGen.formatQ(`${a} + ? = ${res}`, b);
                }
                if (type === 3) { 
                    let a = MathGen.rnd(10, 50);
                    let b = MathGen.rnd(10, 50);
                    if (a === b) b++;
                    return MathGen.formatQ(`מה גדול יותר? ${a} או ${b}`, Math.max(a, b), true);
                }
                return MathGen.getBasicMath(grade, 5);
            },
            formatQ: (q, a, isHebrew = false) => {
                let options = new Set();
                options.add(a);
                while(options.size < 4) {
                    let offset = Math.floor(Math.random() * 10) - 5;
                    if (offset === 0) continue;
                    let wrong = a + offset;
                    if (wrong > 0 && wrong !== a) options.add(wrong);
                }
                return {
                    q: q,
                    a: a,
                    isWord: isHebrew, 
                    options: Array.from(options).sort(() => Math.random() - 0.5),
                    userAnswer: null, 
                    isCorrect: null, 
                    failedAttempt: false
                };
            }
        };

        const game = {
            playVideo: (src = 'moves/intro.mp4', callback = null) => {
                if (callback === true) { // Resume
                     const v = document.getElementById('video-player');
                     v.play();
                     document.getElementById('start-video-btn').style.display = 'none';
                     return;
                }
                
                state.videoCallback = callback;
                const v = document.getElementById('video-player');
                
                // FORCE SOUND ON
                v.muted = false; 
                v.querySelector('source').src = src;
                v.load();
                
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
                document.getElementById('video-screen').classList.add('active');
                
                const startBtn = document.getElementById('start-video-btn');
                startBtn.style.display = 'none';
                
                // Attempt to play. If browser blocks due to no interaction, show button.
                const playPromise = v.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        startBtn.style.display = 'block';
                    });
                }
                v.onended = game.skipVideo;
            },
            skipVideo: () => { 
                const v = document.getElementById('video-player');
                v.pause(); 
                if (state.videoCallback) {
                    const cb = state.videoCallback;
                    state.videoCallback = null;
                    cb();
                } else {
                    ui.showScreen('start-screen'); 
                }
            },
            // --- LEADERBOARD & LOAD LOGIC ---
            openLoadMenu: () => {
                const list = document.getElementById('saved-players-list');
                const title = document.getElementById('leaderboard-title');
                list.innerHTML = '';
                let players = [];

                if (AuthManager.mode === 'user') {
                    // MOCK CLOUD VIEW
                    title.innerText = '☁️ טבלת ענן עולמית';
                    // Fake data for the cloud view
                    players = [
                        { name: AuthManager.currentUser.name, data: { maxIslandUnlocked: 2, maxLevelReached: 5, coins: 120 }, isMe: true },
                        { name: "קפטן ג'ק", data: { maxIslandUnlocked: 9, maxLevelReached: 10, coins: 9999 }, isMe: false },
                        { name: "שודדת הים מאיה", data: { maxIslandUnlocked: 5, maxLevelReached: 3, coins: 450 }, isMe: false }
                    ];
                } else {
                    // LOCAL STORAGE VIEW
                    title.innerText = '📱 שחקנים במכשיר זה';
                    for (let i = 0; i < localStorage.length; i++) {
                        const key = localStorage.key(i);
                        if (key.startsWith('mathSave_')) {
                            try {
                                const data = JSON.parse(localStorage.getItem(key));
                                players.push({ name: key.replace('mathSave_', ''), data: data, isMe: false });
                            } catch(e) {}
                        }
                    }
                }

                // Sorting
                players.sort((a, b) => b.data.coins - a.data.coins);

                if(players.length === 0) {
                    list.innerHTML = '<p>עדיין אין שחקנים ברשימה.</p>';
                } else {
                    players.forEach((p, index) => {
                        const rank = index + 1;
                        let rankClass = 'rank-other';
                        let medal = '';
                        if (rank === 1) { rankClass = 'rank-1'; medal = '👑'; }
                        if (rank === 2) { rankClass = 'rank-2'; }
                        if (rank === 3) { rankClass = 'rank-3'; }

                        const div = document.createElement('div');
                        div.className = 'leaderboard-item';
                        if (p.isMe) div.style.border = "2px solid var(--ocean)";
                        
                        div.innerHTML = `
                            <div class="rank-badge ${rankClass}">${rank}</div>
                            <div class="player-info">
                                <div class="player-name-text" onclick="game.loadSpecificPlayer('${p.name}')">
                                    ${medal} ${p.name} ${p.isMe ? '(אתה)' : ''}
                                </div>
                                <div class="player-stats">
                                    אי ${p.data.maxIslandUnlocked + 1} | שלב ${p.data.maxLevelReached} | 💰 ${p.data.coins}
                                </div>
                            </div>
                            ${(!p.isMe && AuthManager.mode === 'guest') ? `<button class="delete-btn" onclick="game.deletePlayer('${p.name}')">🗑️</button>` : ''}
                        `;
                        list.appendChild(div);
                    });
                }
                document.getElementById('load-game-modal').style.display = 'flex';
            },
            loadSpecificPlayer: (name) => {
                if (AuthManager.mode === 'user' && name !== AuthManager.currentUser.name) return; // Can't play others in cloud
                
                if (AuthManager.mode === 'guest') {
                    document.getElementById('player-name').value = name;
                    game.initPlayer();
                } else {
                    // For cloud, just start
                    game.initPlayer();
                }
                document.getElementById('load-game-modal').style.display = 'none';
            },
            deletePlayer: (name) => {
                const code = prompt("הכנס קוד מנהל למחיקה:");
                if(code === "AAA") {
                    localStorage.removeItem('mathSave_' + name);
                    game.openLoadMenu(); // Refresh
                } else {
                    alert("סיסמה שגויה!");
                }
            },
            
            initPlayer: () => {
                try {
                    let name = '';
                    
                    if (AuthManager.mode === 'user') {
                        name = AuthManager.currentUser.name;
                        state.playerName = name;
                        document.getElementById('hud-name').innerText = name;
                        
                        // Mock Data for Cloud User
                        state = { 
                            ...state, 
                            playerName: name, 
                            maxIslandUnlocked: 2, 
                            coins: 120,
                            inventory: ['gal', 'nicole', 'noam'] 
                        };
                        
                        state.isReturning = true;
                        ui.showScreen('map-screen');
                        Sound.click();
                        return;
                    }

                    // Guest Mode Logic
                    name = document.getElementById('player-name').value.trim();
                    if (!name) return alert('נא לכתוב שם');
                    
                    const saved = localStorage.getItem('mathSave_' + name);
                    state.playerName = name;
                    document.getElementById('hud-name').innerText = name;
                    if (saved) {
                        state = { ...state, ...JSON.parse(saved) };
                        if(!state.inventory.includes('noam')) state.inventory.push('noam');
                        if(!state.consumables || (state.consumables.parrot === 0 && state.consumables.potion === 0)) {
                            state.consumables = { parrot: 2, potion: 2 }; 
                        }
                        if(!state.unlockedAchievements) state.unlockedAchievements = [];
                        state.isReturning = true;
                        ui.showScreen('map-screen');
                    } else {
                        state.isReturning = false;
                        state.consumables = { parrot: 2, potion: 2 };
                        document.getElementById('welcome-name').innerText = name;
                        ui.showScreen('grade-screen');
                    }
                    if(document.getElementById('qty-parrot')) {
                        document.getElementById('qty-parrot').innerText = state.consumables.parrot;
                        document.getElementById('qty-potion').innerText = state.consumables.potion;
                    }
                    Sound.click();
                } catch(e) {
                    alert("שגיאה בהתחלת המשחק: " + e.message);
                }
            },
            setGrade: (g) => { state.grade = g; Sound.click(); ui.showScreen('char-select-screen'); ui.renderCharSelect(); },
            selectChar: (id) => {
                state.selectedChar = id; Sound.click();
                let videoFile;
                if (id === 'gal') videoFile = 'moves/Gal_intro.mp4';
                else if (id === 'nicole') videoFile = 'moves/Nicole_intro.mp4';
                else if (id === 'noam') videoFile = 'moves/noam_intro.mp4';
                else videoFile = 'moves/all_players.mp4'; 
                game.save(); 
                game.playVideo(videoFile, () => ui.showScreen('map-screen'));
            },
            save: () => { 
                if(AuthManager.mode === 'guest' && state.playerName) {
                    localStorage.setItem('mathSave_' + state.playerName, JSON.stringify(state)); 
                }
                // If cloud, we would save to firebase here
            },
            enterIsland: (idx) => {
                if(idx > state.maxIslandUnlocked) return;
                state.currentIslandIndex = idx;
                ui.renderLevelSelect(idx);
                ui.showScreen('level-select-screen');
            },
            selectLevel: (lvl) => {
                state.currentLevel = lvl;
                const currentIslandId = CONFIG.islands[state.currentIslandIndex].id;
                ui.showStory(StoryGen.getStory(currentIslandId, lvl), CONFIG.islands[state.currentIslandIndex].levels[lvl-1].name);
            },
            startLevel: () => {
                state.questionIndex = 0; state.viewingIndex = 0; state.levelQuestions = []; state.sessionEarnings = 0; 
                game.generateNextQuestion(); 
                document.getElementById('game-background-layer').style.backgroundImage = `url('${CONFIG.islands[state.currentIslandIndex].image}')`;
                ui.renderGameNodes(); 
                ui.showScreen('game-screen'); ui.updateGameUI();
            },
            generateNextQuestion: () => {
                const q = MathGen.generate(CONFIG.islands[state.currentIslandIndex].type, state.grade, state.currentLevel, state.questionIndex);
                state.levelQuestions.push(q); state.viewingIndex = state.questionIndex;
            },
            checkAnswer: (val) => {
                const currentQ = state.levelQuestions[state.viewingIndex]; 
                if(currentQ.userAnswer !== null) return; 
                
                if(Number(val) === Number(currentQ.a)) {
                    Sound.correct(); document.getElementById('feedback-correct').style.display = 'block';
                    
                    if (!currentQ.failedAttempt) { 
                        let earned = CONFIG.coinsPerRight;
                        if (state.activePotionMoves > 0) { earned *= 2; state.activePotionMoves--; }
                        state.coins += earned; state.sessionEarnings += earned;
                        state.totalCorrect++;
                        state.streak++;
                        if (state.streak > state.maxStreak) state.maxStreak = state.streak;

                        if (state.streak % 5 === 0) {
                            state.coins += 10; state.sessionEarnings += 10;
                            Sound.bonus();
                            const b = document.getElementById('feedback-bonus');
                            b.style.display = 'block';
                            setTimeout(()=>b.style.display='none', 1500);
                        }
                    }
                    game.checkAchievements();
                    
                    currentQ.userAnswer = val; currentQ.isCorrect = true;
                    setTimeout(() => {
                        document.querySelectorAll('.feedback').forEach(e => e.style.display = 'none');
                        if (state.viewingIndex === state.questionIndex) {
                            state.questionIndex++;
                            if(state.questionIndex >= CONFIG.questionsPerLevel) game.levelComplete();
                            else { game.generateNextQuestion(); ui.updateGameUI(); }
                        } else {
                           ui.updateGameUI(); 
                        }
                    }, 800);
                } else {
                    Sound.wrong(); document.getElementById('feedback-wrong').style.display = 'block';
                    currentQ.failedAttempt = true; 
                    state.streak = 0; // Reset streak
                    setTimeout(() => { document.querySelectorAll('.feedback').forEach(e => e.style.display = 'none'); }, 600);
                }
                ui.updateGameHUD(); 
            },
            usePowerUp: (type) => {
                if (state.consumables[type] > 0) {
                    if (type === 'parrot') {
                        state.consumables.parrot--;
                        const currentQ = state.levelQuestions[state.viewingIndex];
                        const buttons = Array.from(document.querySelectorAll('.answer-btn'));
                        const wrongButtons = buttons.filter(btn => {
                            const val = parseInt(btn.innerText);
                            return val !== currentQ.a;
                        });
                        wrongButtons.sort(() => Math.random() - 0.5);
                        let hiddenCount = 0;
                        wrongButtons.forEach(btn => {
                            if (hiddenCount < 2) {
                                btn.classList.add('hidden');
                                hiddenCount++;
                            }
                        });
                        Sound.click(); 
                    } else if (type === 'potion') {
                        state.consumables.potion--;
                        state.activePotionMoves += 5;
                        alert("שיקוי הופעל! פי 2 מטבעות ל-5 שאלות הבאות.");
                        Sound.bonus();
                    }
                    game.save();
                    document.getElementById('qty-parrot').innerText = state.consumables.parrot;
                    document.getElementById('qty-potion').innerText = state.consumables.potion;
                    document.getElementById('btn-use-parrot').disabled = true; 
                }
            },
            checkAchievements: () => {
                ACHIEVEMENTS.forEach(ach => {
                    if (!state.unlockedAchievements.includes(ach.id) && ach.req(state)) {
                        state.unlockedAchievements.push(ach.id);
                        alert(`🏆 הישג חדש: ${ach.name}!`);
                    }
                });
            },
            prevQuestion: () => { 
                if(state.viewingIndex > 0) { 
                    state.viewingIndex--; 
                    ui.updateGameUI(); 
                } 
            },
            nextQuestionNav: () => { 
                if (state.devMode || state.viewingIndex < state.questionIndex) {
                    state.viewingIndex++;
                    if (!state.levelQuestions[state.viewingIndex] && state.devMode) {
                         state.questionIndex = state.viewingIndex;
                         game.generateNextQuestion();
                    }
                    ui.updateGameUI();
                }
            },
            
            levelComplete: () => {
                Sound.levelUp();
                
                if(state.currentIslandIndex === state.maxIslandUnlocked && state.currentLevel === state.maxLevelReached) {
                    if(state.currentLevel < 10) state.maxLevelReached++;
                    else if(state.maxIslandUnlocked < 9) { state.maxIslandUnlocked++; state.maxLevelReached=1; }
                }
                game.checkAchievements(); // Check completion achievements
                game.save();
                
                // NEW: Victory Video Logic for Island 10 Level 10
                if (state.currentIslandIndex === 9 && state.currentLevel === 10) {
                     const vidMap = {
                         'gal': 'moves/Gal_win10.mp4',
                         'noam': 'moves/Noam_win10.mp4',
                         'nicole': 'moves/Nicole_win10.mp4'
                     };
                     const vid = vidMap[state.selectedChar];
                     if (vid) {
                         game.playVideo(vid, () => game.showWinScreen());
                         return;
                     }
                }

                game.showWinScreen();
            },

            showWinScreen: () => {
                const winImg = document.getElementById('win-image');
                winImg.style.display = 'none'; 
                
                if (state.currentLevel === 10) { 
                    const islandId = state.currentIslandIndex + 1;
                    let imgName = null;
                    if (state.selectedChar === 'gal') {
                        const galWins = { 1: 'Gal_win1.jpg', 2: 'Gal_win2.jpg', 3: 'Gal_win3.jpg', 4: 'Gal_win4.jpg', 5: 'Gal_win5.jpg', 6: 'Gal_win6.jpg', 7: 'Gal_win7.jpg', 8: 'Gal_win8.jpg', 9: 'Gal_win9.jpg' };
                        imgName = galWins[islandId];
                    } else if (state.selectedChar === 'nicole') {
                        imgName = `Nicole_win${islandId}.jpg`; 
                    } else if (state.selectedChar === 'noam') {
                        imgName = `win_images/Noam_win${islandId}.jpg`;
                    }
                    
                    if (imgName) {
                        winImg.src = imgName;
                        winImg.onerror = function() { this.style.display = 'none'; };
                        winImg.style.display = 'block';
                    }
                }
                document.getElementById('level-earnings').innerText = state.sessionEarnings;
                ui.showScreen('complete-screen');
                Confetti.explode();
            },
            
            nextLevel: () => { 
                if(state.currentLevel < 10) {
                    game.selectLevel(state.currentLevel + 1); 
                } else { 
                    ui.showScreen('map-screen');
                } 
            },
            
            openShopInGame: () => { previousScreen = 'game-screen'; ui.showScreen('shop-screen'); ui.renderShop('items'); },
            forceWinLevel: () => { dev.toggle(); game.levelComplete(); },
            addCoins: (n) => { state.coins+=n; ui.updateGameHUD(); },
            unlockAllIslands: () => { state.maxIslandUnlocked=9; state.maxLevelReached=10; game.save(); dev.toggle(); ui.renderMap(); },
            buyItem: (type, id) => {
                if (type === 'char') {
                    const c = CONFIG.characters.find(x=>x.id===id);
                    if(state.coins >= c.price) { state.coins -= c.price; state.inventory.push(id); } else return alert('אין מספיק מטבעות');
                } else {
                    const it = CONFIG.items.find(x=>x.id===id);
                    if(state.coins >= it.price) { state.coins -= it.price; state.consumables[id]++; } else return alert('אין מספיק מטבעות');
                }
                game.checkAchievements();
                game.save(); ui.renderShop(type === 'char' ? 'chars' : 'items'); ui.updateHUD();
            }
        };

        const ui = {
            showScreen: (id) => {
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
                document.getElementById(id).classList.add('active');
                if(id==='map-screen') { ui.renderMap(); document.getElementById('hud-name').innerText = state.playerName; }
                if(id==='achievements-screen') ui.renderAchievements();
            },
            returnFromShop: () => { 
                if (previousScreen === 'game-screen') {
                    ui.showScreen('game-screen'); 
                    ui.updateGameUI(); // Force refresh buttons!
                } else { 
                    ui.showScreen('map-screen'); 
                    previousScreen = 'map-screen'; 
                } 
            },
            updateGameUI: () => {
                const qData = state.levelQuestions[state.viewingIndex];
                if(!qData) return;
                document.getElementById('question-text').innerText = qData.q;
                if(qData.isWord) document.getElementById('question-text').style.direction='rtl'; else document.getElementById('question-text').style.direction='ltr';
                const grid = document.getElementById('answers-area'); grid.innerHTML = '';
                
                document.getElementById('btn-prev-q').disabled = (state.viewingIndex === 0);
                const canGoNext = (state.devMode || state.viewingIndex < state.questionIndex);
                document.getElementById('btn-next-q').disabled = !canGoNext;

                qData.options.forEach(opt => {
                    const btn = document.createElement('button'); btn.className = 'answer-btn'; btn.innerText = opt;
                    if (qData.userAnswer !== null && qData.isCorrect) { 
                        btn.disabled = true; 
                        if (Number(opt) === Number(qData.a)) btn.classList.add('correct'); 
                        else if (Number(opt) === Number(qData.userAnswer)) btn.classList.add('wrong'); 
                    }
                    else if (qData.userAnswer === null && qData.failedAttempt && state.viewingIndex === state.questionIndex) { 
                        btn.onclick = () => game.checkAnswer(opt);
                    }
                    else { 
                        if (qData.userAnswer !== null && qData.isCorrect) {
                             btn.disabled = true;
                             if (Number(opt) === Number(qData.a)) btn.classList.add('correct');
                        } else if (state.viewingIndex < state.questionIndex) {
                             btn.onclick = () => game.checkAnswer(opt);
                        } else {
                             btn.onclick = () => game.checkAnswer(opt); 
                        }
                    }
                    grid.appendChild(btn);
                });
                const progressPct = ((state.questionIndex) / CONFIG.questionsPerLevel) * 100;
                document.getElementById('level-progress-bar').style.width = `${progressPct}%`;
                const char = CONFIG.characters.find(c => c.id === state.selectedChar);
                document.getElementById('character-display').innerHTML = `<img src="${char.image}" onerror="this.style.display='none'">`;
                ui.renderGameNodes();
                const levelName = CONFIG.islands[state.currentIslandIndex].levels[state.currentLevel-1].name;
                document.getElementById('game-level-info').innerText = `🚩 שלב ${state.currentLevel} - ${levelName}`;
                document.getElementById('game-q-num').innerText = state.viewingIndex + 1;
                document.getElementById('game-coins').innerText = state.coins;

                document.getElementById('qty-parrot').innerText = state.consumables.parrot;
                document.getElementById('btn-use-parrot').disabled = state.consumables.parrot === 0 || state.viewingIndex !== state.questionIndex;
                document.getElementById('qty-potion').innerText = state.consumables.potion;
                document.getElementById('btn-use-potion').disabled = state.consumables.potion === 0 || state.activePotionMoves > 0;
                
                const sb = document.getElementById('streak-indicator');
                if (state.streak > 1) {
                    sb.style.display = 'block';
                    sb.innerText = `🔥 ${state.streak}`;
                } else {
                    sb.style.display = 'none';
                }
            },
            updateGameHUD: () => { document.getElementById('game-coins').innerText = state.coins; },
            renderMap: () => {
                document.getElementById('hud-grade').innerText = ['א','ב','ג','ד'][state.grade-1];
                document.getElementById('hud-coins').innerText = state.coins;
                const c = document.getElementById('islands-grid'); c.innerHTML='';
                CONFIG.islands.forEach((isl, i) => {
                    const div = document.createElement('div'); const locked = i > state.maxIslandUnlocked;
                    const isCurrent = (i === state.currentIslandIndex);
                    div.className = `island-card ${locked?'locked':''} ${!locked && i<state.maxIslandUnlocked?'completed':''} ${isCurrent ? 'current-location-highlight' : ''}`;
                    let extraHTML = '';
                    if (isCurrent) {
                        const charImg = CONFIG.characters.find(c => c.id === state.selectedChar).image;
                        extraHTML = `<div class="location-label">📍 המיקום שלך</div><img src="${charImg}" class="map-player-marker" onerror="this.style.display='none'">`;
                    }
                    div.innerHTML = `
                        ${extraHTML}
                        <div class="island-img-container"><img src="${isl.image}" class="island-map-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'fallback-icon\\'>🏝️</span>'"></div>
                        <div class="island-content">
                            <h3>${isl.name}</h3>
                            <p style="font-family:var(--font-num); color:var(--wood-light); font-weight:bold;">${locked?'🔒':(i===state.currentIslandIndex?'⚔️ מסע פעיל':'✅ פתוח')}</p>
                        </div>`;
                    div.onclick = () => !locked && game.enterIsland(i);
                    c.appendChild(div);
                });
                const sel = document.getElementById('dev-island-select'); sel.innerHTML = '';
                CONFIG.islands.forEach((isl, i) => { sel.innerHTML += `<option value="${i}">${isl.name}</option>`; });
                dev.updateLevels();
            },
            renderLevelSelect: (islandIdx) => { ui.renderNodes(document.getElementById('active-map-container'), islandIdx, true); },
            renderGameNodes: () => { ui.renderNodes(document.getElementById('level-nodes-layer'), state.currentIslandIndex, false); },
            renderNodes: (container, islandIdx, clickable) => {
                container.innerHTML = '';
                const path = CONFIG.islands[islandIdx].path || PATHS.default;
                const levels = CONFIG.islands[islandIdx].levels;
                container.style.backgroundImage = `url('${CONFIG.islands[islandIdx].image}')`;
                let max = 10;
                if(islandIdx === state.maxIslandUnlocked) max = state.maxLevelReached; else if(islandIdx < state.maxIslandUnlocked) max = 11; 
                for(let i=1; i<=10; i++) {
                    const node = document.createElement('div'); node.className = 'level-node';
                    node.style.left = path[i-1].l + '%'; node.style.top = path[i-1].t + '%';
                    node.innerText = levels[i-1].icon; 
                    const label = document.createElement('div'); label.className = 'node-label'; label.innerText = levels[i-1].name;
                    node.appendChild(label);
                    if(i <= max) {
                        if(i < max) node.classList.add('completed');
                        if(i === max && islandIdx === state.maxIslandUnlocked) node.classList.add('current');
                        if(clickable) node.onclick = () => game.selectLevel(i);
                    } else { node.classList.add('locked'); }
                    container.appendChild(node);
                }
            },
            renderCharSelect: () => { 
                const c = document.getElementById('char-grid'); c.innerHTML='';
                CONFIG.characters.forEach(ch => {
                    const d = document.createElement('div'); d.className='char-card';
                    d.innerHTML=`<div class="card-img-container"><img src="${ch.image}" class="card-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'fallback-icon\\'>👤</span>'"></div><div class="card-content"><h3>${ch.name}</h3></div>`;
                    d.onclick=()=>game.selectChar(ch.id); c.appendChild(d);
                });
            },
            renderShop: (tab = 'chars') => { 
                const c = document.getElementById('shop-grid'); c.innerHTML=''; document.getElementById('shop-coins').innerText = state.coins;
                if (tab === 'chars') {
                    CONFIG.characters.forEach(ch => {
                        const owned = state.inventory.includes(ch.id);
                        const d = document.createElement('div'); d.className='char-card';
                        d.innerHTML=`<div class="card-img-container"><img src="${ch.image}" class="card-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'fallback-icon\\'>👤</span>'"></div><div class="card-content"><h3>${ch.name}</h3><p style="font-family:var(--font-num);">${owned?'✅':ch.price}</p></div>`;
                        if(!owned) d.onclick=()=>game.buyItem('char', ch.id); else d.style.opacity = "0.7";
                        c.appendChild(d);
                    });
                } else {
                    CONFIG.items.forEach(it => {
                        const d = document.createElement('div'); d.className='char-card';
                        d.innerHTML=`<div class="card-img-container" style="font-size:3rem;">${it.icon}</div><div class="card-content"><h3>${it.name}</h3><p style="font-size:0.8rem">${it.desc}</p><p style="font-family:var(--font-num);">💰 ${it.price}</p><p>יש לך: ${state.consumables[it.id]}</p></div>`;
                        d.onclick=()=>game.buyItem('item', it.id);
                        c.appendChild(d);
                    });
                }
            },
            renderAchievements: () => {
                const c = document.getElementById('achievements-grid'); c.innerHTML = '';
                ACHIEVEMENTS.forEach(ach => {
                    const unlocked = state.unlockedAchievements.includes(ach.id);
                    const d = document.createElement('div'); d.className = `trophy-card ${unlocked?'':'locked'}`;
                    d.innerHTML = `<div class="trophy-icon">${ach.icon}</div><div class="card-content"><h3>${ach.name}</h3><p style="font-size:0.9rem">${ach.desc}</p>${unlocked?'<p style="color:green; font-weight:bold;">הושלם!</p>':'<p>🔒</p>'}</div>`;
                    c.appendChild(d);
                });
            },
            showStory: (text, title) => { document.getElementById('story-title').innerText = title; document.getElementById('story-content').innerText = text; ui.showScreen('story-screen'); }
        };

        const dev = {
            toggle: () => { 
                const el = document.getElementById('dev-panel'); 
                if (el.style.display === 'block') {
                   dev.close();
                   return;
                }
                const password = prompt("הכנס קוד גישה למנהל המערכת:");
                if (password === "AAA") {
                   el.style.display = 'block'; 
                   state.devMode = true; 
                   if(document.getElementById('game-screen').classList.contains('active')) {
                       ui.updateGameUI();
                   }
                } else if (password !== null) {
                    alert("⛔ סיסמה שגויה!");
                }
            },
            close: () => {
                document.getElementById('dev-panel').style.display = 'none';
            },
            updateLevels: () => { 
                const sel = document.getElementById('dev-level-select'); 
                sel.innerHTML = ''; 
                for(let i=1; i<=10; i++) sel.innerHTML += `<option value="${i}">שלב ${i}</option>`; 
            },
            jumpTo: () => {
                const i = parseInt(document.getElementById('dev-island-select').value); 
                const l = parseInt(document.getElementById('dev-level-select').value);
                state.currentIslandIndex = i; 
                state.maxIslandUnlocked = Math.max(state.maxIslandUnlocked, i);
                if(state.maxIslandUnlocked === i) state.maxLevelReached = Math.max(state.maxLevelReached, l);
                dev.close(); 
                game.selectLevel(l);
            }
        };

        const Confetti = {
            explode: () => {
                const canvas = document.getElementById('confetti-canvas'); const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth; canvas.height = window.innerHeight;
                const particles = []; const colors = ['#ffd700', '#ffb300', '#ff6f00'];
                for(let i=0; i<150; i++) particles.push({ x: canvas.width/2, y: canvas.height/2, vx: (Math.random()-0.5)*25, vy: (Math.random()-0.5)*25, c: colors[Math.floor(Math.random()*colors.length)], size: Math.random()*12+6 });
                let opacity = 1;
                function draw() {
                    ctx.clearRect(0,0,canvas.width, canvas.height);
                    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.5; ctx.fillStyle = p.c; ctx.globalAlpha = opacity; ctx.fillRect(p.x, p.y, p.size, p.size); });
                    opacity -= 0.01; if(opacity > 0) requestAnimationFrame(draw);
                }
                draw();
            }
        };

        // Service Worker Registration for PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(reg => console.log('Service Worker registered', reg))
                    .catch(err => console.log('Service Worker failed', err));
            });
        }

        window.onload = function() {
            currentVideoType = 'intro';
            ui.showScreen('video-screen');
            game.playVideo();
        };

    </script>
</body>
</html>
