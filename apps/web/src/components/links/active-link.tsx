import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import AnchorLink from '@/components/links/anchor-link';
import clsx from 'clsx';

interface ActiveLinkProps extends LinkProps {
  activeClassName?: string;
}
const ActiveLink: React.FC<ActiveLinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> = ({
  href,
  className,
  activeClassName = 'active',
  ...props
}) => {
  const { pathname } = useRouter();
  return (
    <AnchorLink
      href={href}
      className={clsx(className, {
        [activeClassName]: pathname === href,
      })}
      {...props}
    />
  );
};

export default ActiveLink;
