import axios from 'axios'
import useSWR from 'swr'
import Panel from 'nav-frontend-paneler'
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';

const fetcher = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'demo-test'
    }
  })
  return data
}

const Joke = ({ joke }) => {
  return (
    <Panel border>
      <Sidetittel>Tilfeldig dad-joke</Sidetittel>
      <Normaltekst>{joke}</Normaltekst>
    </Panel>
  )
}

function DadJoke () {
  const { data } = useSWR('https://icanhazdadjoke.com/', fetcher)
  return (
    <>
      {data && <Joke {...data}/>}
    </>
  )
}

export default DadJoke
