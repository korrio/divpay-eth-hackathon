import { Loader, LoaderSizeTypes, LoaderVariantTypes } from '../loader';

interface IButtonLoaderProps {
  size: LoaderSizeTypes;
  variant: LoaderVariantTypes;
}

const ButtonLoader: React.FC<IButtonLoaderProps> = ({ size, variant }) => {
  return (
    <span className='absolute inset-0 flex h-full w-full items-center justify-center'>
      <Loader tag='span' size={size} variant={variant} showOnlyThreeDots={true} />
    </span>
  );
};

ButtonLoader.displayName = 'ButtonLoader';
export default ButtonLoader;
