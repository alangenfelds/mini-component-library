/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const height = size === "small" ? 8 : 12;

  const styles = STYLES[size];

  if (!styles) {
    throw new Error("Invalid size passed to ProgressBar: " + size);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <BarWrapper>
        <Bar
          style={{ "--width": value + "%", "--height": height + "px" }}
        ></Bar>
      </BarWrapper>
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  /* box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35}; */
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
