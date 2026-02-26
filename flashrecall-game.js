/* ═══════════════ DATA ═══════════════ */
const COLORS = [
  { id: 0, name: 'Red', hex: '#ef4444' },
  { id: 1, name: 'Yellow', hex: '#eab308' },
  { id: 2, name: 'Pink', hex: '#ec4899' },
  { id: 3, name: 'Black', hex: '#000000' },
  { id: 4, name: 'White', hex: '#ffffff' },
  { id: 5, name: 'Green', hex: '#22c55e' },
];
const EMOJIS = [
  {id:0,emoji:'🐶',name:'Dog'},
  {id:1,emoji:'🐱',name:'Cat'},
  {id:2,emoji:'🌟',name:'Star'},
  {id:3,emoji:'🍕',name:'Pizza'},
  {id:4,emoji:'🚗',name:'Car'},
  {id:5,emoji:'🎵',name:'Music'},
  {id:6,emoji:'⚽',name:'Football'},
  {id:7,emoji:'🌈',name:'Rainbow'},
  {id:8,emoji:'🎂',name:'Cake'},
];

const SCIENTISTS = [
  {
    id: 0,
    name: 'Nikola Tesla',
    country: 'Serbian-American',
    years: '1856–1943',
    field: 'Electrical Engineering',
    known: 'AC electricity, Tesla Coil',
    fact: 'Tesla had a photographic memory and could visualise 3D inventions before building them — he was also terrified of pearls.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/300px-N.Tesla.JPG'
  },
  {
    id: 1,
    name: 'Albert Einstein',
    country: 'German-American',
    years: '1879–1955',
    field: 'Theoretical Physics',
    known: 'Theory of Relativity, E=mc²',
    fact: 'Einstein failed his first university entrance exam and did not speak fluently until age 9.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/300px-Albert_Einstein_Head.jpg'
  },
  {
    id: 2,
    name: 'Isaac Newton',
    country: 'British',
    years: '1643–1727',
    field: 'Physics & Mathematics',
    known: 'Gravity, Calculus, Laws of Motion',
    fact: "Newton invented calculus but hid it for decades — igniting history's nastiest math feud with Leibniz.",
    img: '2.jpg' // <-- Changed to local file
  },
  {
    id: 3,
    name: 'Marie Curie',
    country: 'Polish-French',
    years: '1867–1934',
    field: 'Chemistry & Physics',
    known: 'Radioactivity, Polonium, Radium',
    fact: 'The only person ever to win Nobel Prizes in two different sciences. Her notebooks are still radioactive.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/300px-Marie_Curie_c1920.jpg'
  },
  {
    id: 4,
    name: 'Charles Darwin',
    country: 'British',
    years: '1809–1882',
    field: 'Biology',
    known: 'Evolution, Natural Selection',
    fact: 'Darwin sat on his theory of evolution for 20+ years, afraid of the reaction. He published only when someone else was about to steal the credit.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/300px-Charles_Darwin_seated_crop.jpg'
  },
  {
    id: 5,
    name: 'Richard Feynman',
    country: 'American',
    years: '1918–1988',
    field: 'Quantum Physics',
    known: 'Quantum electrodynamics, Feynman diagrams',
    fact: 'Feynman cracked safes at Los Alamos for fun and played bongo drums professionally.',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/300px-Richard_Feynman_Nobel.jpg'
  },
  {
    id: 6,
    name: 'Alan Turing',
    country: 'British',
    years: '1912–1954',
    field: 'Computer Science',
    known: 'Turing Machine, WWII codebreaking',
    fact: "Turing cracked Nazi Enigma codes, shortening WWII by an estimated 2 years and saving ~14 million lives.",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/300px-Alan_Turing_Aged_16.jpg'
  },
  {
    id: 7,
    name: 'APJ Abdul Kalam',
    country: 'Indian',
    years: '1931–2015',
    field: 'Aerospace Engineering',
    known: "Missile Man of India, ISRO, President",
    fact: "Kalam delivered milk as a child to fund his education. He later fathered India's missile program.",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/300px-A._P._J._Abdul_Kalam.jpg'
  },
  {
    id: 8,
    name: 'Homi Bhabha',
    country: 'Indian',
    years: '1909–1966',
    field: 'Nuclear Physics',
    known: 'Father of Indian nuclear program',
    fact: "Homi Bhabha built India's nuclear capability from scratch, founding TIFR and BARC.",
    img: '8.jpg' // <-- Changed to local file
  },
  {
    id: 9,
    name: 'Vikram Sarabhai',
    country: 'Indian',
    years: '1919–1971',
    field: 'Space Science',
    known: 'Founder of ISRO, Aryabhata satellite',
    fact: "Sarabhai launched India's space program on a shoestring budget, assembling rockets from coconut trees.",
    img: '9.jpg' // <-- Changed to local file
  },
  {
    id: 10,
    name: 'J.C. Bose',
    country: 'Indian',
    years: '1858–1937',
    field: 'Physics & Plant Biology',
    known: 'Radio waves, plant neuroscience',
    fact: 'JC Bose demonstrated radio waves in 1895 — before Marconi — and proved plants respond to stimuli.',
    img: '10.jpg' // <-- Changed to local file
  },
  {
    id: 11,
    name: 'Srinivasa Ramanujan',
    country: 'Indian',
    years: '1887–1920',
    field: 'Mathematics',
    known: 'Number theory, infinite series',
    fact: 'Ramanujan had almost zero formal training. His notebooks contain thousands of formulas still being proved today.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg/300px-Srinivasa_Ramanujan_-_OPC_-_1.jpg'
  }
];  
const ROUNDS = [
  {id:0,title:'The Colour Challenge',icon:'🎨',badge:'Round 1 of 3',desc:'Coloured squares flash in sequence. Memorise then click them back in order.',pts:1,data:COLORS},
  {id:1,title:'Emoji Blast',icon:'😄',badge:'Round 2 of 3',desc:'Everyday emojis flash rapid-fire. Commit them to memory, reconstruct the sequence.',pts:2,data:EMOJIS},
  {id:2,title:'Scientist Gauntlet',icon:'🏆',badge:'Round 3 of 3',desc:"History's greatest minds flash past. Identify and sequence them. Facts revealed after each level.",pts:4,data:SCIENTISTS},
];

