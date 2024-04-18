import { CustomIconProps } from "@/interface/icons.interface";

export default function NotificationBellIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "18"}
      height={IconHeight || "19"}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0736 10.8127L15.5696 5.40151C15.1288 3.81624 14.1707 2.42383 12.8477 1.44558C11.5246 0.467339 9.91255 -0.0405891 8.2677 0.00253607C6.62285 0.0456612 5.03961 0.637364 3.76965 1.68359C2.49969 2.72982 1.61588 4.17053 1.25872 5.77671L0.09431 11.013C-0.034309 11.5916 -0.0313353 12.1917 0.103012 12.769C0.237358 13.3462 0.499648 13.886 0.870515 14.3483C1.24138 14.8107 1.71136 15.1838 2.24574 15.4402C2.78013 15.6966 3.36528 15.8297 3.95799 15.8297H4.83981C5.02149 16.7244 5.50689 17.5288 6.21378 18.1066C6.92067 18.6844 7.80556 19 8.71853 19C9.6315 19 10.5164 18.6844 11.2233 18.1066C11.9302 17.5288 12.4156 16.7244 12.5973 15.8297H13.2606C13.8707 15.8298 14.4727 15.6887 15.0193 15.4177C15.5659 15.1466 16.0425 14.7528 16.4117 14.267C16.781 13.7813 17.0329 13.2168 17.1479 12.6175C17.2628 12.0183 17.2369 11.4006 17.0736 10.8127ZM8.71853 17.4129C8.22913 17.4109 7.75231 17.2577 7.3533 16.9743C6.95429 16.6909 6.65258 16.2911 6.48945 15.8297H10.9476C10.7845 16.2911 10.4828 16.6909 10.0838 16.9743C9.68475 17.2577 9.20793 17.4109 8.71853 17.4129ZM15.1509 13.3086C14.9303 13.6012 14.6445 13.8383 14.3162 14.0012C13.988 14.164 13.6262 14.248 13.2598 14.2466H3.95799C3.6024 14.2465 3.25137 14.1666 2.9308 14.0127C2.61022 13.8589 2.3283 13.635 2.10583 13.3576C1.88336 13.0802 1.72603 12.7563 1.64545 12.41C1.56487 12.0637 1.5631 11.7036 1.64026 11.3565L2.80387 6.11947C3.08437 4.85786 3.77855 3.72622 4.77605 2.90444C5.77356 2.08266 7.01714 1.61791 8.30911 1.58406C9.60108 1.55022 10.8673 1.94922 11.9064 2.71764C12.9456 3.48607 13.6981 4.57981 14.0443 5.825L15.5482 11.2362C15.6476 11.5888 15.6635 11.9596 15.5945 12.3193C15.5255 12.6791 15.3736 13.0178 15.1509 13.3086Z"
        fill={IconColor || "#fff"}
      />
    </svg>
  );
}