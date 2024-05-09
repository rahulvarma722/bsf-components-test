export class log {
    static success(message: string) {
        console.log(`%c ${message}`, 'color: green');
    }
    static error(message: string) {
        console.log(`%c ${message}`, 'color: red');
    }
    static warning(message: string) {
        console.log(`%c ${message}`, 'color: orange');
    }
}