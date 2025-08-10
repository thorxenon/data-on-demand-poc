import { createReadStream } from 'node:fs';
import { createServer, IncomingMessage, ServerResponse} from 'node:http';
import { Readable, Transform } from 'node:stream';
import { WritableStream, TransformStream } from 'node:stream/web';
import { setTimeout } from 'node:timers/promises';
import csvtojson from 'csvtojson';

const PORT = 4000;

const handler = async( request: IncomingMessage, response: ServerResponse ) =>{
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
    }

    if(request.method ===  'OPTIONS'){
        response.writeHead(204, headers);
        response.end();
        return;
    }

    request.once('close', ()=> console.log('Connection was closed. \n '+ items));
    let items = 0;

    Readable.toWeb(createReadStream('./animeflv.csv'))
    .pipeThrough(Transform.toWeb(csvtojson()))
    .pipeThrough(new TransformStream({
        transform(chunk, controller){
            const data = JSON.parse(Buffer.from(chunk).toString());
            controller.enqueue(JSON.stringify({
                title: data.title,
                description: data.description,
                url_anime: data.url_anime
            }).concat('\n'));
        }
    }))
    .pipeTo(new WritableStream({
        async write(chunk){
            // await setTimeout(200)
            items++
            response.write(chunk);
        },

        close(){
            response.end();
        }
    }));

    response.writeHead(200, headers);
    console.log(request.headers);
    // return response.end('ok2');
}


const server = createServer(handler).listen(PORT, ()=>{
    console.log('The server is running at \n' + PORT);
});