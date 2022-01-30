let snowflakes_count = 100;


// $( document ).ready(function() {
//     $("#sortable").sortable();
//     $("#sortable").disableSelection();
// });


window.onload=function(){
    alert('Your video player is Here');
}
function play(){
   var path  = document.getElementById("path").value;
   document.getElementById('show').innerHTML='<video id="movie" src="'+url+'" height="600px" width="1300px" controls autoplay > </video>';
   var player =document.getElementById('movie');
   player.load();
   alert(''+player.duration);
}



$( document ).ready(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();

    $("#sortable1").sortable();
    $("#sortable1").disableSelection();


});


function myJSfunction(){
    var myvar = document.getElementById("#myDiv").innerHTML;
    console.log(myvar);
}

// let base_css = ``; // Put your custom base css here
if (typeof total !== 'undefined'){
    snowflakes_count = total;
}



// This function divides two numbers 
function divideBy() 
{ 
  let res;

  var cpow = document.getElementById("capx").value;
  var lpow = document.getElementById("indx").value;
 
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;


  document.getElementById("fresResult").innerHTML +=  "C :" + num1 + ".10^" + cpow + "[F]  ";
  document.getElementById("fresResult").innerHTML +=  "L :" + num2 + ".10^" + lpow + "[H]  ";
  document.getElementById("fresResult").innerHTML +=  "F_res : "


  res = Math.sqrt( num1 * Math.pow(10,cpow) * num2 * Math.pow(10,lpow) );
  res = res * 6.28;
  res = 1 / res;

  document.getElementById("fresResult").innerHTML +=  res;
  document.getElementById("fresResult").innerHTML +=  " [Hz]";
  document.getElementById("fresResult").innerHTML +=  "\n";
}


// This function allows you to turn on and off the snow
function toggle_snow() {
    let check_box = document.getElementById("toggle_snow");
    if (check_box.checked == true) {
        document.getElementById('snow').style.display = "block";
    }
    else {
        document.getElementById('snow').style.display = "none";
    }
}

// Creating snowflakes
function spawn_snow(snow_density = 200) {
    snow_density -= 1;

    for (let x = 0; x < snow_density; x++) {
        let board = document.createElement('div');
        board.className = "snowflake";

        document.getElementById('snow').appendChild(board);
    }
}

// Append style for each snowflake to the head
function add_css(rule) {
    let css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}



// Math
function random_int(value = 100){
    return Math.floor(Math.random() * value) + 1;
}

function random_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create style for snowflake
function spawnSnowCSS(snow_density = 200){
    let snowflake_name = "snowflake";
    let rule = ``;
    if (typeof base_css !== 'undefined'){
        rule = base_css;
    }
    
    for(let i = 1; i < snow_density; i++){
        let random_x = Math.random() * 100; // vw
        let random_offset = random_range(-100000, 100000) * 0.0001; // vw;
        let random_x_end = random_x + random_offset;
        let random_x_end_yoyo = random_x + (random_offset / 2);
        let random_yoyo_time = random_range(30000, 80000) / 100000;
        let random_yoyo_y = random_yoyo_time * 100; // vh
        let random_scale = Math.random();
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = Math.random();

        rule += `
        .${snowflake_name}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
    }

    add_css(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function() {
    spawnSnowCSS(snowflakes_count);
    spawn_snow(snowflakes_count);
};

// TODO add progress bar for slower clients
