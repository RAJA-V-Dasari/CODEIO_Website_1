import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    techStack: [
      {
        type: String,
        trim: true
      }
    ],

    image: {
      url: String,
      publicId: String
    },

    githubLink: {
      type: String
    },

    liveLink: {
      type: String
    },

    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
