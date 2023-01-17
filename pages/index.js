import Section_top from '../src/component/Section_top'
import Section_white from '../src/component/Section_white'
import Section_bottom from '../src/component/Section_bottom'
import Section_search from '../src/component/Section_search'

export default function Home() {
  return (
    <div>
      <Section_top/>
      <Section_white/>
      <Section_bottom/>
      <Section_search/>
    </div>
  )
}