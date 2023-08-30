import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  const style = { textAlign: 'center' };
  return (
    <div style={style}>
      <InfinitySpin color="#007aff" />
    </div>
  );
};
