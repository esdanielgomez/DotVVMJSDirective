export default (contextApp) => new App(contextApp);
var WEB;

class App {

    constructor(contextApp) {
        this.contextApp = contextApp;
        WEB = contextApp;
    }

    operation(a, b) {
        let result = a + b;
        WEB.namedCommands["ResultOperation"](result);
    }

}