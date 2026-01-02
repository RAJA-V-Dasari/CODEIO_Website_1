import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true
    },

    wing: {
      type: String
    },

    image: {
      url: String,
      publicId: String
    },

    linkedin: {
      type: String
    },

    github: {
      type: String
    },

    email: {
      type: String
    },

    isCoreMember: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamMemberSchema);
