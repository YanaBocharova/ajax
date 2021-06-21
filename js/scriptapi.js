document.addEventListener("DOMContentLoaded",function()
{

 
    let url="http://www.omdbapi.com/?apikey=c444da5c&";

    getAjax("GET",url,function(data) {
    
        let form=document.forms.films;
        let obj=JSON.parse(data);
        console.log(data);

    
        let btn=form.elements.btnSeach;
        

        //кнопка

        btn.onclick=async (ev)=>{

            // нужно перехвать событие
            //ev.Preventdefault

            //    // или указать type button
            //    type = button
            let title=form.elements.title;
            let t='s=';
            t+=title.value;
            let url2="http://www.omdbapi.com/?"+t+"&apikey=c444da5c&";

            getAjax("GET",url2,function(data){
            console.log(data);
            let arrayMovies=JSON.parse(data).Search;
            console.log(arrayMovies);

            let d=document.querySelector("#movies");
            d.innerHTML='';
            for(let i=0; i< 3; i++){

                        document.querySelector("#movies").innerHTML +="<div  id='detailsDiv"+i+"'>" + "<h3>" + arrayMovies[i].Title +"</h3>" +  "<h4>"+arrayMovies[i].Type +"</h4>"
                        +"<img src='"+arrayMovies[i].Poster+"'>"
                        +"<button id='details"+i+"' type='submit'>Details</button>"
                        + "</div>";
            }
            
            let pag1=document.querySelector('#pag1');
            let pag2=document.querySelector('#pag2');
            let pag3=document.querySelector('#pag3');
            // первая страница пагинации
            pag1.onclick=(ev) =>{
                let d=document.querySelector("#movies");
                d.innerHTML='';
            for(let i=0; i< 3; i++){

            document.querySelector("#movies").innerHTML +="<div  id='detailsDiv"+i+"'>" + "<h3>" + arrayMovies[i].Title +"</h3>" +  "<h4>"+arrayMovies[i].Type +"</h4>"
            +"<img src='"+arrayMovies[i].Poster+"'>"
            +"<button id='details"+i+"' type='submit'>Details</button>"
            + "</div>";
            
            let btnDetails=document.getElementById("details"+`${i}`);
                btnDetails.onclick=(ev)=>
                {
                    console.log(ev.target);
                    document.querySelector("#detailsDiv"+`${i}`).innerHTML+=
                    "<span id='detailsDiv"+i+"'>" + "<h5> Year:"+arrayMovies[i].Year +"</h5>"+ "</span>";
        
                }
            }
            }


            // вторая страница
            pag2.onclick=(ev) =>{
                 let d=document.querySelector("#movies");
                 d.innerHTML='';
            for(let i=2; i< 5; i++){

                document.querySelector("#movies").innerHTML +="<div  id='detailsDiv"+i+"'>" + "<h3>" + arrayMovies[i].Title +"</h3>" +  "<h4>"+arrayMovies[i].Type +"</h4>"
                +"<img src='"+arrayMovies[i].Poster+"'>"
                +"<button id='details"+i+"' type='submit'>Details</button>"
                + "</div>";

                let btnDetails=document.getElementById("details"+`${i}`);
                btnDetails.onclick=(ev)=>
                {
                    console.log(ev.target);
                    document.querySelector("#detailsDiv"+`${i}`).innerHTML+=
                    "<span id='detailsDiv"+i+"'>" + "<h5> Year:"+arrayMovies[i].Year +"</h5>"+ "</span>";
        
                }
               }
               
             }

              // вторая страница
            pag3.onclick=(ev) =>{
                let d=document.querySelector("#movies");
                d.innerHTML='';
           for(let i=6; i< arrayMovies.length; i++){

               document.querySelector("#movies").innerHTML +="<div  id='detailsDiv"+i+"'>" + "<h3>" + arrayMovies[i].Title +"</h3>" +  "<h4>"+arrayMovies[i].Type +"</h4>"
               +"<img src='"+arrayMovies[i].Poster+"'>"
               +"<button id='details"+i+"' type='submit'>Details</button>"
               + "</div>";
              }
            }
            for(let i=0; i< arrayMovies.length; i++){

                let btnDetails=document.getElementById("details"+`${i}`);
                btnDetails.onclick=(ev)=>
                {
                    console.log(ev.target);
                    document.querySelector("#detailsDiv"+`${i}`).innerHTML+=
                    "<span id='detailsDiv"+i+"'>" + "<h5> Year:"+arrayMovies[i].Year +"</h5>"+ "</span>";
        
                }
            } 
            
        
        })
    //скобка для кнопки
            
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

        request.onerror=(ev)=>
        {
            console.log('not found');
        }
    request.open(method,url,true);
    request.send();
};