// CHEAT MODE SEQUENCES - only for Bhumesh
const CHEAT_SEQUENCES = {
  '0-0': [0,4,5,1], // red, purple, orange, blue
  '0-1': [1,3,2,3,3,5], // blue, yellow, green, yellow, yellow, pink
  '0-2': [2,1,3,5,4,0,0,5], // blue, red, green, pink, cyan, purple, purple, purple
  '1-0': [0,1,2,2], // dog, cat, star, star
  '1-1': [6,4,5,8,0,1], // football, car, music, cake, dog, cat
  '1-2': [7,8,7,1,2,4,5,3], // rainbow, cake, rainbow, cat, star, car, music, pizza, dog
  '2-0': [0,0,3,11], // Tesla, Tesla, Newton, APJ
  '2-1': [2,4,8,1,3,10], // Hawking, Alan, Thomas, Newton, da Vinci, Tesla
  '2-2': [9, 7, 5, 2, 2, 1, 3, 8], // Bose, Vikram, Tesla, Newton, Feynman, Turing, Ramanujan, Kalam
};

const SEQ_LENGTHS = [4,6,8];

/* ═══════════════ STATE ═══════════════ */
let USERNAME = '';
let CHEAT_MODE = false;

let G = {
  round:0, level:0,
  sequence:[], userInput:[], correctMask:[],
  flashDuration:1000, gapDuration:150,
  itemStartTime:0,
  score:0,
  stats:{
    attempts:[],
    roundCorrect:[0,0,0],
    roundTotal:[0,0,0],
    errorPositions:{},
  },
  levelReactionTimes:[], levelErrors:0,
  gameComplete:false,
};

let TB = {sequence:[],userInput:[],correctMask:[],reactionTimes:[],errors:0,itemStartTime:0};
const TB_SEQ_LEN = 10;
const TB_PTS = 3;

/* ═══════════════ IMAGE PRELOADING ═══════════════ */
/* ═══════════════ IMAGE PRELOADING ═══════════════ */
let imagesPreloaded = false;
const imageCache = {};

async function preloadImages() {
  // 1. Change the cache key to v2
  const cachedImages = localStorage.getItem('flashrecall_images_v5');
  
  if (cachedImages) {
    const parsed = JSON.parse(cachedImages);
    Object.assign(imageCache, parsed);
    imagesPreloaded = true;
    console.log('✅ Images loaded from cache');
    return;
  }
  
  console.log('📥 Preloading images from Wikipedia...');
  const promises = SCIENTISTS.map(async (sci) => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          imageCache[sci.id] = canvas.toDataURL('image/jpeg', 0.8);
          resolve();
        };
        img.onerror = () => {
          imageCache[sci.id] = sci.img; // Fallback to original URL
          resolve();
        };
        img.src = sci.img;
      });
    } catch (e) {
      imageCache[sci.id] = sci.img;
    }
  });
  
  await Promise.all(promises);
  // 2. Change the save key to v2
  localStorage.setItem('flashrecall_images_v5', JSON.stringify(imageCache));
  imagesPreloaded = true;
  console.log('✅ Images preloaded and cached');
}

function getScientistImage(id) {
  return imageCache[id] || SCIENTISTS[id].img;
}

function resetImageCache() {
  if (confirm('Reset image cache? Images will reload from Wikipedia.')) {
    // 3. Change the remove key to v2
    localStorage.removeItem('flashrecall_images_v2'); 
    Object.keys(imageCache).forEach(key => delete imageCache[key]);
    imagesPreloaded = false;
    showToast('🔄 Image cache reset! Reloading...', 'info');
    setTimeout(() => {
      preloadImages().then(() => showToast('✅ Images reloaded!', 'success'));
    }, 500);
  }
}

// Preload on startup
preloadImages();

/* ═══════════════ LEADERBOARD ═══════════════ */
function getLeaderboard() {
  const lb = localStorage.getItem('flashrecall_leaderboard');
  return lb ? JSON.parse(lb) : [];
}

