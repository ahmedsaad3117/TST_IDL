// ! - 1.4 Manipulate the object to always return "404" with Proxy
// ! - 2.1 Create a proxy that returns "404" for any request

const targetObject = {};

const handler = {
  get: function (target, prop) {
    //! Always return "404" regardless of the property accessed
    return "404";
  },
};

const proxiedObject = new Proxy(targetObject, handler);

console.log(proxiedObject.someProperty);
console.log(proxiedObject.anotherProperty);
