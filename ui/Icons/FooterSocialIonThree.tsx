import { CustomIconProps } from "@/interface/icons.interface";

export default function FooterSocialIonThree({
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
      <g clipPath="url(#clip0_765_295)">
        <path
          d="M8.30313 5.92804L13.4029 0H12.1944L7.7663 5.14724L4.22958 0H0.150391L5.4986 7.78354L0.150391 14H1.35894L6.03513 8.56434L9.77017 14H13.8494L8.30284 5.92804H8.30313ZM6.64787 7.85211L6.10598 7.07705L1.79439 0.909771H3.65065L7.13015 5.88696L7.67203 6.66202L12.195 13.1316H10.3387L6.64787 7.85241V7.85211Z"
          fill={IconColor || "#FFBC00"}
        />
      </g>
      <defs>
        <clipPath id="clip0_765_295">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
