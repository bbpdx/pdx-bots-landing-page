import { colors, font } from "@/constants"

export const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    backgroundColor: colors.headerBackground,
    opacity: '.8',
    fontFamily: font.main
  },
  headerNavBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    color: colors.text,
    opacity: '1',
    paddingRight: '2rem'
  },
  navigationButton: {
      color:'#16FF00',
      fontFamily: font.main,
      fontWeight:400
  }
}