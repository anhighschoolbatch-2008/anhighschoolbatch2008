"use strict";

// IMAGE FALLBACK
function imgFallback(img, letter){
  img.onerror = null;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">'
          + '<rect width="400" height="400" fill="#dfe3ed"/>'
          + '<text x="200" y="235" text-anchor="middle" font-size="140" fill="#12326b" '
          + 'font-family="Arial" font-weight="700">' + (letter || '?') + '</text></svg>';
  img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
window.imgFallback = imgFallback;

// MEMBERS DATA - 62 classmates (Biswambar FIRST, Suren SECOND)
var MEMBERS = [
  { slug:"biswambar-kshetri", name:"Biswambar Kshetri", phone:"+919038375227", wa:"919038375227", email:"biswambarkshetri@gmail.com", role:"Proprietor / Sr. Principal Designer (BIM)", edu:"B.Tech in Civil Engineering", company:"Kshetri Construction", location:"India", featured:true },
  { slug:"suren-kumar-sahoo", name:"Suren Kumar Sahoo", phone:"+918763528999", wa:"918763528999", email:"", role:"Propriter-Jagannath Traders", edu:"", company:"Jagannath Traders", location:"Narsinghpur, Odisha" },
  { slug:"abinash-sahoo", name:"Abinash Sahoo", phone:"+917205350226", wa:"917205350226", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"alok-kumar-sahoo", name:"Alok Kumar Sahoo", phone:"+918637211237", wa:"918637211237", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"amiya-kumar-nath", name:"Amiya Kumar Nath", phone:"+918908642902", wa:"918908642902", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"amiya-kumar-pattnaik", name:"Amiya Kumar Pattnaik", phone:"+919337378845", wa:"919337378845", email:"ppattnaik602@gmail.com", role:"Robotics Lab Trainer", edu:"Bachelor of Commerce+BCA", company:"Proprieter-Pattnaik Traders", location:"Narsinghpur" },
  { slug:"anup-kumar-mohapatra", name:"Anup Kumar Mohapatra", phone:"+917077956333", wa:"917077956333", email:"anupmohapatra12@gmail.com", role:"Civil Engineer", edu:"M.Tech in Civil Engineering ", company:"", location:"Bhubaneswar" },
  { slug:"bibhuti-bhusan-samantray", name:"Bibhuti Bhusan Samantray", phone:"+918144480916", wa:"918144480916", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"bichitrananda-behera", name:"Bichitrananda Behera", phone:"+918117896865", wa:"918117896865", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"bidhant-chandra-sekhar", name:"Bidhant Chandra Sekhar", phone:"+919090044017", wa:"919090044017", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"biswanath-behera", name:"Biswanath Behera", phone:"+919778767610", wa:"919778767610", email:"biswanathbehera19934@gmail.com", role:"Proprietor-Maa Enterprises", edu:"Graduation in Arts", company:"Maa Enterprises", location:"Narsinghpur" },
  { slug:"deepak-kumar-behera", name:"Deepak Kumar Behera", phone:"+919668250838", wa:"919668250838", email:"", role:"", edu:"", company:"", location:"Narsinghpur" },
  { slug:"dinabandhu-nayak", name:"Dinabandhu Nayak", phone:"+917894990990", wa:"917894990990", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"durgamadhab-chhatoi", name:"Durgamadhab Chhatoi", phone:"+919881339597", wa:"919881339597", email:"mikuchhatoi@gmail.com", role:"Proprietor-Free Solutions", edu:"Graduation in Commerce", company:"Free Solutions", location:"Narsinghpur" },
  { slug:"gobind-chandra-behera", name:"Gobind Chandra Behera", phone:"+917008940134", wa:"917008940134", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"gopinath-misha", name:"Gopinath Misha", phone:"", wa:"", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"gorekh-chandra-behera", name:"Gorekh Chandra Behera", phone:"+917504160623", wa:"917504160623", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"gouranga-behera", name:"Gouranga Behera", phone:"+919556876434", wa:"919556876434", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"gyanaranjan-khamari", name:"Gyanaranjan Khamari", phone:"+917978823208", wa:"917978823208", email:"gyanakhamari256@gmail.com", role:"State Govt. Service", edu:"MBA", company:"Government of Odisha", location:"Odisha" },
  { slug:"jitendra-satpathy", name:"Jitendra Satpathy", phone:"+917504290182", wa:"917504290182", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"kamal-kumar-mishra", name:"Kamal Kumar Mishra", phone:"+917978595742", wa:"917978595742", email:"", role:"", edu:"", company:"", location:"Odisha" },
  { slug:"kanhei-sahoo", name:"Kanhei Sahoo", phone:"+919692086957", wa:"919692086957", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"kanhu-charan-behera", name:"Kanhu Charan Behera", phone:"+919337127472", wa:"919337127472", email:"", role:"", edu:"", company:"", location:"Narsinghpur" },
  { slug:"krishna-mohan-swain", name:"Krishna Mohan Swain", phone:"+917008809883", wa:"917008809883", email:"", role:"", edu:"", company:"", location:"Athagarh" },
  { slug:"krushna-chandra-behera", name:"Krushna Chandra Behera", phone:"+917894201720", wa:"917894201720", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"krushnendu-patra", name:"Krushnendu Patra", phone:"+919778347906", wa:"919778347906", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"kshirod-prasad-sahoo", name:"Kshirod Prasad Sahoo", phone:"+919938050103", wa:"919938050103", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"maheswar-sahoo", name:"Maheswar Sahoo", phone:"+919938329678", wa:"919938329678", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"manoj-kumar-behera", name:"Manoj Kumar Behera", phone:"+918144214622", wa:"918144214622", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"manoranjan-dhal", name:"Manoranjan Dhal", phone:"+918895577223", wa:"918895577223", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"parshuram-naik", name:"Parshuram Naik", phone:"", wa:"", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"prabin-nayak", name:"Prabin Nayak", phone:"+919337805990", wa:"919337805990", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"prasad-kumar-naik", name:"Prasad Kumar Naik", phone:"+919438314594", wa:"919438314594", email:"prasadkumarnaik12@gmail.com", role:"Unemployed", edu:"Diploma in Plastics Mould Technology", company:"Unemployed", location:"Narsinghpur" },
  { slug:"purna-chandra-behera", name:"Purna Chandra Behera", phone:"+918018496722", wa:"918018496722", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"rajesh-rosan-sahoo", name:"Rajesh Rosan Sahoo", phone:"+917008820269", wa:"917008820269", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"rajkishore-sahoo", name:"Rajkishore Sahoo", phone:"+919777356808", wa:"919777356808", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"ramani-kanta-behera", name:"Ramani Kanta Behera", phone:"+918327787054", wa:"918327787054", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"ramaraman-rana", name:"Ramaraman Rana", phone:"+917894366307", wa:"917894366307", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sadashib-behera", name:"Sadashib Behera", phone:"+919337346835", wa:"919337346835", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"samar-kumar-sahoo", name:"Samar Kumar Sahoo", phone:"+916370817828", wa:"916370817828", email:"sahoosamar90@gmail.com", role:"Accounts Manager", edu:"M.Com + CA Inter (in progress)", company:"Xecutiv Finance & Business Solutions LLC-FZ", location:"Narsinghpur,Work From Home" },
  { slug:"sanjeet-panda", name:"Sanjeet Panda", phone:"+919778776320", wa:"919778776320", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"santanu-behera", name:"Santanu Behera", phone:"+916371171828", wa:"916371171828", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"santosh-kumar-sahoo", name:"Santosh Kumar Sahoo", phone:"+918457056998", wa:"918457056998", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sashi-bhusan-debata", name:"Sashi Bhusan Debata", phone:"+919597517421", wa:"919597517421", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"satrughhan-sahoo", name:"Satrughhan Sahoo", phone:"+919337891181", wa:"919337891181", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sek-yasid", name:"Sek Yasid", phone:"", wa:"", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"shakti-mohapatra", name:"Shakti Mohapatra", phone:"+917609892892", wa:"917609892892", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"shakti-prasad-mishra", name:"Shakti Prasad Mishra", phone:"+918427108187", wa:"918427108187", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sidhartha-sankar-pattanaik", name:"Sidhartha Sankar Pattanaik", phone:"+919178225544", wa:"919178225544", email:"", role:"", edu:"", company:"", location:"Narsinghpur" },
  { slug:"siromani-sibananda", name:"Siromani Sibananda", phone:"+918984031759", wa:"918984031759", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"somanath-behera", name:"Somanath Behera", phone:"+919556861144", wa:"919556861144", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"soumendra-behera", name:"Soumendra Behera", phone:"+918249894867", wa:"918249894867", email:"soumendrabehera456@gmail.com", role:"Propriter- Kitchen Solutions", edu:"+2 Arts", company:"Propriter-Kitchen Solutions", location:"Angul, Odisha" },
  { slug:"soumya-prakash-pattanaik", name:"Soumya Prakash Pattanaik", phone:"+919691027187", wa:"919691027187", email:"soumyaaprakashpatnaik@gmail.com", role:"AGM", edu:"Diploma in Mechanical Engg.", company:"Gallantt Ispat Ltd", location:"UP,India" },
  { slug:"sridhar-behera", name:"Sridhar Behera", phone:"", wa:"", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"subhranshu-behera", name:"Subhranshu Behera", phone:"", wa:"", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"subrat-dash", name:"Subrat Dash", phone:"+918984113076", wa:"918984113076", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sudhansu-sekhar-rana", name:"Sudhansu Sekhar Rana", phone:"+919853750548", wa:"919853750548", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"suman-sourav-sahoo", name:"Suman Sourav Sahoo", phone:"+918725929944", wa:"918725929944", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"suryamani-pradhan", name:"Suryamani Pradhan", phone:"+918457900196", wa:"918457900196", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"suryamani-tangi", name:"Suryamani Tangi", phone:"+916371850529", wa:"916371850529", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"sushant-kumar-sahoo", name:"Sushant Kumar Sahoo", phone:"+919178678421", wa:"919178678421", email:"", role:"", edu:"", company:"", location:"" },
  { slug:"umesh-kumar-naik", name:"Umesh Kumar Naik", phone:"+919692583571", wa:"919692583571", email:"", role:"", edu:"", company:"", location:"" }
];

var TEACHERS = [
  { n:1, name:"xxx", role:"Headmaster" },
  { n:2, name:"xxx", role:"English" },
  { n:3, name:"xxx", role:"Mathematics" },
  { n:4, name:"xxx", role:"Odia" },
  { n:5, name:"xxx", role:"Science" },
  { n:6, name:"RajaniKanta Mishra", role:"Hindi" }
];

var MEMORIAM = [
  { name:"Dibyashree Debakant Das(Sipuna)", years:"2016", photo:"photos/demised-1.jpg" },
  { name:"Jagannath Mishra", years:"2025", photo:"photos/demised-2.jpg" }
];

var GALLERY_PHOTO_COUNT = 50;
var VIDEOS = [];

// HELPERS
function pad2(n){ return String(n).length < 2 ? "0" + n : String(n); }
function esc(s){
  if (!s) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function initial(s){ return (s || "?").trim().charAt(0).toUpperCase(); }

// RENDER MEMBERS
function renderMembers(){
  var grid = document.getElementById("membersGrid");
  if (!grid){ console.error("membersGrid not found"); return; }
  console.log("Rendering " + MEMBERS.length + " members...");
  var html = "";
  for (var i = 0; i < MEMBERS.length; i++){
    var m = MEMBERS[i];
    var photo = "photos/" + m.slug + ".jpg";
    var letter = initial(m.name);
    var ribbon = m.featured ? '<div class="ribbon">Founder Member</div>' : '';
    var role = m.role ? '<p class="role">' + esc(m.role) + '</p>' : '<p class="role">Details coming soon</p>';
    var eduClass = m.edu ? '' : ' class="empty"';
    var coClass  = m.company ? '' : ' class="empty"';
    var locClass = m.location ? '' : ' class="empty"';
    var eduLi = '<li' + eduClass + '><span>&#127891; Education</span><b>' + (esc(m.edu) || 'xxx') + '</b></li>';
    var coLi  = '<li' + coClass  + '><span>&#127970; Company</span><b>'  + (esc(m.company) || 'xxx') + '</b></li>';
    var locLi = '<li' + locClass + '><span>&#128205; Location</span><b>' + (esc(m.location) || 'xxx') + '</b></li>';
    var callChip = m.phone
      ? '<a class="chip call" href="tel:' + esc(m.phone) + '" title="Call">&#128222;</a>'
      : '<span class="chip call disabled">&#128222;</span>';
    var waChip = m.wa
      ? '<a class="chip wa" href="https://wa.me/' + esc(m.wa) + '" target="_blank" title="WhatsApp">&#128172;</a>'
      : '<span class="chip wa disabled">&#128172;</span>';
    var mailChip = m.email
      ? '<a class="chip mail" href="mailto:' + esc(m.email) + '" title="Email">&#9993;</a>'
      : '<span class="chip mail disabled">&#9993;</span>';
    var search = (m.name + " " + (m.slug || "")).toLowerCase();
    var cardClass = "member-card" + (m.featured ? " featured" : "");
    html += '<div class="' + cardClass + '" data-idx="' + i + '" data-search="' + esc(search) + '">'
         + ribbon
         + '<img src="' + photo + '" alt="' + esc(m.name) + '" loading="lazy" onerror="imgFallback(this,\'' + letter + '\')"/>'
         + '<div class="mc-body"><h3>' + esc(m.name) + '</h3>' + role
         + '<ul class="detail-list">' + eduLi + coLi + locLi + '</ul>'
         + '<div class="contact-row">' + callChip + waChip + mailChip + '</div></div></div>';
  }
  grid.innerHTML = html;
  console.log("Rendered " + grid.children.length + " member cards");
}

// RENDER TEACHERS
function renderTeachers(){
  var grid = document.getElementById("teachersGrid");
  if (!grid) return;
  var html = "";
  for (var i = 0; i < TEACHERS.length; i++){
    var t = TEACHERS[i];
    html += '<div class="member-card teacher">'
         + '<img src="photos/teacher-' + t.n + '.jpg" alt="Teacher ' + t.n + '" loading="lazy" onerror="imgFallback(this,\'T\')"/>'
         + '<div class="mc-body"><h3>' + esc(t.name) + '</h3><p class="role">' + esc(t.role) + '</p></div></div>';
  }
  grid.innerHTML = html;
}

// RENDER DEMISED FRIENDS
function renderMemoriam(){
  var grid = document.getElementById("memoriamGrid");
  if (!grid) return;
  if (MEMORIAM.length === 0){
    grid.innerHTML = '<div class="memoriam-empty">No entries.</div>';
    return;
  }
  var html = "";
  for (var i = 0; i < MEMORIAM.length; i++){
    var x = MEMORIAM[i];
    html += '<div class="memoriam-card">'
         + '<img class="frame-img" src="' + esc(x.photo) + '" alt="' + esc(x.name) + '" onerror="imgFallback(this,\'+\')"/>'
         + '<h4>' + esc(x.name) + '</h4><p class="years">' + esc(x.years) + '</p></div>';
  }
  grid.innerHTML = html;
}

// RENDER GALLERY
function renderGallery(){
  var photos = document.getElementById("galleryPhotos");
  if (photos){
    var html = "";
    for (var i = 1; i <= GALLERY_PHOTO_COUNT; i++){
      var src = "photos/gallery-" + pad2(i) + ".jpg";
      html += '<a class="gallery-item lb" href="' + src + '">'
           + '<img src="' + src + '" alt="Photo ' + i + '" loading="lazy" onerror="imgFallback(this,\'' + i + '\')"/>'
           + '<span>Photo ' + i + '</span></a>';
    }
    photos.innerHTML = html;
  }
  var vids = document.getElementById("galleryVideos");
  if (vids){
    var vhtml = "";
    for (var j = 0; j < 50; j++){
      var v = VIDEOS[j];
      var num = j + 1;
      if (!v){
        vhtml += '<div class="gallery-item video-item" style="cursor:default">'
              + '<img src="" alt="" onerror="imgFallback(this,\'V' + num + '\')"/>'
              + '<div class="play-icon" style="opacity:.35">&#9654;</div>'
              + '<span>Video ' + num + ' - coming soon</span></div>';
      } else if (typeof v === "string"){
        vhtml += '<a class="gallery-item video-item" href="https://www.youtube.com/watch?v=' + esc(v) + '" target="_blank">'
              + '<img src="https://img.youtube.com/vi/' + esc(v) + '/hqdefault.jpg" alt="Video ' + num + '" loading="lazy" onerror="imgFallback(this,\'V' + num + '\')"/>'
              + '<div class="play-icon">&#9654;</div><span>Video ' + num + '</span></a>';
      }
    }
    vids.innerHTML = vhtml;
  }
}

// TABS
function initTabs(){
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(){
      var all = document.querySelectorAll(".tab");
      for (var j = 0; j < all.length; j++) all[j].classList.remove("active");
      var panels = document.querySelectorAll(".tab-panel");
      for (var k = 0; k < panels.length; k++) panels[k].classList.remove("active");
      this.classList.add("active");
      var panel = this.getAttribute("data-tab") === "videos" ? "galleryVideos" : "galleryPhotos";
      var el = document.getElementById(panel);
      if (el) el.classList.add("active");
    });
  }
}

// SEARCH
function initSearch(){
  var input = document.getElementById("memberSearch");
  var count = document.getElementById("searchCount");
  if (!input) return;
  input.addEventListener("input", function(){
    var q = input.value.trim().toLowerCase();
    var visible = 0;
    var cards = document.querySelectorAll("#membersGrid .member-card");
    for (var i = 0; i < cards.length; i++){
      var match = !q || cards[i].dataset.search.indexOf(q) !== -1;
      cards[i].style.display = match ? "" : "none";
      if (match) visible++;
    }
    if (count) count.textContent = q ? (visible + " found") : (MEMBERS.length + " total");
  });
  input.dispatchEvent(new Event("input"));
}

// MEMBER MODAL
function openMemberModal(m){
  var modal = document.getElementById("memberModal");
  if (!modal) return;
  var photo = document.getElementById("mmPhoto");
  photo.src = "photos/" + m.slug + ".jpg";
  photo.alt = m.name;
  photo.onerror = function(){ imgFallback(photo, initial(m.name)); };
  var ribbon = document.getElementById("mmRibbon");
  ribbon.style.display = m.featured ? "block" : "none";
  document.getElementById("mmName").textContent = m.name;
  document.getElementById("mmRole").textContent = m.role || "Details coming soon";
  var rows = [
    { icon:"&#127891;", label:"Education", v:m.edu },
    { icon:"&#127970;", label:"Company",   v:m.company },
    { icon:"&#128205;", label:"Location",  v:m.location },
    { icon:"&#128222;", label:"Phone",     v:m.phone },
    { icon:"&#9993;",   label:"Email",     v:m.email }
  ];
  var dhtml = "";
  for (var i = 0; i < rows.length; i++){
    var r = rows[i];
    var val = r.v ? esc(r.v) : "Not available";
    var cls = r.v ? "" : ' class="empty"';
    dhtml += '<li' + cls + '><span>' + r.icon + ' ' + r.label + '</span><b>' + val + '</b></li>';
  }
  document.getElementById("mmDetails").innerHTML = dhtml;
  var chtml = "";
  if (m.phone) chtml += '<a class="chip call" href="tel:' + esc(m.phone) + '">&#128222;</a>';
  if (m.wa)    chtml += '<a class="chip wa" href="https://wa.me/' + esc(m.wa) + '" target="_blank">&#128172;</a>';
  if (m.email) chtml += '<a class="chip mail" href="mailto:' + esc(m.email) + '">&#9993;</a>';
  document.getElementById("mmContacts").innerHTML = chtml;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMemberModal(){
  var modal = document.getElementById("memberModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}
function initMemberModal(){
  var modal = document.getElementById("memberModal");
  if (!modal) return;
  var grid = document.getElementById("membersGrid");
  if (grid){
    grid.addEventListener("click", function(e){
      if (e.target.closest(".chip")) return;
      var card = e.target.closest(".member-card");
      if (!card) return;
      var idx = parseInt(card.dataset.idx, 10);
      if (!isNaN(idx) && MEMBERS[idx]) openMemberModal(MEMBERS[idx]);
    });
  }
  var closeBtn = modal.querySelector(".mm-close");
  var backdrop = modal.querySelector(".mm-backdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeMemberModal);
  if (backdrop) backdrop.addEventListener("click", closeMemberModal);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && modal.classList.contains("open")) closeMemberModal();
  });
}

// LIGHTBOX
var lbImages = [], lbIndex = 0;
function initLightbox(){
  var box = document.getElementById("lightbox");
  if (!box) return;
  var img = document.getElementById("lightboxImg");
  var cap = document.getElementById("lightboxCap");
  function collect(){
    var items = document.querySelectorAll("a.lb, .gallery-item.lb");
    lbImages = [];
    for (var i = 0; i < items.length; i++){
      var el = items[i];
      var inner = el.querySelector("img");
      var spn = el.querySelector("span");
      lbImages.push({
        src: el.getAttribute("href") || (inner && inner.src),
        cap: (spn && spn.textContent) || (inner && inner.alt) || ""
      });
    }
  }
  function show(i){
    if (!lbImages.length) return;
    lbIndex = (i + lbImages.length) % lbImages.length;
    img.src = lbImages[lbIndex].src;
    cap.textContent = lbImages[lbIndex].cap;
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close(){ box.classList.remove("open"); document.body.style.overflow = ""; }
  document.addEventListener("click", function(e){
    var item = e.target.closest("a.lb, .gallery-item.lb");
    if (!item) return;
    e.preventDefault();
    collect();
    var src = item.getAttribute("href");
    var idx = 0;
    for (var i = 0; i < lbImages.length; i++){
      if (lbImages[i].src && src && lbImages[i].src.indexOf(src.split("/").pop()) !== -1){ idx = i; break; }
    }
    show(idx);
  });
  var closeBtn = box.querySelector(".lightbox-close");
  var prevBtn = box.querySelector(".prev");
  var nextBtn = box.querySelector(".next");
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (prevBtn) prevBtn.addEventListener("click", function(){ show(lbIndex - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function(){ show(lbIndex + 1); });
  box.addEventListener("click", function(e){ if (e.target === box) close(); });
  document.addEventListener("keydown", function(e){
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(lbIndex - 1);
    if (e.key === "ArrowRight") show(lbIndex + 1);
  });
}

// MENU
function initMenu(){
  var h = document.querySelector(".hamburger");
  var n = document.querySelector(".nav-links");
  if (!h || !n) return;
  h.addEventListener("click", function(){ n.classList.toggle("open"); });
  var links = n.querySelectorAll("a");
  for (var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){ n.classList.remove("open"); });
  }
}

// SLIDESHOW
function initSlideshow(){
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");
  if (!slides.length) return;
  var current = 0;
  function show(i){
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
  }
  for (var i = 0; i < dots.length; i++){
    (function(idx){ dots[idx].addEventListener("click", function(){ show(idx); }); })(i);
  }
  setInterval(function(){ show(current + 1); }, 5000);
}

// FORM
function handleSubmit(e){
  e.preventDefault();
  var msg = document.getElementById("formMsg");
  if (msg) msg.textContent = "Thanks! Message recorded (demo).";
  e.target.reset();
  setTimeout(function(){ if (msg) msg.textContent = ""; }, 6000);
}
window.handleSubmit = handleSubmit;

// BOOT
function boot(){
  console.log("Booting alumni site...");
  try { renderMembers(); } catch(e){ console.error("renderMembers:", e); }
  try { renderTeachers(); } catch(e){ console.error("renderTeachers:", e); }
  try { renderMemoriam(); } catch(e){ console.error("renderMemoriam:", e); }
  try { renderGallery(); } catch(e){ console.error("renderGallery:", e); }
  try { initTabs(); } catch(e){ console.error(e); }
  try { initSearch(); } catch(e){ console.error(e); }
  try { initMemberModal(); } catch(e){ console.error(e); }
  try { initLightbox(); } catch(e){ console.error(e); }
  try { initMenu(); } catch(e){ console.error(e); }
  try { initSlideshow(); } catch(e){ console.error(e); }
  console.log("Boot complete!");
}

if (document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
