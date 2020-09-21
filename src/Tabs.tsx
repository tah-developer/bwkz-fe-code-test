import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    flex: 1 1 50%;
    height: 50px;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: #fff;
    outline: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:first-of-type {
      border-right: 1px solid #ccc;
    }
    &:hover {
      background: #f4f4f4;
    }
    &.active {
      color: #fcdab7;
      font-weight: bold;
      background: #1d2d50;
      border-bottom: 1px solid #1d2d50;
    }
  }
`;

const Tabs = ({ currentActivePage, onActivePageChange }: any) => {
  React.useEffect(() => {
    window.addEventListener(
      "onbeforeunload",
      () => "Are you sure you want to leave this page?"
    );
  }, []);

  return (
    <TabsWrapper>
      <button
        className={`${currentActivePage === 0 ? "inactive" : ""}`}
        onClick={() => onActivePageChange(0)}
      >
        London
      </button>
      <button
        className={`${currentActivePage === 1 ? "inactive" : ""}`}
        onClick={() => onActivePageChange(1)}
      >
        All locations
      </button>
    </TabsWrapper>
  );
};

export default Tabs;
