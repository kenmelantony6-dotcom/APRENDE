const subjects=[
["📐","Matemáticas"],["🇬🇧","Inglés"],["📖","Lengua y Literatura"],["🧬","Ciencias Naturales"],
["🏛️","Historia"],["🌎","Geografía"],["⚗️","Química"],["⚡","Física"],["💻","Informática"]
];
const bank={
"Matemáticas":[
["facil","¿Cuánto es 7 + 5?",["10","12","13","14"],1],
["facil","¿Cuánto es 9 × 3?",["18","21","27","36"],2],
["facil","¿Cuál es el resultado de 20 − 8?",["10","12","14","16"],1],
["medio","Si x + 7 = 15, ¿cuánto vale x?",["6","7","8","9"],2],
["medio","¿Cuál es el área de un rectángulo de 6 cm × 4 cm?",["10 cm²","20 cm²","24 cm²","28 cm²"],2],
["dificil","Resuelve: 2x − 6 = 14",["8","9","10","11"],2],
["dificil","¿Cuál es la raíz cuadrada de 144?",["10","11","12","14"],2]
],
"Inglés":[
["facil","¿Cuál es la traducción de “house”?",["Casa","Escuela","Mesa","Libro"],0],
["facil","Completa: “She ___ happy.”",["am","is","are","be"],1],
["facil","¿Cuál es el pasado de “go”?",["goed","gone","went","going"],2],
["medio","Completa: “They ___ playing soccer yesterday.”",["was","were","is","be"],1],
["medio","“Beautiful” significa:",["Rápido","Hermoso","Difícil","Pequeño"],1],
["dificil","Elige el pasado correcto: “I ___ my homework.”",["do","did","does","doing"],1],
["dificil","¿Qué significa “although”?",["Porque","Después","Aunque","Entonces"],2]
],
"Lengua y Literatura":[
["facil","¿Qué es un sustantivo?",["Una acción","Un nombre","Una cualidad","Un conector"],1],
["facil","¿Cuál es un verbo?",["Correr","Azul","Casa","Grande"],0],
["facil","¿Cuál es un sinónimo de “feliz”?",["Triste","Alegre","Lejano","Fuerte"],1],
["medio","¿Qué caracteriza a un texto informativo?",["Informa sobre un tema","Solo entretiene","Siempre rima","No tiene tema"],0],
["medio","¿Qué recurso compara usando “como”?",["Metáfora","Símil","Hipérbole","Ironía"],1],
["dificil","¿Qué es la idea principal?",["Un detalle","El tema central","El título siempre","Una opinión"],1],
["dificil","¿Qué figura exagera una característica?",["Hipérbole","Símil","Personificación","Aliteración"],0]
],
"Ciencias Naturales":[
["facil","¿Qué órgano bombea la sangre?",["Pulmón","Corazón","Riñón","Hígado"],1],
["facil","¿Qué necesitan las plantas para realizar fotosíntesis?",["Luz","Metal","Plástico","Sal"],0],
["facil","¿En qué estado está el hielo?",["Líquido","Gaseoso","Sólido","Plasma"],2],
["medio","¿Qué gas necesitamos principalmente para respirar?",["Oxígeno","Helio","Hidrógeno","Neón"],0],
["medio","¿Cuál es la unidad básica de los seres vivos?",["Átomo","Célula","Órgano","Tejido"],1],
["dificil","¿Qué molécula contiene la información genética?",["ATP","ADN","Agua","Glucosa"],1],
["dificil","¿Qué proceso transforma la luz en energía química en plantas?",["Respiración","Fotosíntesis","Digestión","Evaporación"],1]
],
"Historia":[
["facil","¿En qué continente surgió la civilización egipcia?",["Asia","Europa","África","América"],2],
["facil","¿Quién llegó a América en 1492?",["Cristóbal Colón","Napoleón","Julio César","Marco Polo"],0],
["facil","¿Dónde se desarrolló la civilización romana?",["Europa","Oceanía","Antártida","América"],0],
["medio","¿Qué movimiento impulsó el interés por la cultura clásica en Europa?",["Renacimiento","Feudalismo","Neolítico","Guerra Fría"],0],
["medio","¿Qué revolución comenzó en Gran Bretaña en el siglo XVIII?",["Industrial","Digital","Verde","Neolítica"],0],
["dificil","¿Qué sistema económico se expandió con la Revolución Industrial?",["Capitalismo","Feudalismo","Esclavismo antiguo","Trueque"],0],
["dificil","¿En qué siglo comenzó la Revolución Francesa?",["XVII","XVIII","XIX","XX"],1]
],
"Geografía":[
["facil","¿Cuál es el océano más grande?",["Atlántico","Índico","Pacífico","Ártico"],2],
["facil","¿Qué instrumento señala direcciones?",["Termómetro","Brújula","Barómetro","Microscopio"],1],
["facil","¿En qué continente está Nicaragua?",["Europa","Asia","América","África"],2],
["medio","¿Qué línea divide la Tierra en hemisferio norte y sur?",["Meridiano 0°","Ecuador","Trópico de Cáncer","Círculo Polar"],1],
["medio","¿Qué representa un mapa?",["Un territorio","Solo el clima","Solo los océanos","Una estrella"],0],
["dificil","¿Qué movimiento de la Tierra produce el día y la noche?",["Traslación","Rotación","Precesión","Inclinación"],1],
["dificil","¿Qué línea corresponde a 0° de longitud?",["Ecuador","Greenwich","Trópico de Capricornio","Polo Norte"],1]
],
"Química":[
["facil","¿Cuál es el símbolo químico del oxígeno?",["O","Ox","Og","H"],0],
["facil","¿Cuál es el símbolo del hidrógeno?",["He","H","Hg","Ho"],1],
["facil","¿Cuál es la fórmula del agua?",["CO₂","H₂O","O₂","NaCl"],1],
["medio","¿Qué partícula tiene carga negativa?",["Protón","Neutrón","Electrón","Núcleo"],2],
["medio","¿Qué elemento tiene símbolo Fe?",["Flúor","Hierro","Francio","Fósforo"],1],
["dificil","¿Qué grupo funcional caracteriza a las amidas?",["-OH","-COOH","-CONH₂","-CHO"],2],
["dificil","¿Qué elemento es fundamental en las proteínas?",["Nitrógeno","Sodio","Cloro","Neón"],0]
],
"Física":[
["facil","¿Cuál es la unidad de fuerza en el SI?",["Joule","Newton","Watt","Pascal"],1],
["facil","¿Qué mide un termómetro?",["Masa","Temperatura","Fuerza","Velocidad"],1],
["facil","¿Cuál es aproximadamente la velocidad de la luz?",["300 km/s","3,000 km/s","300,000 km/s","30 km/s"],2],
["medio","¿Qué fórmula relaciona distancia, velocidad y tiempo?",["d=v·t","F=m/a","P=F/A","E=m/c"],0],
["medio","¿Qué fuerza atrae los objetos hacia la Tierra?",["Fricción","Gravedad","Tensión","Empuje"],1],
["dificil","Si F=ma, ¿qué fuerza produce una masa de 2 kg con aceleración de 3 m/s²?",["5 N","6 N","8 N","9 N"],1],
["dificil","¿Qué unidad mide la potencia?",["Watt","Newton","Tesla","Volt"],0]
],
"Informática":[
["facil","¿Qué dispositivo se usa para escribir texto?",["Teclado","Monitor","Bocina","Router"],0],
["facil","¿Qué significa CPU?",["Unidad Central de Procesamiento","Control Personal Universal","Código Principal Único","Unidad de Pantalla"],0],
["facil","¿Cuál es un sistema operativo?",["Android","Google","YouTube","Wi-Fi"],0],
["medio","¿Qué es Internet?",["Una red mundial de redes","Un programa de dibujo","Un teclado","Un archivo"],0],
["medio","¿Qué extensión suele tener una página web HTML?",[".jpg",".mp3",".html",".exe"],2],
["dificil","¿Qué lenguaje estructura el contenido de una página web?",["HTML","CSS","SQL","MP3"],0],
["dificil","¿Qué lenguaje se usa comúnmente para dar interactividad a páginas web?",["JavaScript","JPEG","PDF","PNG"],0]
]
};

