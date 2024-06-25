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

    const objConfig = {
        method: 'GET',
        url: href 
    };

    try{
        const response = await ajax(objConfig);
        loadResult(response)
    } catch(e) {
        console.log(e)
    }
}

function loadResult(response){
    const result = document.querySelector('.result');
    result.innerHTML = response
}

const ajax = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
        xhr.send();
    })

};