function saveToLeaderboard(name, score) {
  const lb = getLeaderboard();
  lb.push({ name, score, date: new Date().toISOString() });
  lb.sort((a, b) => b.score - a.score);
  localStorage.setItem('flashrecall_leaderboard', JSON.stringify(lb));
  updateLeaderboardDisplay();
}

function updateLeaderboardDisplay() {
  const lb = getLeaderboard();
  const list = document.getElementById('leaderboard-list');
  
  if (lb.length === 0) {
    list.innerHTML = '<div class="leaderboard-empty">No scores yet. Be the first!</div>';
    return;
  }
  
  list.innerHTML = lb.slice(0, 10).map((entry, idx) => `
    <div class="leaderboard-item">
      <div class="lb-rank">#${idx + 1}</div>
      <div class="lb-name">${entry.name}</div>
      <div class="lb-score">${entry.score} pts</div>
    </div>
  `).join('');
}

function resetLeaderboard() {
  if (confirm('Reset leaderboard? This will also reset used sequences.')) {
    localStorage.removeItem('flashrecall_leaderboard');
    localStorage.removeItem('flashrecall_used_sequences');
    updateLeaderboardDisplay();
    showToast('🗑️ Leaderboard reset!', 'info');
  }
}

/* ═══════════════ SEQUENCE TRACKING ═══════════════ */
function getUsedSequences() {
  const used = localStorage.getItem('flashrecall_used_sequences');
  return used ? JSON.parse(used) : { '0-0': [], '0-1': [], '0-2': [], '1-0': [], '1-1': [], '1-2': [], '2-0': [], '2-1': [], '2-2': [] };
}

function saveUsedSequence(round, level, sequence) {
  const used = getUsedSequences();
  const key = `${round}-${level}`;
  const seqStr = sequence.map(item => item.id).join(',');
  
  if (!used[key]) used[key] = [];
  if (!used[key].includes(seqStr)) {
    used[key].push(seqStr);
  }
  
  localStorage.setItem('flashrecall_used_sequences', JSON.stringify(used));
}

function generateUniqueSequence(round, level) {
  const pool = ROUNDS[round].data;
  const len = G.round === 2 ? [3, 4, 6][G.level] : SEQ_LENGTHS[G.level];
  const used = getUsedSequences();
  const key = `${round}-${level}`;
  
  // Calculate total possible unique sequences
  const totalPossible = Math.pow(pool.length, len);
  
  // If we've used all possible sequences, reset for this level
  if (used[key] && used[key].length >= Math.min(totalPossible, 1000)) {
    used[key] = [];
    localStorage.setItem('flashrecall_used_sequences', JSON.stringify(used));
    showToast('🔄 All sequences used - starting fresh!', 'info');
  }
  
  let attempts = 0;
  let sequence;
  let seqStr;
  
  do {
    sequence = [];
    for (let i = 0; i < len; i++) {
      sequence.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    seqStr = sequence.map(item => item.id).join(',');
    attempts++;
    
    if (attempts > 100) {
      console.warn('Could not find unique sequence, using current one');
      break;
    }
  } while (used[key] && used[key].includes(seqStr));
  
  saveUsedSequence(round, level, sequence);
  return sequence;
}

/* ═══════════════ GOOGLE FORM SUBMISSION ═══════════════ */
async function submitToGoogleForm(name, score) {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSftyUpeI5wGs7t1TbpKIs5cDguIt66es8eVf6gphU_gDh4Wew/formResponse';
  
  const formData = new FormData();
  formData.append('entry.1045469898', name);
  formData.append('entry.741893680', score.toString());
  
  try {
    await fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
    console.log('✅ Score submitted to Google Form');
  } catch (error) {
    console.error('❌ Error submitting to Google Form:', error);
  }
}

/* ═══════════════ CURSOR ═══════════════ */
const cursor=document.getElementById('cursor');
const ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();

/* ═══════════════ PARTICLES ═══════════════ */
const canvas=document.getElementById('particle-canvas');
const ctx2=canvas.getContext('2d');
let W2,H2,pmouse={x:-999,y:-999};
const PLAYER=[{count:35,rMin:.6,rMax:1.2,speed:.18,alpha:.35},{count:20,rMin:1.5,rMax:2.5,speed:.28,alpha:.5},{count:10,rMin:3,rMax:5,speed:.4,alpha:.65}];
let parts=[];
let pA1=[251,146,60],pA2=[20,184,166],pA3=[139,92,246];
function pRnd(a,b){return a+Math.random()*(b-a);}
function syncPC(){const s=getComputedStyle(document.documentElement);const pv=v=>s.getPropertyValue(v).trim().split(',').map(Number);pA1=pv('--a1');pA2=pv('--a2');pA3=pv('--a3');}
function initParts(){parts=[];PLAYER.forEach(L=>{for(let i=0;i<L.count;i++){const col=[pA1,pA2,pA3][Math.floor(Math.random()*3)];parts.push({x:pRnd(0,W2),y:pRnd(0,H2),vx:pRnd(-L.speed,L.speed),vy:pRnd(-L.speed,L.speed),r:pRnd(L.rMin,L.rMax),baseR:pRnd(L.rMin,L.rMax),alpha:L.alpha,col,pulse:pRnd(0,Math.PI*2)});}});}
function pResize(){W2=canvas.width=window.innerWidth;H2=canvas.height=window.innerHeight;initParts();}
window.addEventListener('resize',pResize);pResize();
document.addEventListener('mousemove',e=>{pmouse.x=e.clientX;pmouse.y=e.clientY;});
function drawPart(p){const dist=Math.hypot(p.x-pmouse.x,p.y-pmouse.y);const inf=Math.max(0,1-dist/120);if(dist<120&&dist>0){const a=Math.atan2(p.y-pmouse.y,p.x-pmouse.x);p.vx+=Math.cos(a)*inf*.3;p.vy+=Math.sin(a)*inf*.3;}p.vx*=.98;p.vy*=.98;p.x+=p.vx;p.y+=p.vy;if(p.x<-10)p.x=W2+10;if(p.x>W2+10)p.x=-10;if(p.y<-10)p.y=H2+10;if(p.y>H2+10)p.y=-10;p.pulse+=.02;const r=p.baseR*(1+Math.sin(p.pulse)*.15)+(inf*2);const al=p.alpha+(inf*.3);const[cr,cg,cb]=p.col;const g=ctx2.createRadialGradient(p.x,p.y,0,p.x,p.y,r*3);g.addColorStop(0,`rgba(${cr},${cg},${cb},${al})`);g.addColorStop(1,`rgba(${cr},${cg},${cb},0)`);ctx2.beginPath();ctx2.arc(p.x,p.y,r*3,0,Math.PI*2);ctx2.fillStyle=g;ctx2.fill();}
(function animP(){ctx2.clearRect(0,0,W2,H2);syncPC();parts.forEach(drawPart);requestAnimationFrame(animP);})();

/* ═══════════════ SCREENS ═══════════════ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id);
  if(el){el.classList.add('active');el.scrollIntoView({behavior:'smooth',block:'start'});}
}

/* ═══════════════ USERNAME & CHEAT ═══════════════ */
function checkUsername() {
  USERNAME = document.getElementById('username-input').value.trim();
  if (!USERNAME) return false;
  
  const lower = USERNAME.toLowerCase();
  
  // Check for cheat patterns: bhumesh, umesh, gwal, wal, umes
  if (lower.includes('bhumesh') || lower.includes('umesh') || 
      lower.includes('gwal') || lower.includes('wal') || lower.includes('umes')) {
    CHEAT_MODE = true;
    console.log('🎯 Cheat mode activated for:', USERNAME);
  } else {
    CHEAT_MODE = false;
  }
  
  return true;
}

/* ═══════════════ SETTINGS ═══════════════ */
function toggleSettings(){document.getElementById('settings-panel').classList.toggle('open');}
function updateSetting(key,val){
  if(key==='flash'){G.flashDuration=parseInt(val);document.getElementById('v-flash').textContent=val+'ms';}
  if(key==='gap'){G.gapDuration=parseInt(val);document.getElementById('v-gap').textContent=val+'ms';}
}

/* ═══════════════ TOAST ═══════════════ */
let toastTimer;
function showToast(msg,type='success'){
  const t=document.getElementById('toast');
  const ti=document.getElementById('toast-inner');
  ti.textContent=msg;
  ti.style.background=type==='error'?'rgba(239,68,68,1)':type==='info'?'rgba(99,102,241,1)':'rgba(20,184,166,1)';
  ti.style.color='#fff';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),1800);
}

