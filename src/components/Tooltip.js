import React from "react";
import { useLayer, useHover, Arrow } from "react-laag";

function Tooltip({ children, content }) {
  const [isOver, hoverProps] = useHover();

  const {
    triggerProps,
    layerProps,
    arrowProps,
    renderLayer
  } = useLayer({
    isOpen: isOver,
    placement: "right-center",
    triggerOffset: 10
  });

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {isOver &&
        renderLayer(
          <div className="tooltip" {...layerProps}>
            {content}
            <Arrow {...arrowProps}
            borderWidth={1}
            borderColor="DarkSeaGreen"
            backgroundColor="HoneyDew" />
          </div>
        )}
    </>
  );
}

export default Tooltip