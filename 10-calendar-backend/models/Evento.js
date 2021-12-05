const mongoose = require("mongoose");

const eventoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    notes: { type: String },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    /* fijate que se referencia el nombre del otro schema */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "eventos",
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.updatedAt;
      },
    },
  }
);

eventoSchema.set("versionKey", "version");

module.exports = mongoose.model("Evento", eventoSchema);
