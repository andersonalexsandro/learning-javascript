// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
    
//     if( tag === 'a') {
//         e.preventDefault();
//         const href = el.getAttribute('href');
//         loadPage(href); 
//     }
// });

// async function loadPage(href){

//     const objConfig = {
//         method: 'GET',
//         url: href 
//     };

//     try{
//         const response = await ajax(objConfig);
//         loadResult(response)
//     } catch(e) {
//         console.log(e)
//     }
// }

// function loadResult(response){
//     const result = document.querySelector('.result');
//     result.innerHTML = response
// }

// const ajax = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);

//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             } else{
//                 reject({
//                     code: xhr.status,
//                     msg: xhr.statusText
//                 });
//             }
//         });
//         xhr.send();
//     })

// };

//  ################  Alternative manner #######################


// function loadPage(href){
//     fetch(href)
//     .then(response => {
//         if(response.status !== 200) throw new Error(`Can't find the page, error 404`);
//         return response.text();
//     })
//     .then(html => loadResult(html))
//     .catch(e => console.log(e))
// }

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
    
//     if( tag === 'a') {
//         e.preventDefault();
//         const href = el.getAttribute('href');
//         loadPage(href); 
//     }
// });

// function loadResult(response){
//     const result = document.querySelector('.result');
//     result.innerHTML = response
// }


//  ################  Alternative manner 2.0 #######################

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if( tag === 'a') {
        e.preventDefault();
        const href = el.getAttribute('href');
        loadPage(href); 
    }
});

async function loadPage(href){
    try {
        const response = await fetch(href);
        if(response.status !== 200) throw new Error(`Can't find the page, error 404`);
        const html =  await response.text();
        loadResult(html);
    } catch (e) {
        console.log(e);
    }
}


function loadResult(response){
    const result = document.querySelector('.result');
    result.innerHTML = response
}