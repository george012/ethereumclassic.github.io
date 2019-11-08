import React from 'react';

import TimelineItem from './timelineItem';

// TODO convert to a more i18n friendly format

const ForkTimeline = () => (
  <div className="fork-timeline">
    <div className="items">
      <TimelineItem
        className="purple"
        link="https://blog.ethereum.org/2015/07/30/ethereum-launches/"
        icon="ethereum"
        date="July 30 2015"
        title="Ethereum Launches"
        text="Vitalik Buterin and The Ethereum Foundation create the first blockchain-based turing-complete smart contract platform"
      />
      <TimelineItem
        link="https://blog.slock.it/deja-vu-dao-smart-contracts-audit-results-d26bc088e32e"
        icon="daoCreated"
        date="April 5 2016"
        title="Slock.it Creates TheDAO"
        text="Slock.it construct TheDAO Ethereum Contract; a security audit is completed by Dejavu"
      />
      <TimelineItem
        link="https://blog.slock.it/the-dao-creation-is-now-live-2270fd23affc"
        icon="daoCrowdsale"
        date="April 30 2016"
        title="TheDAO Crowdsale Begins"
        text="TheDAO smart contract is deployed; members of the public send it value in return for DAO tokens"
      />
      <TimelineItem
        className="orange"
        link="https://blog.slock.it/dao-security-a-proposal-to-guarantee-the-integrity-of-the-dao-3473899ace9d"
        icon="securityAudit"
        date="May 26 2016"
        title="Security Proposal"
        text="Slock.it announce a $1.5 Million USD proposal, paid in Ether by the crowdfund, 'to guarantee the integrity of The DAO'"
      />
      <TimelineItem
        className="orange"
        link="http://hackingdistributed.com/2016/05/27/dao-call-for-moratorium/"
        icon="moratorium"
        date="May 27 2016"
        title="Moratorium Called"
        text="On the last day of the crowdsale, DAO curator Vlad Zamfir calls for a moratorium on TheDAO, citing many game-theoretical security issues"
      />
      <TimelineItem
        link="http://slacknation.github.io/medium/8/8.html"
        icon="crodsaleEnds"
        date="May 27 2016"
        title="TheDAO Crowdsale Ends"
        text="The crowdsale completes to become the world's largest and raising an incredible $150 Million USD"
      />
      <TimelineItem
        className="orange"
        link="http://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/"
        icon="rentryBug"
        date="Jun 9 2016"
        title="Recursive Call Bug Discovered"
        text="Peter Vessenes publicly discloses the existence of a critical security vulnerability overlooked in many Solidiy contracts"
      />
      <TimelineItem
        link="https://blog.slock.it/no-dao-funds-at-risk-following-the-ethereum-smart-contract-recursive-call-bug-discovery-29f482d348b"
        icon="noFundsAtRisk"
        date="Jun 12 2016"
        title="'No Funds at Risk'"
        text="Stephan Tual publicly claims that TheDAO funds are safe despite the newly-discovered critical security flaw"
      />
      <TimelineItem
        className="red"
        link="http://slacknation.github.io/medium/10/10.html"
        icon="daoHacked"
        date="Jun 17 2016"
        title="TheDAO is Hacked"
        text="Ether is slowly and silently drained from TheDAO as the re-entry bug is applied"
      />
      <TimelineItem
        className="red"
        link="https://cointelegraph.com/news/dao-potentially-hacked-millions-of-ether-may-be-stolen-griff-green-says"
        icon="marketPanic"
        date="Jun 17 2016"
        title="Panic Hits the Markets"
        text="The price of Ether is slashed in half as Griff Green announces that TheDAO has been hacked"
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/"
        icon="countdown"
        date="Jun 17 2016"
        title="The Countdown Beings"
        text="TheDAO's splitting mechanism gives around a month for a solution to be found that recovers the funds; Foundation and community developers race to implement a soft fork"
      />
      <TimelineItem
        className="white"
        link="https://www.reddit.com/r/ethereum/comments/4p7mhc/update_on_the_white_hat_attack/"
        icon="rhg"
        date="Jun 21 2016"
        title="Robin Hood Group Announced"
        text="A group of 'white-hat' hackers secure 70% of TheDAO funds but protocol-level action is required to save the remaining 30% split by the hacker"
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma/"
        icon="softFork"
        date="Jun 24 2016"
        title="DAO Wars: Soft Fork Vote"
        text="The Ethereum Foundation releases a 'Soft Fork' client to censor transactions coming from the hacker; mining pools vote to enable it by lowering gas limit"
      />
      <TimelineItem
        className="red"
        link="https://blog.ethereum.org/2016/06/28/security-alert-dos-vulnerability-in-the-soft-fork/"
        icon="softForkFail"
        date="Jun 28 2016"
        title="Soft Fork Vulnerability"
        text="Critical Denial of Service flaws are found in the Soft Fork implementation, miners quickly decide not to use it"
      />
      <TimelineItem
        icon="debate"
        date="Jun 28 - Jul 15"
        title="Hard Fork Debate"
        text="Many days of intense arguing goes on in the Ethereum community about the pros and cons of implementing a Hard Fork"
      />
      <TimelineItem
        className="blue"
        link="https://blog.slock.it/hard-fork-specification-24b889e70703"
        icon="hardForkAnnounced"
        date="Jul 15 2016"
        title="Hard Fork Spec Announced"
        text="The only remaining option is a controversial Hard Fork. A Specification is determined and announced by Slock.it and Ethereum Foundation members"
      />
      <TimelineItem
        className="orange"
        link="https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork/"
        icon="lastMinute"
        date="Jul 15 2016"
        title="Last Minute Carbonvote"
        text="With 12 hours notice, The Ethereum Foundation use a controversial third party 'coin vote' to determine that the Hard Fork should be turned on by default; consensus is declared and an updated client is released"
      />
      <TimelineItem
        className="blue"
        link="https://blog.ethereum.org/2016/07/20/hard-fork-completed/"
        icon="hardForkHappens"
        date="Jul 20 2016"
        title="DAO Bailout Hard Fork"
        text="With around 80% of nodes updating to the new client, the community nervously await the arrival of the Hard Fork activation block 1920000"
      />
      <TimelineItem
        className="purple"
        link="https://twitter.com/initc3org/status/758000698881613824"
        icon="missionAccomplished"
        date="Block 1920000"
        title="'Mission Accomplished!'"
        text="The community lets out a sigh of relief as the Hard Fork code is succesfully implemented with no obvious flaws; champagne corks are popped all over the globe"
      />
      <TimelineItem
        className="green"
        link="https://gastracker.io/block/0x94365e3a8c0b35089c1d1195081fe7489b528a84b22199c916180db8b28ade7f"
        icon="classicBorn"
        date="Block 1920001"
        title="Ethereum Classic is Born"
        text="With predictions of the original non-forked chain to disappear within hours, many are surprised to find that miners continue mining blocks and OTC trading of the original chain tokens gives them value"
      />
      <TimelineItem
        className="green"
        link="https://twitter.com/poloniex/status/757068619234803712"
        icon="poloniexLists"
        date="Jul 23 2016"
        title="Poloniex Lists ETC"
        text="The largest Ethereum exchange lists 'ETC' - Ethereum Classic; many exchanges quickly follow suit, ETC price peaks to 1/3 of ETH's"
      />
      <TimelineItem
        className="red"
        icon="badTimes"
        date="Jul 23 Onwards"
        title="Community in Disarray"
        text="Flame wars begin in the once peaceful /r/Ethereum and /r/ethtrader subreddits and economically-charged vitriolic spats begin to take hold of the community as it comes to terms with the split"
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/"
        icon="ethClassic"
        date="Jul 24 2016"
        title="Ethereum Classic Community"
        text="The Ethereum Classic community begins to branch off from the forked-chain subreddits and form its own communication channels, including /r/EthereumClassic, Slack and Telegram"
      />
      <TimelineItem
        className="white"
        link="https://www.reddit.com/r/EthereumClassic/comments/4x1157/from_whitehat_to_poloniex/"
        icon="rhgDump"
        date="Aug 10 2016"
        title="RHG Strikes Back"
        text="The Robin Hood Group attempts to dump a large quantity of stolen ETC on the market. Poloniex freezes the funds. Uncertainty reaches an all time high."
      />
      <TimelineItem
        className="green"
        icon="classicRebuild"
        date="Block 2050000"
        title="Classic Declares Independence"
        text="A Declaration of Independence on the ETC website is published stating ETC no longer wants to be in association with the Foundation. The document, signed by the community, highlights the Ethereum values, which they believed were violated as well as how they plan to move forward."
      />
      <TimelineItem
        className="green"
        icon="classicRebuild"
        date="Aug 15 2016"
        title="Classic Rebuilds"
        text="The Ethereum Classic community begins to rally behind a stabilizing ETC price by rebuilding on the Classic network; this website is created, groups are formed, new ideas begin to surface"
      />
      <TimelineItem
        className="white"
        link="https://bitcoinmagazine.com/articles/millions-of-dollars-worth-of-etc-may-soon-be-dumped-on-the-market-1472567361"
        icon="marketPanic"
        date="Aug 31 2016"
        title="DAO ETC unlocked"
        text="Millions of previously locked or frozen ETC become available to DAO token holders and DAO attacker. Despite predictions of doom and gloom, ETC price holds remarkably well in face of huge dumps"
      />
      <TimelineItem
        className="red"
        link="https://www.reddit.com/r/EthereumClassic/comments/599kmf/etc_community_successfully_implemented_gasreprice/"
        icon="hardForkAnnounced"
        date="Oct 25 2016"
        title="Attacks and Upgrades"
        text="Both Ethereums are hit with non-stop network attacks; ETC devs quickly ensure smooth and uncontentious network upgrade to patch exploited vulnerabilities"
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/comments/5cm582/monetary_policy_update/"
        icon="crodsaleEnds"
        date="Nov 1 2016"
        title="ETC Monetary Policy"
        text="Classic community starts debating ETC monetary policy and emission schedule, as a way to align interests of platform users, miners, investors and developers"
      />
      <TimelineItem
        className="white"
        link="https://ethereumclassic.github.io/blog/2016-12-12-TeamGrothendieck/"
        icon="securityAudit"
        date="Dec 11 2016"
        title="Grothendieck team"
        text="A team of 7 full-time developers, committed by IOHK, starts working for Ethereum Classic"
      />
      <TimelineItem
        className="green"
        link="https://www.reddit.com/r/EthereumClassic/comments/5nt4qm/diehard_etc_protocol_upgrade_successful_nethash/"
        icon="daoCreated"
        date="Block 3000000"
        title="ETC Diehard Upgrade"
        text="ETC goes through a non-contentious network upgrade, resolving critical issues such as difficulty bomb and replay attacks"
      />
      <TimelineItem
        className="white"
        link="https://www.etcdevteam.com/"
        icon="securityAudit"
        date="Feb 20 2017"
        title="ETCDEV Team Announcement"
        text="A team of long-term ETC contributors and volunteers rebrands as a ETCDEV team"
      />
      <TimelineItem
        className="green"
        link="https://www.etcdevteam.com/blog/articles/a-joint-statement-ecip1017.html"
        icon="daoCrowdsale"
        date="March 1"
        title="Monetary Policy Adopted"
        text="Ethereum Classic community adopts a fixed-cap monetary policy with a Bitcoin-like limited emission schedule"
      />
      <TimelineItem
        className="green"
        link="https://grayscale.co/ethereum-classic-investment-thesis-march-2017/"
        icon="crodsaleEnds"
        date="March 1"
        title="ETC Investment Fund"
        text="Grayscale circulates investment thesis for 'Ethereum (ETC) Investment Trust', first non-bitcoin crypto fund targeted at traditional investors"
      />
      <TimelineItem
        icon="tbc"
        title="To Be Continued"
        text="As Ethereum Classic community and its two independent dev teams start to focus efforts on development and applications, we look forward to ETC becoming a decentralized immutable public infrastructure of the future..."
      />
    </div>
    <div className="scroll-info">Scroll to progress</div>
  </div>
);

export default ForkTimeline;
