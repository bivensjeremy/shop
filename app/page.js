import Brands from "./components/(homepage)/Brands";
import Categories from "./components/(homepage)/Categories";
import Curator from "./components/(homepage)/Curator";
import Featured from "./components/(homepage)/Featured";
import Quote from "./components/(homepage)/Quote";
import Splash from "./components/(homepage)/Splash";
import Video from "./components/(homepage)/Video";


export default function Home() {
  return (
    <main>
      <Video />
      <Splash />
      <Quote />
      <Categories />
      <Brands />
      <Curator />
      <Featured />
    </main>
  )
}