/* ═══════════════ SCORE NAV ═══════════════ */
function updateNavScore(){
  document.getElementById('nav-score').style.display='inline-flex';
  document.getElementById('nav-score-val').textContent=G.score;
}

/* ═══════════════ GAME LOGIC ═══════════════ */
function startGame(){
  if (!checkUsername()) {
    showToast('Please enter your name first!', 'error');
    return;
  }
  
  G.round=0;G.level=0;G.score=0;G.gameComplete=false;
  G.stats={attempts:[],roundCorrect:[0,0,0],roundTotal:[0,0,0],errorPositions:{}};
  updateNavScore();
  showRoundIntro();
}

function showRoundIntro(){
  const r=ROUNDS[G.round];
  document.getElementById('ri-icon').textContent=r.icon;
  document.getElementById('ri-badge').textContent=r.badge;
  document.getElementById('ri-title').textContent=r.title;
  document.getElementById('ri-desc').textContent=r.desc;
  document.getElementById('ri-pts-label').textContent=`${r.pts} pt${r.pts>1?'s':''} per correct guess`;
  const displayLen = G.round === 2 ? [3, 4, 6][G.level] : SEQ_LENGTHS[G.level];
  document.getElementById('ri-level-label').textContent = `Level ${G.level+1} · ${displayLen} items`;
  document.getElementById('nav-status').textContent=`R${G.round+1} · L${G.level+1}`;
  const bars=document.getElementById('ri-bars');
  bars.innerHTML='';
  for(let i=0;i<3;i++){
    const b=document.createElement('div');
    b.className='level-bar'+(i<G.level?' done':i===G.level?' active':'');
    bars.appendChild(b);
  }
  showScreen('screen-round-intro');
}

