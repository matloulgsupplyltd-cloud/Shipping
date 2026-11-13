/* Container Space - shared script */
/* Set your business email below so the enquiry form can send, e.g. var EMAIL="sales@yourdomain.co.za"; */
var EMAIL="";
var P=[["Standard Dry Shipping Containers","General-purpose enclosed containers for secure, weatherproof storage and transport.","#2c4a6e"],
["10ft Shipping Containers","Compact containers for smaller sites and limited spaces.","#7a2f2a"],
["20ft Shipping Containers","A popular choice for storage, site use and general logistics.","#35506b"],
["40ft Shipping Containers","Extended container length for larger storage and freight requirements.","#2f5a4f"],
["40ft High Cube Containers","Extra internal height for taller cargo and more flexible storage.","#4a3d66"],
["Refrigerated Shipping Containers (Reefers)","Temperature-controlled containers for perishable goods.","#5f6b78"],
["Open Top Shipping Containers","Open roof design for loading oversized or tall items from above.","#6b4a2a"],
["Flat Rack Containers","Open-sided platform containers for heavy and out-of-gauge cargo.","#3b3f45"],
["Side Opening Containers","Side access for easier loading and retrieval of stored goods.","#1f4e6b"],
["Double Door Containers","Doors at both ends for convenient access and flow-through loading.","#5a3350"],
["Storage Containers","Secure on-site storage for businesses, farms and households.","#40563a"],
["Modified Shipping Containers","Containers adapted to suit specific layouts and uses.","#2b4560"],
["Container Offices","Container-based office spaces for sites and businesses.","#52606d"],
["Container Workshops","Container-based workshop spaces for practical, on-site work.","#6a3d26"],
["Specialised Shipping Containers","Containers for specific or unusual requirements. Tell us what you need.","#303a45"]];
var A=[["Construction site storage","#6b4a2a"],["Commercial storage","#2c4a6e"],["Industrial storage","#3b3f45"],["Agricultural storage","#40563a"],["Retail and business applications","#5a3350"],["Shipping and logistics","#1f4e6b"],["Residential and lifestyle projects","#7a2f2a"],["Container offices and workshops","#52606d"],["Specialised commercial applications","#303a45"]];
var PIMG=["standard-dry-container.jpg", "10ft-container.jpg", "20ft-container.jpg", "40ft-container.jpg", "40ft-high-cube-container.jpg", "refrigerated-container-reefer.jpg", "open-top-container.jpg", "flat-rack-container.jpg", "side-opening-container.jpg", "double-door-container.jpg", "storage-container.jpg", "modified-container.jpg", "container-office.jpg", "container-workshop.jpg", "specialised-container.jpg"],PALT=["Standard dry shipping container", "10ft shipping container", "20ft shipping container in a storage yard", "40ft shipping container", "40ft high cube shipping container", "Refrigerated shipping container (reefer)", "Open top shipping container", "Flat rack shipping container", "Side opening shipping container", "Double door shipping container", "Storage container on site", "Modified shipping container", "Shipping container office", "Shipping container workshop", "Specialised shipping container"],AIMG=["app-construction-site.jpg", "app-commercial-storage.jpg", "app-industrial-storage.jpg", "app-agricultural-storage.jpg", "app-retail-business.jpg", "app-shipping-logistics.jpg", "app-residential-lifestyle.jpg", "app-offices-workshops.jpg", "app-specialised-commercial.jpg"],AALT=["Shipping containers used for storage on a construction site", "Shipping containers used for commercial storage", "Shipping containers on an industrial site", "Shipping container used for agricultural storage on a farm", "Shipping container retail shop", "Stacked shipping containers for shipping and logistics", "Shipping container residential project", "Shipping container offices and workshop", "Specialised commercial shipping container use"];
function pic(f,alt,label,c){return f?'<img class="pimg" src="assets/images/'+f+'" alt="'+alt+'" loading="lazy" onerror="this.outerHTML=\'<div class=ph style=--c:'+c+'><span>Add '+f+'</span></div>\'">':'<div class="ph" style="--c:'+c+'"><span>Photo slot: '+label+'</span></div>'}
var pr=document.getElementById("products"),ct=document.getElementById("ct"),ap=document.getElementById("apps");
if(pr){P.forEach(function(p,i){pr.insertAdjacentHTML("beforeend",'<article class="card">'+pic(PIMG[i],PALT[i],p[0],p[2])+'<div class="body"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><a class="btn" href="request-a-quote.html?type='+encodeURIComponent(p[0])+'">Enquire now</a></div></article>')})}
if(ct){P.forEach(function(p){ct.insertAdjacentHTML("beforeend","<option>"+p[0]+"</option>")});
var q=new URLSearchParams(location.search).get("type");if(q)ct.value=q}
if(ap){A.forEach(function(a,i){ap.insertAdjacentHTML("beforeend",'<article class="card">'+pic(AIMG[i],AALT[i],a[0],a[1])+'<div class="body"><h3>'+a[0]+'</h3></div></article>')})}
var tg=document.getElementById("tg"),mn=document.getElementById("menu");
if(tg){tg.onclick=function(){var o=mn.classList.toggle("open");tg.setAttribute("aria-expanded",o)}}
var em=document.getElementById("em");if(em&&EMAIL)em.textContent=EMAIL;
var yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
var fm=document.getElementById("f");
if(fm){fm.addEventListener("submit",function(e){e.preventDefault();var m=document.getElementById("msg");
if(!fm.checkValidity()){m.className="err";m.textContent="Please complete all required fields with valid details.";fm.reportValidity();return}
if(!EMAIL){m.className="err";m.textContent="This form is not connected yet. The site owner must add a business email address in assets/site.js before it can send enquiries. Please use the contact details in the meantime.";return}
var b=[];new FormData(fm).forEach(function(v,k){b.push(k+": "+v)});
location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Container enquiry")+"&body="+encodeURIComponent(b.join("\n"));
m.className="ok";m.textContent="Your email application should now open with your enquiry. Press send there to complete it."})}
