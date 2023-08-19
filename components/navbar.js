import React from "react";
import Link from "next/link";
import logo from "./img/logo_.svg";
import Image from "next/image";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      notification: true
    };
  }
  handleNotification() {
    this.setState(
      {
        notification: false
      }
    )
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
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
    return (<>
   
      <nav
        className="navbar is-transparent is-fixed-top-mobile has-background-light"
        role="navigation"
        aria-label="main-navigation"
      >

        <div style={{ maxWidth: "96%" }} className="container"        >
          <div className="navbar-brand">
            <Link href="/" className="navbar-item">
              <div style={{
              }} className="is-flex is-align-content-center	">
                <Image
                  src={logo}
                  style={{
                    maxHeight: "3.25rem"
                  }}
                  alt="Khalis Foundation"
                // style={{ width: "100px", height: "40px" }}
                // width={100}
                // height={600}
                />
                {/* <p className="is-size4 px-0">Sikh Youth Coding Initiative
                </p> */}
              </div>

            </Link>
            {/* <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
              }}>
                <button className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}>
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div> */}
          </div>
          <div
            id="navMenu "
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            {/* <div className="navbar-end has-text-centered has-shadow">
              <Link
                className="navbar-item is-family-secondary nav-item has-text-dark "
                href="/"
              >
                HOME
              </Link>
              <Link
                className="navbar-item is-family-secondary nav-item has-text-dark"
                href="https://shop.khal.is/"
              >
                SHOP
              </Link>
            </div>  */}
          </div>
        </div>
        <span />
      </nav>
    </>
    );
  }
};

export default Navbar;
