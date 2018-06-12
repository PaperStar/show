<template>
  <div>
    <banner></banner>
    <main role="main">
      <article id="webslides" class="vertical">
        <guide></guide>
        <why></why>

        <quote-java-script></quote-java-script>
        <quote-mini-game></quote-mini-game>

        <plan/>
        <progress/>

        <paper-star></paper-star>
        <paper-star-content/>

        <ink></ink>
        <web></web>
        <admin></admin>
        <ready></ready>

        <thank></thank>
      </article>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import Banner from '@/components/layouts/Banner'
import MainFooter from '@/components/layouts/MainFooter'

import Guide from '@/components/Guide'
import Why from '@/components/Why'

import Quotes from '@/components/Quotes'
import QuoteJavaScript from '@/components/Quotes/JavaScript'
import QuoteMiniGame from '@/components/Quotes/MiniGame'

import Plan from '@/components/Plan'
import Progress from '@/components/Progress'

import PaperStar from '@/components/PaperStar'
import PaperStarContent from '@/components/PaperStar/Content'

import Ink from '@/components/Ink'
import Web from '@/components/Web'
import Admin from '@/components/Admin'
import Ready from '@/components/Ready'
import Thank from '@/components/Thank'
export default {
  components: {
    Banner,
    MainFooter,
    Guide,
    Why,
    Quotes,
    QuoteJavaScript,
    QuoteMiniGame,
    Plan,
    Progress,

    PaperStar,
    PaperStarContent,

    Ink,
    Web,
    Admin,
    Ready,
    Thank
  },
  mounted () {
    window.ws = new WebSlides()
  }
}
</script>

<style>

</style>
