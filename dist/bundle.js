!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const{GetRequest:o,ajax:c}=n(1);let r={commit:["666"]},u="http://stu.1000phone.net",l=location.href.indexOf("?")?location.href.split("?")[0]:location.href,a=new Object;a=o();switch(l){case`${u}/student.php/Public/login`:let e=a.u,t=a.p;console.log(e,t),document.querySelector("[name='Account']").value=e,document.querySelector("[name='PassWord']").value=t,setTimeout(()=>{document.querySelector("[type='submit']").click()},500);break;case`${u}/student.php/index/index`:case`${u}/student.php/Index/index`:case`${u}/student.php/index/Index`:location.href=`${u}/student.php/Index/evaluate?autocommit=1`;break;case`${u}/student.php/Index/evaluate`:case`${u}/student.php/index/Evaluate`:a.autocommit&&setTimeout(()=>{document.querySelector("[class='btn btn-xs btn-success']").click()});break;case`${u}/student.php/Index/start_evaluate`:case`${u}/student.php/index/start_evaluate`:(async()=>{let e=0,t=document.querySelectorAll("input");for(;e<t.length;)document.querySelectorAll("input")[e].click(),e+=4;let n=await c("GET","https://wscats.github.io/angular-tutorial/control/core.json");console.log(n),r.commit=r.commit.concat(n.commit),document.querySelectorAll("textarea")[0].value=r.commit[Math.floor(Math.random()*r.commit.length)],document.querySelectorAll("textarea")[1].value=r.commit[Math.floor(Math.random()*r.commit.length)],document.getElementById("addstudent").click()})();break;case`${u}/student.php/Inquiry/index`:case`${u}/student.php/inquiry/Index`:case`${u}/student.php/Inquiry/Index`:setTimeout(()=>{document.querySelector("[class='btn btn-xs btn-success']").click()})}if(location.href.indexOf("inquiry/index")>=0){let e=document.querySelectorAll('[data-score="5.00"]');for(let t=0;t<e.length;t++)e[t].click();let t=document.querySelectorAll('[type="checkbox"]');for(let e=0;e<t.length;e++)t[e].click();(async()=>{let e=await c("GET","https://wscats.github.io/angular-tutorial/control/core.json");console.log(e),r.commit=r.commit.concat(e.commit),document.querySelector("textarea").value=r.commit[Math.floor(Math.random()*r.commit.length)],document.querySelector("#submit_btn").click()})()}},function(e,t){e.exports={GetRequest:()=>{var e=location.search,t=new Object;if(-1!=e.indexOf("?")){var n=e.substr(1);strs=n.split("&");for(var o=0;o<strs.length;o++)t[strs[o].split("=")[0]]=unescape(strs[o].split("=")[1])}return t},ajax:(e,t)=>{new Promise((n,o)=>{let c=new XMLHttpRequest;c.open(e,t,!0),c.onreadystatechange=function(){4==c.readyState?n(JSON.parse(c.responseText)):o(c.responseText)},c.send()})}}}]);