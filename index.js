// IE9-11 Object.create bug fix
// webreflection.blogspot.com/2014/04/all-ie-objects-are-broken.html
Object.create && function () {

    var object = Object.create({});
    object[0] = null;

    return object.hasOwnProperty(0); //→ false in IE9-11

}() || Object.defineProperty(Object, 'create', function () {

    var ObjectCreate = Object.create;
    var descriptor = Object.getOwnPropertyDescriptor(Object, 'create');

    descriptor.value = function (prototype, properties) {

        var object = ObjectCreate(prototype, properties);

        if (!Object.prototype.hasOwnProperty.call(object, 0)) {

            // a numeric key fixes the bug,
            // it can be removed after,
            // unlike the alphabetic key
            Object.defineProperty(object, 0, {
                configurable: true
            });

            delete object[0];
        }

        return object;
    };

    return descriptor;
}());
