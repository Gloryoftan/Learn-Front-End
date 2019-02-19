const del = require("./del").del;

del("../delFunction/test", error => {
    if (error) throw error;
});