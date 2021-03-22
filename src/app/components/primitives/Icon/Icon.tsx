import * as React from 'react';

type IconType = {
  arrowAltFromBottom: () => JSX.Element;
  arrowAltFromTop: () => JSX.Element;
  arrowToBottom: () => JSX.Element;
  badgeCheck: () => JSX.Element;
  bars: () => JSX.Element;
  borderAll: () => JSX.Element;
  bullseyePointer: () => JSX.Element;
  campground: () => JSX.Element;
  check: () => JSX.Element;
  checkCircle: () => JSX.Element;
  chevronDown: () => JSX.Element;
  chevronLeft: () => JSX.Element;
  chevronRight: () => JSX.Element;
  close: () => JSX.Element;
  ellipsisV: () => JSX.Element;
  externalLink: () => JSX.Element;
  exclamationCircle: () => JSX.Element;
  eye: () => JSX.Element;
  eyeSlash: () => JSX.Element;
  figmaComponent: () => JSX.Element;
  figmaFrame: () => JSX.Element;
  figmaInstance: () => JSX.Element;
  figmaText: () => JSX.Element;
  flame: () => JSX.Element;
  globeAmericas: () => JSX.Element;
  happy: () => JSX.Element;
  image: () => JSX.Element;
  info: () => JSX.Element;
  link: () => JSX.Element;
  longArrowLeft: () => JSX.Element;
  meh: () => JSX.Element;
  none: () => JSX.Element;
  paperclip: () => JSX.Element;
  pause: () => JSX.Element;
  pen: () => JSX.Element;
  play: () => JSX.Element;
  plus: () => JSX.Element;
  product360: () => JSX.Element;
  sad: () => JSX.Element;
  search: () => JSX.Element;
  sketchGroup: () => JSX.Element;
  sketchSymbol: () => JSX.Element;
  sketchText: () => JSX.Element;
  trash: () => JSX.Element;
  user: () => JSX.Element;
  video: () => JSX.Element;
  wind: () => JSX.Element;
};

export enum Catalog {
  arrowAltFromBottom = 'arrowAltFromBottom',
  arrowAltFromTop = 'arrowAltFromTop',
  arrowToBottom = 'arrowToBottom',
  badgeCheck = 'badgeCheck',
  bars = 'bars',
  borderAll = 'borderAll',
  bullseyePointer = 'bullseyePointer',
  campground = 'campground',
  check = 'check',
  checkCircle = 'checkCircle',
  chevronDown = 'chevronDown',
  chevronLeft = 'chevronLeft',
  chevronRight = 'chevronRight',
  close = 'close',
  ellipsisV = 'ellipsisV',
  exclamationCircle = 'exclamationCircle',
  externalLink = 'externalLink',
  eye = 'eye',
  eyeSlash = 'eyeSlash',
  figmaComponent = 'figmaComponent',
  figmaFrame = 'figmaFrame',
  figmaInstance = 'figmaInstance',
  figmaText = 'figmaText',
  flame = 'flame',
  globeAmericas = 'globeAmericas',
  happy = 'happy',
  image = 'image',
  info = 'info',
  link = 'link',
  longArrowLeft = 'longArrowLeft',
  meh = 'meh',
  none = 'none',
  paperclip = 'paperclip',
  pause = 'pause',
  pen = 'pen',
  play = 'play',
  plus = 'plus',
  product360 = 'product360',
  sad = 'sad',
  search = 'search',
  sketchGroup = 'sketchGroup',
  sketchSymbol = 'sketchSymbol',
  sketchText = 'sketchText',
  trash = 'trash',
  user = 'user',
  video = 'video',
  wind = 'wind',
}

export enum Style {
  light = 'light',
  regular = 'regular',
  solid = 'solid',
  duotone = 'duotone',
  brand = 'brand',
}

type Props = {
  readonly width: string;
  readonly height: string;
  readonly icon: Catalog;
  readonly className?: string;
  readonly iconStyle: Style;
  readonly onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => any;
};

