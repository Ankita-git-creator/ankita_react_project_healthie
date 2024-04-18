import { CustomIconProps } from "@/interface/icons.interface";

export default function FooterSocialIonOne({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "14"}
      height={IconHeight || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_765_283)">
        <path
          d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28359 2.32454 9.31793 2.32454L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
          fill={IconColor || "#FFBC00"}
        />
      </g>
      <defs>
        <clipPath id="clip0_765_283">
          <rect
            width={IconWidth || "14"}
            height={IconHeight || "14"}
            fill={IconColor || "#fff"}
          />
        </clipPath>
      </defs>
    </svg>
  );
}
