import alertTriangle from './icons/alert-triangle.svg';
import arrowRight from './icons/arrow-right.svg';
import bell from './icons/bell.svg';
import chevronDown from './icons/chevron-down.svg';
import chevronRight from './icons/chevron-right.svg';
import clock from './icons/clock.svg';
import clockMuted from './icons/clock-muted.svg';
import close from './icons/close.svg';
import heart from './icons/heart.svg';
import logout from './icons/logout.svg';
import mapPin from './icons/map-pin.svg';
import packageIcon from './icons/package.svg';
import packageRead from './icons/package-read.svg';
import packageWhite from './icons/package-white.svg';
import plus from './icons/plus.svg';
import settings from './icons/settings.svg';
import uploadCloud from './icons/upload-cloud.svg';
import user from './icons/user.svg';

export const icons = {
  alertTriangle,
  arrowRight,
  bell,
  chevronDown,
  chevronRight,
  clock,
  clockMuted,
  close,
  heart,
  logout,
  mapPin,
  package: packageIcon,
  packageRead,
  packageWhite,
  plus,
  settings,
  uploadCloud,
  user,
} as const;

export type IconName = keyof typeof icons;
