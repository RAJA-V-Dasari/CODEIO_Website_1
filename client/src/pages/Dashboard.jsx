import EventAdmin from "../components/EventAdmin";
import AnnouncementAdmin from "../components/AnnouncementAdmin";
import ProjectAdmin from "../components/ProjectAdmin";
import TeamAdmin from "../components/TeamAdmin";

export default function Dashboard({ setIsAuth }) {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>Admin Dashboard (Testing)</h2>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            localStorage.removeItem("token");
            setIsAuth(false);
          }}
        >
          Logout
        </button>
      </div>

      <EventAdmin />
      <AnnouncementAdmin />
      <ProjectAdmin />
      <TeamAdmin />
    </div>
  );
}
