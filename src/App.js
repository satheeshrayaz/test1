import List from "./components/List";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>ggfghffgfhgfgfghfgh</h1>
      <Card>
        <Card.Body>
          <Image
            width="30"
            rounded
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          />
          {"  "}This is some text within a card body.
          <span class="hi">fgfgfg</span>
          <div>
            <OverlayTrigger
              trigger="click"
              key={"bottom"}
              placement={"bottom"}
              overlay={
                <Popover id={`popover-positioned-${"bottom"}`}>
                  <Popover.Header as="h3">{`Popover ${"bottom"}`}</Popover.Header>
                  <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button className="popoverbtn">more v</Button>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
      {/* <List /> */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
