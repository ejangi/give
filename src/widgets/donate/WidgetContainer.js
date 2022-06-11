import DonateNow from '../../components/DonateNow'

module.exports = {
  WidgetContainer: ({ location }) => (
    <>
      <h1>Hello World</h1>
      <DonateNow location={location} />
    </>
  )
}