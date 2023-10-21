
import mongoose from "mongoose";

const url = 'mongodb+srv://node-server:<1Camisa*>@node-express.tkjdpq5.mongodb.net/?retryWrites=true&w=majority/n1_b2_mobile';

mongoose.connect(url);

module.exports = mongoose;