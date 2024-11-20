import { SVGProps } from "react";
import * as React from "react";

function EyeSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12.9045"
        r="2"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12.9045"
        r="2"
        stroke="#FFFFFF"
        strokeOpacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.9045C19.333 17.5715 16 19.9045 12 19.9045C8 19.9045 4.667 17.5715 2 12.9045C4.667 8.23754 8 5.90454 12 5.90454C16 5.90454 19.333 8.23754 22 12.9045"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.9045C19.333 17.5715 16 19.9045 12 19.9045C8 19.9045 4.667 17.5715 2 12.9045C4.667 8.23754 8 5.90454 12 5.90454C16 5.90454 19.333 8.23754 22 12.9045"
        stroke="#FFFFFF"
        strokeOpacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default EyeSvg;
