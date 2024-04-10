const app = require("./app.js");
let connectDatabase = require("./config/DBconfig.js");
require("dotenv").config();

const Port = process.env.PORT || 4000;

const server= app.listen(Port, async () => {
    try {
        await connectDatabase();

        console.log(`listening on http://localhost:${Port}/`);
    } catch (error) {
        console.log("app.listen  error:", error);

        console.log(`error while listening on ${Port}`);
    }
});



// Uncaught Exception Error
process.on('uncaughtException', (err) => {
    console.log(`Error:${err.message}`);
    process.exit(1);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error:${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});