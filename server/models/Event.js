import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    eventDate: {
      type: Date,
      required: true
    },

    venue: {
      type: String
    },

    image: {
      url: String,
      publicId: String
    },

    registrationLink: {
      type: String
    },

    registrationPrice: {
      type: Number,
      default: 0, // 0 = Free event
      min: 0
    },

    prizePool: {
      type: Number,
      min: 0
    },

    isUpcoming: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
