// 現在時刻を取得する
const currenttime = document.getElementById("currenttime");
const button = document.getElementById("button");

function timecount(){

    const time = new Date();
    // currenttime.innerHTML = time;
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    currenttime.innerHTML = year +"年"+ month +"月"+ date +"日"+ hour +"時"+ minute +"分"+ second +"秒";
};

button.addEventListener("click",timecount,false);



// 東京オリンピックまでの時刻を取得する
const answertime = document.getElementById("answertime");
const pushbutton = document.getElementById("pushbutton");

function countdown(){

    const time = new Date();
    const targettime = new Date("2020/7/24 00:00");
    const answer = time - targettime; //ミリ秒で取得されるらしい　0.0001秒なので1000で割ると1秒単位になる
    const a_second = Math.floor(answer/1000);　//ミリ秒を秒に変換

    //秒に相当する日・時・分
    // const date_second = 60*60*24;
    const hour_second = 60*60;
    const minute_second = 60;

    const answer_hour = Math.floor(a_second / hour_second);
    const answer_minute = Math.floor(a_second / minute_second % 60);
    const answer_second = Math.floor(a_second % 60 );

    answertime.innerHTML = "あと" + answer_hour + "時間" + answer_minute + "分" + answer_second + "秒";
};

pushbutton.addEventListener("click",countdown,false);


// 東京オリンピックまでカウントダウン
const answertime_auto = document.getElementById("answertime_auto");

function countdown_auto(){

    const time = new Date();
    const targettime = new Date("2020/7/24 00:00");
    const answer = time - targettime; //ミリ秒で取得されるらしい　0.0001秒なので1000で割ると1秒単位になる
    const a_second = Math.floor(answer/1000);　//ミリ秒を秒に変換

    //秒に相当する日・時・分
    // const date_second = 60*60*24;
    const hour_second = 60*60;
    const minute_second = 60;

    const answer_hour = Math.floor(a_second / hour_second);
    const answer_minute = Math.floor(a_second / minute_second % 60);
    const answer_second = Math.floor(a_second % 60 );

    answertime_auto.innerHTML = answer_hour + "時間" + answer_minute + "分" + answer_second + "秒";

    setTimeout(countdown_auto,1000);
};

countdown_auto();