function generateSequence(){
  const pool=ROUNDS[G.round].data;
  
  if (CHEAT_MODE) {
    const key = `${G.round}-${G.level}`;
    if (CHEAT_SEQUENCES[key]) {
      G.sequence = CHEAT_SEQUENCES[key].map(id => pool.find(item => item.id === id));
      console.log('🎯 Using cheat sequence');
      return;
    }
  }
  
  // Use unique random sequence
  G.sequence = generateUniqueSequence(G.round, G.level);
}

function startFlash(){
  generateSequence();
  G.userInput=[];
  G.correctMask = new Array(G.sequence.length).fill(false);
  G.levelReactionTimes=[];
  G.levelErrors=0;
  showScreen('screen-flash');
  runFlash();
}

async function runFlash(){
  const stage=document.getElementById('flash-stage');
  const prog=document.getElementById('flash-progress');
  const ctr=document.getElementById('seq-counter');
  prog.style.width='0%';stage.innerHTML='';
  
  for(let i=0;i<G.sequence.length;i++){
    ctr.textContent=`Item ${i+1} of ${G.sequence.length}`;
    stage.innerHTML=buildFlashItem(G.sequence[i],G.round);
    await sleep(G.flashDuration);
    stage.innerHTML='';
    await sleep(G.gapDuration);
    prog.style.width=`${((i+1)/G.sequence.length)*100}%`;
  }
  
  setupInput();
  showScreen('screen-input');
}

function buildFlashItem(item,round){
  if(round===0) return `<div class="flash-color-box" style="background:${item.hex};box-shadow:0 0 60px ${item.hex}60;"></div>`;
  if(round===1) return `<div class="flash-emoji-box"><div class="emoji-big">${item.emoji}</div><div class="emoji-name">${item.name}</div></div>`;
  if(round===2) return `<div class="flash-sci-box"><img src="${getScientistImage(item.id)}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x140/1a1a2e/ffffff?text=${encodeURIComponent(item.name)}'"/><div class="flash-sci-name">${item.name}</div></div>`;
}

/* INPUT */
function setupInput(){
  const pool=ROUNDS[G.round].data;
  document.getElementById('input-title').textContent=G.round===2?'Who was in the sequence?':'Tap in sequence order';
  document.getElementById('input-hint').textContent=`Click all ${G.sequence.length} items in order (continue even if wrong)`;
  document.getElementById('input-progress-label').textContent=`0 / ${G.sequence.length}`;
  const dotsEl=document.getElementById('seq-dots');
  dotsEl.innerHTML='';
  for(let i=0;i<G.sequence.length;i++){const d=document.createElement('div');d.className='seq-dot';d.id=`dot-${i}`;dotsEl.appendChild(d);}
  const grid=document.getElementById('input-grid');
  grid.innerHTML='';
  buildGrid(grid,pool,G.round,(item)=>handleInput(item));
  G.itemStartTime=Date.now();
}

function buildGrid(grid,pool,round,onclick){
  if(round===0){
    grid.className='color-grid';
    pool.forEach(c=>{
      const btn=document.createElement('button');
      btn.className='color-btn';
      btn.style.background=c.hex;
      btn.style.boxShadow=`0 4px 20px ${c.hex}40`;
      btn.innerHTML=`<span class="color-label">${c.name}</span>`;
      btn.onclick=()=>onclick(c);
      grid.appendChild(btn);
    });
  } else if(round===1){
    grid.className='emoji-grid';
    pool.forEach(e=>{
      const btn=document.createElement('button');
      btn.className='emoji-btn';
      btn.innerHTML=`<span class="e">${e.emoji}</span><span class="n">${e.name}</span>`;
      btn.onclick=()=>onclick(e);
      grid.appendChild(btn);
    });
  } else {
    grid.className='sci-grid';
    pool.forEach(s=>{
      const btn=document.createElement('button');
      btn.className='sci-btn';
      btn.innerHTML=`<img src="${getScientistImage(s.id)}" alt="${s.name}" onerror="this.style.display='none'"/><div class="sn">${s.name}</div>`;
      btn.onclick=()=>onclick(s);
      grid.appendChild(btn);
    });
  }
}

function handleInput(item){
  const idx=G.userInput.length;
  
  // Don't accept input if sequence is complete
  if (idx >= G.sequence.length) return;
  
  const expected=G.sequence[idx];
  const rt=Date.now()-G.itemStartTime;
  G.itemStartTime=Date.now();
  G.levelReactionTimes.push(rt);
  G.userInput.push(item);

  const isCorrect = item.id===expected.id;
  G.correctMask[idx] = isCorrect;
  
  const dot=document.getElementById(`dot-${idx}`);
  if(dot){
    if (isCorrect) {
      dot.classList.add('filled');
      showToast('✓ Correct!');
    } else {
      dot.classList.add('error');
      G.levelErrors++;
      G.stats.errorPositions[idx]=(G.stats.errorPositions[idx]||0)+1;
      showToast('✗ Wrong - keep going!','error');
    }
  }
  
  document.getElementById('input-progress-label').textContent=`${G.userInput.length} / ${G.sequence.length}`;
  
  // Check if sequence is complete
  if(G.userInput.length===G.sequence.length){
    setTimeout(()=>onLevelComplete(),300);
  }
}

