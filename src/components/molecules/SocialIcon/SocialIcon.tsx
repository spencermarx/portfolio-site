import React from "react";
import styled from "styled-components";
import "./socialicon.scss";

interface SpanProps {
  color: string;
}

const Span = styled.span`
  border-color: ${(props: SpanProps) => props.color};

  &::after {
    background: ${(props: SpanProps) => props.color};
  }
`;

const handleClickEmail = () => {
  window.location.href = "mailto:spencer.s.marx@gmail.online?subject=Hi%20there!";
};

const handleClickLinkedIn = () => {
  window.open("https://www.linkedin.com/in/spencer-marx/", "_blank");
};

const handleClickGitHub = () => {
  window.open("https://github.com/spencermarx", "_blank");
};

const handleExternalLink = (link: string) => {
  window.open(link, "_blank");
};

const svgIcon = (icon: string, color: string, link: string) => {
  if (icon === "email") {
    return (
      <Span
        className="SocialIcon-Wrapper d-flex justify-content-center align-items-center"
        onClick={handleClickEmail}
        color={color}
      >
        <svg
          className="SocialIcon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M25.7588 40.9601C26.5178 41.4957 28.8057 43.0864 32.6226 45.7314C36.4396 48.3763 39.3637 50.4129 41.395 51.8412C41.6181 51.9977 42.0923 52.3381 42.8176 52.8626C43.5431 53.3875 44.1458 53.8117 44.6255 54.1353C45.1055 54.4587 45.6858 54.8216 46.3669 55.2232C47.0478 55.6245 47.6896 55.9264 48.2923 56.1262C48.8951 56.3277 49.453 56.4275 49.9663 56.4275H50H50.0338C50.5471 56.4275 51.1053 56.3276 51.7081 56.1262C52.3105 55.9264 52.9529 55.6242 53.6332 55.2232C54.3139 54.8211 54.8942 54.4586 55.3742 54.1353C55.8542 53.8117 56.4565 53.3875 57.1822 52.8626C57.9074 52.3376 58.3821 51.9977 58.6053 51.8412C60.6585 50.4129 65.8822 46.7855 74.2747 40.9594C75.9041 39.8215 77.2654 38.4485 78.359 36.8412C79.4534 35.2347 80 33.5494 80 31.7862C80 30.3128 79.4696 29.0515 78.4092 28.0025C77.3489 26.9532 76.0932 26.4289 74.6427 26.4289H25.3569C23.6383 26.4289 22.3157 27.0092 21.3893 28.1697C20.4631 29.3305 20 30.7814 20 32.5223C20 33.9285 20.614 35.4524 21.8415 37.0929C23.0689 38.7336 24.3751 40.0227 25.7588 40.9601Z"
              fill={color}
            />
            <path
              d="M76.6514 44.5423C69.3307 49.4972 63.772 53.348 59.9778 56.0939C58.7055 57.031 57.6734 57.7625 56.8808 58.2868C56.0881 58.8113 55.0339 59.347 53.7167 59.8936C52.4 60.4411 51.1728 60.714 50.0342 60.714H50.0001H49.9665C48.8281 60.714 47.6002 60.4411 46.2835 59.8936C44.9667 59.347 43.9119 58.8113 43.1195 58.2868C42.3273 57.7625 41.2948 57.031 40.0226 56.0939C37.0091 53.8842 31.4623 50.0332 23.382 44.5423C22.1094 43.6947 20.9822 42.7231 20 41.6295V68.2136C20 69.6877 20.5243 70.9483 21.5736 71.9974C22.6226 73.0469 23.884 73.5714 25.3573 73.5714H74.6432C76.1161 73.5714 77.3774 73.0469 78.4265 71.9974C79.476 70.9479 80.0001 69.6878 80.0001 68.2136V41.6295C79.0401 42.7004 77.9244 43.6721 76.6514 44.5423Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="60" height="60" fill="white" transform="translate(20 20)" />
            </clipPath>
          </defs>
        </svg>
      </Span>
    );
  } else if (icon === "github-default") {
    return (
      <Span
        className="SocialIcon-Wrapper d-flex justify-content-center align-items-center"
        onClick={handleClickGitHub}
        color={color}
      >
        <svg
          className="SocialIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 100 100"
        >
          <path
            fill={color}
            d="M82.2431 45.3847C82.5474 43.4594 82.7372 41.3482 82.785 38.981C82.7667 28.8305 77.9076 25.2388 76.9727 23.5549C78.3496 15.864 76.7446 12.3657 75.9982 11.1681C73.2449 10.1908 66.4192 13.6904 62.6897 16.1539C56.6091 14.374 43.759 14.5477 38.94 16.6146C30.0487 10.248 25.3461 11.2188 25.3461 11.2188C25.3461 11.2188 22.3059 16.6705 24.5424 24.646C21.617 28.3739 19.4365 31.0096 19.4365 38.0008C19.4365 39.6752 19.5405 41.2574 19.717 42.7797C22.2363 56.0265 32.7328 61.7413 43.0433 62.7268C41.4918 63.9057 39.6291 66.1367 39.3714 68.7219C37.4219 69.9824 33.5003 70.399 30.4509 69.4403C26.1781 68.0902 24.5424 59.629 18.1438 60.836C16.7593 61.095 17.0345 62.0082 18.2334 62.7867C20.1828 64.0511 22.0188 65.6229 23.4339 68.9863C24.5208 71.5685 26.8069 76.179 34.0345 76.179C36.9038 76.179 38.9134 75.8399 38.9134 75.8399C38.9134 75.8399 38.9681 82.4199 38.9681 84.9863C38.9681 87.9396 34.9823 88.7689 34.9823 90.1857C34.9823 90.7492 36.3015 90.8027 37.3617 90.8027C39.4569 90.8027 43.8162 89.0575 43.8162 85.9878C43.8162 83.5486 43.8551 75.3516 43.8551 73.9161C43.8551 70.7795 45.536 69.7809 45.536 69.7809C45.536 69.7809 45.7417 86.5243 45.1315 88.769C44.4158 91.4089 43.1194 91.0338 43.1194 92.2086C43.1194 93.9618 48.3601 92.6373 50.0984 88.7997C51.4432 85.8023 50.841 69.3829 50.841 69.3829L52.243 69.3524C52.243 69.3524 52.2591 76.8723 52.2108 80.3078C52.1602 83.8661 51.7931 88.3645 53.9066 90.4876C55.2938 91.8839 59.5438 94.3341 59.5438 92.095C59.5438 90.7974 56.5676 89.725 56.5676 86.2094V70.0141C58.3757 70.0141 58.7493 75.3376 58.7493 75.3376L59.4011 85.2278C59.4011 85.2278 58.9683 88.8369 63.2998 90.343C64.8289 90.8786 68.1001 91.0242 68.2534 90.1253C68.4071 89.2241 64.3146 87.8915 64.2757 85.0981C64.2546 83.3969 64.3519 82.4011 64.3519 75.0011C64.3519 67.6052 63.3584 64.8692 59.8962 62.6889C69.9362 61.6585 80.3645 57.1747 82.2431 45.3847Z"
          />
        </svg>
      </Span>
    );
  } else if (icon === "github-special") {
    return (
      <Span
        className="SocialIcon-Wrapper d-flex justify-content-center align-items-center"
        onClick={() => handleExternalLink(link)}
        color={color}
      >
        <svg
          className="SocialIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 100 100"
        >
          <path
            fill={color}
            d="M82.2431 45.3847C82.5474 43.4594 82.7372 41.3482 82.785 38.981C82.7667 28.8305 77.9076 25.2388 76.9727 23.5549C78.3496 15.864 76.7446 12.3657 75.9982 11.1681C73.2449 10.1908 66.4192 13.6904 62.6897 16.1539C56.6091 14.374 43.759 14.5477 38.94 16.6146C30.0487 10.248 25.3461 11.2188 25.3461 11.2188C25.3461 11.2188 22.3059 16.6705 24.5424 24.646C21.617 28.3739 19.4365 31.0096 19.4365 38.0008C19.4365 39.6752 19.5405 41.2574 19.717 42.7797C22.2363 56.0265 32.7328 61.7413 43.0433 62.7268C41.4918 63.9057 39.6291 66.1367 39.3714 68.7219C37.4219 69.9824 33.5003 70.399 30.4509 69.4403C26.1781 68.0902 24.5424 59.629 18.1438 60.836C16.7593 61.095 17.0345 62.0082 18.2334 62.7867C20.1828 64.0511 22.0188 65.6229 23.4339 68.9863C24.5208 71.5685 26.8069 76.179 34.0345 76.179C36.9038 76.179 38.9134 75.8399 38.9134 75.8399C38.9134 75.8399 38.9681 82.4199 38.9681 84.9863C38.9681 87.9396 34.9823 88.7689 34.9823 90.1857C34.9823 90.7492 36.3015 90.8027 37.3617 90.8027C39.4569 90.8027 43.8162 89.0575 43.8162 85.9878C43.8162 83.5486 43.8551 75.3516 43.8551 73.9161C43.8551 70.7795 45.536 69.7809 45.536 69.7809C45.536 69.7809 45.7417 86.5243 45.1315 88.769C44.4158 91.4089 43.1194 91.0338 43.1194 92.2086C43.1194 93.9618 48.3601 92.6373 50.0984 88.7997C51.4432 85.8023 50.841 69.3829 50.841 69.3829L52.243 69.3524C52.243 69.3524 52.2591 76.8723 52.2108 80.3078C52.1602 83.8661 51.7931 88.3645 53.9066 90.4876C55.2938 91.8839 59.5438 94.3341 59.5438 92.095C59.5438 90.7974 56.5676 89.725 56.5676 86.2094V70.0141C58.3757 70.0141 58.7493 75.3376 58.7493 75.3376L59.4011 85.2278C59.4011 85.2278 58.9683 88.8369 63.2998 90.343C64.8289 90.8786 68.1001 91.0242 68.2534 90.1253C68.4071 89.2241 64.3146 87.8915 64.2757 85.0981C64.2546 83.3969 64.3519 82.4011 64.3519 75.0011C64.3519 67.6052 63.3584 64.8692 59.8962 62.6889C69.9362 61.6585 80.3645 57.1747 82.2431 45.3847Z"
          />
        </svg>
      </Span>
    );
  } else if (icon === "linkedIn") {
    return (
      <Span
        className="SocialIcon-Wrapper d-flex justify-content-center align-items-center"
        onClick={handleClickLinkedIn}
        color={color}
      >
        <svg
          className="SocialIcon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.9972 38.279H23.9256C23.3898 38.279 22.9557 38.7133 22.9557 39.2489V78.0299C22.9557 78.5657 23.3898 78.9998 23.9256 78.9998H35.9972C36.533 78.9998 36.9671 78.5657 36.9671 78.0299V39.2489C36.9671 38.7133 36.533 38.279 35.9972 38.279Z"
            fill={color}
          />
          <path
            d="M29.9658 19C25.5734 19 22 22.5695 22 26.9571C22 31.3465 25.5734 34.9174 29.9658 34.9174C34.3547 34.9174 37.9252 31.3463 37.9252 26.9571C37.9254 22.5695 34.3547 19 29.9658 19Z"
            fill={color}
          />
          <path
            d="M66.7023 37.3151C61.8539 37.3151 58.2698 39.3994 56.0959 41.7676V39.2489C56.0959 38.7133 55.6618 38.279 55.1261 38.279H43.5653C43.0296 38.279 42.5955 38.7133 42.5955 39.2489V78.0299C42.5955 78.5657 43.0296 78.9998 43.5653 78.9998H55.6106C56.1464 78.9998 56.5805 78.5657 56.5805 78.0299V58.8423C56.5805 52.3765 58.3367 49.8576 62.8439 49.8576C67.7527 49.8576 68.1428 53.8957 68.1428 59.175V78.0301C68.1428 78.5659 68.5769 79 69.1126 79H81.1624C81.6981 79 82.1322 78.5659 82.1322 78.0301V56.758C82.1322 47.1437 80.299 37.3151 66.7023 37.3151Z"
            fill={color}
          />
        </svg>
      </Span>
    );
  } else if (icon === "externalSite") {
    return (
      <Span
        className="SocialIcon-Wrapper d-flex justify-content-center align-items-center"
        onClick={() => handleExternalLink(link)}
        color={color}
      >
        <svg
          className="SocialIcon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.0556 39.9882V27L80 47.0235L57.0556 67.0471V53.7341C40.6667 53.7341 29.1944 61.6353 21 73C24.2778 56.7647 34.1111 43.2353 57.0556 39.9882Z"
            fill={color}
          />
        </svg>
      </Span>
    );
  }
};

interface SocialIconProps {
  icon: string;
  color: string;
  link?: string;
}

const SocialIcon: React.FC<SocialIconProps> = (props: SocialIconProps) => {
  const { icon, color, link } = props;
  const generateIcon = svgIcon(icon, color, link);
  // console.log(svgIcon)
  return <React.Fragment>{generateIcon}</React.Fragment>;
};

export default SocialIcon;
