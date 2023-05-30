interface LoginModalIconsProps {
  name: "arrowRight" | "xMark" | "angleLeft";
  fill?: string;
  classNames?: string;
}

const LoginModalIcons: React.FC<LoginModalIconsProps> = ({
  name,
  fill = "#0f84fa",
  classNames = " ",
}) => {
  if (name === "arrowRight")
    return (
      <svg
        data-v-fd979a82=""
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        name="arrow-right"
        color={fill}
        type="regular"
        className={classNames}
      >
        <path
          fill="currentColor"
          d="M264.6 70.63l176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.8125c-9.156-9.5-8.812-24.75 .8125-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6C221.8 96.23 221.5 80.98 230.6 71.45C239.8 61.85 254.1 61.51 264.6 70.63z"
        ></path>
      </svg>
    );
  if (name === "xMark") {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="xmark"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        name="times"
        color={fill}
        type="regular"
        className={classNames}
      >
        <path
          fill="currentColor"
          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
        ></path>
      </svg>
    );
  }

  if (name === "angleLeft") {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="angle-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        name="angle-left"
        color={fill}
        type="regular"
        className={classNames}
      >
        <path
          fill="currentColor"
          d="M166.5 424.5l-143.1-152c-4.375-4.625-6.562-10.56-6.562-16.5c0-5.938 2.188-11.88 6.562-16.5l143.1-152c9.125-9.625 24.31-10.03 33.93-.9375c9.688 9.125 10.03 24.38 .9375 33.94l-128.4 135.5l128.4 135.5c9.094 9.562 8.75 24.75-.9375 33.94C190.9 434.5 175.7 434.1 166.5 424.5z"
        ></path>
      </svg>
    );
  }

  return <></>;
};

export default LoginModalIcons;
