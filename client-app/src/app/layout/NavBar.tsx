import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <MenuItem name="Activities" />
        <MenuItem>
          <Button
            positive
            content="Create Activity"
            onClick={() => activityStore.openForm()}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
