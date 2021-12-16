import { makeStyles } from '@mui/styles'
import MainContent from './components/MainContent/'
const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    maxWidth: '1000px'
  }
})
function App () {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <MainContent />
      </div>
    </div>
  )
}

export default App