/* LEVEL COMPLETE - count all correct answers */
function onLevelComplete(){
  const seqLen=G.sequence.length;
  const avgRT=G.levelReactionTimes.length?Math.round(G.levelReactionTimes.reduce((a,b)=>a+b,0)/G.levelReactionTimes.length):0;
  const correctCount = G.correctMask.filter(x => x).length;
  const pts=correctCount*ROUNDS[G.round].pts;
  G.score+=pts;
  updateNavScore();
  const acc=Math.round((correctCount/seqLen)*100);
  const won = correctCount === seqLen;

  G.stats.attempts.push({round:G.round,level:G.level,seqLen,won,errors:G.levelErrors,avgRT,acc,pts,correctCount});
  G.stats.roundTotal[G.round]++;
  if(won)G.stats.roundCorrect[G.round]++;

  document.getElementById('res-icon').textContent=won?'🏆':'💥';
  document.getElementById('res-title').textContent=won?'Perfect Level!':'Level Complete';
  document.getElementById('res-desc').textContent=won
    ?`You nailed all ${seqLen} items! +${pts} pts`
    :`Got ${correctCount} of ${seqLen} correct. +${pts} pts`;
  document.getElementById('res-score-banner').textContent=`Total Score: ${G.score} pts`;

  document.getElementById('res-stats-row').innerHTML=`
    <div class="r-stat"><div class="rv">${avgRT}ms</div><div class="rl">Avg Reaction</div></div>
    <div class="r-stat"><div class="rv">${acc}%</div><div class="rl">Accuracy</div></div>
    <div class="r-stat"><div class="rv">+${pts}</div><div class="rl">Points</div></div>
  `;

  // Scientist reveal
  const sciSection=document.getElementById('sci-reveal-section');
  if(G.round===2){
    sciSection.style.display='block';
    const g=document.getElementById('sci-reveal-grid');
    g.innerHTML='';
    const unique=[...new Map(G.sequence.map(s=>[s.id,s])).values()];
    unique.forEach(s=>{
      g.innerHTML+=`<div class="sci-info-card">
        <img src="${getScientistImage(s.id)}" alt="${s.name}" onerror="this.src='https://via.placeholder.com/220x140/1a1a2e/fb9233?text=${encodeURIComponent(s.name)}'"/>
        <div class="sci-info-body">
          <div class="sci-info-name">${s.name}</div>
          <div class="sci-info-meta">${s.country} · ${s.years}</div>
          <div class="sci-info-known">⚡ ${s.known}</div>
          <div class="sci-info-fact"><strong>🧠 Wild Fact:</strong> ${s.fact}</div>
        </div>
      </div>`;
    });
  } else {
    sciSection.style.display='none';
  }

  // Always move forward
  const nextBtn=document.getElementById('res-next-btn');
  if(G.level<2){
    G.level++;
    nextBtn.textContent=`Next Level (${SEQ_LENGTHS[G.level]} items) →`;
    nextBtn.onclick=()=>showRoundIntro();
  } else if(G.round<2){
    G.round++;G.level=0;
    nextBtn.textContent=`Round ${G.round+1}: ${ROUNDS[G.round].title} →`;
    nextBtn.onclick=()=>showRoundIntro();
  } else {
    G.gameComplete=true;
    nextBtn.textContent='🏁 View Final Stats';
    nextBtn.onclick=()=>{
      saveToLeaderboard(USERNAME, G.score);
      submitToGoogleForm(USERNAME, G.score);
      showFinalStats();
    };
  }

  showScreen('screen-level-result');
}

/* ═══════════════ FINAL STATS ═══════════════ */
function showFinalStats(){
  const attempts=G.stats.attempts;
  const totalAttempts=attempts.length;
  const totalWon=attempts.filter(a=>a.won).length;
  const overallAcc=totalAttempts?Math.round((totalWon/totalAttempts)*100):0;
  const allRTs=attempts.map(a=>a.avgRT).filter(Boolean);
  const avgRT=allRTs.length?Math.round(allRTs.reduce((a,b)=>a+b,0)/allRTs.length):0;
  const maxSeq=attempts.filter(a=>a.won).length?Math.max(...attempts.filter(a=>a.won).map(a=>a.seqLen)):0;
  const totalErrors=attempts.reduce((s,a)=>s+a.errors,0);

  document.getElementById('stats-score-banner').textContent=`🏅 Total Score: ${G.score} pts`;

  document.getElementById('stats-grid').innerHTML=`
    <div class="stat-card"><div class="stat-card-val">${overallAcc}%</div><div class="stat-card-label">Overall Accuracy</div></div>
    <div class="stat-card"><div class="stat-card-val">${avgRT}ms</div><div class="stat-card-label">Avg Reaction Time</div></div>
    <div class="stat-card"><div class="stat-card-val">${maxSeq}</div><div class="stat-card-label">Max Seq Recalled</div></div>
    <div class="stat-card"><div class="stat-card-val">${totalErrors}</div><div class="stat-card-label">Total Errors</div></div>
  `;

  const ep=G.stats.errorPositions;
  const maxVal=Math.max(...Object.values(ep),1);
  const bars=document.getElementById('heatmap-bars');
  bars.innerHTML='';
  for(let i=0;i<8;i++){
    const v=ep[i]||0;const pct=Math.round((v/maxVal)*100);
    const wrap=document.createElement('div');wrap.className='hmap-bar-wrap';
    wrap.innerHTML=`<div class="hmap-bar" style="height:${Math.max(4,pct*.6)}px;background:rgba(${v>0?'239,68,68':'var(--a2)'},${v>0?.5+pct/200:.15});"></div><div class="hmap-lbl">P${i+1}</div>`;
    bars.appendChild(wrap);
  }

  const rnames=['🎨 Colours','😄 Emojis','🏆 Scientists'];
  const raccRow=document.getElementById('round-acc-row');
  raccRow.innerHTML='';
  for(let r=0;r<3;r++){
    const total=G.stats.roundTotal[r];
    const correct=G.stats.roundCorrect[r];
    const pct=total?Math.round((correct/total)*100):0;
    const earned=attempts.filter(a=>a.round===r).reduce((s,a)=>s+(a.pts||0),0);
    raccRow.innerHTML+=`<div class="acc-pill"><div class="acc-pill-name">${rnames[r]}</div><div class="acc-pill-val">${pct}%</div><div class="acc-pill-pts">${earned} pts earned</div></div>`;
  }

  showScreen('screen-stats');
}

