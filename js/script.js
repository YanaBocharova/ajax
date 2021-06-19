
//Api Privat курсы валют
// document.addEventListener("DOMContentLoaded",function()
// {

// let url="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

// getAjax("GET",url,function(data) {

//     let obj=JSON.parse(data);

//     console.log(obj);

    
//     for(let i=0; i< obj.length; i++){

//         document.querySelector("#privat").innerHTML += "<h2>" + obj[i].buy +"</h2>" +  "<h2>"+obj[i].sale +"</h2>";
//     }
//     console.log(data);
// });


// });

// function getAjax(method,url,func){

//     let request=new XMLHttpRequest();
//     request.onreadystatechange=function()
//         {
//             if(request.readyState==4 && request.status==200)
//             {
//                 func(request.responseText);
//             }
//         }
//     request.open(method,url,true);
//     request.send();
// };





document.addEventListener("DOMContentLoaded",function()
{

let url="http://www.omdbapi.com/?apikey=c444da5c&";

getAjax("GET",url,function(data) {

    let obj=JSON.parse(data);
    console.log(data);

    // let title="s="+prompt("enter title");

    let form=document.forms.films;
    let title=form.elements.title;

    let t='s=';
    title.oninput=(ev)=>{
        console.log(title.value);
        t+=title.value;
        let url2="http://www.omdbapi.com/?"+t+"&apikey=c444da5c&";
        getAjax("GET",url2,function(data){
        console.log(data);
        

        let arrayMovies=JSON.parse(data).Search;
        console.log(arrayMovies);

        for(let i=0; i< arrayMovies.length; i++){

                    document.querySelector("#movies").innerHTML +="<div>" + "<h2>" + arrayMovies[i].Title +"</h2>" +  "<h2>"+arrayMovies[i].Type +"</h2>"
                    +"<img src='"+arrayMovies[i].Poster+"'>"
                    
                    
                    + "</div>";
        }
        });
    }

   
});


});

function getAjax(method,url,func){

    let request=new XMLHttpRequest();
    request.onreadystatechange=function()
        {
            if(request.readyState==4 && request.status==200)
            {
                func(request.responseText);
            }
        }
    request.open(method,url,true);
    request.send();
};