import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Midhun'};
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
              type='greeting'
              title='Welcome'
              user={loggedIn?.firstName}
              subtext={'Access and Manage your account'}
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={0}
              totalCurrentBalance={0}
            />
          </header>
      </div>
      <RightSidebar
       user={loggedIn}
       transactions={[]}
       banks={5}
       />
    </section>
  )
}

export default Home