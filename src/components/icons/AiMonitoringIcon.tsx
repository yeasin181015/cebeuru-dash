import React from "react";

type Props = {
  className?: string;
  size?: number;
};

const AiMonitoringIcon = ({ className, size = 20 }: Props) => {
  return (
    <svg
      width={size * 1.1}
      height={size}
      viewBox="0 0 26 21"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 0.0136719V17.2646H17.1016V19.0013H19.7021V20.6573H6.24254V19.0013H9.02789V17.2646H0V0.0136719H26ZM3.08395 12.7816H20.4943V13.5469H3.08395V12.7816ZM3.08395 10.7387H14.1934V11.5039H3.08395V10.7387ZM20.0748 6.46543L23.0227 6.47559C23.0202 7.28301 22.7038 8.0559 22.1437 8.62262C22.0115 8.75598 21.8672 8.87669 21.7125 8.98316L20.0748 6.46543ZM19.7727 5.86469L19.6153 2.6284C19.6122 2.56441 19.6605 2.51008 19.7224 2.50703C19.7407 2.50602 19.762 2.505 19.7859 2.50449C19.8057 2.50348 19.827 2.50348 19.8494 2.50297C20.7152 2.49332 21.5094 2.83051 22.103 3.39164C22.6967 3.95277 23.0892 4.73836 23.1512 5.62551C23.1552 5.68949 23.1085 5.74484 23.0461 5.74941L19.8936 5.98098C19.8316 5.98504 19.7773 5.9373 19.7732 5.87332C19.7727 5.87027 19.7727 5.86773 19.7727 5.86469ZM19.8463 2.73453L19.9926 5.74078L22.9155 5.52648C22.8333 4.74801 22.4768 4.05992 21.9502 3.56227C21.3972 3.03922 20.6573 2.72539 19.8514 2.73453H19.8463ZM19.4198 6.3268L21.0001 9.13805C20.5197 9.42293 19.9743 9.57324 19.4198 9.57324C17.6739 9.57324 16.2586 8.11938 16.2586 6.3268C16.2586 4.71551 17.4088 3.34848 18.9607 3.11438L19.4198 6.3268ZM10.398 2.85437L10.1461 2.53395C10.1065 2.47859 10.0943 2.42629 10.1105 2.37805C10.1532 2.24805 10.3066 2.26074 10.4127 2.26785C10.7143 2.28969 11.4258 2.29629 11.5812 2.30238C11.6949 2.31051 11.7614 2.39582 11.7421 2.50805C11.7107 2.66496 11.5659 3.42059 11.5141 3.7075C11.4959 3.80703 11.4659 3.93652 11.3405 3.94617C11.2897 3.95023 11.242 3.92586 11.1973 3.87457L10.9459 3.55363L10.8291 3.40535L9.25844 4.4225C9.23863 4.81809 8.9116 5.13293 8.51094 5.13293C8.09758 5.13293 7.76242 4.79777 7.76242 4.38441C7.76242 4.36766 7.76293 4.3509 7.76395 4.33465L6.89559 3.7075C6.77047 3.79517 6.62129 3.842 6.46852 3.84156C6.25219 3.84156 6.0577 3.74965 5.92109 3.60289L4.4652 4.3834C4.46824 4.40879 4.46926 4.43469 4.46926 4.46109C4.46926 4.87445 4.1341 5.20961 3.72125 5.20961C3.30789 5.20961 2.97273 4.87445 2.97273 4.46109C2.97273 4.04773 3.30789 3.71258 3.72125 3.71258C3.87105 3.71258 4.0102 3.75676 4.1275 3.83242L5.72965 2.97371C5.78652 2.61723 6.09578 2.34453 6.46852 2.34453C6.88188 2.34453 7.21703 2.67969 7.21703 3.09305C7.21703 3.1093 7.21652 3.12605 7.21551 3.14281L8.08387 3.76996C8.20913 3.68258 8.35821 3.63578 8.51094 3.6359C8.69883 3.6359 8.87047 3.70547 9.00199 3.81973L10.4295 2.895L10.398 2.85437ZM10.7423 4.78559H11.7741C11.8336 4.78559 11.8823 4.83434 11.8823 4.89375V8.90293C11.8823 8.96234 11.8336 9.01109 11.7741 9.01109H10.7423C10.6834 9.01109 10.6341 8.96234 10.6341 8.90293V4.89375C10.6341 4.83434 10.6829 4.78559 10.7423 4.78559ZM8.23012 6.15973H9.26199C9.32141 6.15973 9.37016 6.20848 9.37016 6.26789V8.90293C9.37016 8.96234 9.32141 9.01109 9.26199 9.01109H8.23012C8.1707 9.01109 8.12195 8.96234 8.12195 8.90293V6.26789C8.12195 6.20848 8.1707 6.15973 8.23012 6.15973ZM5.71746 4.78559H6.74984C6.80926 4.78559 6.8575 4.83434 6.8575 4.89375V8.90293C6.8575 8.96234 6.80875 9.01109 6.74984 9.01109H5.71746C5.65855 9.01109 5.6098 8.96234 5.6098 8.90293V4.89375C5.6098 4.83434 5.65805 4.78559 5.71746 4.78559ZM3.2048 6.38113H4.23719C4.2966 6.38113 4.34484 6.43039 4.34484 6.4893V8.90293C4.34484 8.96234 4.29609 9.01109 4.23719 9.01109H3.2048C3.1459 9.01109 3.09715 8.96234 3.09715 8.90293V6.4893C3.09715 6.42988 3.14539 6.38113 3.2048 6.38113ZM0.775937 15.0541H25.2205V0.789609H0.775937V15.0541Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AiMonitoringIcon;