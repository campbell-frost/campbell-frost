"use client";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import { Cloud, ICloud } from "react-icon-cloud";

interface IconItem {
  image: string;
  text: string;
}

export type DynamicCloudProps = {
  icons: IconItem[];
};

export const cloudProps: Omit<ICloud, "children"> = {
  id: "icon-cloud",
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  canvasProps: {
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ icons }: DynamicCloudProps) {
  const { theme } = useTheme();

  const renderedIcons = useMemo(() => {
    return icons.map((icon, index) => (
      <a
        key={index}
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{ display: "inline-block", margin: "5px" }}
      >
        <img
          src={icon.image}
          alt={icon.text}
          title={icon.text}
          style={{
            width: '42px',
            height: '42px',
            objectFit: 'contain',
          }}
        />
      </a>
    ));
  }, [icons]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}