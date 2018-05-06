const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  
});

// logger

app.use(async (ctx, next) => {
  console.log('???'+ctx.request.origin);
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

console.log(app);

// response

app.use(async ctx => {
  if(ctx.request.path == '/'){
    ctx.body = 'Hello World';
  }else if(ctx.request.path == '/main'){
    ctx.body = '<h1>Hello World</h1>'
  }
  
});

app.listen(3000);