let state={name:"",subject:"",level:"",questions:[],index:0,correct:0,score:0,selected:null,lastQuestions:[]};
function $(id){return document.getElementById(id)}
function showScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
 $("nav").classList.toggle("hidden",!["home"].includes(id));
 window.scrollTo(0,0);
}
function startApp(){
 const n=$("nameInput").value.trim();
 if(!n){$("nameInput").focus();return}
 state.name=n; localStorage.setItem("ap_name",n); $("studentName").textContent=n; showScreen("home");
}
function buildSubjects(){
 $("subjects").innerHTML=subjects.map(s=>`<button class="subject" onclick="chooseSubject('${s[1]}')"><span>${s[0]}</span><b>${s[1]}</b><small>Practicar →</small></button>`).join("");
}
function chooseSubject(s){state.subject=s;$("levelTitle").textContent=s;showScreen("levels")}
function startQuiz(level){
 state.level=level; state.index=0; state.correct=0; state.score=0; state.selected=null;
 let qs=(bank[state.subject]||[]).filter(q=>q[0]===level);
 let needed=level==="facil"?5:level==="medio"?7:10;
 let all=bank[state.subject]||[];
 while(qs.length<needed && qs.length<all.length) qs.push(...all.filter(q=>!qs.includes(q) && q[0]!==level));
 state.questions=qs.slice(0,needed).sort(()=>Math.random()-.5);
 renderQuestion();showScreen("quiz");
}
function renderQuestion(){
 const q=state.questions[state.index]; if(!q)return;
 $("questionCount").textContent=`Pregunta ${state.index+1} de ${state.questions.length}`;
 $("questionText").textContent=q[1]; $("scoreLabel").textContent=`Puntos: ${state.score}`;
 $("progressBar").style.width=((state.index)/state.questions.length*100)+"%";
 $("answers").innerHTML=q[2].map((a,i)=>`<button class="answer" onclick="selectAnswer(${i})">${String.fromCharCode(65+i)}. ${a}</button>`).join("");
 state.selected=null;$("nextBtn").disabled=true;
}
function selectAnswer(i){
 if(state.selected!==null)return;
 state.selected=i;$("nextBtn").disabled=false;
 const q=state.questions[state.index];
 document.querySelectorAll(".answer").forEach((b,n)=>{
   if(n===q[3])b.classList.add("correct");
   if(n===i && i!==q[3])b.classList.add("wrong");
 });
 if(i===q[3]){state.correct++;state.score+=state.level==="facil"?10:state.level==="medio"?15:20}
 $("scoreLabel").textContent=`Puntos: ${state.score}`;
}
function nextQuestion(){
 if(state.selected===null)return;
 state.index++;
 if(state.index>=state.questions.length)finishQuiz(); else renderQuestion();
}
function finishQuiz(){
 $("progressBar").style.width="100%";$("resultName").textContent=state.name;
 $("correctStat").textContent=state.correct;$("wrongStat").textContent=state.questions.length-state.correct;$("pointsStat").textContent=state.score;
 const pct=Math.round(state.correct/state.questions.length*100);
 $("resultMessage").textContent=pct>=80?"¡Excelente trabajo! 🌟":pct>=60?"¡Muy bien! Sigue practicando. 💪":"Buen intento. ¡Practicar te hará mejorar! 📚";
 let p=JSON.parse(localStorage.getItem("ap_progress")||"{}");p[state.subject]=(p[state.subject]||0)+state.score;localStorage.setItem("ap_progress",JSON.stringify(p));
 showScreen("results");
}
function restartQuiz(){startQuiz(state.level)}
function showProgress(){alert("Tu progreso se guarda automáticamente en este teléfono. ¡Sigue practicando! 📈")}
function showAchievements(){alert("🏅 Logro: Completaste una práctica. ¡Sigue jugando para conseguir más!")}
function showProfile(){alert(`👤 Estudiante: ${state.name||"Sin nombre"}`)}
(function init(){state.name=localStorage.getItem("ap_name")||"";$("nameInput").value=state.name;if(state.name){$("studentName").textContent=state.name;showScreen("home")}buildSubjects();})();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(()=>{}));}
