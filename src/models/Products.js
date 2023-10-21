import mongoose from "mongoose";

const produtoSchema = mongoose.Schema(
    {
        teste : { type: mongoose.Schema.Types.ObjectId, ref: 'teste', required: true}
    }
)

const produto = mongoose.model("produto", produtoSchema);

export default produto;