const Icon: React.FC<Props> = ({
  width = '24px',
  height = '24px',
  icon = Catalog.search,
  className,
  iconStyle = Style.light,
  onClick,
}: Props) => {
  const svg: IconType = {
    arrowAltFromBottom: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.203 21H4.8a.481.481 0 01-.48-.48v-.32c0-.264.216-.48.48-.48h14.403c.264 0 .48.216.48.48v.32c0 .264-.216.48-.48.48zm-8.758-3.84h3.11c.351 0 .64-.289.64-.641v-5.761h3.756a.32.32 0 00.228-.544l-5.725-5.746a.64.64 0 00-.908 0l-5.722 5.746c-.2.2-.06.544.228.544H9.81v5.761a.636.636 0 00.636.64zm0 1.28a1.92 1.92 0 01-1.92-1.921v-4.481H6.052c-1.424 0-2.136-1.724-1.132-2.729l5.721-5.745a1.922 1.922 0 012.721 0l5.725 5.741c1.009 1.009.288 2.729-1.132 2.729h-2.476v4.481c0 1.06-.86 1.92-1.92 1.92h-3.114v.004z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.7211 19.5533V20.5178C19.7211 20.783 19.5041 21 19.2389 21H4.7722C4.50698 21 4.28998 20.783 4.28998 20.5178V19.5533C4.28998 19.2881 4.50698 19.0711 4.7722 19.0711H19.2389C19.5041 19.0711 19.7211 19.2881 19.7211 19.5533ZM4.85659 9.35028L10.6433 3.5636C11.3947 2.81213 12.6164 2.81213 13.3719 3.5636L19.1545 9.35028C20.3681 10.5639 19.5041 12.6415 17.7922 12.6415H15.7187V15.8563C15.7187 16.9212 14.8547 17.7852 13.7898 17.7852H10.2294C9.16446 17.7852 8.30047 16.9212 8.30047 15.8563V12.6415H6.21887C4.50296 12.6415 3.64701 10.5599 4.85659 9.35028V9.35028ZM6.21887 10.7126H10.2253V15.8563H13.7858V10.7126H17.7922L12.0056 4.92588L6.21887 10.7126Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.7567 21H5.25443C4.71996 21 4.28998 20.57 4.28998 20.0356V19.0711C4.28998 18.5366 4.71996 18.1067 5.25443 18.1067H18.7567C19.2912 18.1067 19.7211 18.5366 19.7211 19.0711V20.0356C19.7211 20.57 19.2912 21 18.7567 21ZM14.5774 16.1778V10.7126H18.1017C18.817 10.7126 19.1746 9.84858 18.6683 9.34224L12.5561 3.22604C12.2547 2.92465 11.7604 2.92465 11.459 3.22604L5.33881 9.34224C4.83248 9.84858 5.19415 10.7126 5.90945 10.7126H9.4337V16.1778C9.4337 16.7122 9.86368 17.1422 10.3981 17.1422H13.613C14.1474 17.1422 14.5774 16.7122 14.5774 16.1778Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    arrowAltFromTop: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M4.8 3h14.403c.264 0 .48.216.48.48v.32c0 .264-.216.48-.48.48H4.8a.482.482 0 01-.48-.48v-.32c0-.264.216-.48.48-.48zm8.758 3.84H10.45a.642.642 0 00-.64.641v5.761H6.052a.32.32 0 00-.228.544l5.726 5.742a.64.64 0 00.908 0l5.725-5.742c.2-.2.06-.544-.228-.544h-3.757V7.481a.642.642 0 00-.64-.64zm0-1.28c1.06 0 1.92.86 1.92 1.921v4.481h2.477c1.424 0 2.137 1.724 1.132 2.729l-5.725 5.745a1.922 1.922 0 01-2.72 0L4.915 14.69c-1.004-1.009-.284-2.729 1.136-2.729H8.53V7.481c0-1.06.86-1.92 1.92-1.92h3.11z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M4.29039 4.44667V3.48222C4.29039 3.217 4.50739 3 4.77261 3H19.2393C19.5045 3 19.7215 3.217 19.7215 3.48222V4.44667C19.7215 4.71189 19.5045 4.92889 19.2393 4.92889H4.77261C4.50739 4.92889 4.29039 4.71189 4.29039 4.44667ZM19.1549 14.6497L13.3682 20.4364C12.6168 21.1879 11.3951 21.1879 10.6397 20.4364L4.857 14.6497C3.6434 13.4361 4.50739 11.3585 6.2233 11.3585H8.29686V8.14372C8.29686 7.07881 9.16085 6.21482 10.2258 6.21482H13.7862C14.8511 6.21482 15.7151 7.07881 15.7151 8.14372V11.3585H17.7926C19.5086 11.3585 20.3645 13.4401 19.1549 14.6497ZM17.7926 13.2874H13.7862V8.14372H10.2258V13.2874H6.21928L12.006 19.0741L17.7926 13.2874Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M5.25443 3H18.7567C19.2912 3 19.7211 3.42998 19.7211 3.96445V4.92889C19.7211 5.46336 19.2912 5.89334 18.7567 5.89334H5.25443C4.71996 5.89334 4.28998 5.46336 4.28998 4.92889V3.96445C4.28998 3.42998 4.71996 3 5.25443 3ZM9.4337 7.82224V13.2874H5.90945C5.19415 13.2874 4.8365 14.1514 5.34283 14.6578L11.459 20.774C11.7604 21.0753 12.2547 21.0753 12.5561 20.774L18.6723 14.6578C19.1786 14.1514 18.821 13.2874 18.1057 13.2874H14.5774V7.82224C14.5774 7.28777 14.1474 6.85779 13.613 6.85779H10.3981C9.86368 6.85779 9.4337 7.28777 9.4337 7.82224Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    arrowToBottom: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.558 12.357l-6.607 6.63c-.21.21-.55.21-.759 0l-6.607-6.63a.536.536 0 010-.759l.317-.317c.21-.21.549-.21.759 0l5.152 5.179V2.536c0-.295.24-.536.535-.536h.447c.294 0 .535.241.535.536V16.46l5.152-5.174c.21-.21.55-.21.76 0l.316.317a.53.53 0 010 .754zm1.585 9.107v-.357a.537.537 0 00-.536-.536H3.536a.537.537 0 00-.536.536v.357c0 .295.241.536.536.536h16.071a.537.537 0 00.536-.536z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.558 10.933L11.9509 17.558C11.7411 17.7679 11.4018 17.7679 11.192 17.558L4.58482 10.933C4.375 10.7232 4.375 10.3839 4.58482 10.1741L5.45982 9.29911C5.67411 9.08482 6.01786 9.08929 6.22321 9.30804L10.4062 13.6429V2.53571C10.4062 2.24107 10.6473 2 10.942 2H12.192C12.4866 2 12.7277 2.24107 12.7277 2.53571V13.6429L16.9107 9.30804C17.1205 9.09375 17.4643 9.08929 17.6741 9.29911L18.5491 10.1741C18.7679 10.3839 18.7679 10.7232 18.558 10.933V10.933ZM19.6071 19.6786H3.53571C3.24107 19.6786 3 19.9196 3 20.2143V21.4643C3 21.7589 3.24107 22 3.53571 22H19.6071C19.9018 22 20.1429 21.7589 20.1429 21.4643V20.2143C20.1429 19.9196 19.9018 19.6786 19.6071 19.6786Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.0714 22H4.07143C3.47768 22 3 21.5223 3 20.9286V19.8571C3 19.2634 3.47768 18.7857 4.07143 18.7857H19.0714C19.6652 18.7857 20.1429 19.2634 20.1429 19.8571V20.9286C20.1429 21.5223 19.6652 22 19.0714 22ZM16.1071 9.47768L13.1786 12.4063V3.07143C13.1786 2.47768 12.7009 2 12.1071 2H11.0357C10.442 2 9.96429 2.47768 9.96429 3.07143V12.4063L7.03571 9.47768C6.61607 9.05804 5.9375 9.05804 5.52232 9.47768L4.76339 10.2366C4.34375 10.6563 4.34375 11.3348 4.76339 11.75L10.8125 17.7991C11.2321 18.2188 11.9107 18.2188 12.3259 17.7991L18.375 11.75C18.7946 11.3304 18.7946 10.6518 18.375 10.2366L17.6161 9.47768C17.2009 9.05804 16.5223 9.05804 16.1071 9.47768V9.47768Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    badgeCheck: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M15.4898 9.12734c-.029-.02904-.0634-.05207-.1014-.06775-.0379-.01569-.0786-.02373-.1197-.02365-.08 0-.1601.03047-.221.0914l-4.1985 4.19846-1.89725-1.8973c-.02901-.029-.06348-.0521-.10143-.0677-.03794-.0157-.0786-.0238-.11966-.0237-.08008 0-.16016.0305-.22109.0914l-.4418.4418c-.12188.1219-.12188.3199 0 .4418l2.56013 2.5602c.061.0609.141.0914.2211.0914s.1598-.0305.2207-.0914l4.8614-4.8614c.1218-.12184.1218-.31988 0-.44176l-.4415-.4418zM22 12c0-1.3867-.7578-2.66406-1.9375-3.33984.3555-1.3125-.0117-2.75-.9922-3.73047-.9805-.98047-2.418-1.34766-3.7305-.99219C14.6641 2.75781 13.3867 2 12 2c-1.3867 0-2.66406.75781-3.33984 1.9375-1.3125-.35547-2.75.01172-3.73047.99219-.98047.98047-1.34766 2.41797-.99219 3.73047C2.75781 9.33594 2 10.6133 2 12s.75781 2.6641 1.9375 3.3398c-.35547 1.3125.01172 2.75.99219 3.7305 1.03515 1.0352 2.47656 1.332 3.73047.9922C9.33984 21.2422 10.6133 22 12 22s2.6602-.7578 3.3398-1.9375c1.2774.3477 2.711.0273 3.7305-.9922.9805-.9805 1.3477-2.418.9922-3.7305C21.2422 14.6641 22 13.3867 22 12zm-3.5586 2.668c.207.4609 1.1524 2.1132-.2539 3.5195-1.1289 1.1289-2.2461.832-3.5195.2539-.1797.4727-.6758 2.3086-2.668 2.3086-2.03516 0-2.52734-1.9336-2.66797-2.3086-1.27344.5781-2.39453.8672-3.51953-.2539-1.4375-1.4336-.42578-3.1445-.25391-3.5195C5.08594 14.4883 3.25 13.9922 3.25 12c0-2.03516 1.93359-2.52734 2.30859-2.66797-.20703-.46094-1.15234-2.11328.25391-3.51953 1.4375-1.44141 3.15625-.41797 3.51953-.25391C9.51172 5.08594 10.0078 3.25 12 3.25c2.0352 0 2.5273 1.93359 2.668 2.30859.4609-.20703 2.1132-1.15234 3.5195.25391 1.4375 1.43359.4258 3.14453.2539 3.51953.4727.17969 2.3086.67577 2.3086 2.66797 0 2.0352-1.9336 2.5273-2.3086 2.668z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.9973 8.96758c-.1504-.15156-.395-.15235-.5461-.00235l-3.4125 3.38517-1.47972-1.4918c-.15-.1516-.39492-.1523-.54609-.0024l-.91406.9067c-.15156.1504-.15235.3949-.00235.5461l2.65822 2.6797c.1504.1515.3949.1523.5461.0023l4.6008-4.5637c.1515-.1503.1523-.3949.0023-.54605l-.9066-.91367zM22 12c0-1.4258-.7344-2.67188-1.8242-3.38672.2656-1.28516-.1055-2.68359-1.1055-3.68359-1-1.00391-2.4023-1.3711-3.6836-1.10547C14.6641 2.73047 13.418 2 12 2s-2.66797.73047-3.38672 1.82422c-1.28516-.26563-2.68359.10547-3.68359 1.10547-1.00391 1-1.3711 2.40234-1.10547 3.68359C2.72656 9.33594 2 10.5859 2 12c0 1.418.73047 2.668 1.82422 3.3867-.26563 1.2852.10547 2.6836 1.10547 3.6836 1 1.0039 2.39062 1.3711 3.68359 1.1055C9.33594 21.2734 10.5859 22 12 22c1.4219 0 2.668-.7344 3.3867-1.8242 1.293.2656 2.6836-.1055 3.6836-1.1055 1.0039-1 1.3711-2.4023 1.1055-3.6836C21.2734 14.6641 22 13.4141 22 12zm-4.2305 2.3945c.3555.7774 1.1836 2.1407-.0273 3.3516-1.0938 1.0937-2.1602.5664-3.3516.0273-.3008.8047-.6758 2.3516-2.3906 2.3516-1.7695 0-2.13672-1.6719-2.39062-2.3516-.82422.375-2.14454 1.1797-3.35547-.0312-1.25-1.25-.32813-2.6914-.02735-3.3516C5.42187 14.0898 3.875 13.7148 3.875 12c0-1.7695 1.67188-2.13672 2.35547-2.39453-.35547-.77735-1.18359-2.14063.02734-3.35156 1.25-1.25 2.69141-.32813 3.35157-.02735C9.91016 5.42187 10.2852 3.875 12 3.875c1.7695 0 2.1367 1.67188 2.3906 2.35938.7774-.35547 2.1406-1.1836 3.3516.02734 1.25 1.25.3281 2.6914.0273 3.35156.8047.30078 2.3516.67582 2.3516 2.39062 0 1.7695-1.6719 2.1367-2.3516 2.3906z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M22 12c0-1.4727-.9258-2.73047-2.2305-3.21875.5743-1.26563.3438-2.80859-.6992-3.85156-1.043-1.04297-2.5859-1.27344-3.8515-.69922C14.7305 2.92578 13.4727 2 12 2s-2.73047.92578-3.21875 2.23047c-1.26563-.57422-2.8125-.34375-3.85156.69922-1.04297 1.04297-1.27344 2.58593-.69922 3.85156C2.92578 9.26953 2 10.5273 2 12s.92578 2.7305 2.23047 3.2188c-.57422 1.2656-.34375 2.8124.69922 3.8515 1.03906 1.0391 2.58203 1.2774 3.85156.6992C9.26953 21.0703 10.5273 22 12 22s2.7305-.9258 3.2188-2.2305c1.2734.5782 2.8124.3399 3.8515-.6992 1.043-1.043 1.2735-2.5859.6992-3.8515C21.0742 14.7305 22 13.4727 22 12zm-5.6562-1.7285l-5.1188 5.0777c-.1684.1672-.4406.166-.6074-.0023l-2.95783-2.9817c-.16719-.1683-.16602-.4406.00234-.6078l1.0168-1.0086c.16836-.1672.44062-.166.60781.0024l1.64648 1.6597 3.7969-3.76637c.1683-.16719.4406-.16601.6074.00235l1.0086 1.01679c.1672.16875.1664.44103-.0023.60783z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    bars: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.732 5.607H2.268A.268.268 0 012 5.34V4.268A.268.268 0 012.268 4h19.464a.268.268 0 01.268.268v1.071a.268.268 0 01-.268.268zm0 7.143H2.268A.268.268 0 012 12.482v-1.071a.268.268 0 01.268-.268h19.464a.268.268 0 01.268.268v1.071a.267.267 0 01-.268.268zm0 7.143H2.268A.268.268 0 012 19.625v-1.071a.268.268 0 01.268-.268h19.464a.267.267 0 01.268.268v1.071a.268.268 0 01-.268.268z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.464 6.5H2.536A.536.536 0 012 5.964V4.536C2 4.24 2.24 4 2.536 4h18.928c.296 0 .536.24.536.536v1.428c0 .296-.24.536-.536.536zm0 7.143H2.536A.536.536 0 012 13.107V11.68c0-.296.24-.536.536-.536h18.928c.296 0 .536.24.536.536v1.428c0 .296-.24.536-.536.536zm0 7.143H2.536A.536.536 0 012 20.25v-1.429c0-.295.24-.535.536-.535h18.928c.296 0 .536.24.536.535v1.429c0 .296-.24.536-.536.536z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M2.714 6.214h18.572c.394 0 .714-.32.714-.714V3.714A.714.714 0 0021.286 3H2.714A.714.714 0 002 3.714V5.5c0 .395.32.714.714.714zm0 7.143h18.572c.394 0 .714-.32.714-.714v-1.786a.714.714 0 00-.714-.714H2.714a.714.714 0 00-.714.714v1.786c0 .394.32.714.714.714zm0 7.143h18.572c.394 0 .714-.32.714-.714V18a.714.714 0 00-.714-.714H2.714A.714.714 0 002 18v1.786c0 .394.32.714.714.714z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    borderAll: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.286 2H2.714A.714.714 0 002 2.714v18.572a.714.714 0 00.714.714h18.572a.715.715 0 00.714-.714V2.714A.715.715 0 0021.286 2zM3.429 3.429h7.857v7.857H3.429V3.429zm0 17.142v-7.857h7.857v7.857H3.429zm17.142 0h-7.857v-7.857h7.857v7.857zm0-9.285h-7.857V3.429h7.857v7.857z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.571 2H3.43A1.429 1.429 0 002 3.429V20.57A1.429 1.429 0 003.429 22H20.57A1.429 1.429 0 0022 20.571V3.43A1.429 1.429 0 0020.571 2zm-.714 2.143v6.786h-6.786V4.143h6.786zm-8.928 0v6.786H4.143V4.143h6.786zM4.143 19.857v-6.786h6.786v6.786H4.143zm8.928 0v-6.786h6.786v6.786h-6.786z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.571 2H3.43A1.429 1.429 0 002 3.429V20.57A1.429 1.429 0 003.429 22H20.57A1.429 1.429 0 0022 20.571V3.43A1.429 1.429 0 0020.571 2zm-1.428 2.857v5.714h-5.714V4.857h5.714zm-8.572 0v5.714H4.857V4.857h5.714zM4.857 19.143v-5.714h5.714v5.714H4.857zm8.572 0v-5.714h5.714v5.714h-5.714z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },
    bullseyePointer: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.738 11.383L2.84 13.912c-.63.179-.704 1.043-.114 1.326l2.229 1.07-2.443 2.444a1.29 1.29 0 000 1.824l.912.912a1.286 1.286 0 001.825 0l2.443-2.443 1.07 2.229a.698.698 0 00.64.403c.296 0 .59-.177.687-.517l2.529-8.898a.712.712 0 00-.88-.879zM9.264 19.34l-1.197-2.494-3.73 3.73-.913-.912 3.73-3.73-2.493-1.198 6.431-1.828-1.828 6.432zM15.226 12A3.23 3.23 0 0012 8.774c-1.36 0-2.521.85-2.994 2.044 2.19-.623 2.537-.753 2.994-.753 1.068 0 1.936.868 1.936 1.935 0 .454-.125.784-.754 2.995A3.225 3.225 0 0015.226 12zm-3.068 6.598c3.58-.087 6.455-2.997 6.455-6.598A6.61 6.61 0 0012 5.387c-3.601 0-6.51 2.875-6.597 6.455l1.329-.377C7.005 8.784 9.249 6.678 12 6.678A5.328 5.328 0 0117.323 12c0 2.752-2.107 4.995-4.787 5.269l-.378 1.329zM12 2C6.477 2 2 6.477 2 12c0 .295.019.585.044.872.14-.079.282-.156.443-.201l.826-.235c-.008-.145-.023-.289-.023-.436 0-4.802 3.908-8.71 8.71-8.71 4.803 0 8.71 3.908 8.71 8.71 0 4.803-3.907 8.71-8.71 8.71-.147 0-.29-.015-.436-.022l-.234.825c-.046.162-.127.302-.208.443.29.025.582.044.878.044 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.765 11.382l-8.637 2.455a.69.69 0 00-.11 1.287L5.78 16.45l-3.595 3.596a.626.626 0 000 .885l.885.886a.626.626 0 00.886 0L7.55 18.22l1.326 2.76a.69.69 0 001.287-.11l2.455-8.635a.69.69 0 00-.853-.854zm1.103 4.719l-.568 1.998c3.245-.16 5.83-2.814 5.83-6.099A6.126 6.126 0 0012 5.871c-3.285 0-5.94 2.585-6.099 5.83l1.998-.568A4.2 4.2 0 0112 7.806 4.198 4.198 0 0116.194 12a4.2 4.2 0 01-3.326 4.1zM12 2C6.477 2 2 6.477 2 12c0 .294.02.584.044.872.14-.08.282-.156.443-.201l1.461-.416c-.002-.085-.012-.169-.012-.255 0-4.447 3.617-8.065 8.064-8.065S20.065 7.553 20.065 12c0 4.447-3.618 8.064-8.065 8.064-.086 0-.17-.01-.255-.012l-.415 1.46c-.046.163-.127.303-.208.444.29.025.582.044.878.044 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.764 11.382l-8.636 2.454a.69.69 0 00-.11 1.287L5.78 16.45l-3.595 3.595a.626.626 0 000 .886l.885.885a.626.626 0 00.885 0l3.596-3.595 1.326 2.76a.69.69 0 001.287-.11l2.455-8.636a.69.69 0 00-.854-.853zm1.65 2.772l-.838 2.949c2.575-.29 4.585-2.45 4.585-5.103 0-2.85-2.31-5.161-5.161-5.161-2.653 0-4.814 2.01-5.103 4.585l2.949-.838a2.577 2.577 0 113.568 3.568zM12 2C6.477 2 2 6.477 2 12c0 .338.018.672.05 1.002a1.96 1.96 0 01.726-.407l1.81-.514c-.001-.027-.005-.053-.005-.08 0-4.101 3.318-7.42 7.42-7.42 4.1 0 7.418 3.318 7.418 7.42 0 4.1-3.318 7.418-7.419 7.418-.027 0-.054-.003-.08-.004l-.515 1.81c-.08.28-.23.514-.405.725.329.032.663.05 1 .05 5.524 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    campground: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.5 18h-.771L13.236 7.68l1.669-2.299a.5.5 0 00-.11-.698l-.81-.587a.5.5 0 00-.699.11L12 5.979l-1.287-1.772a.5.5 0 00-.698-.11l-.809.587a.5.5 0 00-.11.698l1.669 2.299L3.27 18H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM12 13l3.636 5H8.364L12 13z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    check: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.5631 4.15881L7.91014 16.8118l-4.47327-4.4733c-.21174-.2117-.55507-.2117-.76686 0l-.5112.5112c-.21175.2118-.21175.5551 0 .7669l5.36792 5.3679c.21175.2118.55508.2118.76687 0L21.8412 5.43692c.2117-.21175.2117-.55508 0-.76687l-.5113-.51124c-.2117-.21175-.555-.21175-.7668 0z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.8668 4.15373L8.36092 15.6596l-4.22768-4.2277c-.20497-.2049-.53732-.2049-.74233 0l-1.23718 1.2372c-.20497.205-.20497.5373 0 .7423l5.836 5.836c.20498.205.53732.205.74234 0L21.8463 6.13324c.2049-.20497.2049-.53732 0-.74233l-1.2372-1.23718c-.205-.20497-.5373-.20497-.7423 0z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.79289 19.6213l-6.50001-6.5c-.39051-.3905-.39051-1.0236 0-1.4142l1.41418-1.4142c.39051-.39056 1.02371-.39056 1.41422 0L9.5 14.6716l9.3787-9.37872c.3905-.39051 1.0237-.39051 1.4142 0l1.4142 1.41422c.3905.39051.3905 1.02367 0 1.41422l-11.5 11.50008c-.39054.3905-1.0237.3905-1.41421-.0001z" />
            </svg>
          );

        case Style.duotone:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path
                opacity=".4"
                d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm6.2625 7.8754l-7.4194 7.4194c-.1209.1209-.285.1888-.456.1888-.171 0-.3351-.0679-.45605-.1888L5.7375 13.1012c-.1209-.121-.18881-.285-.18881-.456 0-.1711.06791-.3351.18881-.4561l.9121-.9125c.05991-.0599.13104-.1074.20932-.1399.07828-.0324.16219-.0491.24693-.0491.08473 0 .16864.0167.24692.0491.07829.0325.14942.08.20933.1399l2.825 2.825 6.0508-6.05079c.0599-.05993.131-.10746.2093-.1399.0783-.03243.1622-.04912.247-.04912.0847 0 .1686.01669.2469.04912.0783.03244.1494.07997.2093.1399l.9121.9125c.1209.12098.1888.28501.1888.45604 0 .17104-.0679.33507-.1888.45605z"
              />
              <path d="M10.8431 17.2948c-.1209.1209-.285.1888-.456.1888-.171 0-.3351-.0679-.45606-.1888l-4.19355-4.1936c-.1209-.1209-.18881-.285-.18881-.456 0-.171.06791-.3351.18881-.4561l.9121-.9125c.05991-.0599.13104-.1074.20932-.1399.07828-.0324.16219-.0491.24693-.0491.08473 0 .16864.0167.24692.0491.07829.0325.14942.08.20933.1399l2.82501 2.825 6.0508-6.05077c.0599-.05992.131-.10746.2093-.13989.0783-.03243.1622-.04912.2469-.04912.0848 0 .1687.01669.247.04912.0783.03243.1494.07997.2093.13989l.9121.9125c.1209.12098.1888.28502.1888.45605 0 .17103-.0679.33507-.1888.45605l-7.4194 7.41937z" />
            </svg>
          );

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    checkCircle: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.9674 1.98357c-5.52305.00908-9.99294 4.49368-9.98387 10.01663.00907 5.523 4.49367 9.9929 10.01667 9.9839 5.523-.0091 9.9929-4.4937 9.9838-10.0167-.009-5.523-4.4936-9.9929-10.0166-9.98383zm.0307 18.71013c-4.78498.0079-8.71627-3.859-8.72422-8.6956-.00786-4.78489 3.85898-8.71623 8.69562-8.72417 4.7849-.00786 8.7162 3.85898 8.7242 8.69557.0078 4.7849-3.859 8.7163-8.6956 8.7242zm5.6928-11.09677l-7.2657 7.23117c-.1895.1885-.49584.1878-.68434-.0016l-3.46864-3.4852c-.1885-.1894-.1878-.4958.00162-.6843l.34299-.3414c.18942-.1885.4958-.1878.6843.0017l2.78597 2.7992 6.5798-6.54849c.1894-.1885.4958-.18779.6843.00162l.3413.343c.1886.18941.1878.49579-.0016.6843z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47714 2 2 6.47714 2 12c0 5.5229 4.47714 10 10 10 5.5229 0 10-4.4771 10-10 0-5.52286-4.4771-10-10-10zm0 1.93548c4.4569 0 8.0645 3.6069 8.0645 8.06452 0 4.4569-3.6069 8.0645-8.0645 8.0645-4.45694 0-8.06452-3.6069-8.06452-8.0645 0-4.45694 3.6069-8.06452 8.06452-8.06452zm5.6534 5.25271l-.9087-.91605c-.1882-.18972-.4946-.19097-.6843-.00275l-5.6997 5.65391-2.41094-2.4306c-.18819-.1897-.49456-.1909-.68428-.0027l-.91609.9087c-.18971.1882-.19096.4945-.00274.6843l3.66055 3.6901c.1882.1898.4945.191.6843.0028l6.9592-6.9034c.1897-.18823.1909-.4946.0027-.68431z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M22 12c0 5.5229-4.4771 10-10 10-5.52286 0-10-4.4771-10-10C2 6.47714 6.47714 2 12 2c5.5229 0 10 4.47714 10 10zm-11.1567 5.2949l7.4194-7.41934c.2519-.25193.2519-.66044 0-.91237l-.9124-.91238c-.252-.25198-.6605-.25198-.9124 0l-6.0508 6.05069-2.82496-2.8249c-.25194-.252-.66045-.252-.91242 0l-.91238.9124c-.25194.2519-.25194.6604 0 .9123l4.19355 4.1936c.25201.252.66041.252.91241 0z" />
            </svg>
          );

        case Style.duotone:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path
                opacity=".4"
                d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm6.2625 7.8754l-7.4194 7.4194c-.1209.1209-.285.1888-.456.1888-.171 0-.3351-.0679-.45605-.1888L5.7375 13.1012c-.1209-.121-.18881-.285-.18881-.456 0-.1711.06791-.3351.18881-.4561l.9121-.9125c.05991-.0599.13104-.1074.20932-.1399.07828-.0324.16219-.0491.24693-.0491.08473 0 .16864.0167.24692.0491.07829.0325.14942.08.20933.1399l2.825 2.825 6.0508-6.05079c.0599-.05993.131-.10746.2093-.1399.0783-.03243.1622-.04912.247-.04912.0847 0 .1686.01669.2469.04912.0783.03244.1494.07997.2093.1399l.9121.9125c.1209.12098.1888.28501.1888.45604 0 .17104-.0679.33507-.1888.45605z"
              />
              <path d="M10.8431 17.2948c-.1209.1209-.285.1888-.456.1888-.171 0-.3351-.0679-.45606-.1888l-4.19355-4.1936c-.1209-.1209-.18881-.285-.18881-.456 0-.171.06791-.3351.18881-.4561l.9121-.9125c.05991-.0599.13104-.1074.20932-.1399.07828-.0324.16219-.0491.24693-.0491.08473 0 .16864.0167.24692.0491.07829.0325.14942.08.20933.1399l2.82501 2.825 6.0508-6.05077c.0599-.05992.131-.10746.2093-.13989.0783-.03243.1622-.04912.2469-.04912.0848 0 .1687.01669.247.04912.0783.03243.1494.07997.2093.13989l.9121.9125c.1209.12098.1888.28502.1888.45605 0 .17103-.0679.33507-.1888.45605l-7.4194 7.41937z" />
            </svg>
          );

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    chevronDown: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.8898 8.33342l-.2228-.2228c-.1475-.14749-.386-.14749-.5335 0l-6.1317 6.13488-6.13492-6.13488c-.14748-.14749-.38597-.14749-.53346 0l-.2228.2228c-.14749.14749-.14749.38598 0 .53347l6.62128 6.62441c.1475.1475.386.1475.5335 0l6.6212-6.62441c.1507-.14749.1507-.38598.0032-.53347z" />
            </svg>
          );
        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.8886 8.73738l-.626-.62594c-.1486-.14859-.3888-.14859-.5374 0L12 13.824 6.27481 8.11144c-.14858-.14859-.38884-.14859-.53743 0l-.62594.62594c-.14859.14859-.14859.38885 0 .53743l6.61986 6.61989c.1486.1485.3888.1485.5374 0l6.6199-6.61989c.1485-.14858.1485-.38884 0-.53743z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.4559 16.2708l-6.23053-6.2306c-.30049-.3005-.30049-.78768 0-1.08814l.7267-.7267c.29998-.29998.78616-.30056 1.08685-.00128L12 13.1619l4.9611-4.93782c.3007-.29928.7869-.2987 1.0868.00128l.7267.7267c.3005.30049.3005.78767 0 1.08814l-6.2305 6.2306c-.3005.3005-.7877.3005-1.0882 0z" />
            </svg>
          );
        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    chevronLeft: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M15.266 18.89l.222-.222a.377.377 0 000-.533L9.353 12l6.135-6.135a.377.377 0 000-.533l-.222-.222a.377.377 0 00-.532 0L8.11 11.734a.377.377 0 000 .532l6.624 6.624a.377.377 0 00.532 0z" />
            </svg>
          );
        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M15.268 18.889l.626-.626a.38.38 0 000-.537L10.181 12l5.713-5.726a.38.38 0 000-.537l-.626-.626a.38.38 0 00-.536 0l-6.62 6.62a.38.38 0 000 .537l6.62 6.62a.38.38 0 00.536 0z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.225 11.456l6.231-6.23c.3-.301.788-.301 1.088 0l.727.726c.3.3.3.786.001 1.087l-4.938 4.96 4.938 4.962c.3.3.299.787-.001 1.087l-.727.727c-.3.3-.788.3-1.088 0l-6.23-6.231a.77.77 0 010-1.088z" />
            </svg>
          );
        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    chevronRight: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.33221 5.11032L8.1103 5.3322C7.96323 5.47926 7.96323 5.71771 8.1103 5.8648L14.2455 12L8.1103 18.1352C7.96323 18.2823 7.96323 18.5207 8.1103 18.6678L8.33221 18.8897C8.47927 19.0368 8.71772 19.0368 8.86478 18.8897L15.4882 12.2663C15.6353 12.1192 15.6353 11.8808 15.4882 11.7337L8.86478 5.11032C8.71772 4.96323 8.47927 4.96323 8.33221 5.11032Z" />
            </svg>
          );
        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.73705 5.11113l-.62594.62592c-.14815.14814-.14815.38835 0 .53653L13.8239 12l-5.71279 5.7264c-.14815.1482-.14815.3884 0 .5365l.62594.626c.14815.1481.38836.1481.53654 0l6.62061-6.6206c.1481-.1482.1481-.3884 0-.5366L9.27359 5.11113c-.14818-.14817-.38839-.14817-.53654 0z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M16.2708 12.5441l-6.2306 6.2305c-.3005.3005-.78768.3005-1.08814 0l-.7267-.7267c-.29998-.2999-.30056-.7861-.00128-1.0868L13.1619 12 8.22408 7.03892c-.29928-.30069-.2987-.78687.00128-1.08685l.7267-.7267c.30049-.30049.78767-.30049 1.08814 0l6.2306 6.23053c.3004.3005.3004.7877 0 1.0882z" />
            </svg>
          );
        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    close: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.1216 12.0003l6.4102-6.41019 1.3219-1.32191c.195-.19501.195-.51189 0-.7069l-1.4144-1.41442c-.195-.19501-.5119-.19501-.7069 0L12.0003 9.879 4.2682 2.14625c-.19501-.195-.5119-.195-.7069 0L2.14625 3.56067c-.195.19501-.195.51189 0 .7069L9.879 12.0003l-7.73275 7.7321c-.195.195-.195.5119 0 .7069l1.41442 1.4144c.19501.195.51189.195.7069 0l7.73273-7.7321 6.4102 6.4102 1.3219 1.3219c.195.195.5119.195.7069 0l1.4144-1.4144c.195-.195.195-.5119 0-.7069l-7.7321-7.7321z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.9747 12.0002l6.7326-6.73254c.3894-.38938.3894-1.02125 0-1.41125l-1.5644-1.56438c-.3893-.38937-1.0212-.38937-1.4112 0l-6.732 6.73313-6.73262-6.7325c-.38938-.38938-1.02126-.38938-1.41127 0L2.29204 3.85641c-.38939.38937-.38939 1.02125 0 1.41125l6.7326 6.73254-6.7326 6.7325c-.38939.3893-.38939 1.0212 0 1.4112l1.5644 1.5644c.38938.3894 1.02126.3894 1.41127 0l6.73199-6.7331 6.7326 6.7325c.3894.3893 1.0213.3893 1.4113 0l1.5644-1.5644c.3893-.3894.3893-1.0213 0-1.4113l-6.7333-6.7318z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M15.7909 12l5.6858-5.6858c.6977-.69772.6977-1.82897 0-2.52727L20.2131 2.5233c-.6978-.69773-1.829-.69773-2.5273 0L12 8.20909 6.3142 2.5233c-.69772-.69773-1.82897-.69773-2.52727 0L2.5233 3.78693c-.69773.69773-.69773 1.82898 0 2.52727L8.20909 12 2.5233 17.6858c-.69773.6977-.69773 1.829 0 2.5273l1.26363 1.2636c.69773.6977 1.82955.6977 2.52727 0L12 15.7909l5.6858 5.6858c.6977.6977 1.8295.6977 2.5273 0l1.2636-1.2636c.6977-.6978.6977-1.829 0-2.5273L15.7909 12z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    ellipsisV: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12.1053 9.89474c1.1644 0 2.1052.94076 2.1052 2.10526 0 1.1645-.9408 2.1053-2.1052 2.1053C10.9408 14.1053 10 13.1645 10 12c0-1.1645.9408-2.10526 2.1053-2.10526zM10 4.10526c0 1.16448.9408 2.10527 2.1053 2.10527 1.1644 0 2.1052-.94079 2.1052-2.10527C14.2105 2.94079 13.2697 2 12.1053 2 10.9408 2 10 2.94079 10 4.10526zm0 15.78944C10 21.0592 10.9408 22 12.1053 22c1.1644 0 2.1052-.9408 2.1052-2.1053 0-1.1644-.9408-2.1052-2.1052-2.1052-1.1645 0-2.1053.9408-2.1053 2.1052z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12.4 9.6c1.325 0 2.4 1.075 2.4 2.4s-1.075 2.4-2.4 2.4S10 13.325 10 12s1.075-2.4 2.4-2.4zM10 4.4c0 1.325 1.075 2.4 2.4 2.4s2.4-1.075 2.4-2.4S13.725 2 12.4 2 10 3.075 10 4.4zm0 15.2c0 1.325 1.075 2.4 2.4 2.4s2.4-1.075 2.4-2.4-1.075-2.4-2.4-2.4-2.4 1.075-2.4 2.4z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.9032 9.09677c1.6049 0 2.9033 1.29843 2.9033 2.90323 0 1.6048-1.2984 2.9032-2.9033 2.9032C10.2984 14.9032 9 13.6048 9 12s1.2984-2.90323 2.9032-2.90323zM9 4.90323c0 1.60483 1.2984 2.90322 2.9032 2.90322 1.6049 0 2.9033-1.29839 2.9033-2.90322C14.8065 3.29839 13.5081 2 11.9032 2 10.2984 2 9 3.29839 9 4.90323zM9 19.0968C9 20.7016 10.2984 22 11.9032 22c1.6049 0 2.9033-1.2984 2.9033-2.9032 0-1.6049-1.2984-2.9033-2.9033-2.9033C10.2984 16.1935 9 17.4919 9 19.0968z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    externalLink: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.469 12h-.563a.281.281 0 00-.281.281v7.031a.562.562 0 01-.563.563H4.688a.563.563 0 01-.562-.563V6.938a.563.563 0 01.563-.562h7.03A.281.281 0 0012 6.094V5.53a.281.281 0 00-.281-.281H4.688A1.687 1.687 0 003 6.938v12.375A1.687 1.687 0 004.688 21h12.375a1.687 1.687 0 001.687-1.688v-7.03a.281.281 0 00-.281-.282zm2.11-9l-4.782.012a.422.422 0 00-.422.422v.351a.422.422 0 00.422.422l3.164-.012.024.025L7.623 15.581a.422.422 0 000 .598l.2.199a.422.422 0 00.597 0L19.78 5.016l.025.024-.012 3.165a.422.422 0 00.422.421h.351a.422.422 0 00.422-.421L21 3.422A.422.422 0 0020.578 3z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.4938 3L14.7562 3.00598C14.622 3.00598 14.4932 3.05931 14.3983 3.15425C14.3033 3.24919 14.25 3.37796 14.25 3.51223V4.68328C14.25 4.75063 14.2634 4.8173 14.2895 4.8794C14.3156 4.94149 14.3538 4.99776 14.4019 5.04491C14.45 5.09205 14.507 5.12913 14.5696 5.15396C14.6322 5.17879 14.6991 5.19089 14.7664 5.18953L17.355 5.09391L17.4274 5.16633L7.62375 14.9704C7.58442 15.0095 7.55321 15.0561 7.53192 15.1074C7.51063 15.1587 7.49967 15.2137 7.49967 15.2692C7.49967 15.3247 7.51063 15.3797 7.53192 15.431C7.55321 15.4822 7.58442 15.5288 7.62375 15.568L8.43234 16.3766C8.47154 16.4159 8.51811 16.4471 8.56939 16.4684C8.62067 16.4897 8.67565 16.5007 8.73117 16.5007C8.7867 16.5007 8.84168 16.4897 8.89295 16.4684C8.94423 16.4471 8.99081 16.4159 9.03 16.3766L18.8337 6.57258L18.9061 6.645L18.8105 9.23355C18.8091 9.30089 18.8212 9.36782 18.846 9.43042C18.8709 9.49302 18.9079 9.55004 18.9551 9.59814C19.0022 9.64623 19.0585 9.68444 19.1206 9.71051C19.1827 9.73659 19.2494 9.75001 19.3167 9.75H20.4878C20.622 9.75 20.7508 9.69666 20.8457 9.60172C20.9407 9.50678 20.994 9.37802 20.994 9.24375L21 3.50625C21 3.37198 20.9467 3.24322 20.8517 3.14828C20.7568 3.05334 20.628 3 20.4938 3V3ZM18.1875 13.125H17.625C17.4758 13.125 17.3327 13.1843 17.2273 13.2898C17.1218 13.3952 17.0625 13.5383 17.0625 13.6875V19.1016C17.0625 19.1575 17.0403 19.2112 17.0007 19.2507C16.9612 19.2903 16.9075 19.3125 16.8516 19.3125H4.89844C4.84249 19.3125 4.78884 19.2903 4.74928 19.2507C4.70972 19.2112 4.6875 19.1575 4.6875 19.1016V7.14844C4.6875 7.09249 4.70972 7.03884 4.74928 6.99928C4.78884 6.95972 4.84249 6.9375 4.89844 6.9375H10.3125C10.4617 6.9375 10.6048 6.87824 10.7102 6.77275C10.8157 6.66726 10.875 6.52418 10.875 6.375V5.8125C10.875 5.66332 10.8157 5.52024 10.7102 5.41475C10.6048 5.30926 10.4617 5.25 10.3125 5.25H4.6875C4.23995 5.25 3.81072 5.42779 3.49426 5.74426C3.17779 6.06072 3 6.48995 3 6.9375V19.3125C3 19.7601 3.17779 20.1893 3.49426 20.5057C3.81072 20.8222 4.23995 21 4.6875 21H17.0625C17.5101 21 17.9393 20.8222 18.2557 20.5057C18.5722 20.1893 18.75 19.7601 18.75 19.3125V13.6875C18.75 13.5383 18.6907 13.3952 18.5852 13.2898C18.4798 13.1843 18.3367 13.125 18.1875 13.125Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M18.1875 14.25H17.0625C16.9133 14.25 16.7702 14.3093 16.6648 14.4148C16.5593 14.5202 16.5 14.6633 16.5 14.8125V18.75H5.25V7.5H10.3125C10.4617 7.5 10.6048 7.44074 10.7102 7.33525C10.8157 7.22976 10.875 7.08668 10.875 6.9375V5.8125C10.875 5.66332 10.8157 5.52024 10.7102 5.41475C10.6048 5.30926 10.4617 5.25 10.3125 5.25H4.6875C4.23995 5.25 3.81072 5.42779 3.49426 5.74426C3.17779 6.06072 3 6.48995 3 6.9375V19.3125C3 19.7601 3.17779 20.1893 3.49426 20.5057C3.81072 20.8222 4.23995 21 4.6875 21H17.0625C17.5101 21 17.9393 20.8222 18.2557 20.5057C18.5722 20.1893 18.75 19.7601 18.75 19.3125V14.8125C18.75 14.6633 18.6907 14.5202 18.5852 14.4148C18.4798 14.3093 18.3367 14.25 18.1875 14.25ZM19.6876 3H14.1094C13.8483 3 13.5979 3.10371 13.4133 3.28832C13.2287 3.47292 13.125 3.7233 13.125 3.98438V4.64215C13.1287 4.77137 13.1578 4.89861 13.2107 5.01659C13.2635 5.13456 13.3391 5.24097 13.4331 5.32974C13.5271 5.4185 13.6376 5.48788 13.7584 5.53392C13.8792 5.57996 14.0079 5.60175 14.1371 5.59805L16.5 5.53125L7.7482 14.218L7.74609 14.2201C7.58787 14.3783 7.49898 14.593 7.49898 14.8167C7.49898 15.0405 7.58787 15.2551 7.74609 15.4133L8.58773 16.2518L8.58984 16.2539C8.74845 16.4114 8.96306 16.4995 9.18657 16.4989C9.41008 16.4983 9.62422 16.4091 9.78199 16.2507L18.4688 7.5L18.4027 9.8632V9.89062C18.4027 10.1517 18.5064 10.4021 18.691 10.5867C18.8756 10.7713 19.126 10.875 19.387 10.875H20.0156C20.2767 10.875 20.5271 10.7713 20.7117 10.5867C20.8963 10.4021 21 10.1517 21 9.89062V4.31238C21 3.96432 20.8617 3.63051 20.6156 3.38439C20.3695 3.13827 20.0357 3 19.6876 3V3Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    exclamationCircle: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 3.29032c4.7831 0 8.7097 3.87399 8.7097 8.70968 0 4.8101-3.8956 8.7097-8.7097 8.7097-4.80823 0-8.70968-3.8937-8.70968-8.7097 0-4.80657 3.89524-8.70968 8.70968-8.70968zM12 2C6.47754 2 2 6.47915 2 12c0 5.5241 4.47754 10 10 10 5.5225 0 10-4.4759 10-10 0-5.52085-4.4775-10-10-10zm-.4633 4.83871h.9266c.2751 0 .4949.22911.4834.50403l-.2822 6.77416c-.0108.2592-.2241.4637-.4835.4637h-.362c-.2594 0-.4727-.2045-.4835-.4637l-.2823-6.77416c-.0114-.27492.2084-.50403.4835-.50403zM12 15.3871c-.6235 0-1.129.5055-1.129 1.129 0 .6236.5055 1.1291 1.129 1.1291s1.129-.5055 1.129-1.1291c0-.6235-.5055-1.129-1.129-1.129z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47754 2 2 6.47915 2 12c0 5.5241 4.47754 10 10 10 5.5225 0 10-4.4759 10-10 0-5.52085-4.4775-10-10-10zm0 18.0645c-4.45694 0-8.06452-3.6061-8.06452-8.0645 0-4.45544 3.60775-8.06452 8.06452-8.06452 4.4553 0 8.0645 3.60771 8.0645 8.06452 0 4.4569-3.6061 8.0645-8.0645 8.0645zm1.6935-4.1935c0 .9338-.7597 1.6935-1.6935 1.6935s-1.6935-.7597-1.6935-1.6935c0-.9339.7597-1.6936 1.6935-1.6936s1.6935.7597 1.6935 1.6936zm-3.281-8.52427l.2742 5.48387c.0129.2575.2254.4597.4833.4597h1.66c.2579 0 .4704-.2022.4833-.4597l.2742-5.48387c.0138-.27637-.2065-.50802-.4833-.50802h-2.2084c-.2768 0-.4971.23165-.4833.50802z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M22 12C22 17.5241 17.5225 22 12 22C6.47754 22 2 17.5241 2 12C2 6.47915 6.47754 2 12 2C17.5225 2 22 6.47915 22 12ZM12 14.0161C10.9756 14.0161 10.1452 14.8466 10.1452 15.871C10.1452 16.8954 10.9756 17.7258 12 17.7258C13.0244 17.7258 13.8548 16.8954 13.8548 15.871C13.8548 14.8466 13.0244 14.0161 12 14.0161ZM10.239 7.34895L10.5381 12.8328C10.5521 13.0894 10.7643 13.2903 11.0212 13.2903H12.9788C13.2357 13.2903 13.4479 13.0894 13.4619 12.8328L13.761 7.34895C13.7761 7.07177 13.5554 6.83871 13.2779 6.83871H10.7221C10.4445 6.83871 10.2239 7.07177 10.239 7.34895Z" />
            </svg>
          );

        case Style.duotone:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path
                opacity=".4"
                d="M12 2C6.47581 2 2 6.47903 2 12c0 5.521 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 15.1613c-.2552 0-.5047-.0757-.7169-.2175-.2122-.1418-.3775-.3433-.4752-.579-.0977-.2358-.1232-.4953-.0734-.7456s.1726-.4802.3531-.6606c.1805-.1805.4104-.3034.6607-.3532.2503-.0497.5097-.0242.7455.0735.2358.0976.4373.263.5791.4752.1417.2122.2174.4617.2174.7169 0 .3422-.1359.6704-.3779.9124-.242.2419-.5702.3779-.9124.3779zm1.5419-9.61332l-.5161 5.16132c-.0159.1592-.0904.3068-.209.4142s-.2729.1668-.4329.1668h-.7662c-.16 0-.3143-.0594-.4329-.1668-.1186-.1074-.1931-.255-.209-.4142l-.5161-5.16132c-.009-.08954.0009-.17997.029-.26547.0281-.08549.0738-.16417.1341-.23097.0603-.0668.1339-.12024.2161-.15689.0822-.03666.1711-.05571.2611-.05594h1.8c.0901 0 .1793.01889.2616.05545.0824.03655.1562.08996.2167.15679.0605.06682.1063.14557.1345.23118.0282.08561.0381.17617.0291.26585z"
              />
              <path d="M12.9 6.83887h-1.8c-.0901 0-.1793.01889-.2616.05545-.0824.03655-.1562.08996-.2167.15678-.0605.06683-.1063.14558-.1345.23119-.0282.08561-.0381.17617-.0291.26585l.5161 5.16126c.0159.1592.0904.3069.209.4142.1186.1074.2729.1669.4329.1669h.7662c.16 0 .3142-.0595.4329-.1669.1186-.1073.1931-.255.209-.4142l.5161-5.16126c.009-.08955-.0009-.17997-.029-.26547-.0281-.0855-.0738-.16417-.1341-.23097-.0603-.0668-.1339-.12024-.2161-.1569-.0822-.03665-.1711-.0557-.2611-.05593zM12 14.5808c-.2552 0-.5047.0757-.7169.2175-.2122.1417-.3775.3433-.4752.579-.0977.2358-.1232.4953-.0734.7456s.1726.4802.3531.6606c.1805.1805.4104.3034.6607.3532.2503.0497.5097.0242.7455-.0735.2358-.0976.4373-.263.5791-.4752.1417-.2122.2174-.4617.2174-.7169 0-.3422-.1359-.6704-.3779-.9124-.242-.242-.5702-.3779-.9124-.3779z" />
            </svg>
          );

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    eye: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 12.778a2.222 2.222 0 100-4.445c-.035 0-.065.009-.099.01a1.65 1.65 0 01-2.113 2.114c0 .034-.01.065-.01.099A2.222 2.222 0 0012 12.778zm9.88-1.618C19.995 7.486 16.267 5 12 5c-4.268 0-7.997 2.487-9.88 6.16a1.123 1.123 0 000 1.014c1.884 3.674 5.612 6.16 9.88 6.16 4.268 0 7.997-2.488 9.88-6.16a1.124 1.124 0 000-1.014zM12 6.11a4.445 4.445 0 110 8.89 4.445 4.445 0 010-8.89zm0 11.111c-3.728 0-7.134-2.129-8.889-5.555a10.235 10.235 0 014.506-4.49 5.505 5.505 0 00-1.173 3.379 5.555 5.555 0 1011.112 0 5.504 5.504 0 00-1.173-3.38c1.94.98 3.519 2.553 4.506 4.49-1.755 3.427-5.161 5.556-8.889 5.556z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 7.778a3.852 3.852 0 00-1.085.173c.163.286.25.609.252.938a1.945 1.945 0 01-1.945 1.944 1.923 1.923 0 01-.937-.251A3.879 3.879 0 1012 7.778zm9.88 3.382C19.995 7.486 16.267 5 12 5c-4.268 0-7.997 2.488-9.88 6.16a1.123 1.123 0 000 1.014c1.884 3.674 5.612 6.16 9.88 6.16 4.268 0 7.997-2.488 9.88-6.16a1.124 1.124 0 000-1.014zM12 16.667c-3.425 0-6.566-1.91-8.261-5 1.695-3.09 4.835-5 8.261-5 3.426 0 6.566 1.91 8.262 5-1.696 3.09-4.836 5-8.262 5z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.88 11.16C19.995 7.486 16.267 5 12 5c-4.268 0-7.997 2.488-9.88 6.16a1.123 1.123 0 000 1.014c1.884 3.674 5.612 6.16 9.88 6.16 4.268 0 7.997-2.488 9.88-6.16a1.124 1.124 0 000-1.014zM12 16.667a5 5 0 110-10 5 5 0 010 10zm0-8.334a3.31 3.31 0 00-.879.132 1.661 1.661 0 01-2.323 2.323A3.326 3.326 0 1012 8.333z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    eyeSlash: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M22.897 19.68L1.79 3.06a.275.275 0 00-.386.043l-.344.43a.275.275 0 00.043.387l21.106 16.62a.276.276 0 00.387-.043l.344-.43a.275.275 0 00-.043-.386zM12 6.3a4.405 4.405 0 014.4 4.4c0 .743-.203 1.433-.53 2.048l.875.687A5.434 5.434 0 0017.5 10.7a5.45 5.45 0 00-1.161-3.346 10.137 10.137 0 014.463 4.446 10.304 10.304 0 01-2.33 2.996l.87.686a11.437 11.437 0 002.439-3.18 1.112 1.112 0 000-1.004C19.917 7.661 16.226 5.2 12 5.2c-1.544 0-3.07.333-4.473.977L9.1 7.415A4.372 4.372 0 0112 6.3zm2.092 5.047A2.171 2.171 0 0012 8.5c-.034 0-.065.008-.098.01.133.357.13.751-.008 1.107l2.198 1.73zm-7.48-1.69A5.304 5.304 0 006.5 10.7a5.479 5.479 0 007.778 4.995l-1.017-.801c-.402.121-.82.206-1.26.206A4.405 4.405 0 017.6 10.7c0-.084.02-.162.025-.245L6.61 9.657zM12 17.3c-3.69 0-7.063-2.107-8.8-5.5a10.149 10.149 0 012.348-2.98l-.889-.701a11.43 11.43 0 00-2.438 3.18 1.112 1.112 0 000 1.003C4.084 15.939 7.774 18.4 12 18.4a10.7 10.7 0 004.473-.977l-1.006-.79A9.616 9.616 0 0112 17.3z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M22.7934 19.1901L2.2378 3.12065C2.18142 3.07551 2.1167 3.04192 2.04733 3.02179C1.97797 3.00166 1.90532 2.99539 1.83354 3.00334C1.76175 3.01129 1.69223 3.0333 1.62895 3.06811C1.56567 3.10293 1.50987 3.14986 1.46473 3.20624L1.12099 3.63557C1.07574 3.69197 1.04206 3.75674 1.02187 3.82617C1.00168 3.8956 0.995384 3.96833 1.00333 4.0402C1.01128 4.11207 1.03333 4.18166 1.0682 4.245C1.10308 4.30834 1.1501 4.36419 1.20658 4.40933L21.7622 20.4788C21.8186 20.524 21.8833 20.5575 21.9527 20.5777C22.022 20.5978 22.0947 20.6041 22.1665 20.5961C22.2382 20.5882 22.3078 20.5662 22.371 20.5314C22.4343 20.4965 22.4901 20.4496 22.5353 20.3932L22.879 19.9639C22.9243 19.9075 22.9579 19.8427 22.9781 19.7733C22.9983 19.7039 23.0046 19.6311 22.9967 19.5593C22.9887 19.4874 22.9667 19.4178 22.9318 19.3545C22.8969 19.2911 22.8499 19.2353 22.7934 19.1901V19.1901ZM11.2022 8.03475L15.8354 11.6571C15.7591 9.59671 14.0789 7.94985 12 7.94985C11.7318 7.95035 11.4644 7.97881 11.2022 8.03475ZM12.7978 15.5651L8.16455 11.9427C8.24121 14.0028 9.92141 15.6496 12 15.6496C12.2681 15.649 12.5355 15.6207 12.7978 15.5651V15.5651ZM12 6.84988C15.391 6.84988 18.4998 8.74045 20.1786 11.7997C19.7671 12.5526 19.2586 13.2484 18.6661 13.869L19.9634 14.8831C20.6857 14.1104 21.2976 13.2416 21.7818 12.3012C21.8604 12.1457 21.9014 11.9739 21.9014 11.7996C21.9014 11.6253 21.8604 11.4534 21.7818 11.2979C19.916 7.66076 16.2256 5.19993 12 5.19993C10.7385 5.19993 9.53504 5.44055 8.40345 5.84651L9.99875 7.09394C10.6498 6.94613 11.3166 6.84988 12 6.84988ZM12 16.7496C8.60901 16.7496 5.50057 14.859 3.82141 11.7997C4.23347 11.0468 4.74254 10.3512 5.33558 9.73076L4.03831 8.71673C3.31616 9.48928 2.70435 10.358 2.22027 11.2982C2.14163 11.4538 2.10066 11.6256 2.10066 11.7999C2.10066 11.9742 2.14163 12.146 2.22027 12.3016C4.08437 15.9387 7.77475 18.3995 12 18.3995C13.2615 18.3995 14.465 18.1572 15.5965 17.753L14.0013 16.5059C13.3502 16.6533 12.6837 16.7496 12 16.7496Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.9999 16.75C9.39256 16.75 7.28194 14.7319 7.08772 12.1744L3.48179 9.38763C3.00776 9.98232 2.57155 10.611 2.21955 11.2985C2.14091 11.4541 2.09994 11.6259 2.09994 11.8002C2.09994 11.9745 2.14091 12.1464 2.21955 12.3019C4.0837 15.9391 7.77419 18.4 11.9999 18.4C12.9249 18.4 13.8173 18.2625 14.6774 18.0405L12.8936 16.6603C12.5991 16.7172 12.2999 16.7473 11.9999 16.75ZM22.7874 18.7472L18.9873 15.8102C20.1416 14.8374 21.091 13.6447 21.7802 12.3016C21.8589 12.146 21.8998 11.9742 21.8998 11.7999C21.8998 11.6256 21.8589 11.4537 21.7802 11.2982C19.9161 7.66098 16.2256 5.20008 11.9999 5.20008C10.2301 5.20223 8.48905 5.64777 6.93578 6.49602L2.56261 3.11593C2.50558 3.07156 2.44037 3.03885 2.3707 3.01969C2.30103 3.00053 2.22826 2.99528 2.15656 3.00425C2.08486 3.01323 2.01564 3.03624 1.95283 3.07197C1.89003 3.10771 1.83488 3.15547 1.79055 3.21253L1.11577 4.08118C1.02626 4.19633 0.986146 4.34232 1.00426 4.48704C1.02237 4.63176 1.09723 4.76336 1.21236 4.8529L21.4372 20.4842C21.4942 20.5286 21.5594 20.5613 21.6291 20.5804C21.6988 20.5996 21.7715 20.6048 21.8432 20.5959C21.9149 20.5869 21.9842 20.5639 22.047 20.5282C22.1098 20.4924 22.1649 20.4447 22.2092 20.3876L22.8844 19.5189C22.9738 19.4038 23.0139 19.2577 22.9957 19.113C22.9775 18.9683 22.9026 18.8367 22.7874 18.7472ZM16.4721 13.866L15.1211 12.8217C15.2349 12.4929 15.2952 12.148 15.2999 11.8001C15.3066 11.2907 15.1937 10.7869 14.9704 10.3291C14.7471 9.87125 14.4195 9.47218 14.014 9.16393C13.6084 8.85567 13.1363 8.64682 12.6354 8.55416C12.1345 8.46149 11.6188 8.48759 11.1299 8.63035C11.3371 8.91123 11.4493 9.25099 11.4499 9.60007C11.4448 9.71623 11.427 9.83149 11.397 9.94382L8.86662 7.98823C9.74558 7.25371 10.8544 6.85092 11.9999 6.85008C12.65 6.84972 13.2939 6.97751 13.8946 7.22614C14.4953 7.47477 15.0411 7.83937 15.5009 8.29909C15.9606 8.75881 16.3252 9.30464 16.5738 9.90536C16.8225 10.5061 16.9502 11.1499 16.9499 11.8001C16.9499 12.5436 16.768 13.2366 16.4721 13.8663V13.866Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    figmaComponent: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 10.113L7.444 5.556 12 1l4.556 4.556L12 10.113zM12 23l-4.556-4.556L12 13.887l4.556 4.557L12 23zM5.556 16.556L1 12l4.556-4.556L10.113 12l-4.557 4.556zM18.444 16.556L13.887 12l4.557-4.556L23 12l-4.556 4.556z" />
            </svg>
          );
      }
    },

    figmaFrame: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M6 5.5V1h1.5v4.5H17V1h1.5v4.5H23V7h-4.5v9.5H23V18h-4.5v5H17v-5H7.5v5H6v-5H1v-1.5h5V7H1V5.5h5zM7.5 7v9.5H17V7H7.5z" />
            </svg>
          );
      }
    },

    figmaInstance: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.9 12.314l-9.9 9.9-9.9-9.9 9.9-9.9 9.9 9.9zm1.414 0L12 1 .686 12.314 12 23.627l11.314-11.313z" />
            </svg>
          );
      }
    },

    figmaText: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21 3.643v2.893a.322.322 0 01-.321.321h-.643a.322.322 0 01-.322-.321v-2.25h-7.071v15.428h2.893a.321.321 0 01.321.322v.643a.321.321 0 01-.321.321H8.464a.322.322 0 01-.321-.321v-.643a.322.322 0 01.321-.322h2.893V4.286H4.286v2.25a.321.321 0 01-.322.321h-.643A.321.321 0 013 6.536V3.643A.643.643 0 013.643 3h16.714a.643.643 0 01.643.643z" />
            </svg>
          );
      }
    },

    flame: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.5 2C7.113 5.958 4 10.63 4 13.74 4 18.604 7.084 22 11.5 22s7.5-3.396 7.5-8.26c0-3.123-3.134-7.8-7.5-11.74zm0 18.75c-3.738 0-6.25-2.817-6.25-7.01 0-2.464 2.477-6.41 6.25-10.032 3.773 3.623 6.25 7.569 6.25 10.032 0 4.193-2.512 7.01-6.25 7.01zm2.348-10.434c-1.036-.885-2.015-1.721-2.015-3.032 0-.177-.147-.244-.21-.265A.421.421 0 0011.498 7c-.1 0-.21.037-.288.143-2.86 3.89 1.54 3.607 1.54 6.42a2.187 2.187 0 11-4.375 0V12a.312.312 0 00-.534-.221C7.51 12.102 6.5 13.17 6.5 14.895c0 2.539 2.243 4.605 5 4.605s5-2.066 5-4.605c0-2.311-1.348-3.464-2.652-4.579zM11.5 18.25c-1.768 0-3.254-1.1-3.648-2.575A3.433 3.433 0 0010.562 17 3.442 3.442 0 0014 13.562c0-.806-.238-1.439-.567-1.953 1.043.91 1.817 1.741 1.817 3.286 0 1.85-1.682 3.355-3.75 3.355z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.5 2C7.113 5.958 4 10.63 4 13.74 4 18.604 7.084 22 11.5 22s7.5-3.396 7.5-8.26c0-3.123-3.134-7.8-7.5-11.74zm0 18.125c-3.364 0-5.625-2.566-5.625-6.385 0-1.807 1.77-5.336 5.623-9.159 3.37 3.355 5.627 6.982 5.627 9.16 0 3.818-2.26 6.384-5.625 6.384zm1.76-8.762c-.776-.665-1.51-1.292-1.51-2.275 0-.133-.11-.183-.158-.198a.275.275 0 00-.31.093c-2.145 2.916 1.155 2.704 1.155 4.814a1.64 1.64 0 11-3.28 0v-1.172a.234.234 0 00-.4-.166c-.25.242-1.007 1.044-1.007 2.337 0 1.904 1.682 3.454 3.75 3.454s3.75-1.55 3.75-3.454c0-1.733-1.011-2.598-1.99-3.433z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.5 2C7.113 5.958 4 10.63 4 13.74 4 18.604 7.084 22 11.5 22s7.5-3.396 7.5-8.26c0-3.123-3.134-7.8-7.5-11.74zm0 17.5c-2.757 0-5-2.066-5-4.605 0-1.724 1.01-2.793 1.341-3.116a.313.313 0 01.534.221v1.563a2.187 2.187 0 104.375 0c0-2.813-4.4-2.53-1.54-6.42a.366.366 0 01.413-.123c.063.02.21.087.21.265 0 1.31.978 2.147 2.014 3.032 1.304 1.115 2.653 2.267 2.653 4.579 0 2.538-2.243 4.604-5 4.604z" />
            </svg>
          );

        case Style.duotone:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path
                opacity=".4"
                d="M11.5 2C7.113 5.958 4 10.63 4 13.74 4 18.604 7.086 22 11.5 22s7.5-3.396 7.5-8.26c0-3.123-3.134-7.8-7.5-11.74zm0 17.5c-2.757 0-5-2.066-5-4.605 0-1.723 1.01-2.793 1.341-3.116a.313.313 0 01.534.221v1.563a2.187 2.187 0 104.375 0c0-2.813-4.4-2.53-1.54-6.42a.366.366 0 01.413-.123c.063.02.21.087.21.264 0 1.31.977 2.149 2.015 3.033 1.304 1.115 2.652 2.265 2.652 4.578 0 2.539-2.243 4.605-5 4.605z"
              />
              <path d="M13.847 10.317c1.304 1.115 2.653 2.266 2.653 4.579 0 2.539-2.243 4.604-5 4.604-2.758 0-5-2.066-5-4.605 0-1.723 1.01-2.794 1.341-3.116a.312.312 0 01.534.22v1.563a2.188 2.188 0 004.375 0c0-2.812-4.4-2.53-1.54-6.419a.366.366 0 01.413-.124c.063.021.21.088.21.265 0 1.311.977 2.149 2.014 3.033z" />
            </svg>
          );

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    globeAmericas: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm8.698 10.22l-1.726-.432a.322.322 0 01-.192-.134l-.724-1.088a.324.324 0 010-.358l.79-1.185a.314.314 0 01.123-.109l.966-.483A8.64 8.64 0 0120.71 12c0 .074-.01.146-.012.22zM3.29 12c0-.48.05-.949.125-1.409.289.428.585.866.803 1.184.237.35.516.67.862.982.432.39.91.719 1.418.974.556.281 1.373.724 1.946 1.042.203.113.33.329.33.563v1.291c0 .517.202 1.003.568 1.369.51.51.762 1.277.723 1.61v.88C6.192 19.601 3.29 16.136 3.29 12zm8.062 8.677l-.004-.985c.101-.75-.38-1.895-1.095-2.609a.652.652 0 01-.189-.456v-1.291c0-.704-.382-1.353-.997-1.693a68.155 68.155 0 00-1.99-1.064 5.23 5.23 0 01-1.166-.809 4.05 4.05 0 01-.628-.721c-.39-.572-1.03-1.521-1.427-2.111C4.904 6.16 7.323 4.053 10.29 3.46l2.088 2.088-.606.606a.969.969 0 00-.038 1.329h-.23a.965.965 0 00-.675.275l-.4.389a.961.961 0 00-.19 1.127l.16.322a1.291 1.291 0 00-.888-.027l-1.257.419a1.125 1.125 0 00-.77 1.069c0 .43.238.815.622 1.008l.448.223a3.4 3.4 0 001.396.355c.096.093.252.305.35.44.238.325.464.633.766.784l.136.068h2.844c.17 0 .337.069.456.19l.552.552c.11.11.171.258.172.414 0 .324-.133.642-.366.873l-.457.457a1.61 1.61 0 00-.413.72l-.045.179c-.038.148-.074.297-.129.443l-1.08 2.91a8.69 8.69 0 01-.736.038c-.219-.001-.434-.018-.648-.034zm2.855-.262l.817-2.202c.072-.19.122-.384.172-.579l.041-.163c.014-.053.043-.103.165-.225l.37-.37c.473-.469.744-1.12.744-1.786 0-.494-.2-.977-.55-1.326l-.551-.552c-.36-.36-.86-.567-1.369-.567H11.59c-.077-.09-.175-.226-.248-.325-.331-.452-.707-.965-1.276-.965-.323 0-.646-.076-.934-.22l-.095-.048.884-.294.374.325a.97.97 0 00.634.237h.228a.96.96 0 00.823-.46.96.96 0 00.043-.94l-.523-1.047.136-.133h.232c.258 0 .501-.101.684-.284l.323-.322a.969.969 0 00.038-1.329l.38-.38a1.285 1.285 0 000-1.823l-1.344-1.343c.018 0 .035-.003.053-.003 3.07 0 5.768 1.6 7.32 4.006l-.928.463c-.25.126-.464.314-.62.548l-.79 1.185a1.607 1.607 0 000 1.79l.725 1.087c.223.334.56.571.951.67l1.91.477a8.726 8.726 0 01-6.362 6.898z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm-1.29 2.048v.456c0 .48-.504.79-.936.577l-.968-.484c.601-.258 1.238-.44 1.904-.549zM12 18.96v1.104c-4.448 0-8.065-3.616-8.065-8.064 0-1.173.259-2.286.71-3.294.4.592 1.016 1.508 1.395 2.06a4.5 4.5 0 00.73.835l.032.028a5.88 5.88 0 001.275.88c.564.281 1.387.733 1.967 1.051.412.226.666.658.666 1.13v1.29c0 .343.137.67.379.911.604.609.98 1.56.911 2.069zm1.722.915l.701-1.891c.081-.222.133-.452.194-.682a.975.975 0 01.25-.431l.456-.456c.354-.35.552-.83.552-1.33 0-.327-.129-.642-.359-.871l-.552-.553a1.288 1.288 0 00-.912-.379h-2.697c-.38-.19-.867-1.29-1.29-1.29-.424 0-.843-.1-1.222-.29l-.448-.222a.48.48 0 01.065-.887l1.258-.42a.639.639 0 01.625.125l.375.327c.06.052.133.08.21.08h.225a.324.324 0 00.29-.467l-.628-1.258a.32.32 0 01.064-.375l.4-.387a.317.317 0 01.225-.093h.363c.085 0 .17-.032.23-.093l.322-.322a.324.324 0 000-.456l-.19-.19a.324.324 0 010-.455l.416-.415.19-.19a.647.647 0 000-.911l-1.142-1.141c.101-.004.202-.017.307-.017 3.153 0 5.879 1.823 7.206 4.464l-.524.262a1 1 0 00-.371.327l-.79 1.185a.962.962 0 000 1.073l.725 1.089a.978.978 0 00.569.403l1.177.294a8.08 8.08 0 01-6.27 6.843z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.318 14.42l-.456.454a.964.964 0 00-.249.432c-.06.228-.11.459-.192.68l-.701 1.89c-.555.12-1.13.188-1.72.188V18.96c.068-.508-.308-1.462-.912-2.066a1.29 1.29 0 01-.378-.912V14.69c0-.47-.253-.901-.664-1.128a66.54 66.54 0 00-1.968-1.053 5.817 5.817 0 01-1.276-.877l-.033-.029a4.624 4.624 0 01-.728-.836c-.378-.556-.994-1.469-1.395-2.062a8.108 8.108 0 014.162-4.109l.968.484a.645.645 0 00.934-.577V4.05c.322-.052.65-.085.983-.098l1.141 1.141a.645.645 0 010 .913l-.189.189-.417.416a.323.323 0 000 .457l.19.189a.323.323 0 010 .456l-.323.322a.323.323 0 01-.229.095h-.362a.323.323 0 00-.225.091l-.4.39a.323.323 0 00-.064.375l.629 1.257a.323.323 0 01-.288.467h-.228a.322.322 0 01-.211-.079l-.374-.325a.646.646 0 00-.627-.125l-1.257.42a.482.482 0 00-.063.888l.447.223c.38.19.798.289 1.222.289.424 0 .91 1.1 1.29 1.29h2.692c.342 0 .67.136.912.378l.552.552c.23.23.36.543.36.87a1.875 1.875 0 01-.553 1.33zm3.496-3.684a.968.968 0 01-.57-.402l-.725-1.088a.967.967 0 010-1.073l.79-1.185a.966.966 0 01.372-.328l.524-.262a8 8 0 01.86 3.602c0 .35-.03.692-.074 1.03l-1.177-.294z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    happy: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M17.254 11.6653c-.1371.0444-.2984-.0201-.375-.1492l-.383-.6855c-.3105-.5524-.7742-.87092-1.2702-.87092s-.9597.31852-1.2702.87092l-.383.6855c-.0847.1492-.25.1895-.375.1492-.1452-.0443-.242-.1814-.2299-.3347.1331-1.69754 1.2984-2.87899 2.2581-2.87899.9597 0 2.125 1.18145 2.2581 2.87899.0121.1492-.0847.2904-.2299.3347zm-6.4516 0c-.1371.0444-.2984-.0201-.375-.1492l-.383-.6855c-.31053-.5524-.77424-.87092-1.27021-.87092-.49596 0-.95967.31852-1.27016.87092l-.38306.6855c-.08468.1492-.25.1895-.375.1492-.14516-.0443-.24194-.1814-.22984-.3347.13306-1.69754 1.29839-2.87899 2.25806-2.87899.95968 0 2.12501 1.18145 2.25811 2.87899.0121.1492-.0847.2904-.2299.3347zm-3.76611 2.9476c1.21774.3911 3.02821.6129 4.96371.6129 1.9355 0 3.746-.2218 4.9637-.6129.2137-.0685.4476-.0202.6169.125.1694.1492.25.371.2138.5968-.371 2.2177-3.3549 3.7621-5.7984 3.7621-2.44358 0-5.42342-1.5444-5.79842-3.7621-.03629-.2218.04436-.4476.21371-.5968.17339-.1492.41129-.1976.625-.125zM12 17.8065c1.4113 0 3.1048-.6573 3.9718-1.625-2.3186.4354-5.6291.4354-7.94761 0 .87097.9677 2.56451 1.625 3.97581 1.625zM12 2c5.5242 0 10 4.47581 10 10 0 5.5242-4.4758 10-10 10-5.52419 0-10-4.4758-10-10C2 6.47581 6.47581 2 12 2zm0 18.7097c4.8024 0 8.7097-3.9073 8.7097-8.7097 0-4.80242-3.9073-8.70968-8.7097-8.70968-4.80242 0-8.70968 3.90726-8.70968 8.70968 0 4.8024 3.90726 8.7097 8.70968 8.7097z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 18.0645c-4.44758 0-8.06452-3.6169-8.06452-8.0645 0-4.44758 3.61694-8.06452 8.06452-8.06452 4.4476 0 8.0645 3.61694 8.0645 8.06452 0 4.4476-3.6169 8.0645-8.0645 8.0645zm4.2581-6.1048c-1.0444.3347-2.5968.5282-4.2581.5282-1.6613 0-3.20968-.1935-4.25806-.5282-.39517-.125-.78226.2137-.71371.6169.31854 1.8992 2.875 3.2258 4.97177 3.2258 2.0968 0 4.6492-1.3266 4.9718-3.2258.0645-.3951-.3105-.7419-.7137-.6169zm-9.51213-2.9395c.14113.0443.29838-.0202.375-.1492l.38306-.6855c.31049-.55244.7742-.87098 1.27016-.87098.49597 0 .95968.31854 1.27021.87098l.383.6855c.0847.1492.25.1895.375.1492.1452-.0444.242-.1815.2299-.3347-.1331-1.6976-1.29843-2.87905-2.25811-2.87905-.95967 0-2.125 1.18145-2.25806 2.87905-.0121.1492.08468.2903.22984.3347zm6.45163 0c.1411.0443.2984-.0202.375-.1492l.383-.6855c.3105-.55244.7742-.87098 1.2702-.87098s.9597.31854 1.2702.87098l.383.6855c.0847.1492.25.1895.375.1492.1452-.0444.242-.1815.2299-.3347-.1331-1.6976-1.2984-2.87905-2.2581-2.87905-.9597 0-2.125 1.18145-2.2581 2.87905-.0121.1492.0847.2903.2299.3347z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm3.2258 5.80645c.9597 0 2.125 1.18145 2.2581 2.87905.0282.3468-.4355.4798-.6008.1814l-.3831-.6854c-.3105-.55247-.7742-.87102-1.2702-.87102-.4959 0-.9596.31855-1.2701.87102l-.3831.6854c-.1653.2944-.629.1613-.6008-.1814.125-1.6976 1.2903-2.87905 2.25-2.87905zm-6.45161 0c.95968 0 2.12501 1.18145 2.25811 2.87905.0282.3468-.4355.4798-.6008.1814l-.3831-.6854c-.3105-.55247-.77421-.87102-1.27017-.87102-.49597 0-.95968.31855-1.27017.87102l-.38306.6854c-.16935.2984-.62903.1613-.60081-.1814.125-1.6976 1.29033-2.87905 2.25-2.87905zM12 19.0968c-2.44355 0-5.42339-1.5444-5.79839-3.7621-.08064-.4799.37904-.871.83468-.7218 1.21774.3911 3.02821.6129 4.96371.6129 1.9355 0 3.746-.2218 4.9637-.6129.4597-.1492.9113.246.8347.7218-.375 2.2177-3.3549 3.7621-5.7984 3.7621z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    image: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M7.5 9.429a1.929 1.929 0 100-3.858 1.929 1.929 0 000 3.858zm0-2.572a.643.643 0 110 1.286.643.643 0 010-1.286zM19.714 3H4.286A1.286 1.286 0 003 4.286v15.428A1.286 1.286 0 004.286 21h15.428A1.286 1.286 0 0021 19.714V4.286A1.286 1.286 0 0019.714 3zm0 16.714H4.286V16.5h15.428v3.214zm-13.29-4.5l2.088-2.785 1.608 2.142-.482.643H6.422zm4.82 0l3.054-4.071 3.054 4.071h-6.107zm8.47 0h-.755l-4.146-5.528c-.244-.324-.786-.324-1.03 0l-2.86 3.813-1.896-2.527c-.244-.324-.786-.324-1.03 0l-3.182 4.242h-.53V4.286h15.43v10.928z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.714 3H4.286A1.286 1.286 0 003 4.286v15.428A1.286 1.286 0 004.286 21h15.428A1.286 1.286 0 0021 19.714V4.286A1.286 1.286 0 0019.714 3zm-.643 16.071H4.93V16.5H19.07v2.571zm0-4.5h-.642l-3.9-4.861a.782.782 0 00-1.2 0l-2.547 3.174-1.328-1.84c-.318-.441-1.019-.441-1.337 0l-2.546 3.527H4.93V4.93H19.07v9.642zM8.786 8.786a1.286 1.286 0 100-2.572 1.286 1.286 0 000 2.572z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.143 9.429a1.286 1.286 0 100-2.572 1.286 1.286 0 000 2.572zM19.714 3H4.286A1.286 1.286 0 003 4.286v15.428A1.286 1.286 0 004.286 21h15.428A1.286 1.286 0 0021 19.714V4.286A1.286 1.286 0 0019.714 3zM18.43 15.857H5.57V5.571H18.43v10.286zM13.8 10.114a.643.643 0 00-1.029 0l-1.981 2.642-.827-1.238a.642.642 0 00-1.07 0L6.858 14.57h10.286L13.8 10.114z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    info: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.813 16.401v-6.276c0-.605-.289-1.144-.735-1.488a3.744 3.744 0 001.36-2.887A3.754 3.754 0 0011.688 2a3.754 3.754 0 00-3.75 3.75c0 .96.362 1.836.957 2.5h-.02A1.877 1.877 0 007 10.125V12c0 .927.677 1.7 1.563 1.849V16.4A1.878 1.878 0 007 18.25v1.875C7 21.159 7.841 22 8.875 22H14.5a1.877 1.877 0 001.875-1.875V18.25c0-.927-.677-1.7-1.563-1.849zM11.687 3.25a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm3.438 16.875c0 .345-.28.625-.625.625H8.875a.625.625 0 01-.625-.625V18.25c0-.345.28-.625.625-.625h.938v-5h-.938A.625.625 0 018.25 12v-1.875c0-.345.28-.625.625-.625h4.063c.345 0 .624.28.624.625v7.5h.938c.345 0 .625.28.625.625v1.875z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M15.75 15.773V10.75a2.49 2.49 0 00-.645-1.675 4.189 4.189 0 001.114-2.856A4.217 4.217 0 0012 2a4.216 4.216 0 00-4.219 4.219c0 .815.23 1.596.66 2.267C7.59 8.886 7 9.75 7 10.75v1.536c0 .923.503 1.731 1.25 2.164v1.323A2.501 2.501 0 007 17.938V19.5C7 20.878 8.121 22 9.5 22h5c1.379 0 2.5-1.122 2.5-2.5v-1.563c0-.923-.503-1.731-1.25-2.164zM12 3.875a2.344 2.344 0 110 4.688 2.344 2.344 0 010-4.688zM15.125 19.5c0 .345-.28.625-.625.625h-5a.625.625 0 01-.625-.625v-1.563c0-.345.28-.625.625-.625h.625v-4.401H9.5a.625.625 0 01-.625-.625V10.75c0-.345.28-.625.625-.625h3.75c.345 0 .625.28.625.625v6.563h.625c.345 0 .625.28.625.625V19.5z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.781 18.571h.781V12.93h-.78A.781.781 0 018 12.147v-1.866c0-.431.35-.781.781-.781h4.375c.432 0 .781.35.781.781v8.29h.782c.431 0 .781.35.781.782v1.866c0 .431-.35.781-.781.781H8.78A.781.781 0 018 21.219v-1.866c0-.432.35-.782.781-.782zM11.75 2a2.812 2.812 0 100 5.625 2.812 2.812 0 000-5.625z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    link: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M13.764 17.418l-3.094 3.093a5.075 5.075 0 01-7.181 0 5.075 5.075 0 010-7.18l3.093-3.095c.045-.045.091-.089.138-.133a.469.469 0 01.79.324c.007.188.023.375.047.562a.47.47 0 01-.133.394l-2.941 2.941a3.67 3.67 0 000 5.193 3.67 3.67 0 005.193 0l3.093-3.093.014-.015a3.677 3.677 0 00-1.091-5.925.47.47 0 01-.28-.456c.013-.202.05-.403.111-.596a.465.465 0 01.622-.284c.589.247 1.14.61 1.619 1.088a5.084 5.084 0 010 7.182zm-3.528-3.654c.479.478 1.03.841 1.619 1.088.25.105.54-.026.622-.284.061-.194.098-.394.11-.596a.47.47 0 00-.278-.456 3.677 3.677 0 01-1.092-5.925l.014-.014 3.093-3.094a3.67 3.67 0 015.193 0 3.67 3.67 0 010 5.193l-2.941 2.94a.47.47 0 00-.133.395c.024.187.04.374.048.562a.469.469 0 00.789.323c.047-.043.093-.087.138-.132l3.093-3.094a5.074 5.074 0 000-7.181 5.075 5.075 0 00-7.18 0l-3.095 3.093a5.084 5.084 0 000 7.182z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.274 9.726a5.476 5.476 0 01.381 7.31c-.244.303-.109.152-3.318 3.36a5.466 5.466 0 01-7.734 0 5.465 5.465 0 010-7.733l2.477-2.479c.292-.291.794-.092.8.32.008.498.07.994.186 1.478a.466.466 0 01-.125.437L5.15 14.21a3.28 3.28 0 000 4.641 3.28 3.28 0 004.64 0l2.937-2.937a3.285 3.285 0 00-.89-5.274.47.47 0 01-.257-.483 2.02 2.02 0 01.579-1.187l.17-.171a.466.466 0 01.538-.09c.508.255.984.594 1.407 1.018zm6.123-6.123a5.465 5.465 0 00-7.734 0c-3.21 3.21-3.074 3.058-3.318 3.36a5.476 5.476 0 001.788 8.329c.179.09.396.052.537-.09l.171-.17a2.02 2.02 0 00.579-1.188.47.47 0 00-.256-.483 3.285 3.285 0 01-.891-5.274L14.21 5.15a3.28 3.28 0 014.64 0 3.28 3.28 0 010 4.64l-1.79 1.79a.466.466 0 00-.126.438c.116.484.178.98.186 1.478.006.412.508.611.8.32l2.477-2.479a5.465 5.465 0 000-7.734z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M14.758 9.242a5.934 5.934 0 010 8.397l-2.625 2.625a5.944 5.944 0 01-8.397 0 5.944 5.944 0 010-8.397l1.45-1.45c.384-.384 1.046-.128 1.066.415.025.692.15 1.387.379 2.06a.629.629 0 01-.148.648l-.511.511c-1.095 1.095-1.13 2.877-.046 3.983a2.816 2.816 0 003.998.02l2.625-2.625a2.812 2.812 0 00-.404-4.312.628.628 0 01-.272-.493c-.015-.412.131-.838.457-1.164l.823-.822a.627.627 0 01.804-.068c.286.2.554.425.801.672zm5.506-5.506a5.944 5.944 0 00-8.397 0L9.242 6.361a5.934 5.934 0 00.802 9.069c.25.174.588.148.803-.068l.823-.822c.326-.326.472-.752.457-1.164a.626.626 0 00-.272-.493 2.812 2.812 0 01-.404-4.312l2.625-2.625a2.816 2.816 0 013.997.02c1.084 1.105 1.05 2.888-.045 3.983l-.51.511a.629.629 0 00-.149.649c.23.671.354 1.367.379 2.06.02.542.682.798 1.066.414l1.45-1.45a5.944 5.944 0 000-8.397z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    longArrowLeft: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.11472 17.2716l.31567-.3156c.20919-.2092.20919-.5484 0-.7576L4.6836 12.4732h16.7807c.2958 0 .5357-.2399.5357-.5357v-.4464c0-.2959-.2399-.5358-.5357-.5358H4.6836l3.74679-3.72514c.20919-.2092.20919-.5484 0-.75764l-.31567-.31562c-.2092-.2092-.5484-.2092-.75759 0L2.1569 11.3355c-.2092.2092-.2092.5484 0 .7576l5.20023 5.1786c.20919.2092.54839.2092.75759-.0001z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.80143 18.688l.87655-.8766c.21229-.2123.2088-.5576-.00772-.7655l-3.60511-3.4622H21.464c.296 0 .536-.24.536-.536v-1.2505c0-.296-.24-.536-.536-.536H6.06515l3.60506-3.46215c.21657-.20796.22006-.55324.00773-.76553l-.87656-.87655c-.20929-.20929-.54864-.20929-.75797 0L2.15697 12.0435c-.20929.2093-.20929.5486 0 .758L8.0435 18.688c.20929.2093.54864.2093.75793 0z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M10.6364 16.6557l-2.92736-2.9274H20.9286c.5917 0 1.0714-.4797 1.0714-1.0714v-1.0714c0-.5918-.4797-1.0715-1.0714-1.0715H7.70904l2.92736-2.92732c.4185-.41844.4185-1.09683 0-1.51522l-.75759-.75763c-.41843-.41844-1.09682-.41844-1.51522 0L2.31383 11.3636c-.41844.4184-.41844 1.0967 0 1.5152l6.04976 6.0497c.41844.4185 1.09683.4185 1.51522 0l.75759-.7576c.4185-.4184.4185-1.0968 0-1.5152z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    meh: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 18.7097c-4.80242 0-8.70968-3.9073-8.70968-8.7097 0-4.80242 3.90726-8.70968 8.70968-8.70968 4.8024 0 8.7097 3.90726 8.7097 8.70968 0 4.8024-3.9073 8.7097-8.7097 8.7097zm-3.22581-9.3549c.71371 0 1.29031-.5766 1.29031-1.2903 0-.71369-.5766-1.29031-1.29031-1.29031-.71371 0-1.29032.57662-1.29032 1.29031 0 .7137.57661 1.2903 1.29032 1.2903zm6.45161-2.58061c-.7137 0-1.2903.57662-1.2903 1.29031 0 .7137.5766 1.2903 1.2903 1.2903s1.2903-.5766 1.2903-1.2903c0-.71369-.5766-1.29031-1.2903-1.29031zm.6452 6.45161H8.12903c-.35484 0-.64516.2903-.64516.6452 0 .3548.29032.6451.64516.6451H15.871c.3548 0 .6451-.2903.6451-.6451 0-.3549-.2903-.6452-.6451-.6452z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 18.0645c-4.44758 0-8.06452-3.6169-8.06452-8.0645 0-4.44758 3.61694-8.06452 8.06452-8.06452 4.4476 0 8.0645 3.61694 8.0645 8.06452 0 4.4476-3.6169 8.0645-8.0645 8.0645zm-3.22581-8.7097c.71371 0 1.29031-.5766 1.29031-1.2903 0-.71369-.5766-1.29031-1.29031-1.29031-.71371 0-1.29032.57662-1.29032 1.29031 0 .7137.57661 1.2903 1.29032 1.2903zm6.45161-2.58061c-.7137 0-1.2903.57662-1.2903 1.29031 0 .7137.5766 1.2903 1.2903 1.2903s1.2903-.5766 1.2903-1.2903c0-.71369-.5766-1.29031-1.2903-1.29031zm.3226 5.80641H8.45161c-.53226 0-.96774.4355-.96774.9678 0 .5322.43548.9677.96774.9677h7.09679c.5322 0 .9677-.4355.9677-.9677 0-.5323-.4355-.9678-.9677-.9678z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zM8.77419 8.77419c.71371 0 1.29031.57662 1.29031 1.29031 0 .7137-.5766 1.2903-1.29031 1.2903-.71371 0-1.29032-.5766-1.29032-1.2903 0-.71369.57661-1.29031 1.29032-1.29031zM15.871 16.5161H8.12903c-.85484 0-.85484-1.2903 0-1.2903H15.871c.8548 0 .8548 1.2903 0 1.2903zm-.6452-5.1613c-.7137 0-1.2903-.5766-1.2903-1.2903 0-.71369.5766-1.29031 1.2903-1.29031s1.2903.57662 1.2903 1.29031c0 .7137-.5766 1.2903-1.2903 1.2903z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    paperclip: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M7.82446 22c-1.29203 0-2.5841-.4918-3.56769-1.4754-1.96735-1.9672-1.96735-5.1682-.00008-7.1354L14.4938 3.15228c1.5364-1.53637 4.0363-1.53637 5.5727 0 1.5364 1.5364 1.5364 4.03621 0 5.57253L11.37 17.4211c-1.1053 1.1056-2.90417 1.1056-4.00976 0-1.10546-1.1055-1.10546-2.9042 0-4.0097l6.65236-6.65225c.1831-.18305.4799-.18305.6629 0l.2212.22113c.183.18305.183.47985 0 .66293L8.24431 14.2954c-.61801.618-.61801 1.6236.00004 2.2416.618.618 1.62359.618 2.24155 0l8.6965-8.69629c1.0489-1.04886 1.0489-2.7555 0-3.80445-1.049-1.04887-2.7556-1.04879-3.8045 0L5.14079 14.2733c-1.47976 1.4798-1.47976 3.8875 0 5.3672 1.47984 1.4797 3.88762 1.4798 5.36731.0001l8.5056-8.5055c.1831-.183.4799-.183.6629 0l.2211.2212c.1831.183.1831.4798 0 .6629l-8.5055 8.5054C10.4086 21.5082 9.11653 22 7.82446 22z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M4.63703 20.2995c-2.26582-2.2661-2.26625-5.9344 0-8.2009l8.78947-8.79064c1.7439-1.74395 4.5812-1.74395 6.325 0 1.7478 1.74801 1.7482 4.57758 0 6.32594l-7.401 7.402c-1.2269 1.227-3.22332 1.227-4.45019 0-1.22965-1.2298-1.23008-3.2208 0-4.4509l6.26809-6.26895c.183-.18309.4799-.18309.6629 0l.6628.66292c.183.18305.183.47981 0 .66286L9.22589 13.9108c-.49703.497-.49726 1.3019 0 1.7992.49594.4959 1.30301.496 1.79901-.0001l7.401-7.4019c1.0151-1.0152 1.0153-2.6586 0-3.67406-1.0129-1.01305-2.6609-1.01297-3.6738 0L5.96265 13.4245c-1.53316 1.5333-1.53351 4.0155-.00004 5.5491 1.53457 1.5348 4.01895 1.5347 5.55319-.0011 2.5502-2.5526 5.1009-5.1048 7.652-7.6565.1831-.1831.4798-.183.6629.0002l.6628.6629c.183.183.1831.4796.0001.6627-2.551 2.5516-5.1015 5.1036-7.6516 7.6561-2.2669 2.2692-5.93763 2.2692-8.20497.0016z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M5.01754 20.2082c-2.28243-2.355-2.23989-6.1528.05414-8.4993l8.19372-8.38124c1.7311-1.77079 4.545-1.77094 6.2762 0 1.7145 1.75367 1.7166 4.58316 0 6.3389l-7.1425 7.29894c-1.1662 1.1928-3.0716 1.1762-4.21805-.039-1.10449-1.1707-1.06906-3.0263.05672-4.1779l5.61493-5.73571c.2415-.24664.6372-.25086.8839-.00941l.893.87418c.2466.24148.2508.63718.0094.88382l-5.6144 5.73522c-.19265.197-.20453.5245-.02531.7145.17081.181.43931.184.61281.0065l7.1425-7.29891c.7662-.78367.7662-2.05957-.0004-2.84367-.7496-.76668-1.9514-.76707-2.7013 0L6.8591 13.4564c-1.35793 1.389-1.37887 3.6375-.04653 5.0122 1.32852 1.3708 3.47603 1.3725 4.80693.0112l6.7211-6.875c.2413-.2468.637-.2513.8838-.01l.8937.8736c.2468.2413.2513.637.01.8838l-6.7211 6.8749c-2.3272 2.3804-6.09154 2.3522-8.38946-.0189z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    pause: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.42857 22H4.14286C2.95982 22 2 21.0402 2 19.8571V4.14286C2 2.95982 2.95982 2 4.14286 2h4.28571c1.18304 0 2.14283.95982 2.14283 2.14286V19.8571c0 1.1831-.95979 2.1429-2.14283 2.1429zM22 19.8571V4.14286C22 2.95982 21.0402 2 19.8571 2h-4.2857c-1.183 0-2.1428.95982-2.1428 2.14286V19.8571c0 1.1831.9598 2.1429 2.1428 2.1429h4.2857C21.0402 22 22 21.0402 22 19.8571z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M4.63703 20.2995c-2.26582-2.2661-2.26625-5.9344 0-8.2009l8.78947-8.79064c1.7439-1.74395 4.5812-1.74395 6.325 0 1.7478 1.74801 1.7482 4.57758 0 6.32594l-7.401 7.402c-1.2269 1.227-3.22332 1.227-4.45019 0-1.22965-1.2298-1.23008-3.2208 0-4.4509l6.26809-6.26895c.183-.18309.4799-.18309.6629 0l.6628.66292c.183.18305.183.47981 0 .66286L9.22589 13.9108c-.49703.497-.49726 1.3019 0 1.7992.49594.4959 1.30301.496 1.79901-.0001l7.401-7.4019c1.0151-1.0152 1.0153-2.6586 0-3.67406-1.0129-1.01305-2.6609-1.01297-3.6738 0L5.96265 13.4245c-1.53316 1.5333-1.53351 4.0155-.00004 5.5491 1.53457 1.5348 4.01895 1.5347 5.55319-.0011 2.5502-2.5526 5.1009-5.1048 7.652-7.6565.1831-.1831.4798-.183.6629.0002l.6628.6629c.183.183.1831.4796.0001.6627-2.551 2.5516-5.1015 5.1036-7.6516 7.6561-2.2669 2.2692-5.93763 2.2692-8.20497.0016z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M8.42857 22H4.14286C2.95982 22 2 21.0402 2 19.8571V4.14286C2 2.95982 2.95982 2 4.14286 2h4.28571c1.18304 0 2.14283.95982 2.14283 2.14286V19.8571c0 1.1831-.95979 2.1429-2.14283 2.1429zM22 19.8571V4.14286C22 2.95982 21.0402 2 19.8571 2h-4.2857c-1.183 0-2.1428.95982-2.1428 2.14286V19.8571c0 1.1831.9598 2.1429 2.1428 2.1429h4.2857C21.0402 22 22 21.0402 22 19.8571z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    pen: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.268 4.198l-1.466-1.466A2.491 2.491 0 0018.035 2c-.64 0-1.28.244-1.768.732L2.502 16.497l-.496 4.462a.938.938 0 001.035 1.035l4.458-.492 13.769-13.77a2.5 2.5 0 000-3.534zM6.925 20.308l-3.634.402.405-3.639L14.004 6.763l3.234 3.233L6.925 20.308zM20.384 6.849l-2.263 2.263-3.233-3.233 2.263-2.263c.236-.236.55-.366.884-.366.334 0 .648.13.884.366l1.465 1.465c.487.488.487 1.28 0 1.768z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.268 4.198l-1.465-1.466A2.493 2.493 0 0018.035 2c-.64 0-1.28.244-1.768.732l-2.91 2.91L12 6.999l-9.498 9.498-.496 4.462a.938.938 0 001.035 1.035l4.458-.492L17.001 12l1.357-1.357 2.91-2.91a2.5 2.5 0 000-3.535zM6.638 19.71l-2.64.292.295-2.644 9.033-9.033 1.211-1.212 2.35 2.35-1.212 1.211-9.036 9.037zM19.943 6.407l-1.73 1.73-2.349-2.35 1.73-1.73a.622.622 0 01.884 0l1.465 1.466a.626.626 0 010 .884z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M13.357 5.642l5 5L7.5 21.503l-4.458.492a.938.938 0 01-1.035-1.035l.496-4.462L13.357 5.642zm8.094-.745L19.103 2.55a1.876 1.876 0 00-2.653 0l-2.209 2.21 5 5 2.21-2.209a1.876 1.876 0 000-2.653z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    play: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.5775 10.3851L5.82801 2.25655C4.71087 1.59642 3 2.23702 3 3.86977V20.123c0 1.4648 1.58978 2.3476 2.82801 1.6132l13.74949-8.1246c1.2265-.7227 1.2304-2.5038 0-3.2265zm-.6328 2.1523L5.19522 20.6621c-.41404.2382-.94527-.0469-.94527-.5391V3.86977c0-.6367.6406-.71873.94137-.53904L18.9408 11.4593c.4101.2422.4101.8359.0039 1.0781z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.5775 10.3851L5.82801 2.25655C4.71087 1.59642 3 2.23702 3 3.86977V20.123c0 1.4648 1.58978 2.3476 2.82801 1.6132l13.74949-8.1246c1.2265-.7227 1.2304-2.5038 0-3.2265zM4.87492 19.7129V4.28381c0-.17968.19921-.29296.35546-.20312L18.2845 11.7952c.1524.0899.1524.3125 0 .4024L5.23038 19.916c-.15625.0898-.35546-.0234-.35546-.2031z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.5775 10.3851L5.82801 2.25655C4.71087 1.59642 3 2.23702 3 3.86977V20.123c0 1.4648 1.58978 2.3476 2.82801 1.6132l13.74949-8.1246c1.2265-.7227 1.2304-2.5038 0-3.2265z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    plus: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.5833 10.75H13.25V2.41667C13.25 2.18646 13.0635 2 12.8333 2h-1.6666c-.2302 0-.4167.18646-.4167.41667V10.75H2.41667c-.23021 0-.41667.1865-.41667.4167v1.6666c0 .2302.18646.4167.41667.4167H10.75v8.3333c0 .2302.1865.4167.4167.4167h1.6666c.2302 0 .4167-.1865.4167-.4167V13.25h8.3333c.2302 0 .4167-.1865.4167-.4167v-1.6666c0-.2302-.1865-.4167-.4167-.4167z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.1667 10.3333H13.6667V2.83333C13.6667 2.37292 13.2937 2 12.8333 2H11.1667C10.7062 2 10.3333 2.37292 10.3333 2.83333V10.3333H2.83333C2.37292 10.3333 2 10.7062 2 11.1667V12.8333C2 13.2937 2.37292 13.6667 2.83333 13.6667H10.3333V21.1667C10.3333 21.6271 10.7062 22 11.1667 22H12.8333C13.2937 22 13.6667 21.6271 13.6667 21.1667V13.6667H21.1667C21.6271 13.6667 22 13.2937 22 12.8333V11.1667C22 10.7062 21.6271 10.3333 21.1667 10.3333Z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.5714 9.85714H14.1429V3.42857C14.1429 2.63973 13.5031 2 12.7143 2H11.2857C10.4969 2 9.85714 2.63973 9.85714 3.42857V9.85714H3.42857C2.63973 9.85714 2 10.4969 2 11.2857V12.7143C2 13.5031 2.63973 14.1429 3.42857 14.1429H9.85714V20.5714C9.85714 21.3603 10.4969 22 11.2857 22H12.7143C13.5031 22 14.1429 21.3603 14.1429 20.5714V14.1429H20.5714C21.3603 14.1429 22 13.5031 22 12.7143V11.2857C22 10.4969 21.3603 9.85714 20.5714 9.85714Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    product360: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M16.75 7c0-2.757-2.243-5-5-5s-5 2.243-5 5H3v11.875C3 20.601 4.4 22 6.125 22h11.25c1.726 0 3.125-1.4 3.125-3.125V7h-3.75zm-5-3.75A3.754 3.754 0 0115.5 7H8a3.754 3.754 0 013.75-3.75zm7.5 15.625a1.877 1.877 0 01-1.875 1.875H6.125a1.877 1.877 0 01-1.875-1.875V8.25h2.5v1.875a.625.625 0 101.25 0V8.25h7.5v1.875a.625.625 0 101.25 0V8.25h2.5v10.625z" />
              <path d="M8.422 14.626a.97.97 0 01-.23.66c-.154.176-.37.293-.65.354v.023c.334.042.585.146.752.313.167.165.25.386.25.661 0 .4-.14.71-.424.929-.282.216-.685.324-1.207.324-.462 0-.85-.075-1.168-.225v-.595a2.672 2.672 0 001.13.273c.324 0 .565-.06.724-.179.16-.12.24-.305.24-.555 0-.223-.089-.386-.265-.49-.177-.105-.454-.157-.832-.157H6.38v-.544h.368c.664 0 .996-.23.996-.69a.508.508 0 00-.173-.412c-.116-.097-.287-.146-.513-.146-.158 0-.31.023-.456.069-.146.043-.319.13-.518.259l-.328-.467a2.183 2.183 0 011.33-.422c.42 0 .748.09.983.27.236.181.353.43.353.747zM9.1 16.059c0-1.63.664-2.444 1.991-2.444.21 0 .386.016.53.048v.559a1.807 1.807 0 00-.501-.063c-.446 0-.782.12-1.006.359-.224.24-.345.623-.364 1.15h.034a.907.907 0 01.376-.355 1.2 1.2 0 01.57-.129c.377 0 .672.116.883.348.21.232.316.546.316.943 0 .436-.123.782-.368 1.037-.243.252-.575.378-.997.378a1.4 1.4 0 01-.777-.213 1.391 1.391 0 01-.51-.627c-.118-.275-.177-.606-.177-.991zm1.453 1.279c.23 0 .406-.074.53-.222.125-.149.188-.36.188-.636 0-.239-.06-.427-.177-.564-.116-.136-.29-.205-.524-.205a.858.858 0 00-.399.094.719.719 0 00-.287.254.588.588 0 00-.106.327c0 .268.072.494.217.678a.685.685 0 00.558.274zM15.244 15.751c0 .724-.117 1.261-.35 1.612-.232.352-.587.527-1.066.527-.463 0-.814-.181-1.053-.544-.24-.362-.36-.894-.36-1.595 0-.735.117-1.276.348-1.623.234-.35.589-.524 1.066-.524.465 0 .817.182 1.056.546.24.365.36.899.36 1.601zm-2.15 0c0 .568.058.973.173 1.216.118.244.305.365.562.365.256 0 .443-.123.56-.37.12-.247.18-.65.18-1.21 0-.559-.06-.963-.18-1.211-.117-.251-.304-.376-.56-.376-.257 0-.444.122-.562.367-.115.245-.173.652-.173 1.22zM15.808 14.55c0-.257.09-.477.27-.662a.892.892 0 01.667-.279c.262 0 .483.091.664.274.18.182.27.404.27.666a.9.9 0 01-.273.667.91.91 0 01-.66.268.923.923 0 01-.812-.464.922.922 0 01-.126-.47zm.436 0a.48.48 0 00.145.347.48.48 0 00.356.148c.14 0 .26-.049.356-.145a.484.484 0 00.145-.35.486.486 0 00-.148-.363.487.487 0 00-.353-.145.482.482 0 00-.353.148.49.49 0 00-.148.36z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M16.75 7c0-2.757-2.243-5-5-5s-5 2.243-5 5H3v11.875C3 20.601 4.4 22 6.125 22h11.25c1.726 0 3.125-1.4 3.125-3.125V7h-3.75zm-5-3.125A3.129 3.129 0 0114.875 7h-6.25a3.129 3.129 0 013.125-3.125zm6.875 15c0 .69-.56 1.25-1.25 1.25H6.125c-.69 0-1.25-.56-1.25-1.25v-10H6.75v1.563a.937.937 0 101.875 0V8.874h6.25v1.563a.937.937 0 101.875 0V8.874h1.875v10z" />
              <path d="M8.565 14.586a.974.974 0 01-.235.66c-.157.18-.377.305-.66.373v.017c.334.042.587.144.76.306.171.16.257.378.257.652 0 .398-.145.708-.433.931-.29.221-.702.332-1.238.332-.45 0-.848-.075-1.195-.224v-.745c.16.081.337.147.53.198.192.051.383.077.572.077.288 0 .502-.05.64-.148.137-.098.206-.255.206-.472 0-.195-.079-.333-.238-.414-.158-.081-.411-.122-.759-.122h-.314v-.67h.32c.321 0 .555-.042.702-.126.15-.084.224-.229.224-.433 0-.313-.196-.47-.589-.47-.136 0-.275.023-.416.068-.14.045-.296.124-.467.235l-.405-.603c.377-.272.827-.408 1.35-.408.429 0 .767.087 1.014.26.25.174.374.416.374.726zM9.117 16.041c0-.82.173-1.429.519-1.83.347-.4.866-.6 1.557-.6.236 0 .421.015.555.043v.7a2.27 2.27 0 00-.498-.057c-.3 0-.546.045-.736.136a.915.915 0 00-.425.402c-.095.177-.15.43-.167.756h.037c.186-.32.486-.481.897-.481.37 0 .66.116.87.348.21.232.314.553.314.963 0 .442-.125.792-.374 1.05-.249.257-.595.386-1.036.386a1.49 1.49 0 01-.802-.213 1.391 1.391 0 01-.527-.62c-.122-.272-.184-.6-.184-.983zm1.496 1.116a.52.52 0 00.43-.187c.1-.126.15-.306.15-.538 0-.202-.047-.36-.141-.476-.093-.117-.233-.175-.422-.175a.654.654 0 00-.456.172.532.532 0 00-.187.403c0 .224.058.414.175.569a.546.546 0 00.45.232zM15.33 15.73c0 .723-.118 1.258-.356 1.605-.236.348-.6.522-1.093.522-.478 0-.838-.18-1.082-.538-.242-.36-.362-.889-.362-1.59 0-.73.118-1.268.354-1.613.236-.348.599-.522 1.09-.522.477 0 .838.182 1.082.544.245.363.368.893.368 1.592zm-2.024 0c0 .508.043.872.13 1.093.089.219.237.328.445.328.204 0 .351-.11.442-.334.09-.223.136-.585.136-1.087 0-.508-.047-.873-.14-1.093-.09-.223-.236-.335-.438-.335-.206 0-.353.112-.442.335-.089.22-.133.585-.133 1.093zM15.801 14.58a.973.973 0 01.98-.98.96.96 0 01.487.13.94.94 0 01.36.36.965.965 0 010 .983.932.932 0 01-.357.354.983.983 0 01-.49.127.958.958 0 01-.697-.28.944.944 0 01-.283-.694zm.54 0c0 .12.042.224.125.309.085.085.19.127.315.127s.23-.043.314-.13a.431.431 0 00-.003-.617.415.415 0 00-.311-.134.425.425 0 00-.312.13.434.434 0 00-.127.315z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M13.68 16.394c0 .574.059.984.176 1.23.12.246.308.369.568.369.259 0 .448-.125.567-.374.121-.25.182-.658.182-1.225 0-.565-.06-.973-.182-1.224-.119-.254-.308-.38-.567-.38-.26 0-.449.123-.568.371-.117.248-.176.659-.176 1.233zM11.646 17.774c-.124.15-.303.225-.535.225a.693.693 0 01-.565-.277 1.078 1.078 0 01-.219-.686c0-.113.036-.223.107-.33a.727.727 0 01.29-.257.867.867 0 01.404-.095c.236 0 .413.069.53.207.12.139.179.329.179.57 0 .28-.064.493-.19.643zM17.014 15.53a.486.486 0 01-.147-.352c0-.142.05-.263.15-.363.1-.1.218-.15.357-.15.138 0 .257.05.357.148.1.097.15.22.15.365a.489.489 0 01-.147.355.49.49 0 01-.36.147.485.485 0 01-.36-.15z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.75 7v1.25h3.75v10.625c0 1.726-1.4 3.125-3.125 3.125H6.125A3.125 3.125 0 013 18.875V8.25h3.75V7c0-2.757 2.243-5 5-5s5 2.243 5 5zm-5-2.5A2.503 2.503 0 009.25 7v1.25h5V7c0-1.379-1.121-2.5-2.5-2.5zm2.813 6.25a.937.937 0 101.874 0 .937.937 0 00-1.875 0zm-7.5 0a.937.937 0 101.874 0 .937.937 0 00-1.874 0zm8.792 5.644c0 .732-.118 1.275-.354 1.63-.234.356-.593.534-1.077.534-.469 0-.824-.184-1.066-.55-.242-.367-.363-.905-.363-1.614 0-.743.117-1.29.351-1.642.236-.353.596-.53 1.078-.53.47 0 .826.184 1.068.553.242.369.363.909.363 1.62zm-7.133-.47a.981.981 0 00.234-.668c0-.32-.12-.572-.357-.755-.239-.182-.57-.273-.994-.273-.511 0-.96.142-1.346.426l.332.473c.201-.131.376-.219.524-.263a1.54 1.54 0 01.46-.069c.23 0 .402.05.52.147a.514.514 0 01.175.418c0 .465-.336.697-1.008.697H6.89v.55h.366c.382 0 .663.053.841.159.179.105.268.27.268.495 0 .254-.08.441-.242.562-.161.121-.405.181-.732.181a2.694 2.694 0 01-1.144-.277v.603c.321.152.715.228 1.182.228.528 0 .935-.11 1.221-.329.287-.22.43-.534.43-.939 0-.278-.085-.501-.254-.668-.169-.17-.422-.275-.76-.317v-.023c.282-.062.5-.18.656-.357zm2.933-1.69c-1.342 0-2.014.823-2.014 2.471 0 .39.06.724.179 1.003.121.276.293.488.516.634.223.144.485.216.786.216.427 0 .763-.128 1.008-.384.248-.257.372-.606.372-1.048 0-.402-.107-.72-.32-.954-.213-.234-.51-.351-.893-.351-.22 0-.413.043-.576.13a.918.918 0 00-.38.36h-.035c.02-.534.142-.922.369-1.164.227-.242.566-.363 1.017-.363.192 0 .361.02.507.063v-.565a2.502 2.502 0 00-.536-.049zm5.045.276a.922.922 0 00-.274.668c0 .171.042.33.127.476a.932.932 0 00.82.47.92.92 0 00.669-.271.911.911 0 00.276-.675.923.923 0 00-.273-.674.908.908 0 00-.671-.276.902.902 0 00-.674.282z"
              />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    sad: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 18.7097c-4.80242 0-8.70968-3.9073-8.70968-8.7097 0-4.80242 3.90726-8.70968 8.70968-8.70968 4.8024 0 8.7097 3.90726 8.7097 8.70968 0 4.8024-3.9073 8.7097-8.7097 8.7097zm0-6.1291c-1.7903 0-3.47581.7904-4.62903 2.1694-.22984.2742-.19355.6815.08064.9073.2742.2298.68145.1935.90726-.0807.90323-1.0806 2.22983-1.7016 3.63713-1.7016 1.4072 0 2.7338.621 3.6371 1.7016.2137.2581.6209.3226.9072.0807.2742-.2299.3105-.6371.0807-.9073-1.1452-1.379-2.8307-2.1694-4.621-2.1694zm-3.22581-3.2258c.71371 0 1.29031-.5766 1.29031-1.2903 0-.71369-.5766-1.29031-1.29031-1.29031-.71371 0-1.29032.57662-1.29032 1.29031 0 .7137.57661 1.2903 1.29032 1.2903zm6.45161 0c.7137 0 1.2903-.5766 1.2903-1.2903 0-.71369-.5766-1.29031-1.2903-1.29031s-1.2903.57662-1.2903 1.29031c0 .7137.5766 1.2903 1.2903 1.2903z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm0 18.0645c-4.44758 0-8.06452-3.6169-8.06452-8.0645 0-4.44758 3.61694-8.06452 8.06452-8.06452 4.4476 0 8.0645 3.61694 8.0645 8.06452 0 4.4476-3.6169 8.0645-8.0645 8.0645zm-3.22581-8.7097c.71371 0 1.29031-.5766 1.29031-1.2903 0-.71369-.5766-1.29031-1.29031-1.29031-.71371 0-1.29032.57662-1.29032 1.29031 0 .7137.57661 1.2903 1.29032 1.2903zm6.45161-2.58061c-.7137 0-1.2903.57662-1.2903 1.29031 0 .7137.5766 1.2903 1.2903 1.2903s1.2903-.5766 1.2903-1.2903c0-.71369-.5766-1.29031-1.2903-1.29031zM12 13.9355c-1.621 0-3.14516.7137-4.18548 1.9597-.34275.4113-.28629 1.0201.125 1.3629.41129.3387 1.02016.2863 1.3629-.125.66935-.8025 1.65318-1.2662 2.69758-1.2662 1.0444 0 2.0282.4597 2.6976 1.2662.3266.3911.9314.4798 1.3629.125.4113-.3428.4637-.9516.125-1.3629-1.0403-1.246-2.5645-1.9597-4.1855-1.9597z" />
            </svg>
          );

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M12 2C6.47581 2 2 6.47581 2 12c0 5.5242 4.47581 10 10 10 5.5242 0 10-4.4758 10-10 0-5.52419-4.4758-10-10-10zm3.2258 6.77419c.7137 0 1.2903.57662 1.2903 1.29031 0 .7137-.5766 1.2903-1.2903 1.2903s-1.2903-.5766-1.2903-1.2903c0-.71369.5766-1.29031 1.2903-1.29031zm-6.45161 0c.71371 0 1.29031.57662 1.29031 1.29031 0 .7137-.5766 1.2903-1.29031 1.2903-.71371 0-1.29032-.5766-1.29032-1.2903 0-.71369.57661-1.29031 1.29032-1.29031zm6.86291 8.79841C14.7339 16.4919 13.4073 15.871 12 15.871c-1.4073 0-2.73387.6209-3.6371 1.7016-.54435.6572-1.53629-.1694-.99193-.8266C8.52016 15.371 10.2097 14.5806 12 14.5806c1.7903 0 3.4798.7904 4.625 2.1694.5484.6532-.4435 1.4798-.9879.8226z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    search: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.8633 20.8125L16.8242 15.7734C16.7344 15.6836 16.6172 15.6367 16.4922 15.6367H16.0898C17.4297 14.1875 18.25 12.2539 18.25 10.125C18.25 5.63672 14.6133 2 10.125 2C5.63672 2 2 5.63672 2 10.125C2 14.6133 5.63672 18.25 10.125 18.25C12.2539 18.25 14.1875 17.4297 15.6367 16.0938V16.4922C15.6367 16.6172 15.6875 16.7344 15.7734 16.8242L20.8125 21.8633C20.9961 22.0469 21.293 22.0469 21.4766 21.8633L21.8633 21.4766C22.0469 21.293 22.0469 20.9961 21.8633 20.8125ZM10.125 17C6.32422 17 3.25 13.9258 3.25 10.125C3.25 6.32422 6.32422 3.25 10.125 3.25C13.9258 3.25 17 6.32422 17 10.125C17 13.9258 13.9258 17 10.125 17Z" />
            </svg>
          );
        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.8633 20.3164l-4.7422-4.7422c-.0898-.0898-.207-.1367-.332-.1367h-.5157c1.2305-1.4258 1.9766-3.2813 1.9766-5.3125C18.25 5.63672 14.6133 2 10.125 2 5.63672 2 2 5.63672 2 10.125c0 4.4883 3.63672 8.125 8.125 8.125 2.0312 0 3.8867-.7461 5.3125-1.9766v.5157c0 .125.0508.2422.1367.332l4.7422 4.7422c.1836.1836.4805.1836.6641 0l.8828-.8828c.1836-.1836.1836-.4805 0-.6641zM10.125 16.375c-3.45313 0-6.25-2.7969-6.25-6.25 0-3.45313 2.79687-6.25 6.25-6.25 3.4531 0 6.25 2.79687 6.25 6.25 0 3.4531-2.7969 6.25-6.25 6.25z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.7266 19.293l-3.8946-3.8946c-.1758-.1757-.414-.2734-.664-.2734h-.6368c1.0782-1.3789 1.7188-3.1133 1.7188-5C18.25 5.63672 14.6133 2 10.125 2 5.63672 2 2 5.63672 2 10.125c0 4.4883 3.63672 8.125 8.125 8.125 1.8867 0 3.6211-.6406 5-1.7188v.6368c0 .25.0977.4882.2734.664l3.8946 3.8946c.3672.3671.9609.3671 1.3242 0l1.1055-1.1055c.3671-.3672.3671-.9609.0039-1.3281zM10.125 15.125c-2.76172 0-5-2.2344-5-5 0-2.76172 2.23437-5 5-5 2.7617 0 5 2.23437 5 5 0 2.7617-2.2344 5-5 5z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    sketchGroup: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M9.128 4.5l2.561 2.56a1.5 1.5 0 001.061.44h9a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h6.878zM2.25 3A2.25 2.25 0 000 5.25v13.5A2.25 2.25 0 002.25 21h19.5A2.25 2.25 0 0024 18.75V8.25A2.25 2.25 0 0021.75 6h-9l-2.56-2.56A1.5 1.5 0 009.127 3H2.25z" />
            </svg>
          );
      }
    },

    sketchSymbol: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M21.338 22.454v-.444c0-.294-.317-.531-.61-.531l-3.167.013A10.994 10.994 0 0023 12c0-5.89-4.628-10.697-10.445-10.986a.531.531 0 00-.555.532v.444c0 .282.22.516.5.531 4.99.26 8.992 4.383 8.992 9.479a9.49 9.49 0 01-5.145 8.44V17.5c0-.294-.215-.707-.509-.707h-.467c-.294 0-.532.413-.532.707v4.968c0 .294.238.532.532.532l5.356-.014c.294 0 .611-.238.611-.532zm-9.338 0v-.444a.53.53 0 00-.5-.531A9.49 9.49 0 012.507 12a9.496 9.496 0 015.145-8.44v3.083c0 .294.386.468.68.468.611 0 .828-.174.828-.468v-5.11A.532.532 0 008.63 1H3.101c-.294 0-.593.238-.593.532v.366c0 .294.299.61.593.61h3.338A10.994 10.994 0 001 12c0 5.89 4.628 10.697 10.445 10.986a.53.53 0 00.555-.532z" />
            </svg>
          );
      }
    },

    sketchText: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return <span>{icon} does not have a solid style</span>;

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M0 19.547L5.586 5H7.66l5.954 14.547H11.42L9.724 15.14H3.642l-1.598 4.406H0zm4.197-5.974H9.13L7.61 9.545c-.463-1.224-.807-2.23-1.032-3.017a18.544 18.544 0 01-.784 2.778l-1.598 4.267zM21.777 18.247c-.661.562-1.3.959-1.915 1.19a5.48 5.48 0 01-1.964.348c-1.158 0-2.048-.281-2.67-.844-.621-.569-.932-1.293-.932-2.173 0-.516.115-.985.347-1.409.238-.43.546-.774.923-1.032a4.406 4.406 0 011.29-.585c.35-.093.88-.182 1.587-.268 1.442-.172 2.504-.377 3.185-.615.007-.245.01-.4.01-.467 0-.727-.168-1.24-.506-1.538-.456-.403-1.134-.605-2.034-.605-.84 0-1.462.149-1.865.447-.397.29-.692.81-.883 1.557l-1.747-.238c.159-.747.42-1.35.784-1.806.364-.463.89-.817 1.578-1.061.688-.252 1.485-.377 2.391-.377.9 0 1.63.105 2.193.317.562.212.976.48 1.24.804.265.317.45.72.556 1.21.06.305.09.854.09 1.648v2.381c0 1.66.036 2.712.109 3.155.079.437.231.857.456 1.26h-1.866a3.79 3.79 0 01-.357-1.3zm-.149-3.99c-.648.265-1.62.49-2.917.675-.734.106-1.253.225-1.558.358a1.542 1.542 0 00-.952 1.429c0 .476.178.873.536 1.19.364.318.893.477 1.587.477.688 0 1.3-.15 1.836-.447.536-.304.93-.718 1.18-1.24.193-.404.288-1 .288-1.786v-.655z" />
            </svg>
          );
      }
    },

    trash: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.1875 4.5H16.125L14.8125 2.75C14.6378 2.51713 14.4114 2.32813 14.151 2.19795C13.8907 2.06777 13.6036 2 13.3125 2L10.1875 2C9.89642 2 9.60933 2.06777 9.34897 2.19795C9.08862 2.32813 8.86215 2.51713 8.6875 2.75L7.375 4.5H3.3125C3.22962 4.5 3.15013 4.53292 3.09153 4.59153C3.03292 4.65013 3 4.72962 3 4.8125V5.4375C3 5.52038 3.03292 5.59987 3.09153 5.65847C3.15013 5.71708 3.22962 5.75 3.3125 5.75H4.05078L5.34766 20.293C5.3896 20.7592 5.60445 21.193 5.94997 21.5088C6.29549 21.8247 6.74669 21.9999 7.21484 22H16.2852C16.7533 21.9999 17.2045 21.8247 17.55 21.5088C17.8956 21.193 18.1104 20.7592 18.1523 20.293L19.4492 5.75H20.1875C20.2704 5.75 20.3499 5.71708 20.4085 5.65847C20.4671 5.59987 20.5 5.52038 20.5 5.4375V4.8125C20.5 4.72962 20.4671 4.65013 20.4085 4.59153C20.3499 4.53292 20.2704 4.5 20.1875 4.5ZM9.6875 3.5C9.74593 3.4226 9.82146 3.35976 9.9082 3.31639C9.99493 3.27302 10.0905 3.2503 10.1875 3.25H13.3125C13.4095 3.2503 13.5051 3.27302 13.5918 3.31639C13.6785 3.35976 13.7541 3.4226 13.8125 3.5L14.5625 4.5H8.9375L9.6875 3.5ZM16.9062 20.1797C16.8934 20.3354 16.8223 20.4806 16.7072 20.5863C16.5921 20.692 16.4414 20.7504 16.2852 20.75H7.21484C7.05858 20.7504 6.90788 20.692 6.79278 20.5863C6.67768 20.4806 6.60662 20.3354 6.59375 20.1797L5.30469 5.75H18.1953L16.9062 20.1797Z" />
            </svg>
          );

        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.875 5.125h-3.219L15.328 2.91a1.874 1.874 0 00-1.61-.91H9.782a1.875 1.875 0 00-1.61.91L6.845 5.125H3.625A.625.625 0 003 5.75v.625A.625.625 0 003.625 7h.625l.828 13.242A1.875 1.875 0 006.95 22h9.602a1.875 1.875 0 001.87-1.758L19.25 7h.625a.625.625 0 00.625-.625V5.75a.625.625 0 00-.625-.625zM9.781 3.875h3.938l.75 1.25H9.03l.75-1.25zm6.77 16.25H6.95L6.13 7h11.242l-.821 13.125z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M19.875 3.25h-4.688l-.367-.73a.938.938 0 00-.84-.52H9.516a.927.927 0 00-.836.52l-.367.73H3.625A.625.625 0 003 3.875v1.25a.625.625 0 00.625.625h16.25a.625.625 0 00.625-.625v-1.25a.625.625 0 00-.625-.625zM5.078 20.242A1.875 1.875 0 006.95 22h9.602a1.875 1.875 0 001.87-1.758L19.25 7h-15l.828 13.242z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    user: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M11.75 12a5 5 0 100-10 5 5 0 000 10zm3.5 1.25h-.652a6.808 6.808 0 01-5.696 0H8.25A5.251 5.251 0 003 18.5v1.625C3 21.16 3.84 22 4.875 22h13.75c1.035 0 1.875-.84 1.875-1.875V18.5a5.251 5.251 0 00-5.25-5.25z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    video: () => {
      switch (iconStyle) {
        case Style.light:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.8887 6.1113C20.6734 6.1113 20.4546 6.17381 20.2566 6.30925L16.4469 8.73676V6.66001C16.4469 5.74318 15.6412 5 14.648 5H3.79892C2.80569 5 2 5.74318 2 6.66001V16.6756C2 17.5925 2.80569 18.3356 3.79892 18.3356H14.648C15.6412 18.3356 16.4469 17.5925 16.4469 16.6756V14.5989L20.2532 17.0264C20.4511 17.1653 20.6734 17.2243 20.8852 17.2243C21.4617 17.2243 22 16.7729 22 16.1304V7.20524C22.0035 6.56277 21.4652 6.1113 20.8887 6.1113V6.1113ZM15.3356 16.6756C15.3356 16.9743 15.0196 17.2243 14.648 17.2243H3.79892C3.42733 17.2243 3.1113 16.9743 3.1113 16.6756V6.66001C3.1113 6.36135 3.42733 6.1113 3.79892 6.1113H14.648C15.0196 6.1113 15.3356 6.36135 15.3356 6.66001V16.6756ZM20.8922 16.1304L20.8505 16.0852L16.4469 13.2792V10.053L20.8922 7.22261V16.1304Z" />
            </svg>
          );
        case Style.regular:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M20.8854 6.11111C20.6701 6.11111 20.4514 6.17361 20.2535 6.30903L16.4444 8.68403V6.65972C16.4444 5.74306 15.6389 5 14.6458 5H3.79861C2.80556 5 2 5.74306 2 6.65972V16.6736C2 17.5903 2.80556 18.3333 3.79861 18.3333H14.6458C15.6389 18.3333 16.4444 17.5903 16.4444 16.6736V14.6493L20.2535 17.0208C20.4514 17.1597 20.6736 17.2187 20.8854 17.2187C21.4618 17.2187 22 16.7674 22 16.125V7.20486C22 6.5625 21.4618 6.11111 20.8854 6.11111ZM14.7778 9.72222V16.6285C14.7569 16.6424 14.7153 16.6667 14.6458 16.6667H3.79861C3.72917 16.6667 3.6875 16.6458 3.66667 16.6285V6.70486C3.6875 6.69097 3.72917 6.66667 3.79861 6.66667H14.6458C14.7153 6.66667 14.7569 6.6875 14.7778 6.70486V9.72222ZM20.3333 15.1111L16.4444 12.6875V10.6493L20.3333 8.22569V15.1111Z" />
            </svg>
          );
        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M13.6736 5H3.65972C2.74306 5 2 5.74306 2 6.65972V16.6736C2 17.5903 2.74306 18.3333 3.65972 18.3333H13.6736C14.5903 18.3333 15.3333 17.5903 15.3333 16.6736V6.65972C15.3333 5.74306 14.5903 5 13.6736 5ZM20.25 6.30903L16.4444 8.93403V14.3993L20.25 17.0208C20.9861 17.5278 22 17.0104 22 16.125V7.20486C22 6.32292 20.9896 5.80208 20.25 6.30903Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    wind: () => {
      switch (iconStyle) {
        case Style.light:
          return <span>{icon} does not have a light style</span>;

        case Style.regular:
          return <span>{icon} does not have a regular style</span>;

        case Style.solid:
          return (
            <svg
              className={className}
              width={width}
              height={height}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <path d="M2.62506 10.5034H15.7513C18.0875 10.5034 19.9236 8.37034 19.4157 5.94433C19.1188 4.52623 17.9742 3.38159 16.5561 3.08469C14.3723 2.62761 12.4229 4.07697 12.0595 6.07716C11.997 6.42875 12.2861 6.7491 12.6416 6.7491H13.3604C13.6417 6.7491 13.8644 6.54595 13.9347 6.2764C14.1926 5.29193 15.2317 4.61999 16.3451 4.96768C16.9038 5.13957 17.3569 5.59664 17.5327 6.15529C17.9351 7.44057 16.978 8.62818 15.7513 8.62818H2.62506C2.28128 8.62818 2 8.90946 2 9.25324V9.8783C2 10.2221 2.28128 10.5034 2.62506 10.5034ZM8.25059 11.7535H2.62506C2.28128 11.7535 2 12.0348 2 12.3785V13.0036C2 13.3474 2.28128 13.6287 2.62506 13.6287H8.25059C9.47727 13.6287 10.4344 14.8124 10.032 16.1015C9.86012 16.6602 9.40304 17.1134 8.8444 17.2892C7.73101 17.6368 6.69185 16.9649 6.43401 15.9804C6.36369 15.7109 6.14102 15.5077 5.85974 15.5077H5.14483C4.78542 15.5077 4.49633 15.8281 4.56274 16.1797C4.92606 18.1799 6.87546 19.6292 9.05926 19.1721C10.4774 18.8752 11.622 17.7306 11.9189 16.3125C12.4229 13.8865 10.5867 11.7535 8.25059 11.7535ZM17.4429 11.7535H11.5243C11.7353 11.941 11.9502 12.1285 12.1299 12.3512C12.4463 12.7379 12.6729 13.1755 12.8565 13.6287H17.5132C18.818 13.6287 19.9861 14.5819 20.1111 15.8789C20.2556 17.3673 19.0836 18.6291 17.6226 18.6291C16.5404 18.6291 15.6263 17.9377 15.2786 16.9727C15.2317 16.8438 15.1184 16.7539 14.9817 16.7539H13.6886C13.4933 16.7539 13.337 16.9337 13.38 17.1251C13.8331 19.0589 15.556 20.5043 17.6265 20.5043C20.0876 20.5043 22.0722 18.4729 21.998 15.9961C21.9277 13.6013 19.8376 11.7535 17.4429 11.7535V11.7535Z" />
            </svg>
          );

        case Style.duotone:
          return <span>{icon} does not have a duotone style</span>;

        case Style.brand:
          return <span>{icon} does not have a brand style</span>;
      }
    },

    none: (): any => {
      return null;
    },
  };

  return svg[icon]();
};

export default Icon;
