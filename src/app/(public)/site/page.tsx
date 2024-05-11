import Banner from "./components/banner"
import Header from "./components/header"

const Site = (): JSX.Element => {
  return (
    <div className="relative">
      <Header />

      <Banner />

      <div className="p-20 flex gap-3">
        <div className="w-40 h-60 rounded-lg bg-red-700 absolute bottom-28">..</div>
        <div className="w-40 h-60 rounded-lg bg-red-700 absolute bottom-28">..</div>
        <div className="w-40 h-60 rounded-lg bg-red-700 absolute bottom-28">..</div>
        <div className="w-40 h-60 rounded-lg bg-red-700 absolute bottom-28">..</div>
        <div className="w-40 h-60 rounded-lg bg-red-700 absolute bottom-28">..</div>
      </div>
    </div>
  )
}

export default Site
