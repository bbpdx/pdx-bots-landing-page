import { font, colors } from '@/constants'

export const styles = {
  profileCardOuterBox : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  profileCardInnerBox: {
    width: '10rem',
    height: '10rem',
    position: 'relative',
  },
  memberName: {
    color: colors.secondary,
    opacity:'0.7',
    fontFamily: font.main,
    inlineSize: 'min-content'
  },
  memberPostion: {
    color: colors.secondary,
    opacity:'0.5'
  },
  memberSummary: {
    color: colors.text,
    opacity:'0.6',
    fontFamily: font.text
  }
}