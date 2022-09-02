import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "../components/MobileNav";
import ContactWindow from "./ContactWindow";
import Image from "next/image";

//next UI
import {
  Navbar,
  Text,
  Button,
  Link as UILink,
  useTheme,
} from "@nextui-org/react";
import { useNavBar } from "../hooks/useNavBar";

const Nav = () => {
  const {
    sectionActive,
    mobileMenuDeploy,
    handleClickMenu,
    contact,
    handleContact,
  } = useNavBar();
  const { theme } = useTheme();

  return (
    <>
      {contact && <ContactWindow handleContact={handleContact} />}
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle
            isSelected={mobileMenuDeploy}
            showIn="sm"
            aria-label="toggle navigation"
            onChange={handleClickMenu}
          />
          <div className="box-logo">
            <a href="#" className="a-logo ">
              <Image
                src="/images/yo-blanco.jpg"
                style={{ borderRadius: "9999px" }}
                height={36}
                width={36}
                alt="francesco-alterio-caricatura"
              />
            </a>
          </div>

          <Text
            as="h1"
            css={{ fontSize: 25, fontWeight: 600, margin: 0, marginLeft: 15 }}
            hideIn="sm"
          >
            Francesco Alterio
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Content
            variant="highlight"
            activeColor="secondary"
            hideIn="sm"
          >
            <Link href="#projects">
              <Navbar.Link isActive={sectionActive === "#projects"}>
                Projects
              </Navbar.Link>
            </Link>
            <Link href="#skillset">
              <Navbar.Link isActive={sectionActive === "#skillset"}>
                Skillset
              </Navbar.Link>
            </Link>
            <Link href="#videos">
              <Navbar.Link isActive={sectionActive === "#videos"}>
                Videos
              </Navbar.Link>
            </Link>
            <Link href="#coretech">
              <Navbar.Link isActive={sectionActive === "#coretech"}>
                Core Technology
              </Navbar.Link>
            </Link>
          </Navbar.Content>
          <Button auto color="secondary" rounded onClick={handleContact}>
            Contact
          </Button>
        </Navbar.Content>
        <Navbar.Collapse hidden={!mobileMenuDeploy}>
          <Navbar.CollapseItem>
            <Link href="#projects">
              <UILink onClick={handleClickMenu} color="text">
                Projects
              </UILink>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#skillset">
              <UILink onClick={handleClickMenu} color="text">
                Skillset
              </UILink>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#videos">
              <UILink onClick={handleClickMenu} color="text">
                Videos
              </UILink>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#coretech">
              <UILink onClick={handleClickMenu} color="text">
                Core Technology
              </UILink>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      <style jsx>{`
        .box-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
          background-color: ${theme.colors.secondary.value};
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }

        .a-logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Nav;