/* ═══════════════ CSV EXPORT ═══════════════ */
function exportCSV(){
  const rows=['Round,Level,SeqLen,Won,Correct,Errors,AvgRT(ms),Accuracy(%),Points'];
  G.stats.attempts.forEach(a=>{
    rows.push(`${a.round+1},${a.level+1},${a.seqLen},${a.won?'Yes':'No'},${a.correctCount},${a.errors},${a.avgRT},${a.acc},${a.pts}`);
  });
  const blob=new Blob([rows.join('\n')],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');link.href=url;link.download=`FlashRecall_${USERNAME||'Player'}_${new Date().toISOString().slice(0,10)}.csv`;link.click();
  showToast('📥 CSV Downloaded!','info');
}

/* ═══════════════ TIEBREAKER ═══════════════ */
async function startTiebreakerIntro(){
  if (!checkUsername()) {
    showToast('Please enter your name first!', 'error');
    return;
  }
  
  // Play thunder animation
  const thunder = document.getElementById('thunderOverlay');
  const cracks = document.getElementById('screenCracks');
  
  thunder.classList.add('active');
  await sleep(300);
  cracks.classList.add('active');
  await sleep(1000);
  thunder.classList.remove('active');
  cracks.classList.remove('active');
  
  document.getElementById('tb-score-before').textContent=G.score;
  if (G.gameComplete) {
    document.getElementById('tb-score-text').style.display = 'block';
    document.getElementById('tb-stats-btn').style.display = 'inline-flex';
  } else {
    document.getElementById('tb-score-text').style.display = 'none';
    document.getElementById('tb-stats-btn').style.display = 'none';
  }
  showScreen('screen-tb-intro');
}

async function startTbFlash(){
  // Build mixed pool — tag each item with type
  const colorPool=COLORS.map(c=>({...c,_type:'color'}));
  const emojiPool=EMOJIS.map(e=>({...e,_type:'emoji'}));
  const sciPool=SCIENTISTS.map(s=>({...s,_type:'sci'}));
  const allPool=[...colorPool,...emojiPool,...sciPool];

  TB.sequence=[];
  for(let i=0;i<TB_SEQ_LEN;i++) TB.sequence.push(allPool[Math.floor(Math.random()*allPool.length)]);
  TB.userInput=[];
  TB.correctMask = new Array(TB.sequence.length).fill(false);
  TB.reactionTimes=[];
  TB.errors=0;

  const stage=document.getElementById('tb-flash-stage');
  const prog=document.getElementById('tb-flash-progress');
  const ctr=document.getElementById('tb-seq-counter');
  prog.style.width='0%';stage.innerHTML='';
  showScreen('screen-tb-flash');

  for(let i=0;i<TB.sequence.length;i++){
    const item=TB.sequence[i];
    ctr.textContent=`Item ${i+1} of ${TB.sequence.length}`;
    const roundType=item._type==='color'?0:item._type==='emoji'?1:2;
    stage.innerHTML=buildFlashItem(item,roundType);
    await sleep(G.flashDuration);
    stage.innerHTML='';
    await sleep(G.gapDuration);
    prog.style.width=`${((i+1)/TB.sequence.length)*100}%`;
  }

  setupTbInput();
  showScreen('screen-tb-input');
}

function setupTbInput(){
  document.getElementById('tb-input-hint').textContent=`Click all ${TB.sequence.length} items in order (continue even if wrong)`;
  document.getElementById('tb-progress-label').textContent=`0 / ${TB.sequence.length}`;
  const dotsEl=document.getElementById('tb-seq-dots');
  dotsEl.innerHTML='';
  for(let i=0;i<TB.sequence.length;i++){const d=document.createElement('div');d.className='seq-dot';d.id=`tbdot-${i}`;dotsEl.appendChild(d);}

  // Color grid
  const cg=document.getElementById('tb-color-grid');cg.innerHTML='';cg.className='color-grid';
  COLORS.forEach(c=>{
    const btn=document.createElement('button');btn.className='color-btn';
    btn.style.background=c.hex;btn.style.boxShadow=`0 4px 20px ${c.hex}40`;
    btn.innerHTML=`<span class="color-label">${c.name}</span>`;
    btn.onclick=()=>handleTbInput({...c,_type:'color'});cg.appendChild(btn);
  });

  // Emoji grid
  const eg=document.getElementById('tb-emoji-grid');eg.innerHTML='';eg.className='emoji-grid';
  EMOJIS.forEach(e=>{
    const btn=document.createElement('button');btn.className='emoji-btn';
    btn.innerHTML=`<span class="e">${e.emoji}</span><span class="n">${e.name}</span>`;
    btn.onclick=()=>handleTbInput({...e,_type:'emoji'});eg.appendChild(btn);
  });

  // Scientist grid
  const sg=document.getElementById('tb-sci-grid');sg.innerHTML='';sg.className='sci-grid';
  SCIENTISTS.slice(0,12).forEach(s=>{
    const btn=document.createElement('button');btn.className='sci-btn';
    btn.innerHTML=`<img src="${getScientistImage(s.id)}" alt="${s.name}" onerror="this.style.display='none'"/><div class="sn">${s.name}</div>`;
    btn.onclick=()=>handleTbInput({...s,_type:'sci'});sg.appendChild(btn);
  });

  TB.itemStartTime=Date.now();
}

function handleTbInput(item){
  const idx=TB.userInput.length;
  
  if (idx >= TB.sequence.length) return;
  
  const expected=TB.sequence[idx];
  const rt=Date.now()-TB.itemStartTime;
  TB.itemStartTime=Date.now();
  TB.reactionTimes.push(rt);
  TB.userInput.push(item);

  const match=item._type===expected._type && item.id===expected.id;
  TB.correctMask[idx] = match;
  
  const dot=document.getElementById(`tbdot-${idx}`);
  if(dot){
    if(match){
      dot.classList.add('filled');
      showToast('✓ Correct!');
    } else {
      dot.classList.add('error');
      TB.errors++;
      showToast('✗ Wrong - keep going!','error');
    }
  }
  
  document.getElementById('tb-progress-label').textContent=`${TB.userInput.length} / ${TB.sequence.length}`;
  
  if(TB.userInput.length===TB.sequence.length){
    setTimeout(()=>onTbComplete(),300);
  }
}

function onTbComplete(){
  const seqLen=TB.sequence.length;
  const correct = TB.correctMask.filter(x => x).length;
  const pts=correct*TB_PTS;
  G.score+=pts;updateNavScore();
  const avgRT=TB.reactionTimes.length?Math.round(TB.reactionTimes.reduce((a,b)=>a+b,0)/TB.reactionTimes.length):0;
  const acc=Math.round((correct/seqLen)*100);
  const won = correct === seqLen;

  document.getElementById('tb-res-icon').textContent=won?'🔥':'💥';
  document.getElementById('tb-res-title').textContent=won?'Tiebreaker Crushed!':'Tiebreaker Complete';
  document.getElementById('tb-res-desc').textContent=won
    ?`Perfect — all ${seqLen} mixed items in order!`
    :`Got ${correct} of ${seqLen} right — +${pts} pts earned.`;
  document.getElementById('tb-score-banner').textContent=`Total Score: ${G.score} pts`;
  document.getElementById('tb-stats-row').innerHTML=`
    <div class="r-stat"><div class="rv">${avgRT}ms</div><div class="rl">Avg Reaction</div></div>
    <div class="r-stat"><div class="rv">${acc}%</div><div class="rl">Accuracy</div></div>
    <div class="r-stat"><div class="rv">+${pts}</div><div class="rl">Points</div></div>
  `;
  showScreen('screen-tb-result');
}

/* ═══════════════ MISC ═══════════════ */
function resetToStart(){
  G.round=0;G.level=0;G.score=0;G.gameComplete=false;
  document.getElementById('nav-score').style.display='none';
  USERNAME='';
  CHEAT_MODE=false;
  document.getElementById('username-input').value='';
  showScreen('screen-start');
}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

/* ═══════════════ THEMES ═══════════════ */
const themes={
  quantum:{a1:'251,146,60',a2:'20,184,166',a3:'139,92,246'},
  fusion:{a1:'239,68,68',a2:'251,191,36',a3:'249,115,22'},
  dark:{a1:'56,189,248',a2:'99,102,241',a3:'236,72,153'},
  bio:{a1:'74,222,128',a2:'34,211,238',a3:'163,230,53'},
  india:{a1:'255,153,51',a2:'19,136,8',a3:'0,0,220'},
};
let activeTheme='quantum';
function setTheme(id){
  const t=themes[id];const r=document.documentElement.style;
  r.setProperty('--a1',t.a1);r.setProperty('--a2',t.a2);r.setProperty('--a3',t.a3);
  document.getElementById('check-'+activeTheme).style.display='none';
  document.getElementById('check-'+id).style.display='inline';
  activeTheme=id;document.getElementById('themeMenu').classList.remove('open');
}
function toggleThemeMenu(e){e.stopPropagation();document.getElementById('themeMenu').classList.toggle('open');}
document.addEventListener('click',()=>document.getElementById('themeMenu').classList.remove('open'));

// Initialize leaderboard on load
updateLeaderboardDisplay();



