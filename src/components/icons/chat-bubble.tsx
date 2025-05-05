import { IconProps } from "./logo";

export const ChatBubbleIcon = ({ className }: IconProps = {}) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.58464 16.1058C8.17512 16.9217 10.0047 17.1427 11.7437 16.729C13.4827 16.3153 15.0168 15.294 16.0694 13.8493C17.1221 12.4046 17.6242 10.6314 17.4851 8.8493C17.3461 7.06718 16.5751 5.39331 15.3111 4.12933C14.0472 2.86535 12.3733 2.09438 10.5912 1.95535C8.80904 1.81632 7.03586 2.31837 5.59115 3.37104C4.14644 4.42371 3.12521 5.95776 2.71149 7.69676C2.29776 9.43576 2.51875 11.2654 3.33464 12.8558L1.66797 17.7725L6.58464 16.1058Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
