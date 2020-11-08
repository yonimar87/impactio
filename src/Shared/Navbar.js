import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function MemberNavbar() {   
    return (
        <div className="container">
          <Navbar id="Navbar" variant="primary">
            <Nav className="mr-auto">
                <Nav.Link href="/members">Members</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      );}
   
export default MemberNavbar;