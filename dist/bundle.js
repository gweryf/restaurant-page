(()=>{"use strict";function e(e,t,n){const d=document.createElement("div");d.classList.add("menuorg");const o=document.createElement("h2");o.classList.add("foodname"),o.innerText=`${e}`;const i=document.createElement("div");i.classList.add("foodprice"),i.innerText=`${t}`;const a=document.createElement("div");a.classList.add("fooddescrp"),a.innerText=`${n}`;const c=document.createElement("img");return c.classList.add("foodimg"),c.src=`../dist/images/menu/${e}.png`,d.appendChild(c),d.appendChild(o),d.appendChild(a),d.appendChild(i),d}!function t(){const n=document.getElementById("content");n.textContent="",document.querySelector("body"),n.appendChild(function(){const n=document.createElement("nav");n.classList.add("navbar");const d=document.createElement("div");d.innerText="Food Court",d.classList.add("logo");const o=document.createElement("div");o.classList.add("navbut");const i=document.createElement("button");i.innerText="Home",i.addEventListener("click",(()=>{t()}));const a=document.createElement("button");a.innerText="Menu",a.addEventListener("click",(()=>{!function(){const t=document.querySelector(".descr");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("actualmenu"),t.appendChild(e("blawmanger",120,"a recipe of rice and minced chicken")),t.appendChild(e("bragot",300,"medieval ale made with honey and spices")),t.appendChild(e("pandemainz",200,"a high quality bread made from wheat with the flour sifted 2 or 3 times")),t.appendChild(e("pottage",40,"a type of soup or stew")),t}())}()}));const c=document.createElement("button");return c.innerText="About",c.addEventListener("click",(()=>{!function(){const e=document.querySelector(".descr");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("mainAbout");const t=document.createElement("div"),n=document.createElement("iframe");n.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47437.52196046917!2d-105.20621040730944!3d40.103918950192714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf089516381cd%3A0x152e9fc059274847!2sNiwot%20Tavern!5e0!3m2!1sen!2sin!4v1671950654061!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';const d=document.createElement("p");return d.textContent="7960 Niwot Rd Unit D12, Niwot, CO 80503, United States",e.appendChild(d),t.appendChild(n),e.appendChild(t),e}())}()})),n.appendChild(d),o.appendChild(i),o.appendChild(a),o.appendChild(c),n.appendChild(o),n}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("descr"),e.innerText="\n    From the outside it looks inviting, cozy and beautiful. Logs and tree trunks make up most of the building's outer structure. It's difficult to see through the large, stained glass windows, but the laughter from within can be felt outside.\n\n    As you enter our food court through the decorated, metal door, you're welcomed by overall happiness and the smile of a waitress.\n    The bartender is swamped in work, but still manages to welcome you with a smile.\n    ";const t=document.createElement("img");t.classList.add("homeimg"),t.src="../dist/images/descrfood.jpg",t.alt="Image of a food!",e.appendChild(t);const n=document.createElement("div");return n.innerText="Order online or visit us!",n.style.textAlign="center",n.style.background="rgba(244, 148, 69, 0)",e.appendChild(n),e}()),n.appendChild(function(){const e=document.createElement("footer");return e.classList.add("foot"),e.innerText="Copyright © 2022 Priyam Shrivastava",e}())}()})();