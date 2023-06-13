import { MEDIA_QUERIES_THRESHOLDS } from '@/constants';

const styles = {
  descriptionBox: {
    width: '100vw',
    height: '100%',
    display: 'flex',
  },
  typography: (width: number | null) => ({
    margin: '2rem',
    marginLeft: (width && width > MEDIA_QUERIES_THRESHOLDS.mobile) ? '55vw': '2rem',
    marginTop:'10vh',
    color:'#16FF00',
  })
};

export default styles;
