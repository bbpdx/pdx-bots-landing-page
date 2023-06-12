import { colors, mediaQueriesThresholds } from '@/constants';

const styles = {
  descriptionBox: {
    width: '100vw',
    height: '100%',
    display: 'flex',
  },
  typography: (width: number | null) => ({
    margin: '2rem',
    marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '55vw': '2rem',
    marginTop:'10vh',
    color: colors.text
  })
};

export default styles;
