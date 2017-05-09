var list = document.querySelector('.list');
var send = document.querySelector('.send');
var height = document.getElementById('heightId');
var weight = document.getElementById('weightId');
var result = document.querySelector('.result');
var bmitext = document.querySelector('.bmitext');
var resulttext = document.querySelector('.resulttext');
var circle = document.querySelector('.circle');
var date = document.querySelector('.date');
var data = JSON.parse(localStorage.getItem("listData")) || [];

//日期設定
var dateString = '';
var today = new Date();
dateString += (today.getMonth() + 1) + "-";
dateString += today.getDate() + "-";
dateString += today.getFullYear();




//監聽事件與更新
send.addEventListener('click',countBMI);
circle.addEventListener('click',reFresh);
height.addEventListener('blur',checkInput);
weight.addEventListener('blur',checkInput);
updateList(data);


//更新資料

function updateList(items){
    var str ='' ;
    var len = items.length;
                for(var i = 0; i < len; i++){
                        str += '<li data-num="'+ i +'" class="'+ items[i].liClassName +'"><p>'+ items[i].status +'<span class="bmi">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';    
                    }
                    
                list.innerHTML = str;
                    


    /*for(var i = 0; i < len; i++){
        if(items[i].bmi < 18.5){
            str += '<li data-num="'+ i +'" class="light'"><p>過輕<span class="bmi">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
            
        }else if(18.5 <= items[i].bmi && items[i].bmi < 24){
            str += '<li data-num="'+ i +'" class="standard"><p>理想<span class="bmi">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
        }else if(24 <= items[i].bmi && items[i].bmi < 30){
            str += '<li data-num="'+ i +'" class="heavy"><p>過重<span class="bmi">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
        }else if(30 <= items[i].bmi && items[i].bmi < 35){
            str += '<li data-num="'+ i +'" class="moreHeavy"><p>輕度肥胖<span class="bmi2">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
        }else if(35 <= items[i].bmi && items[i].bmi < 40){
            str += '<li data-num="'+ i +'" class="mostHeavy"><p>中度肥胖<span class="bmi2">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
        }else{
            str += '<li data-num="'+ i +'" class="fat"><p>重度肥胖<span class="bmi2">BMI</span>'+ items[i].bmi +'<span class="weight">weight</span>'+ items[i].weight +'kg<span class="height">height</span>'+ items[i].height +'cm<span class="date">'+ dateString +'</span></p></li>';
        }
              
    }*/
    
 
}

//計算BMI並新增LI
function countBMI(e){
    e.preventDefault();
    if(document.getElementById('heightId').value.length < 1){
        alert("請輸入身高");
        return;
    }
    if(document.getElementById('weightId').value.length < 1){
        alert("請輸入體重");
        return;
    } 
    var bmi = 0;
    weight = parseInt(weight.value);
    height = parseInt(height.value);
    bmi = weight / (height * height) * 10000;
    bmi = bmi.toFixed(2);
    var info = {
        bmi: bmi,
        height: height,
        weight: weight,
    }

    if(info.bmi < 18.5){
            bmitext.style.color = '#31BAF9';
            circle.style.background = '#31BAF9 url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#31BAF9';
            send.className = 'result';
            resulttext.textContent = '過輕';
            info.liClassName = 'light';
            info.status = '過輕';
        }else if(18.5 <= info.bmi && info.bmi < 24){
            bmitext.style.color = '#86D73E';
            circle.style.background = '#86D73E url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#86D73E';
            send.className = 'result2';
            resulttext.textContent = '理想';
            info.liClassName = 'standard';
            info.status = '理想';
        }else if(24 <= info.bmi && info.bmi < 30){
            bmitext.style.color = '#FF982D';
            circle.style.background = '#FF982D url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#FF982D';
            send.className = 'result3';
            resulttext.textContent = '過重';
            info.liClassName = 'heavy';
            info.status = '過重';
        }else if(30 <= info.bmi && info.bmi < 35){
            bmitext.style.color = '#FF6C02';
            circle.style.background = '#FF6C02 url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#FF6C02';
            send.className = 'result4';
            resulttext.style.right = '67px';
            resulttext.textContent = '輕度肥胖';
            info.liClassName = 'moreHeavy';
            info.status = '輕度肥胖';
        }else if(35 <= info.bmi && info.bmi < 40){
            bmitext.style.color = '#FF6C02';
            circle.style.background = '#FF6C02 url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#FF6C02';
            send.className = 'result5';
            resulttext.style.right = '67px';
            resulttext.textContent = '中度肥胖';
            info.liClassName = 'mostHeavy';
            info.status = '中度肥胖';
        }else{
            bmitext.style.color = '#FF1200';
            circle.style.background = '#FF1200 url(img/icons_loop.png) no-repeat 8px 6px';
            resulttext.style.color = '#FF1200';
            send.className = 'result6';
            resulttext.style.right = '67px';
            resulttext.textContent = '重度肥胖';
            info.liClassName = 'fat';
            info.status = '重度肥胖';
        }


    data.push(info);
    updateList(data);
    localStorage.setItem("listData",JSON.stringify(data));
    
    send.value = info.bmi;
    bmitext.style.display = 'block';
    resulttext.style.display = 'block';
    circle.style.display = 'block';

    
    
    
    
}

//重新整理
function reFresh(e){
    e.preventDefault;
    location.reload();
}

//檢查資料長度
function checkInput(e){
    if(e.target.value.length < 1){
        alert("欄位不能為空白");
    }
    
}