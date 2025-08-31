
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Votes, { VoteType } from '../../types/votes' 
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  function handleVote(voteType: VoteType) {
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1,
    }))
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={true} 
      />


    </div>
  )
}

export default App
