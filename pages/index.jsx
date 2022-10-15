import styled from "styled-components";
import { Routes } from "@config/routes";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  .openDashboardBtn {
    text-decoration: none;
    color: white;
    background-color: #8630cc;
    padding: 1rem;
    border-radius: 6px;
    transition: background-color 300ms cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      background-color: #a73bff;
      color: #ededed;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }

  .navigationLink {
    text-decoration: none;
    display: inline-block;
    margin-right: 2.5rem;
    color: #474747;
    transition: color 300ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      color: #7b7b7b;
    }
  }
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const navigationLinks = (
  <div className="navigation">
    <a className="navigationLink" href="/">
      Home
    </a>
    <a className="navigationLink" href="/products">
      Products
    </a>
    <a className="navigationLink" href="/documentation">
      Documentation
    </a>
    <a className="navigationLink" href="/pricing">
      Pricing
    </a>
  </div>
);

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        {navigationLinks}
        <a className="openDashboardBtn" href={Routes.projects}>
          Open Dashboard
        </a>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
