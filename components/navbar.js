import React from "react";
import Link from "next/link";
import logo from "./img/Khalsa-Family-Camp-02.png";
import Image from "next/image";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      notification: true,
    };
  }
  handleNotification() {
    this.setState({
      notification: false,
    });
  }

  toggleHamburger() {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <>
        <nav
          className="navbar   is-transparent-tablet is-fixed-top "
          role="navigation"
          aria-label="main-navigation"
        >
          <div style={{ maxWidth: "100%" }} className="container">
            <div className="navbar-brand py-1"
              style={{ display: "flex", alignItems: "center" }}>
              <Link href="/" className="navbar-item">
                <div className="is-flex is-align-content-center	">
                  <Image
                    src="/Khalsa-Family-Camp-02.png"
                    style={{
                      maxHeight: "3.25rem",
                    }}
                    alt="Khalis Foundation"
                    width={200}
                    height={800}
                  />

                </div>
              </Link>
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                role="button"
                tabIndex={0}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <button
                    className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                    onKeyPress={() => this.toggleHamburger()}
                    onClick={() => this.toggleHamburger()}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <div
              id="navMenu "
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-centered has-shadow pr-3">
                {
                  navData.map(({ id, pageName, links }) => {
                    return (
                      <Link key={id} href={links} className="navbar-item is-family-secondary nav-item has-text-white-tablet ">
                          {pageName}
                      </Link>
                    );
                  }
                  )
                }
           
              </div>
            </div>
          </div>
          <span />
        </nav>
      </>
    );
  }
}

export default Navbar;

const navData = [
  {
    id: 1,
    pageName: "Home",
    links: "/",
  },
  {
    id: 2,
    pageName: "About",
    links: "#about",
  },
  {
    id: 3,
    pageName: "FAQs",
    links:
      "/faqs/",
  },
  {
    id: 4,
    pageName: "Donate",
    links:
      "/donate/",
  },
];
{
  /* <div className="drawerLinks">
              {navData.map(({ id, pageName, links }) => {
                return (
                  <Link key={id} href={links}>
                    {pageName}
                  </Link>
                );
              })}
            </div> */
}
