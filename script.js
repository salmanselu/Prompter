

let scripts = [
    {text:"hello there",time:2000},
    {text:"hello ",time:2000},
    {text:"hi",time:2000},
];
timeout = 0;
Text = document.getElementById("demo");

scripts.forEach(
    (script) => {
        console.log(script.text);
        timeout = timeout + script.time;
        setTimeout(() => {
            Text.innerHTML = script.text;
        }, timeout);

    }
);




