let data = {};
const page1 = { foo: 'bar'};
const page2 = undefined;
data = {...data, page1, page2 ? page2 : undefined };
console.log(data);
