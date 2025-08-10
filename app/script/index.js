const API_URL = 'http://127.0.0.1:4000';
let count = 0;

const parseNdJson = ()=>{
    let ndJsonBuffer = '';
    return new TransformStream({
        transform(chunk, controller){
            ndJsonBuffer += chunk;
            const items = ndJsonBuffer.split('\n');
            
            items.slice(0, -1).forEach(item=>{
                if(item.trim()){
                    controller.enqueue(JSON.parse(item));
                }
            });

            ndJsonBuffer = items[items.length-1];
        },
        flush(controller){
            if(!ndJsonBuffer) return;

            controller.endqueue(JSON.parse(ndJsonBuffer));
        }
    })
}

const appendToHtml = (element)=>{
    return new WritableStream({
        write({ title, description, url_anime }){
            const card = `
                <article>
                    <div class="text">
                        <h3>[${++count}] ${title}</h3>
                        <p>${description.slice(0, 100)}</p>
                        <a target="_blank" href=${url_anime}>${url_anime}</a>
                    </div>
                </article>
            `;
            element.innerHTML+= card;
        },
        abort(reason){
            console.log('Aborted');
        }
    })
}

async function consumeApi(signal){
    const response = await fetch(`${API_URL}`, {
        signal
    });

    const reader = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(parseNdJson())

    return reader;
}

const [
    start,
    stop,
    cards
] = ['start', 'stop', 'cards'].map(item=> document.getElementById(item));



let abortController = new AbortController();
start.addEventListener('click', async()=>{
    const readable = await consumeApi(abortController.signal);
    readable.pipeTo(appendToHtml(cards));
});

stop.addEventListener('click', ()=>{
    abortController.abort();
    console.log('aborting...');
    abortController = new AbortController();
});