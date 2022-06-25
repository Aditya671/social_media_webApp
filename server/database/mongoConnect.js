const mongoose = require("mongoose");

export const mongoDbConnect = (url) => mongoose.connect(url);