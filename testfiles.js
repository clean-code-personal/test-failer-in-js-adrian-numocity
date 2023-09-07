// Redirect console.log to a custom function
const originalLog = console.log;
const capturedLogs = [];

console.log = function (...args) {
    capturedLogs.push(args.join(' '));
    originalLog.apply(console, args);
};

// Log some messages
console.log('Message 1');
console.log('Message 2');

// Access the captured logs
console.log(capturedLogs);
