import "./style.css";
import { PopupMenu } from "react-simple-widgets";

export default function App() {
  return (
    <PopupMenu>
      <button className="profile">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </button>
      <div className="card text-start">
        <div className="card-body px-4 py-4">
          <div id="circle-avatar" className="text-center mx-auto mb-4">
            <span>K</span>
          </div>

          <h5 className="text-center mb-0">John Doe</h5>
          <p className="text-center mb-2">jd@gmail.com</p>

          <hr />

          <p
            className="mb-0"
            style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
          >
            ROLES
          </p>
          <p style={{ fontSize: 12 }}>
            {["Submitter", "Project manager", "Change control board"].join(
              ", "
            )}
          </p>

          <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

          <ul>
            <li>
              <img src="./assets/icons/user.png" />
              <a href="#">My profile</a>
            </li>
            <li>
              <img src="./assets/icons/edit.png" />
              <a href="#">Edit profile</a>
            </li>
            <li>
              <img src="./assets/icons/envelope.png" />
              <a href="#">Inbox</a>
            </li>
            <li>
              <img src="./assets/icons/settings.png" />
              <a href="#">Setting</a>
            </li>
            <li>
              <img src="./assets/icons/question.png" />
              <a href="#">Help</a>
            </li>
            <li>
              <img src="./assets/icons/log-out.png" />
              <a href="#">Logout</a>
            </li>
          </ul>

          <hr style={{ margin: "0 -24px 24px" }} />

          <div className="d-grid">
            <button className="btn btn-secondary">
              <small>Logout</small>
            </button>
          </div>
        </div>
      </div>
    </PopupMenu>
  );
}
