/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'
import Metrics from './Metrics'
import Fonts from './Fonts'

export default {
  button: {
    backgroundColor: Colors.primary,
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginVertical: 10,
    marginHorizontal: 10
  },
  sectionTitle: {
    ...Fonts.normal,
    marginBottom: Metrics.small,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: Colors.secondary
  }
}
